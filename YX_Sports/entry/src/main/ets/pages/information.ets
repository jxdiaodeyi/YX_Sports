import { sharedTitle } from './title';

interface Type5{
  tex : string,
  id : number
}

@Entry
@Component
struct Information {
  @State isOn : boolean[] = [false,false,false,false]

  datas:Type5[] = [
    {tex:"接受消息通知",id:0},
    {tex:"声音",id:1},
    {tex:"震动",id:2},
    {tex:"消息免打扰 (22:00~09:00)",id:3}
  ]

  @Builder
  informationItem(data:Type5){
    Row(){
      Text(data.tex)
        .fontSize(18)
        .margin({left:10})
      //开关组件
      Toggle({type:ToggleType.Switch,isOn:this.isOn[data.id]})
        .onChange((isOn:boolean)=>{
          this.isOn[data.id] = isOn
        })
        .margin({right:10})
        .size({width:55,height:28})
        .selectedColor('#45D585')
    }
    .width('100%')
    .height(50)
    .alignItems(VerticalAlign.Center)
    .justifyContent(FlexAlign.SpaceBetween)
    .backgroundColor('#ffff')
  }

  build() {
    Column(){
      sharedTitle({title:'消息通知'})
      Image($r('app.media.bottomLine')).size({width:'100%',height:0.3})
      ForEach(this.datas,(i:Type5)=>{
        this.informationItem(i)
        if(i.id == 0){
          Row(){
            Text("通知方式")
              .fontSize(12)
              .fontColor('#A5BFE0')
          }
          .width('100%')
          .height(40)
          .alignItems(VerticalAlign.Center)
          .margin({left:10})
        }
        if(i.id == 1 || i.id == 2){
          Image($r('app.media.bottomLine')).size({width:'100%',height:0.3})
        }
      })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F5F5F5')
  }
}