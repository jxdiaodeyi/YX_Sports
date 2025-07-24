import { DialogAction, DialogHelper } from '@pura/harmony-dialog';
import { sharedTitle } from './title';
import { router } from '@kit.ArkUI';

interface Type4{
  img:Resource,
  text:string,
  id:number
}

@Entry
@Component
struct Manage {
  @State phoneNumber : string = '15774067042'
  @State isBind : boolean[] = [true,false,false]

  datas : Type4[] = [
    {img:$r('app.media.wechat'),text:'微信账号',id:0},
    {img:$r('app.media.weibo'),text:'微博账号',id:1},
    {img:$r('app.media.qq'),text:'QQ账号',id:2},
  ]

  @Builder
  bindItem(t:Type4){
    Row(){
      Row({space:2}){
        Image(t.img).size({width:20,height:20})
        Text(t.text)
      }
      .margin({left:10})

      Row({space:2}){
        Text(this.isBind[t.id] ? '解除绑定' : '去绑定')
          .fontSize(16)
          .onClick(()=>{
            if(this.isBind[t.id]){
              DialogHelper.showAlertDialog({
                title:'',
                content: "是否确认解除绑定",
                onAction: (action) => {
                  if (action == DialogAction.SURE) {
                    this.isBind[t.id] = false
                  }
                }
              })
            }
            else {
              //绑定逻辑代码
            }
          })
          .fontColor(this.isBind[t.id] ? '#999999' : '#72B681')
        Image($r('app.media.rightBack')).size({width:15,height:15})
      }
      .margin({right:10})
    }
    .width('100%')
    .height(60)
    .alignItems(VerticalAlign.Center)
    .justifyContent(FlexAlign.SpaceBetween)
    .backgroundColor('#ffff')
  }

  build() {
    Column(){
      sharedTitle({title:"账号管理"})

      Row(){
        Row({space:2}){
          Image($r('app.media.phoneNum')).size({width:20,height:20})
          Text(this.phoneNumber)
        }
        .margin({left:10})

        Row({space:2}){
          Text('更换绑定')
            .fontColor('#999999')
            .fontSize(18)
          Image($r('app.media.rightBack')).size({width:15,height:15})
        }
        .margin({right:10})
      }
      .width('100%')
      .height(60)
      .margin({top:10})
      .alignItems(VerticalAlign.Center)
      .justifyContent(FlexAlign.SpaceBetween)
      .backgroundColor('#ffff')

      Row(){
        Text('第三方账号绑定')
          .fontColor('#999999')
          .fontSize(15)
          .textAlign(TextAlign.Center)
      }
      .width('100%')
      .height(40)
      .margin({left:10})

      Column(){
        ForEach(this.datas,(i:Type4)=>{
            this.bindItem(i)
            if(i.id != 2){
              Image($r('app.media.bottomLine')).size({width:'100%',height:0.3})
            }
        })
      }

      Row(){
        Text('不想使用悦享账号了?')
        Text('注销账号')
          .fontColor('#72B681')
      }
      .width('100%')
      .layoutWeight(1)
      .alignItems(VerticalAlign.Bottom)
      .justifyContent(FlexAlign.Center)
      .margin({bottom:20})
      .onClick(()=>{
        router.replaceUrl({url:'pages/logOut'})
      })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F5F5F5')
  }
}