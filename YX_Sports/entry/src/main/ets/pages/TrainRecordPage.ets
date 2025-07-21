import { router } from '@kit.ArkUI';

@Entry
@Component


struct TrainRecordPage {
  @State message: string = 'Hello World';
  @State curIndex: number = 0;
  @State trainType:boolean=false;
  @State todayDuration: number = 102;       // 当日训练时长
  @State thisWeekDuration: number = 300;    // 本周训练时长
  @State thisMonthDuration: number = 2830;   // 本月训练时长
  @State thisYearDuration: number = 2830;    // 本年训练时长
  @State todayCalorie: number = 112;       // 当日卡路里
  @State thisWeekCalorie: number = 2030;    // 本周卡路里
  @State thisMonthCalorie: number = 32353;   // 本月卡路里
  @State thisYearCalorie: number = 32353;    // 本年卡路里

  //导航栏样式
  @Builder
  navBar(tex:string, index:number){
    Column({space:5}){

      Text(tex)
        .fontColor(index == this.curIndex ? "#6C55E4" : "#CCCCCC")
        .fontSize(20)
    }
  }
  @Builder
  showRecord(type:boolean,image:Resource,record:number){
    if(type == false){
      Column(){
        // 标题行
        Row(){
          //左边标题
          Text('锻炼时长')
            .fontSize(24)
            .fontColor('#333333')
            .fontWeight(500)
            .margin({left:15})

          //右边数据
          Row(){
            Text(record.toString())
              .fontSize(34)
              .fontColor('#6249E3')
              .fontWeight(500)
              .margin({right:5})

            Text('分钟')
              .fontSize(22)
              .fontColor('#939EB5')
          }
          .margin({right:15})
        }
        .margin({top:15})
        .width('100%')
        .justifyContent(FlexAlign.SpaceBetween)

        //图表                                       //暂时贴图
        Image(image)
          .margin({top:15})
          .width('100%')
          .height(120)
      }
      .width('100%')
      .height(200)
      .backgroundColor('#FFFFFF')
      .borderRadius(8)
      .margin({top:15})
      .onClick(()=>{
        router.pushUrl({url:'pages/TrainTimePage'})
      })
    }else{
      Column(){
        // 标题行
        Row(){
          //左边标题
          Text('卡路里')
            .fontSize(24)
            .fontColor('#333333')
            .fontWeight(500)
            .margin({left:15})

          //右边数据
          Row(){
            Text(record.toString())
              .fontSize(34)
              .fontColor('#6249E3')
              .fontWeight(500)
              .margin({right:5})

            Text('千卡')
              .fontSize(22)
              .fontColor('#939EB5')
          }
          .margin({right:15})
        }
        .margin({top:15})
        .width('100%')
        .justifyContent(FlexAlign.SpaceBetween)

        //图表                                       //暂时贴图
        Image(image)
          .margin({top:15})
          .width('100%')
          .height(120)
      }
      .width('100%')
      .height(200)
      .backgroundColor('#FFFFFF')
      .borderRadius(8)
      .margin({top:15})
      .onClick(()=>{
        router.pushUrl({url:'pages/CaloriePage'})
      })
    }
  }

  //主页面
  build() {
    Column(){
      //标题部分
      Row(){
        Image($r('app.media.leftback'))
          .width(20)
          .height(20)
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
      .justifyContent(FlexAlign.SpaceAround)
      .width('100%')
      .height(30)
      .padding(5)


      //导航栏
      Column(){
        Tabs({barPosition:BarPosition.Start}){
          TabContent(){
            Column({space:20}){
              this.showRecord(false,$r("app.media.duanlianshichang"),this.todayDuration)
              this.showRecord(true,$r("app.media.kaluli"),this.todayCalorie)
            }
            .justifyContent(FlexAlign.Start)
            .width('100%')
            .height('100%')
            //.margin({top:10})
          }.tabBar(this.navBar("日",0))
          TabContent(){
            Column({space:20}){
              this.showRecord(false,$r("app.media.duanlianshichang"),this.thisWeekDuration)
              this.showRecord(true,$r("app.media.kaluli"),this.thisWeekCalorie)
            }
            .justifyContent(FlexAlign.Start)
            .width('100%')
            .height('100%')
            //.margin({top:10})
          }.tabBar(this.navBar("周",1))
          TabContent(){
            Column({space:20}){
              this.showRecord(false,$r("app.media.duanlianshichang"),this.thisMonthDuration)
              this.showRecord(true,$r("app.media.kaluli"),this.thisMonthCalorie)
            }
            .justifyContent(FlexAlign.Start)
            .width('100%')
            .height('100%')
            //.margin({top:10})
          }.tabBar(this.navBar("月",2))
          TabContent(){
            Column({space:20}){
              this.showRecord(false,$r("app.media.duanlianshichang"),this.thisYearDuration)
              this.showRecord(true,$r("app.media.kaluli"),this.thisYearCalorie)
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