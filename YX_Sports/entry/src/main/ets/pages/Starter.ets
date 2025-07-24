import {  Router } from '@kit.ArkUI';
import router from '@ohos.router';
@Entry
@Component
struct Starter {
  @State message: string = 'Hello World';

  build() {
    Swiper(){
      Stack(){
        Image($r('app.media.yindao4'))
          .width('100%')
          .height('100%')
        Text('好的身材需要锻炼')
          .fontSize(28)
          .fontWeight(600)
          .fontColor('#1E1E1E')
          .textAlign(TextAlign.Center)
          .margin({top:350})
      }
      Stack(){
        Image($r('app.media.yindao3'))
          .width('100%')
          .height('100%')
        Text('每天锻炼一小时')
          .fontSize(28)
          .fontWeight(600)
          .fontColor('#1E1E1E')
          .textAlign(TextAlign.Center)
          .margin({top:350})

      }
      Stack(){
        Image($r('app.media.yindao2'))
          .width('100%')
          .height('100%')
        Text('健康生活一辈子')
          .fontSize(28)
          .fontWeight(600)
          .fontColor('#1E1E1E')
          .textAlign(TextAlign.Center)
          .margin({top:350})
      }
      Stack(){
        Image($r('app.media.yindao1'))
          .width('100%')
          .height('100%')
        Column(){
          Text('让我们一起开始吧')
            .fontSize(28)
            .fontWeight(600)
            .fontColor('#1E1E1E')

          Button('立即体验')
            .width('40%')
            .height(48)
            .backgroundColor('#6C5DD3')
            .fontColor('#FFFFFF')
            .fontSize(18)
            .borderRadius(24)
            .margin({ top: 20 })
            .onClick(() => {
              // 点击事件处理逻辑
              console.log('点击了立即体验按钮');
              router.replaceUrl({url:'pages/start'})
            })
        }
        .height('100%')
        .width('100%')
        .margin({bottom:350})
        .justifyContent(FlexAlign.End)
      }
    }
    .autoPlay(true)
    .loop(false)
    .height('100%')
    .width('100%')
  }
}