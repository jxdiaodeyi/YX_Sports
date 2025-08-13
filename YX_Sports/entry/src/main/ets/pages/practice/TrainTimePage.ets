import { promptAction, router } from '@kit.ArkUI';
import { DateType, DialogAction, DialogHelper } from '@pura/harmony-dialog';

import address from '../../../resources/rawfile/IPaddress.json'
import { http } from '@kit.NetworkKit';
import { DailyWorkout, ResponseData, ResponseTodayInfoType, WorkoutData } from '../../mod/practice/type';
import { getMondayOfWeek } from '../plan/plan';
import { getWeekDayName } from './PracticePage';

interface practicePageType{
  token:string,
  userId:number
}
@Entry
@Component
struct TrainTimePage {
  @State message: string = 'Hello World';
  @State Month: number = new Date().getMonth() + 1;//当前月份
  @State Years: number = new Date().getFullYear();//当前年份
  @State Day: number = new Date().getDate();//当前日期
  @State workoutTimeData: WorkoutData = {
    allTime: 0,
    allCalories:0,
    weekInfo: []
  };
  @State todayInfo:ResponseTodayInfoType=Object()
  @State firstDayOfWeek:string=getMondayOfWeek(this.Years+'-'+this.Month+'-'+this.Day);//获取当天所在星期的周一
  @State weekName:string[]=['周日','周一','周二','周三','周四','周五','周六']
  @State isfetchGraphData:boolean=false;

  @State token:string=(this.getUIContext().getRouter().getParams()as practicePageType).token
  @State userId:number=(this.getUIContext().getRouter().getParams()as practicePageType).userId
  @State months: string[] = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
  @State dates:WorkoutData[]=[]
  @State daysToRequest:string[] = ['01', '08', '15', '22'];


  //**********************************选择日期*********************************************
  @Builder
  trainTimeDateChoose(){
    //日期选择
    Row(){
      Text(this.months[this.Month-1]+this.Years.toString())
        .fontSize(24)
        .fontWeight(600)
      Image('/image/practice/rili.png')
        .width(24)
        .height(24)
        .margin({top:15})
        .onClick(()=>{
          DialogHelper.showDatePickerDialog({
            dateType: DateType.Ymd,
            onAction: (action: number, dialogId: string, date: Date): void => {
              if (action == DialogAction.SURE) {
                this.Years = date.getFullYear();       // 获取年份（四位数）
                this.Month = date.getMonth() + 1;      // getMonth()返回0-11，需要+1转为实际月份
                this.getGraphData()
              }


            }
          })
        })
    }
    .width('100%')
    .height('30')
    .justifyContent(FlexAlign.SpaceBetween)
    .padding(15)
  }//得到Years,Month,所有统计图所需数据
  getMonth(month:number)
  {
    if(month<9)
    {
      return '0'+month;
    }
    return month+'';
  }


  //************************************统计图处理*********************************************
  @Builder
  OneWeekTrainTime(workoutdata:WorkoutData,day:number){
    Column(){
      Row(){
        Text(this.Month.toString()+'月'+day.toString()+'日-'+this.Month.toString()+'月'+(day+6).toString()+'日')
          .fontSize(20)
          .fontColor('#222B45')
          .fontWeight('500')
        Row(){
          Text(workoutdata.allTime.toString())
            .fontSize(26)
            .fontWeight(600)
            .fontColor('#6249E3')
          Text('分钟')
            .fontSize(20)
            .fontColor('#8F9BB3')
        }
        .width('30%')
        .justifyContent(FlexAlign.End)
        .margin({right:15})
      }
      .width('100%')
      .height(40)
      .padding(15)
      .justifyContent(FlexAlign.SpaceBetween)

      // 柱状图部分
      Row() {
        // 遍历 dailyData 数组，为每一天创建一个柱子
        ForEach(workoutdata.weekInfo, (item:DailyWorkout, index: number) => {
          Column() {
            Progress({value:(120-item.stime),total:120,type:ProgressType.Capsule})
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
    .height(220)
    .margin({top:10})
  }
  @Builder
  trainTimeGraph(){
    Scroll(){
      List(){
        ForEach(this.dates, (item: WorkoutData, index: number) => {
          this.OneWeekTrainTime(item, Number(this.daysToRequest[index]));
        })
      }
    }
    .width('100%')
    .layoutWeight(1)
  }
  async getGraphData(){
    this.dates=[]
    for(const days of this.daysToRequest){
        let httpRequest=http.createHttp();
        let encodeduserId = encodeURIComponent(this.userId); // 编码中文
        let encodedDate = encodeURIComponent(this.Years+'-'+this.getMonth(this.Month)+'-'+days); // 起始日期
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
            this.dates.push(result.data)
          }
        }
        catch (e) {
          promptAction.showToast({message:"网络错误"})
        }
  }
    this.isfetchGraphData=true;
}


  //************************************build*********************************************
  aboutToAppear(): void {
    this.getGraphData()
  }

  build() {
    if(this.isfetchGraphData){
      Column(){
        Text().height(40)
        //标题
        Row(){
          Image('/image/practice/return.png')
            .width(20)
            .height(20)
            .onClick(()=>{
              router.back()
            })
          Text('训练时长')
            .fontColor('#333333')
            .fontSize(24)
            .fontWeight(700)
          Text('     ')
            .fontSize(24)
        }
        .justifyContent(FlexAlign.SpaceBetween)
        .width('100%')
        .height(30)
        .padding(5)
        .border({
          width: { bottom: 1 },        // 底部宽度
          color: { bottom: '#F2F2F2' }, // 底部颜色
        })

        //日期选择
        this.trainTimeDateChoose()

        //统计图
        this.trainTimeGraph()

      }
    }


  }

}