import { router, Router } from '@kit.ArkUI';
@Entry
@Component
export struct doc1 {
  @State index: number = 1
  @State flag: number = 0
  build()
  {
    Column()
    {
      Text().height(10)
      Row()
      {
        Image($r('app.media.return'))
          .width(40)
          .height(40)
          .onClick(()=>{
            this.index--
            router.back()
          })
        Row() {}.width('25%')
        Progress({ value: this.index, total: 2, type: ProgressType.Linear })
          .width('30%')
          .color('#ff1604b5')
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)
      Column().height(120)
      Text('您的性别是')
        .fontSize(40)
        .fontWeight(999)
        .width('100%')
        .textAlign(TextAlign.Center)
      Column().height(120)
      Text('我是女生')
        .fontColor(this.flag==1?'#ffffff':'#000000')
        .backgroundColor(this.flag==1?'#6C5DD3':'#ffffff')
        .width(150)
        .height(70)
        .fontSize(30)
        .borderRadius(15)
        .textAlign(TextAlign.Center)
        .margin(30)
        .onClick(()=>{
          if(this.flag==0||this.flag==2)
          {
            this.flag=1
          }
          else
          {
            this.flag=0
          }
        })
      Text('我是男生')
        .fontColor(this.flag==2?'#ffffff':'#000000')
        .backgroundColor(this.flag==2?'#6C5DD3':'#ffffff')
        .width(150)
        .height(70)
        .fontSize(30)
        .borderRadius(15)
        .textAlign(TextAlign.Center)
        .onClick(()=>{
          if(this.flag==0||this.flag==1)
          {
            this.flag=2
          }
          else
          {
            this.flag=0
          }
        })
      Column().height(120)
      Button('下一步', { type: ButtonType.Normal, stateEffect: true })
        .width('80%')
        .margin(20)
        .borderRadius(30)
        .backgroundColor('#6C5DD3')
        .onClick(()=>{

          this.index++
          router.pushUrl({url:'pages/doc2'})
        })
    }
    .width('100%')
    .height('100%')
  }
}
