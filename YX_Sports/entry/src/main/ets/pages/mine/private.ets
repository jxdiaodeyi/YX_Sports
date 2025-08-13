import { sharedTitle } from './title';

@Entry
@Component
struct Private {
  @State isOn:boolean = false;

  build() {
    Column(){
      sharedTitle({title:'隐私设置',type:1})
      Image('/image/mine/bottomLine.png').size({width:'100%',height:0.3})
      Row(){
        Text("允许展示推荐内容")
          .fontSize(18)
          .margin({left:10})

        Toggle({type:ToggleType.Switch,isOn:this.isOn})
          .onChange((isOn:boolean)=>{
            this.isOn = isOn
          })
          .size({width:55,height:30})
          .margin({right:10})
          .selectedColor('#45D585')
      }
      .width('100%')
      .height(60)
      .alignItems(VerticalAlign.Center)
      .justifyContent(FlexAlign.SpaceBetween)
      .backgroundColor('#ffff')
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F5F5F5')
  }
}