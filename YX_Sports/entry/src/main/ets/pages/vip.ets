import { DialogHelper, SpinType } from '@pura/harmony-dialog';
import { PinCodeTextInput } from '@pharos/pin_code_text_input';
import { router } from '@kit.ArkUI';
import { Plan } from './plan';

export interface vip {
  changes:boolean
  // 可根据实际需求添加其他参数
}

@Entry
@Component
struct Vip {
  @State flag:number=0
  @State changes:boolean=false
  // @State vip:boolean=false
  build() {
      Column(){
        Text().height(40).backgroundColor("#FFDBAD").width("100%")
        Row(){
          Image($r("app.media.return"))
            .width(40)
            .height(40)
            .onClick(()=>{
              router.back()
            })
          Text("会员中心")
            .fontSize(30)
            .fontWeight(999)
            .margin({left:90})
        }
        .justifyContent(FlexAlign.Start)
        .width("100%")
        .backgroundColor("#FFDBAD")
        Image($r("app.media.vip"))
          .height("45%")
          .width("102%")
        Text("会员套餐")
          .fontSize(20)
          .fontWeight(999)
          .margin({top:20,left:30})
          .width("100%")
          .textAlign(TextAlign.Start)
        Row(){
          Column(){
            Text("连续包年")
              .fontSize(20)
              .fontWeight(999)
            Text("￥138.0")
              .fontSize(30)
              .fontColor(Color.Red)
            Text("原价￥299")
              .fontSize(20)
              .fontColor("#CBE7DC")
          }
          .margin(10)
          .borderWidth(0.1)
          .borderColor("#E4E4E4")
          .width("30%")
          .height(120)
          .backgroundColor(this.flag==1?"#F2E7DC":"#ffffff")
          .justifyContent(FlexAlign.Center)
          .borderRadius(20)
          .onClick(()=>{
            this.flag=1;
          })
          Column(){
            Text("季卡")
              .fontSize(20)
              .fontWeight(999)
            Text("￥78.0")
              .fontSize(30)
              .fontColor(Color.Red)
            Text("原价￥299")
              .fontSize(20)
              .fontColor("#CBE7DC")
          }
          .borderWidth(0.1)
          .borderColor("#E4E4E4")
          .width("30%")
          .height(120)
          .backgroundColor(this.flag==2?"#F2E7DC":"#ffffff")
          .justifyContent(FlexAlign.Center)
          .borderRadius(20)
          .onClick(()=>{
            this.flag=2;
          })
          Column(){
            Text("12个月")
              .fontSize(20)
              .fontWeight(999)
            Text("￥198.0")
              .fontSize(30)
              .fontColor(Color.Red)
            Text("原价￥299")
              .fontSize(20)
              .fontColor("#CBE7DC")
          }
          .margin(10)
          .borderColor("#E4E4E4")
          .borderWidth(0.1)
          .width("30%")
          .height(120)
          .backgroundColor(this.flag==3?"#F2E7DC":"#ffffff")
          .justifyContent(FlexAlign.Center)
          .borderRadius(20)
          .onClick(()=>{
            this.flag=3;
          })
        }
        .justifyContent(FlexAlign.SpaceBetween)
        Text("到期按自动续费，可随时取消")
          .fontSize(20)
          .fontWeight(500)
          .fontColor("#1d454444")
          .width("100%")
          .textAlign(TextAlign.Center)
          .margin(10)
        Text("立即开通")
          .fontSize(20)
          .fontWeight(999)
          .textAlign(TextAlign.Center)
          .backgroundColor("#EBD5C1")
          .width("90%")
          .height(50)
          .borderRadius(20)
          .onClick(()=>{
              let log=DialogHelper.showLoadingDialog({
                loadType: SpinType.spinP,
                loadColor: Color.White,
                loadSize: 70,
                backgroundColor: '#BB000000',
                content: "正在购买中，请不要离开",
                fontSize: 18,
                padding: { top: 30, right: 50, bottom: 30, left: 50 },
                autoCancel: true
              })
            setTimeout(()=>{
              DialogHelper.closeDialog(log)
            },2000)
            router.replaceUrl({url:"pages/Index",params:{changes:true}})
          })

      }
  }
}

