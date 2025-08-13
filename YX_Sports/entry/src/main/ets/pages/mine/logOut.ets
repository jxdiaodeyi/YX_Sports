import { sharedTitle } from './title';

@Entry
@Component
struct LogOut {
  @State text1 : string = "您可以通过隐私政策列明的联系方式联系我们要求注销账户或在我们的产品中直接申请注销账号。 " +
                          "敬请您注意并知悉，您提交注销申请后，我们需要15天时间处理您的账户注销。如您在15天内没有再次使用该注销账号登录，" +
                          "我们将在15天后清除您的账号信息，完成注销，如果您在15天内进行了此账号的登录，则视为您主动放弃此次注销操作的申请。" +
                          "当您注销账号后，将（可能）产生包括但不限于如下后果："

  @State text2 : string = "您可以通过隐私政策列明的联系方式联系我们要求注销账户或在我们的产品中直接申请注销账号。" +
                          " 敬请您注意并知悉，您提交注销申请后，我们需要15天时间处理您的账户注销。如您在15天内没有再次使用该注销账号登录，" +
                          "我们将在15天后清除您的账号信息，完成注销，如果您在15天内进行了此账号的登录，则视为您主动放弃此次注销操作的申请。" +
                          "当您注销账号后，将（可能）产生包括但不限于如下后果："

  build() {
    Column(){
      sharedTitle({title:"注销账号",type:1})
      Image('/image/mine/bottomLine.png').size({width:'100%',height:0.3})
      //text1
      Column(){
        Row(){
          Text('注销条件')
            .fontSize(25)
            .fontColor('#333333')
            .margin({left:15})
        }
        .width('100%')
        .height(60)
        .alignItems(VerticalAlign.Center)

        Row(){
          Text(this.text1)
            .fontSize(15)
            .lineHeight(30)
            .margin({left:15,right:15})
        }
        .width('100%')
      }
      .width('100%')
      //text2
      Column(){
        Row(){
          Text('注销需满足的条件')
            .fontSize(25)
            .fontColor('#333333')
            .margin({left:15})
        }
        .width('100%')
        .height(60)
        .alignItems(VerticalAlign.Center)

        Row(){
          Text(this.text2)
            .fontSize(15)
            .lineHeight(30)
            .margin({left:15,right:15})
        }
        .width('100%')
      }
      .width('100%')
      //注销
      Row(){
        Text("申请注销")
          .fontColor('#ffff')
      }
      .width('80%')
      .height(40)
      .alignItems(VerticalAlign.Center)
      .justifyContent(FlexAlign.Center)
      .margin({top:60})
      .backgroundColor('#ff0000')
      .borderRadius(15)
      .onClick(()=>{
        //注销逻辑代码
      })
    }
    .width('100%')
    .height('100%')
  }
}