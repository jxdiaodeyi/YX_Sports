import { promptAction, router } from '@kit.ArkUI';
import { DailyWorkout, DailyWorkOutNetWork,dailyWorkOutType,ResponseData, ResponseTodayInfoType } from '../../mod/practice/type';
import { WorkoutData } from '../../mod/practice/type';
import { getMondayOfWeek } from '../plan/plan';
import { getWeekDayName } from './PracticePage';
import address from '../../../resources/rawfile/IPaddress.json'
import { http } from '@kit.NetworkKit';


interface practicePageType{
  token:string,
  userId:number
}

@Entry
@Component


struct TrainRecordPage {
  @State message: string = 'Hello World';
  @State curIndex: number = 0;
  @State trainType:boolean=false;

  @State todayDuration: number = 102;       // 日训练时长
  @State thisWeekDuration: number = 300;    // 周训练时长
  @State thisMonthDuration: number = 2830;   // 月训练时长
  @State thisYearDuration: number = 2830;    // 年训练时长
  @State todayCalorie: number = 112;       // 日卡路里
  @State thisWeekCalorie: number = 2030;    // 周卡路里
  @State thisMonthCalorie: number = 32353;   // 月卡路里
  @State thisYearCalorie: number = 32353;    // 年卡路里

  @State todayInfo:ResponseTodayInfoType=Object()
  @State Month: number = new Date().getMonth() + 1;//当前月份
  @State Years: number = new Date().getFullYear()+1;//当前年份
  @State Day: number = new Date().getDate();//当前日期
  @State firstDayOfWeek:string=getMondayOfWeek(this.Years+'-'+this.Month+'-'+this.Day);//获取当天所在星期的周一
  //*************************************统计图底部数据*****************************************************
  @State weekName:string[]=['周日','周一','周二','周三','周四','周五','周六']
  @State weekCount:string[]=['第一周','第二周','第三周','第四周']
  @State MonthName:string[]=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
  @State YearName:string[]=['2025','2026','2027','2028','2029','2030']
  @State daysToRequest:string[] = ['01', '08', '15', '22'];

  //*************************************统计图数据*****************************************************
  @State workoutDayData: WorkoutData = {
    allTime: 0,
    allCalories: 0,
    weekInfo: []
  };
  @State workoutWeekData: WorkoutData = {
    allTime: 0,
    allCalories: 0,
    weekInfo: []
  };
  @State workoutMonthData: WorkoutData = {
    allTime: 0,
    allCalories: 0,
    weekInfo: []
  };
  @State workoutAllData: WorkoutData = {
    allTime: 0,
    allCalories: 0,
    weekInfo: []
  };
  @State WeekData: dailyWorkOutType[] = []
  @State MonthData: dailyWorkOutType[] = []
  @State AllData: dailyWorkOutType[] = []

  //***********************************token*****************************************************
  @State token:string=(this.getUIContext().getRouter().getParams()as practicePageType).token
  @State userId:number=(this.getUIContext().getRouter().getParams()as practicePageType).userId
  @State isFetchData:boolean=false


  //***********************************导航栏样式*******************************************
  //导航栏样式
  @Builder
  navBar(tex:string, index:number){
    Column({space:5}){

      Text(tex)
        .fontColor(index == this.curIndex ? "#6C55E4" : "#CCCCCC")
        .fontSize(20)
    }
  }
  //调用统计图样式
  @Builder
  showRecord(type:string){
    if(type==='day'){
      this.practiceGraphType('day',this.workoutDayData,true,120,200);
      this.practiceGraphType('day',this.workoutDayData,false,120,200);
    }else if(type==='week'){
      this.practiceGraphType('week',this.workoutWeekData,true,840,1400);
      this.practiceGraphType('week',this.workoutWeekData,false,840,1400);
    }else if(type==='month'){
      this.practiceGraphType('month',this.workoutMonthData,true,3600,6000);
      this.practiceGraphType('month',this.workoutMonthData,false,3600,6000);
    }else{
      this.practiceGraphType('all',this.workoutAllData,true,43800,73000);
      this.practiceGraphType('all',this.workoutAllData,false,43800,73000);
    }
  }

  //统计图样式
  //***************************************统计图************************************************88

  //UI
  @Builder
  practiceGraphType(type:string,workoutdata:WorkoutData,isTime:boolean,totalTime:number,totalCarolie:number){
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
      Scroll(){
        Row() {
          // 遍历 dailyData 数组，为每一天创建一个柱子
          ForEach(workoutdata.weekInfo, (item:DailyWorkout, index: number) => {
            Column() {
              Progress({value:(isTime)?(totalTime-item.stime):(totalCarolie-item.calorie),total:(isTime)?totalTime:totalCarolie,type:ProgressType.Capsule})
                .width(10)
                .height(100)
                .style({strokeWidth:1})
                .backgroundColor('#6C55E3')
                .color('#E5E5E5')


              if(type==='day'){
                // 星期标识
                Text(this.weekName[getWeekDayName(this.firstDayOfWeek, index)])
                  .fontSize(14)
                  .fontColor('#333333')
                  .margin({ top: 8 });
              }
              else if(type==='week'){
                //周标识
                Text(this.weekCount[index])
                  .fontSize(14)
                  .fontColor('#333333')
                  .margin({ top: 8 });
              }
              else if(type==='month'){
                //   // 月标识
                Text(this.MonthName[index])
                  .fontSize(14)
                  .fontColor('#333333')
                  .margin({ top: 8 });
              }
              else if(type==='all'){
                // 星期标识
                Text(this.YearName[index])
                  .fontSize(14)
                  .fontColor('#333333')
                  .margin({ top: 8 });
              }
            }
            .width('100%')
            .height(150)
            .layoutWeight(1); // 让每个柱子在Row中平均分配空间

          });
        }
        .margin({top:15})
        //.width('100%')
        .justifyContent(FlexAlign.SpaceAround); // 柱子之间平均分配间距
      }
      .scrollBar(BarState.Off)
      .scrollable(ScrollDirection.Horizontal)
    }
    .width('100%')
    .height(200)
    .backgroundColor('#FFFFFF')
    .borderRadius(8)
    .margin({top:15})
    .onClick(()=>{
      if(isTime){
        router.pushUrl({url:'pages/practice/TrainTimePage'})
      }
      else{
        router.pushUrl({url:'pages/practice/CaloriePage'})
      }
    })
  }
  //收取数据
  async getDayData() {
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
        this.workoutDayData=result.data
        //this.isfetchGraphData=true;
      }
    }
    catch (err) {
      promptAction.showToast({message:"网络错误"})
    }
    // 模拟数据
    // this.workoutTimeDayData = {
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
  async getWeekData() {
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
        let result=JSON.parse(response.result as string) as DailyWorkOutNetWork;

        if(result.code===200)
        {
          this.WeekData.push(result.data)
        }
      }
      catch (e) {
        promptAction.showToast({message:"网络错误"})
        //promptAction.showToast({message:result.data.allTime+''})
      }
    }
    this.fillWorkOutData('week',this.WeekData)
  };
  async getMonthData() {
    for(let i=1;i<=12;i++)
    {
      let httpRequest=http.createHttp();
      let encodeduserId = encodeURIComponent(this.userId); // 编码中文
      let encodedDate = encodeURIComponent(this.Years+'-'+this.getMonth(i)+'-'+'01'); // 起始日期
      let url = address.IP+`/getMonthPracticeInfo?userId=${encodeduserId}&startMonth=${encodedDate}`;
      try {
        let response=await httpRequest.request(url,{
          method:http.RequestMethod.GET,
          header:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        });
        let result=JSON.parse(response.result as string) as DailyWorkOutNetWork;
        if(result.code===200)
        {
          this.MonthData.push(result.data)
        }
      }
      catch (e) {
        promptAction.showToast({message:"网络错误"})
      }
    }
    this.fillWorkOutData('month',this.MonthData)
    this.isFetchData=true
  }
  async getAllData() {
    for(let i=2025;i<=2030;i++)
    {
      let httpRequest=http.createHttp();
      let encodeduserId = encodeURIComponent(this.userId); // 编码中文
      let encodedDate = encodeURIComponent(i.toString()+'-'+'01'+'-'+'01'); // 起始日期
      let url = address.IP+`/getYearPracticeInfo?userId=${encodeduserId}&startYear=${encodedDate}`;
      try {
        let response=await httpRequest.request(url,{
          method:http.RequestMethod.GET,
          header:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        });
        let result=JSON.parse(response.result as string) as DailyWorkOutNetWork;
        if(result.code===200)
        {
          this.AllData.push(result.data)
        }
      }
      catch (e) {
        promptAction.showToast({message:"网络错误"})
        //promptAction.showToast({message:result.data.allTime+''})
      }
    }
    this.fillWorkOutData('all',this.AllData)
    this.isFetchData=true
  }
  //处理函数，将weekdata[],allTime,allCalorie装入
  transForm(datas:dailyWorkOutType[]){
    let weekInfo:DailyWorkout[]=[];
    datas.forEach((item,idx)=>{
      weekInfo.push({calorie:item.allCalories,stime:item.allTime})
    })
    return weekInfo;
  }
  fillWorkOutData(type:string,data:dailyWorkOutType[]){
    if(type==='week'){
      let alltime=0;
      let allcalorie=0;
      for(const weekDate of data){
        alltime+=weekDate.allTime
        allcalorie+=weekDate.allCalories
      }
      this.workoutWeekData={
        allTime:alltime,
        allCalories:allcalorie,
        weekInfo:this.transForm(data)
      }
    }else if(type==='month'){
      let alltime=0;
      let allcalorie=0;
      for(const weekDate of data){
        alltime+=weekDate.allTime
        allcalorie+=weekDate.allCalories
      }
      this.workoutMonthData={
        allTime:alltime,
        allCalories:allcalorie,
        weekInfo:this.transForm(data)
      }
    }else if(type==='all'){
      let alltime=0;
      let allcalorie=0;
      for(const weekDate of data){
        alltime+=weekDate.allTime
        allcalorie+=weekDate.allCalories
      }
      this.workoutAllData={
        allTime:alltime,
        allCalories:allcalorie,
        weekInfo:this.transForm(data)
      }
    }
  }
  getMonth(month:number)
  {
    if(month<=9)
    {
      return '0'+month;
    }
    return month+'';
  }

  //*****************************************************主页面**************************************

  aboutToAppear() {
    //日
    this.getDayData();
    //周
    this.getWeekData();
    //月
    this.getMonthData();
    //年
    this.getAllData();
  }
  build() {
    if(this.isFetchData){
      Column(){
        Text().height(40)
        //标题部分
        Row(){
          Image('/image/practice/return.png')
            .width(30)
            .height(30)
            .onClick(()=>{
              router.back()
            })
          Text('训练记录')
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


        //导航栏
        Column(){
          Tabs({barPosition:BarPosition.Start}){
            TabContent(){
              Column({space:20}){
                this.showRecord('day')
              }
              .justifyContent(FlexAlign.Start)
              .width('100%')
              .height('100%')
              //.margin({top:10})
            }.tabBar(this.navBar("日",0))
            TabContent(){
              Column({space:20}){
                this.showRecord('week')

              }
              .justifyContent(FlexAlign.Start)
              .width('100%')
              .height('100%')
              //.margin({top:10})
            }.tabBar(this.navBar("周",1))
            TabContent(){
              Column({space:20}){
                this.showRecord('month')
              }
              .justifyContent(FlexAlign.Start)
              .width('100%')
              .height('100%')
              //.margin({top:10})
            }.tabBar(this.navBar("月",2))
            TabContent(){
              Column({space:20}){
                this.showRecord('year')
              }
              .justifyContent(FlexAlign.Start)
              .width('100%')
              .height('100%')
              //.margin({top:10})
            }.tabBar(this.navBar("总",3))
          }
          .onChange((index : number) => {this.curIndex = index;})
        }
        .height('100%')
        .width('100%')
        .margin({top:20})
      }
    }
  }
}