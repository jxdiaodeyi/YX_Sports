import { router } from '@kit.ArkUI'
import {DialogHelper} from '@pura/harmony-dialog'
import {DialogAction} from '@pura/harmony-dialog'
import { sharedTitle } from './title'

@Entry
@Component
struct SettingPage {

  @State sex:string = "女"
  @State second:number = 30
  @State myIndex:number = 3

  @Styles
  rowCommon(){
    .width('100%')
    .height(50)
    .backgroundColor('#ffff')
  }
  @Styles
  imgCommon(){
    .width(15)
    .height(15)
    .margin({right:10})
  }

  @Builder
  title(t:string){
    Row(){
      Text(t)
        .fontColor('#C0A5C0')
        .textAlign(TextAlign.Start)
        .margin({left:10})
    }
    .width('100%')
    .height(50)
    .alignItems(VerticalAlign.Center)
  }

  build() {
      Column(){
        //标题
       sharedTitle({title:"设置",backUrl:'pages/Index'})
        //运动部分
        Column(){
          this.title("运动")
          Column(){
            Row(){
              Text("运动音乐")
                .fontSize(20)
                .margin({left:10})
              Image($r('app.media.rightBack')).imgCommon()
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .alignItems(VerticalAlign.Center)
            .rowCommon()
            .onClick(()=>{
              router.pushUrl({url:'pages/music'})
            })

            Image($r("app.media.bottomLine")).size({width:'90%',height:0.5})

            Row(){
              Text("锻炼休息时间")
                .fontSize(20)
                .margin({left:10})
              Row(){
                Text(this.second+"秒")
                Image($r('app.media.rightBack')).imgCommon()
              }
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .alignItems(VerticalAlign.Center)
            .rowCommon()
            .onClick(()=>{
              let nums:string[] = [];
              for(let i = 1; i <= 2025; i++){
                nums.push(i.toString())
              }
              DialogHelper.showTextPickerDialog({
                title: "",
                range: nums,
                onAction: (action: number, dialogId: string, value: string | string[]) => {
                  if (action == DialogAction.SURE) {
                    this.second = parseInt(value as string)
                  }
                }
              })
            })

            Image($r("app.media.bottomLine")).size({width:'90%',height:0.5})

            Row(){
              Text("健身视频示范教练")
                .fontSize(20)
                .margin({left:10})
              Row(){
                Text(this.sex)
                Image($r('app.media.rightBack')).imgCommon()
              }
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .alignItems(VerticalAlign.Center)
            .rowCommon()
            .onClick(()=>{
              let sexes:string[] =  ["男教练", "女教练"];
              DialogHelper.showActionSheetDialog({
                title: "",
                sheets: sexes,
                onAction: (index) => {
                  this.sex = sexes[index][0];
                }
              })
            })

            Image($r("app.media.bottomLine")).size({width:'90%',height:0.5})

            Row(){
              Text("健身目标与基础")
                .fontSize(20)
                .margin({left:10})
              Image($r('app.media.rightBack')).imgCommon()
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .alignItems(VerticalAlign.Center)
            .rowCommon()
            .onClick(()=>{
              router.pushUrl({url:'pages/fitnessGoal'})
            })
          }
        }
        //隐私部分
        Column(){
          this.title("隐私")
          Column(){
            Row(){
              Text("账号管理")
                .fontSize(20)
                .margin({left:10})
              Image($r('app.media.rightBack')).imgCommon()
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .alignItems(VerticalAlign.Center)
            .rowCommon()
            .onClick(()=>{
              router.replaceUrl({url:'pages/manage'})
            })

            Image($r("app.media.bottomLine")).size({width:'90%',height:0.5})

            Row(){
              Text("隐私设置")
                .fontSize(20)
                .margin({left:10})
              Image($r('app.media.rightBack')).imgCommon()
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .alignItems(VerticalAlign.Center)
            .rowCommon()
            .onClick(()=>{
              router.replaceUrl({url:'pages/private'})
            })
          }
        }
        //其他
        Column(){
          this.title("其他")
          Column(){
            Row(){
              Text("消息通知")
                .fontSize(20)
                .margin({left:10})
              Image($r('app.media.rightBack')).imgCommon()
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .alignItems(VerticalAlign.Center)
            .rowCommon()
            .onClick(()=>{
              router.replaceUrl({url:'pages/information'})
            })

            Image($r("app.media.bottomLine")).size({width:'90%',height:0.5})

            Row(){
              Text("清除缓存")
                .fontSize(20)
                .margin({left:10})
              Image($r('app.media.rightBack')).imgCommon()
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .alignItems(VerticalAlign.Center)
            .rowCommon()
            .onClick(()=>{
              router.replaceUrl({url:'pages/clearCache'})
            })
          }
        }
        //退出
        Row(){
          Text("退出登录")
            .fontColor('#ff0000')
            .textAlign(TextAlign.Center)
            .fontSize(22)
        }
        .width('100%')
        .height(50)
        .margin({top:20})
        .justifyContent(FlexAlign.Center)
        .backgroundColor('#ffff')
      }
      .width('100%')
      .height('100%')
      .backgroundColor('#F5F5F5')
    }
}