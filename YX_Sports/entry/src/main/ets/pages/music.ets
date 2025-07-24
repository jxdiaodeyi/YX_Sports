import { router, Router } from '@kit.ArkUI';
import { sharedTitle } from './title';

interface Type2{
  tex : string,
  id : number
}
@Entry
@Component
struct Music {
  @State nowMusic : string = 'Bright Futures';
  @State sliderValue : number[] = [30,40,50];
  @State isOn : boolean[] = [false,false,false]

  datas:Type2[] = [
    {tex:"音乐",id:0},
    {tex:"语音",id:1},
    {tex:"音效",id:2}
  ]

  @Builder
  sliderItem(data:Type2){
    Column(){
      Row(){
        Text(data.tex)
          .fontSize(15)
          .margin({left:10})
        //开关组件
        Toggle({type:ToggleType.Switch,isOn:this.isOn[data.id]})
          .onChange((isOn:boolean)=>{
            this.isOn[data.id] = isOn
          })
          .margin({right:10})
          .selectedColor('#45D585')
      }
      .width('100%')
      .height('50%')
      .alignItems(VerticalAlign.Center)
      .justifyContent(FlexAlign.SpaceBetween)

      Row(){
        Image($r('app.media.musicPlay')).size({width:20,height:20}).margin({left:10})
        Slider({
          value:this.sliderValue[data.id],
          min:0,
          max:100,
          step:1
        })
          .onChange((value:number)=>{
            this.sliderValue[data.id] = value
          })
          .width('80%')
        Image($r('app.media.volume')).size({width:20,height:20}).margin({right:10})
      }
      .width('100%')
      .alignItems(VerticalAlign.Center)
      .justifyContent(FlexAlign.SpaceBetween)
    }
    .width('100%')
    .height(100)
    .margin({top:10})
    .backgroundColor('#ffff')
  }

  build() {
    Column(){
      //标题
     sharedTitle({title:"运动音乐"})

      //选择音乐
      Row(){
        Column({space:10}){
          Text("训练音乐")
            .fontSize(20)
          Text(this.nowMusic)
            .fontSize(15)
            .fontColor('#ff676565')
        }
        Image($r('app.media.rightBack'))
          .width(20)
          .height(20)
      }
      .width('100%')
      .height(100)
      .margin({top:10})
      .padding(10)
      .justifyContent(FlexAlign.SpaceBetween)
      .backgroundColor('#ffff')
      .onClick(()=>{
        router.pushUrl({url:'pages/trainMusic'})
      })

      //设置音乐
      ForEach(this.datas,(i:Type2)=>{
        this.sliderItem(i)
      })

    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F5F5F5')
  }
}