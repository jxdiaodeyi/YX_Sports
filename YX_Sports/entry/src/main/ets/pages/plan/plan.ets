import { promptAction, router } from "@kit.ArkUI";
import { systemTime } from "@kit.BasicServicesKit";
import { courseInfoNetWorkType, courseInfoType, planMes } from "../../mod/plan/planType";
import { http } from "@kit.NetworkKit";
import address from '../../../resources/rawfile/IPaddress.json'


//测试
// function  test( beginDay:string){
//     promptAction.showToast({
//       message: beginDay
//     })
// }

//获取每个周周一的日期
export  function getMondayOfWeek(inputDate: Date | string): string {
  // 处理日期参数，统一转换为Date对象
  const targetDate: Date = typeof inputDate === 'string' ? new Date(inputDate) : new Date(inputDate);

  // 验证日期有效性
  if (isNaN(targetDate.getTime())) {
    throw new Error('Invalid date input: 请提供有效的日期格式');
  }

  // 获取当前日期是一周中的第几天（0表示周日，1表示周一，...，6表示周六）
  const day: number = targetDate.getDay();

  // 计算与周一的差值
  const diff: number = day === 0 ? -6 : 1 - day;

  // 计算周一的日期
  const monday: Date = new Date(targetDate);
  monday.setDate(targetDate.getDate() + diff);

  // 重置时间为00:00:00，避免时间部分影响
  monday.setHours(0, 0, 0, 0);

  // 格式化返回为YYYY-MM-DD，避免toString()带来的浏览器/环境差异
  const year: number = monday.getFullYear();
  const month: string = String(monday.getMonth() + 1).padStart(2, '0');
  const date: string = String(monday.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
}

//获取总天数  返回dayDiff（注册总天数）
function getDaysBetweenDates(date1: string, date2: string): number {
  // 将日期字符串转换为Date对象（支持格式："YYYY-MM-DD"、"YYYY/MM/DD"等）
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // 检查日期是否有效
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
    throw new Error("无效的日期格式");
  }

  // 计算时间差（毫秒），取绝对值
  const timeDiff = Math.abs(d1.getTime() - d2.getTime());

  // 转换为天数（1天 = 86400000毫秒），向下取整
  const dayDiff = Math.floor(timeDiff / 86400000);

  return dayDiff;
}

//获取当前是第几日
function nowDayTime(inputDate: Date | string): string{
  // 处理日期参数，统一转换为Date对象
  const targetDate: Date = typeof inputDate === 'string' ? new Date(inputDate) : new Date(inputDate);

  // 验证日期有效性
  if (isNaN(targetDate.getTime())) {
    throw new Error('Invalid date input: 请提供有效的日期格式');
  }

  // 获取当前日期是一周中的第几天（0表示周日，1表示周一，...，6表示周六）
  const day: number = targetDate.getDay();

  // 计算与周一的差值
  const diff: number = day === 0 ? -6 : 1 - day;

  // 计算周一的日期
  const monday: Date = new Date(targetDate);
  monday.setDate(targetDate.getDate() + diff);

  // 重置时间为00:00:00，避免时间部分影响
  monday.setHours(0, 0, 0, 0);

  // 格式化返回为YYYY-MM-DD，避免toString()带来的浏览器/环境差异
  const date: string = String(monday.getDate()).padStart(2, '0');

  return `${date}`;
}

//获取一个周的日期
function handleDay(today: string, i: number): number {
  // 将日期字符串转换为Date对象
  const targetDate = new Date(today);

  // 检查日期是否有效
  if (isNaN(targetDate.getTime())) {
    console.error("无效的日期字符串");
    return 0; // 或其他默认值
  }

  // 计算i天后的日期
  targetDate.setDate(targetDate.getDate() + i);

  // 返回日期中的"日"部分
  return targetDate.getDate();
}

//获取当前时间  返回YYYY-MM-DD
function  getFormattedDate() {
  const date = new Date()
  const year = date.getFullYear() // 年（4位数字）
  const month = date.getMonth() + 1 // 月（0-11，需+1）
  const day = date.getDate() // 日（1-31）

  // 补零处理，确保月份和日期为两位数
  const formattedMonth = month.toString().padStart(2, '0')
  const formattedDay = day.toString().padStart(2, '0')
  return `${year}-${formattedMonth}-${formattedDay}`
}

function  getFormattedDay() {
  const date = new Date()
  const year = date.getFullYear() // 年（4位数字）
  const month = date.getMonth() + 1 // 月（0-11，需+1）
  const day = date.getDate() // 日（1-31）

  // 补零处理，确保月份和日期为两位数
  const formattedMonth = month.toString().padStart(2, '0')
  const formattedDay = day.toString().padStart(2, '0')
  return `${formattedDay}`
}

@Component

export struct Plan
{
  @State token:string=''
  @State userId:number=0
  @State vip:number=0;  //会员状态
  @State isShow:boolean=false
  @State beginDay:string=getMondayOfWeek(getFormattedDate()); //周一的日期YYYY-MM-DD
  @State registerTime:number=1; //最开始的注册时间
  @State nowDataTime:number=Number(getFormattedDay());  //今天的时间DD
  @State sportDate:number=6;  //每周锻炼天数
  @State sportTime:number=6;  //每周锻炼时长
//网路接口
  async getShowContent() {
    let httpRequest = http.createHttp();
    let url = address.IP+`/getVipUserCourseInfo`;
    try {
      let response = await httpRequest.request(url, {
        method: http.RequestMethod.GET,
        header: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });
      let result=JSON.parse(response.result as string)as courseInfoNetWorkType;
      if (result.code===200)
      {
        this.planCard=result.data
        this.isShow=true
        //promptAction.showToast({message:this.nowDataTime+''})
      }
    }catch (e) {
      promptAction.showToast({message:"网络错误"})
    }


  }

  //运动卡片内容数组
  planCard:courseInfoType[]=[];

//时间和小点
  @Builder
  demo(beginDay:number){
    Column(){
      Text("")
        .backgroundColor(this.nowDataTime==beginDay?"#ffffff":"#6C55E4")
        .width(10)
        .height(10)
        .borderRadius(5)
      Text(beginDay+'')
        .fontColor("#ffffff")
        .fontSize(18)
        .margin(10)
    }
  }

//标题和时间
  @Builder
  day()
  {
    Row()
    {
      Column()
      {
        Text("第"+Math.floor(this.registerTime/7+1)+"周计划")
          .width('50%')
          .fontSize(20)
          .fontWeight(900)
          .fontColor('#ffffff')
          .textAlign(TextAlign.Start)
          .height('40%')
          .margin(15)
        Row() {
          this.demo(handleDay(this.beginDay,0))
          this.demo(handleDay(this.beginDay,1))
          this.demo(handleDay(this.beginDay,2))
          this.demo(handleDay(this.beginDay,3))
          this.demo(handleDay(this.beginDay,4))
          this.demo(handleDay(this.beginDay,5))
          this.demo(handleDay(this.beginDay,6))
        }
      }.alignItems(HorizontalAlign.Start)
      Stack() {
        Progress({ value:4, total: this.sportDate, type: ProgressType.Ring })
          .width(70)
          .height(100)
          .color("#ffffff")
          .style({ strokeWidth: 7})
        Text(4+'/7')
          .fontSize(20)
          .fontColor('#007DFF')
          .fontWeight(600)
          .fontColor("#ffffff")
      }
    }
    .backgroundColor("#6C55E4")
    .width('100%')
    .height(150)
    .borderRadius(15)
    .justifyContent(FlexAlign.SpaceBetween)
  }

  //运动卡片
  @Builder
  sport(planCardMes:courseInfoType)
  {

    Column({space:15})
    {
      Text(planCardMes.cname)
        .fontSize(25)
        .fontColor('#ffffff')
        .fontWeight(900)
      Row({space:10})
      {
        Image('image/plan/time.png')
          .width(15)
          .height(15)
        Text(planCardMes.ctime+'分钟')
          .fontSize(15)
          .fontColor('#ffffff')
          .fontWeight(600)
        Image('image/plan/difficulty.png')
          .width(15)
          .height(15)
        Text('k'+planCardMes.difficulty+'级难度')
          .fontSize(15)
          .fontColor('#ffffff')
          .fontWeight(600)
      }
    }
    .onClick(()=>{
      router.pushUrl({url:"pages/class",params:{token:this.token,courseId:planCardMes.id}})
    })
    .backgroundImage('image/home/'+planCardMes.iname)
    .backgroundImageSize(ImageSize.Cover)
    .width('100%')
    .height(300)
    .borderRadius(15)
    .padding(20)
    .justifyContent(FlexAlign.End)
    .alignItems(HorizontalAlign.Start)
  }

  //今日运动
  @Builder
  todaySport(){
    Scroll()
    {
      Column({space:15}) {
        this.day()
        Text("今日运动")
          .fontSize(20)
          .fontWeight(700)
        ForEach(this.planCard,(planCardMes:courseInfoType)=>{
          this.sport(planCardMes)
        })
        Text('——————我是有底线的———————')
          .fontColor('#C4A699')
          .width('100%')
          .margin({top:20,bottom:10})
          .textAlign(TextAlign.Center)
        Blank().height(40)
      }
    }
    .scrollBar(BarState.Off)
  }

  aboutToAppear(): void {
    this.getShowContent()
  }

  build()
  {
    if(this.isShow) {
      Column({ space: 15 }) {
        Row() {
          Text('计划')
            .fontSize(25)
            .fontWeight(900)
          Image('/image/plan/share.png')
            .width(20)
            .height(20)
            .onClick(() => {
              router.pushUrl({ url: "pages/plan/sportplan" })
            })
        }
        .padding(14)
        .width('100%')
        .justifyContent(FlexAlign.SpaceBetween)

        this.todaySport()
      }
      .padding(15)
      .height('100%')
    }
  }
}


