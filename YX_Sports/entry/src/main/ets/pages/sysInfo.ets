import { sharedTitle } from './title';
import { router } from '@kit.ArkUI';

@Entry
@Component
struct SysInformation {
  @State title : string = "年度会员强势来袭，这次你打算加入我们燃脂了吗？";
  @State date : string = "6-11"

  build() {
    Column(){
      sharedTitle({title:'系统通知'})
      Image($r('app.media.bottomLine')).size({width:'100%',height:0.3})
      Row(){
        Column(){
          Text(this.title)
            .fontSize(20)
            .margin({left:10})

          Blank()

          Text(this.date)
            .fontColor('#B7CFCF')
            .width('100%')
            .margin({left:10})
        }
        .width('65%')
        .height(121)
        .justifyContent(FlexAlign.SpaceBetween)

        Image($r('app.media.sysInfoImg'))
          .width(121)
          .height(121)
          .borderRadius(5)
          .margin({right:10,left:5})
      }
      .width('100%')
      .height(140)
      .backgroundColor('#ffff')
      .onClick(()=>{
        router.replaceUrl({url:'pages/detail'})
      })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F5F5F5')
  }
}