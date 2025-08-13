import { DialogAction, DialogHelper} from '@pura/harmony-dialog'
import { promptAction, router, Router } from '@kit.ArkUI'
import { http } from '@kit.NetworkKit'

import address from '../../../resources/rawfile/IPaddress.json'
import {
  DailyWorkout,
  ResponseData,
  ResponseTodayInfoType, ResponseTodayNetWorkType,

  WeightType,
  WeightTypeNetWorkType,
  WorkoutData } from '../../mod/practice/type'
import { getMondayOfWeek } from '../plan/plan'

//获取每天星期名称
export function  getWeekDayName(startDateStr: string, offset: number): number {
  const startDate = new Date(startDateStr);
  const targetDate = new Date(startDate);
  targetDate.setDate(startDate.getDate() + offset);
  const dayIndex = targetDate.getDay(); // 0-6，0是周日

  return dayIndex
}

interface practicePageType{
  token:string,
  userId:number
}

@Component
export struct PracticePage {
  @State token:string=""
  @State userId:number=0
  @State isShow:boolean = false
  @State WeightRecord:number = 0
  @State WeightInit: number = 0
  @State weightInfo:WeightType=Object()
  @State isTime:boolean=true;//true:时间;false:卡路里
  @State workoutTimeData: WorkoutData = {
    allTime: 0,
    allCalories:0,
    weekInfo: [{calorie:0,stime:0},{calorie:0,stime:0},{calorie:0,stime:0},{calorie:0,stime:0},{calorie:0,stime:0},{calorie:0,stime:0},{calorie:0,stime:0}]
  };
  @State todayInfo:ResponseTodayInfoType={calorie:0,stime:0}
  @State Month: number = new Date().getMonth() + 1;//当前月份
  @State Years: number = new Date().getFullYear();//当前年份
  @State Day: number = new Date().getDate();//当前日期
  @State firstDayOfWeek:string=getMondayOfWeek(this.Years+'-'+this.Month+'-'+this.Day);//获取当天所在星期的周一
  @State weekName:string[]=['周日','周一','周二','周三','周四','周五','周六']
  @State isfetchGraphData:boolean=false;
  @State isgetTodayInfo:boolean=false;
  @State isgetWeightInfo:boolean=false;

  //***********************************今日训练时长卡片*******************************************888
  @Builder
  practiceTodayType(isTime:boolean){
    Column() {
      Row() {
        Text((isTime===true)?'今日训练时长':'燃烧卡路里')
          .fontSize(20)
          .fontWeight(400)
          .fontColor('#333333') // 标题颜色为黑色
          .margin({ left: 10 })
        Image('/image/practice/RightArrow.png')
          .fillColor('#333333') // 箭头颜色为黑色
          .width(22)
          .height(22)
          .margin({ right: 10 })
      }
      .width('100%')
      .height(30) // 标题行高度
      .justifyContent(FlexAlign.SpaceBetween)


      Row() {
        Text((isTime===true)?this.todayInfo.stime+'':this.todayInfo.calorie+'') // 数字部分
          .fontSize(35)
          .fontWeight(600)
          .fontColor('#6C55E4') // 紫色
        Text((isTime===true)?'分钟':'千卡') // 单位部分
          .fontSize(20)
          .fontColor('#999999') // 浅灰色
      }
      .alignItems(VerticalAlign.Bottom) // 左对齐
      .justifyContent(FlexAlign.End) // 底部对齐
      //.margin({ top: 10 }) // 数据行与标题行间距
    }
    .width('48%') // 占据一半宽度
    .height(100)
    .backgroundColor('#FFFFFF') // 卡片背景为白色
    .borderRadius(8) // 圆角
    .onClick(()=>{
      if(isTime){
        router.pushUrl({url:'pages/practice/TrainTimePage',params:{token:this.token,userId:this.userId}})
      }
      else{
        router.pushUrl({url:'pages/practice/CaloriePage',params:{token:this.token,userId:this.userId}})
      }
    })

  }


  //***************************************今日训练时长+卡路里***************************************************8
  @Builder
  practiceTodayRecordComponent(){
    Row() {
      // 左侧卡片：今日训练时长
      this.practiceTodayType(true)

      // 右侧卡片：燃烧卡路里
      this.practiceTodayType(false)
    }
    .width('100%')
    .height(120)
    .justifyContent(FlexAlign.SpaceBetween)
  }
  async getTodayInfo(year:number,month:number,day:number){
    let httpRequest=http.createHttp();
    let time=(year+'-'+month+'-'+day)
    let encodedDate = encodeURIComponent(time); // 编码中文
    let encodeduserId = encodeURIComponent(this.userId); // 编码中文
    let url = address.IP+`/getCurrentPracticeInfo?userId=${encodeduserId}&currDate=${encodedDate}`;
    try {
      let response=await httpRequest.request(url,{
        method:http.RequestMethod.GET,
        header:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });
      let result=JSON.parse(response.result as string) as ResponseTodayNetWorkType;
      if(result.code===200)
      {
        this.todayInfo=result.data
        this.isgetTodayInfo=true
      }
      else{
        this.isgetTodayInfo=true
      }
    }
    catch (err) {
      promptAction.showToast({message:"网络错误"})
    }
  }


  //---------------------------------------*体重记录*-------------------------------------------------------
  @Builder
  practiceWeightChooseComponent(){
    Column() {
      // 标题行
      Row(){
        Text('体重记录')
          .fontSize(24)
          .fontColor('#333333')
          .fontWeight(500)
          .margin({left:15})
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)


      // 体重数据行
      Row(){
        Text(this.WeightRecord.toString()+'kg')
          .fontSize(35)
          .fontColor('#6C55E4')
          .fontWeight(700)
          .margin({left:15})

        Row(){
          if(this.WeightRecord<=this.WeightInit){
            Text('已减'+(this.WeightInit-this.WeightRecord).toString()+'kg')
              .fontSize(16)
              .fontColor('#999999')
              .margin({left:10})
          }else{
            Text('增重'+(this.WeightRecord-this.WeightInit).toString()+'kg')
              .fontSize(16)
              .fontColor('#999999')
              .margin({left:10})
          }
        }
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)
      .margin({ top: 20 })

      // 按钮
      Button('记录体重')
        .width('40%')
        .height(48)
        .backgroundColor('#666EE8')
        .fontColor('#FFFFFF')
        .fontSize(18)
        .borderRadius(24)
        .margin({ top: 20 })
        .onClick(() => {
          let numbers: string[] = [];
          for (let i = 40; i <= 200; i+=0.5) {
            numbers.push(i.toString()+' kg');
          }

          DialogHelper.showTextPickerDialog({
            title: "计体重",
            range: numbers.map(String), // 设置范围为0-200的整数
            onAction: (action: number, dialogId: string, value: string | string[]) => {
              if (action == DialogAction.SURE) {
                const weightStr = (value as string).replace(' kg', '');
                const weight = parseFloat(weightStr);
                this.WeightRecord=weight
                this.postWeightRecord(this.WeightRecord)
              }
            }

          })


        })
    }
    .backgroundColor('#FFFFFF')
    .padding({ top: 30, bottom: 30 }) // 整体内边距
    .width('100%')
    .height(200)
    .borderRadius(8)
  }
  async postWeightRecord(weightRecord:number){
    try {
      // 1. 创建 HTTP 请求对象
      let httpRequest = http.createHttp();

      // 2. 定义 API 地址（替换为你的实际 URL）
      let encodeduserId = encodeURIComponent(this.userId); // 编码中文
      let url = address.IP+`/updateCurrWeight`;

      // 3. 发送 POST 请求
      let response = await httpRequest.request(
        url,
        {
          method: http.RequestMethod.POST,
          header: {
            'Content-Type': 'application/json', // 声明 JSON 格式
          },
          extraData:{
            "userId":this.userId,
            "currWeight":this.WeightRecord
          }, // 将数据转为 JSON 字符串
        }
      );
      const result = JSON.parse(response.result as string) as WeightTypeNetWorkType;
      // 4. 处理响应
      if (result.code === 200) {
        promptAction.showToast({ message: '体重记录成功！' });
        //return result;
      } else {
        promptAction.showToast({ message: `请求失败: ${response.responseCode}` });
        throw new Error(`HTTP error: ${response.responseCode}`);
      }
    } catch (error) {
      console.error('体重记录失败:', error);
      promptAction.showToast({ message: '网络错误，请重试' });
      //throw error; // 重新抛出错误以便外部处理
    }
  }
  async getWeightInfo() {
    let httpRequest=http.createHttp();
    let encodeduserId = encodeURIComponent(this.userId); // 编码中文
    let url = address.IP+`/getUserWeight?userId=${encodeduserId}`;
    try {
      let response=await httpRequest.request(url,{
        method:http.RequestMethod.GET,
        header:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });
      let result=JSON.parse(response.result as string) as WeightTypeNetWorkType;
      if(result.code===200)
      {
        this.weightInfo=result.data
        this.WeightInit=this.weightInfo.weight_first
        this.WeightRecord=this.weightInfo.weight_current
        this.isgetWeightInfo=true;
      }
      else{
        this.isgetWeightInfo=true;
      }
    }
    catch (err) {
      promptAction.showToast({message:"网络错误"})
    }
    //模拟数据

  }



  //***************************************统计图************************************************88
  @Builder
  practiceGraphType(workoutdata:WorkoutData,isTime:boolean){
    Column(){
      // 标题行
      Row(){
        //左边标题
        Text((isTime)?'锻炼时长':'卡路里')
          .fontSize(24)
          .fontColor('#333333')
          .fontWeight(500)
          .margin({left:15})

        //右边数据
        Row(){
          Text((isTime)?workoutdata.allTime.toString():workoutdata.allCalories.toString())
            .fontSize(34)
            .fontColor('#6249E3')
            .fontWeight(500)
            .margin({right:5})

          Text((isTime)?'分钟':'千卡')
            .fontSize(22)
            .fontColor('#939EB5')
        }
        .margin({right:15})
      }
      .margin({top:15})
      .width('100%')
      .justifyContent(FlexAlign.SpaceBetween)

      // 柱状图部分
      Row() {
        // 遍历 dailyData 数组，为每一天创建一个柱子
        ForEach(workoutdata.weekInfo, (item:DailyWorkout, index: number) => {
          Column() {
            Progress({value:(isTime)?(120-item.stime):(200-item.calorie),total:(isTime)?120:200,type:ProgressType.Capsule})
              .width(10)
              .height(100)
              .style({strokeWidth:1})
              .backgroundColor('#6C55E3')
              .color('#E5E5E5')


            // 星期标识
            Text(this.weekName[getWeekDayName(this.firstDayOfWeek, index)])
              .fontSize(14)
              .fontColor('#333333')
              .margin({ top: 8 });
          }
          .width('100%')
          .height(150)
          .layoutWeight(1); // 让每个柱子在Row中平均分配空间

        });
      }
      .margin({top:15})
      .width('100%')
      .justifyContent(FlexAlign.SpaceAround); // 柱子之间平均分配间距
    }
    .width('100%')
    .height(200)
    .backgroundColor('#FFFFFF')
    .borderRadius(8)
    .margin({top:15})
    .onClick(()=>{
      if(isTime===true){
        router.pushUrl({url:'pages/practice/TrainTimePage',params:{token:this.token,userId:this.userId}})
      }else{
        router.pushUrl({url:'pages/practice/CaloriePage',params:{token:this.token,userId:this.userId}})
      }

    })
  }
  async fetchGraphData() {
    let httpRequest=http.createHttp();
    let encodeduserId = encodeURIComponent(this.userId); // 编码中文
    let encodedDate = encodeURIComponent(this.firstDayOfWeek); // 起始日期
    let url = address.IP+`/getWeekPracticeInfo?userId=${encodeduserId}&startDate=${encodedDate}`;

    try {
      let response=await httpRequest.request(url,{
        method:http.RequestMethod.GET,
        header:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });
      let result=JSON.parse(response.result as string) as ResponseData;
      if(result.code===200)
      {
        this.workoutTimeData=result.data
        this.isfetchGraphData=true;
      }
      else{
        this.isfetchGraphData=true;
      }
    }
    catch (err) {
      promptAction.showToast({message:"网络错误"})
    }
    // 模拟数据
    // this.workoutTimeData = {
    //
    //   totalDuration: 102,
    //   dailyData: [
    //     { dayOfWeek: '一', duration: 25 },
    //     { dayOfWeek: '二', duration: 67 },
    //     { dayOfWeek: '三', duration: 39 },
    //     { dayOfWeek: '四', duration: 100 },
    //     { dayOfWeek: '五', duration: 20 },
    //     { dayOfWeek: '六', duration: 0 },
    //     { dayOfWeek: '日', duration: 10 }
    //   ]
    // };
  }

  //************************************build*********************************************
  aboutToAppear() {
    this.fetchGraphData();
    this.getTodayInfo(this.Years,this.Month,this.Day)
    this.getWeightInfo()
  }

  build() {
    if(this.isfetchGraphData&&this.isgetTodayInfo&&this.isgetWeightInfo){
      Column(){
        Text().height(20)
        //标题
        Row({space:15}){
          Text('训练')
            .fontSize(24)
            .fontWeight(600)
            .fontColor('#FFFFFF')
          Image('/image/practice/xunlian1.png')
            .width(24)
            .height(24)
            .onClick(()=>{
              router.pushUrl({url:'pages/practice/TrainRecordPage',params:{token:this.token,userId:this.userId}})
            })

        }
        .padding(15)
        .width('100%')
        .justifyContent(FlexAlign.SpaceBetween)

        Scroll(){
          Column(){
            //训练时长+卡路里
            this.practiceTodayRecordComponent()
            //体重记录
            this.practiceWeightChooseComponent()
            //锻炼时长竖状图
            this.practiceGraphType(this.workoutTimeData,true)
            //卡路里竖状图
            this.practiceGraphType(this.workoutTimeData,false)

            Text().height(70)

          }
        }
        .height('100%')
        .scrollBar(BarState.Off)


      }
      .width('100%')
      .height('100%')
      .padding({ left: 10, right: 10 })
      .backgroundImage('/image/practice/duanlianBackGround.png')
      .backgroundImageSize({width:'100%',height:'100%'})
    }
  }
}




