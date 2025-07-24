import { router } from '@kit.ArkUI'

@Component
export struct sharedTitle {
  private title:string = ""
  private h:number = 80
  private backUrl = 'pages/settingPage'

  build() {
    Stack(){
      Row(){
        Image($r("app.media.leftBack"))
          .width(20)
          .height(20)
          .margin({left:10,top:40})
          .onClick(()=>{
            router.pushUrl({url:this.backUrl})
          })
      }
      .width('100%')

      Text(this.title)
        .fontColor('#333333')
        .fontSize(20)
        .margin({top:40})
    }
    .width('100%')
    .height(this.h)
    .backgroundColor('#ffff')
  }
}