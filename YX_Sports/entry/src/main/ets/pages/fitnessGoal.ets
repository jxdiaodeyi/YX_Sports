import { router } from '@kit.ArkUI';
import { DialogHelper } from '@pura/harmony-dialog';
import { sharedTitle } from './title';

@Entry
@Component
struct FitnessGoal {
  @State goal_base : string[] = ['塑形','基础'];

  @Builder
  rowItem(title:string, temp:string, data:string[],id:number){
    Row(){
      Text(title)
        .fontSize(20)
        .margin({left:10})
      Row(){
        Text(this.goal_base[id])
          .fontSize(18)
        Image($r('app.media.rightBack'))
          .width(15)
          .height(15)
          .margin({right:10})
      }
    }
    .width('100%')
    .height(60)
    .backgroundColor('#ffff')
    .justifyContent(FlexAlign.SpaceBetween)
    .alignItems(VerticalAlign.Center)
    .onClick(()=>{
      DialogHelper.showActionSheetDialog({
        title: "请选择上传方式",
        sheets: data,
        onAction: (index) => {
          this.goal_base[id] = data[index]
        }
      })
    })
  }

  build() {
    Column(){
      //标题
      sharedTitle({title:"健身目标与基础"})
        .margin({bottom:10})

      Column(){
        this.rowItem("健身目标",this.goal_base[0],["减脂","塑形","增肌","健康"],0)
        Image($r("app.media.bottomLine")).size({width:'90%',height:0.5})
        this.rowItem("健身基础",this.goal_base[1],["初级","中级","高级"],1)
       }
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F5F5F5')
  }
}