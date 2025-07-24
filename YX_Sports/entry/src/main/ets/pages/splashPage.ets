import { router } from '@kit.ArkUI'

@Entry
@Component
struct SplashPage {
  @State private isActive: boolean = true
  @State private rotateAngle: number = 0

  aboutToAppear() {
    // 启动旋转动画
    this.startRotation()

    //4秒后跳转到引导页
    setTimeout(() => {
      this.isActive = false
      router.replaceUrl({ url: 'pages/Starter' })
  }, 4000)
  }

  startRotation() {
    const id = setInterval(() => {
      this.rotateAngle = (this.rotateAngle + 10) % 360
      if (!this.isActive) {
        clearInterval(id)
      }
    }, 50)
  }

  build() {
    Column() {
      //中间图标与字
      Column(){
        Column(){
          Row(){
            Image($r('app.media.startPho')).size({width:75,height:75})
          }
          .backgroundColor('#6C5DD3')
          .borderRadius(15)
          .margin({bottom:20})
          Text("悦享健身")
            .fontSize(40)
            .fontColor('#666666')
          Text("想要身体健， 天天来锻炼")
            .fontSize(18)
            .fontColor('#999999')
            .margin({top:10})
        }
        .width('100%')
        .height('60%')
        .alignItems(HorizontalAlign.Center)
        .justifyContent(FlexAlign.End)
        // 底部的转圈元素
        Stack() {
          Image($r('app.media.circle'))
            .width(40)
            .height(40)
            .rotate({ angle: this.rotateAngle })
        }
        .width('100%')
        .layoutWeight(1)
        .alignContent(Alignment.Bottom)
      }
      .width('100%')
      .height('100%')
      .padding(30)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#FFFF')
  }
}