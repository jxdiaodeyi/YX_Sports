import { router } from '@kit.ArkUI'

@Component
export struct sharedTitle {
  @State title : string = ""
  @State h : number = 80
  @State type : number = 0
  @State isShow : boolean = false

  build() {
    Stack(){
      Row(){
        Image('/image/mine/leftBack.png')
          .width(20)
          .height(20)
          .margin({left:10,top:40})
          .onClick(()=>{
            router.back()
            // router.pushUrl({url:'pages/settingPage'})
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