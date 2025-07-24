import { router } from "@kit.ArkUI"
import { url } from "@kit.ArkTS"

interface Type1{
  img:Resource,
  title:string,
  lianjie:string
}

@Component
export struct  mine{

  //数据
  datas:Type1[] = [
    {img:$r('app.media.a'),title:"训练记录",lianjie:"pages/TrainRecordPage"},
    {img:$r('app.media.b'),title:"体重记录",lianjie:"pages/WeightRecordPage"},
    //{img:$r('app.media.c'),title:"我的收藏",lianjie:"pages/WeightRecordPage"},
    {img:$r('app.media.e'),title:"常见问题",lianjie:"pages/NormalQuestionPage"},
    {img:$r('app.media.f'),title:"意见反馈",lianjie:"pages/yijian"}
  ]
  //UI
  @Builder
  items(data:Type1){
    Row(){
      Image(data.img).size({width:25,height:25})
      Text(data.title)
        .fontSize(15)
        .fontColor(Color.Black)
        .margin({left:10})
      Image($r('app.media.rightBack'))
        .width(15)
        .height(15)
        .margin({left:240})
    }
    .onClick(()=>{
      router.pushUrl({url:data.lianjie})
    })
    .width('100%')
    .padding(20)
  }

  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;

  build() {
    Column() {
      //顶部
      Column() {
        //设置与通知
        Row() {
          Image($r("app.media.set"))
            .height(25)
            .width(25)
            .margin({ right: 20 })
            .onClick(()=>{
              router.pushUrl({url:'pages/settingPage'})
            })
          Image($r("app.media.msg"))
            .width(28)
            .height(28)
            .onClick(()=>{
              router.pushUrl({url:'pages/sysInfo'})
            })
        }
        .width('100%')
        .height('20%')
        .justifyContent(FlexAlign.End)
        .padding({ right: 20 })
        .margin({ top: px2vp(this.topRectHeight)})

        //头像
        Row({ space: 10 }) {
          Image($r('app.media.pho')).size({ width: 60, height: 60 })
            .onClick(()=>{
              router.pushUrl({url:'pages/EditInfoPage'})
            })
          Column() {
            Text("瘦成一道闪电")
              .fontColor('#ffff')
              .fontSize(22)
              .width('100%')
            Row(){
              Text("LV1")
                .fontColor('#ffff')
                .backgroundColor('#8174E7')
                .borderRadius(8)
                .width(50)
                .textAlign(TextAlign.Center)
            }
            .width('100%')
            .justifyContent(FlexAlign.Start)
          }
        }
        .padding(20)
        .height('40%')
        .width('100%')
        //会员
        Row() {
          Row(){
            Image($r('app.media.memberShip')).size({width:25,height:25})
            Text("VIP会员 | 定制专属健身")
              .fontColor('#FBDEB9')
              .width('100%')
              .fontSize(18)
              .margin({left:5})
          }
          .width('60%')
          .margin({left:10})

          Row(){
            Text("立即开通")
              .onClick(()=>{
                router.pushUrl({url:"pages/vip"})
              })
            Image($r('app.media.rightBack')).size({width:10,height:10})
          }
          .height(24)
          .width(90)
          .margin({right:10})
          .justifyContent(FlexAlign.Center)
          .backgroundColor('#FFE3BE')
          .borderRadius(10)
        }
        .backgroundColor('#2D2D2D')
        .borderRadius({
          topLeft: 15,
          topRight: 15,
          bottomLeft: 0,
          bottomRight: 0
        })
        .width('90%')
        .layoutWeight(1)
        .justifyContent(FlexAlign.SpaceBetween)
      }
      .backgroundColor('#9EA0E7')
      .height('30%')
      .width('100%')

      Column({space:20}){
        //循环，数组，元素
        ForEach(this.datas,(i:Type1) => {
          this.items(i)
        })
      }
    }
    .justifyContent(FlexAlign.Start)
    .width("100%")
    .height("100%")
  }
}

