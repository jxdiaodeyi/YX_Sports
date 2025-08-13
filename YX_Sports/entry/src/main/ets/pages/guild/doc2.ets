import { router, Router } from '@kit.ArkUI';

interface userInfoType{
  token:string,
  userId:number,
  telephone:string,
  vip:number
}

@Entry
@Component
export struct doc1 {
  @State token:string=(this.getUIContext().getRouter().getParams()as userInfoType).token
  @State userId:number=(this.getUIContext().getRouter().getParams()as userInfoType).userId
  @State telephone:string=(this.getUIContext().getRouter().getParams()as userInfoType).telephone
  @State vip:number=(this.getUIContext().getRouter().getParams()as userInfoType).vip
  @State index: number = 2
  @State arm: number = 0
  @State chest: number = 0
  @State hip: number = 0
  @State leg: number = 0
  @State belly: number = 0
  @State all: number = 0
  build()
  {
    Column()
    {
      Text().height(40)
      Row()
      {
        Image('/image/home/return.png')
          .width(40)
          .height(40)
          .onClick(()=>{
            this.index--
            router.back({url:'',params:{token: this.token , userId:this.userId, telephone:this.telephone,vip:this.vip}})
          })
        Row() {}.width('25%')
        Progress({ value: this.index, total: 2, type: ProgressType.Linear })
          .width('30%')
          .color('#ff1604b5')
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)
      Column().height(120)
      Text('哪些部位是您想改善的？')
        .fontSize(40)
        .fontWeight(999)
        .width('100%')
        .textAlign(TextAlign.Center)
      Column().height(80)
      Row() {
        Text('手臂')
          .fontColor(this.arm == 1 ? '#ffffff' : '#000000')
          .backgroundColor(this.arm == 1 ? '#6C5DD3' : '#ffffff')
          .width(100)
          .height(70)
          .fontSize(30)
          .borderRadius(15)
          .textAlign(TextAlign.Center)
          .margin(10)
          .onClick(() => {
            if (this.arm == 0) {
              this.arm = 1
            } else {
              this.arm = 0
            }
          })
        Text('胸部')
          .fontColor(this.chest == 1 ? '#ffffff' : '#000000')
          .backgroundColor(this.chest == 1 ? '#6C5DD3' : '#ffffff')
          .width(100)
          .height(70)
          .fontSize(30)
          .borderRadius(15)
          .textAlign(TextAlign.Center)
          .margin(10)
          .onClick(() => {
            if (this.chest == 0) {
              this.chest = 1
            } else {
              this.chest = 0
            }
          })
        Text('臀部')
          .fontColor(this.hip == 1 ? '#ffffff' : '#000000')
          .backgroundColor(this.hip == 1 ? '#6C5DD3' : '#ffffff')
          .width(100)
          .height(70)
          .fontSize(30)
          .borderRadius(15)
          .textAlign(TextAlign.Center)
          .margin(10)
          .onClick(() => {
            if (this.hip == 0) {
              this.hip = 1
            } else {
              this.hip = 0
            }
          })
      }
      Row() {
        Text('腿部')
          .fontColor(this.leg == 1 ? '#ffffff' : '#000000')
          .backgroundColor(this.leg == 1 ? '#6C5DD3' : '#ffffff')
          .width(100)
          .height(70)
          .fontSize(30)
          .borderRadius(15)
          .textAlign(TextAlign.Center)
          .margin(10)
          .onClick(() => {
            if (this.leg == 0) {
              this.leg = 1
            } else {
              this.leg = 0
            }
          })
        Text('腹部')
          .fontColor(this.belly == 1 ? '#ffffff' : '#000000')
          .backgroundColor(this.belly == 1 ? '#6C5DD3' : '#ffffff')
          .width(100)
          .height(70)
          .fontSize(30)
          .borderRadius(15)
          .textAlign(TextAlign.Center)
          .margin(10)
          .onClick(() => {
            if (this.belly == 0) {
              this.belly = 1
            } else {
              this.belly = 0
            }
          })
        Text('全身')
          .fontColor(this.all == 1 ? '#ffffff' : '#000000')
          .backgroundColor(this.all == 1 ? '#6C5DD3' : '#ffffff')
          .width(100)
          .height(70)
          .fontSize(30)
          .borderRadius(15)
          .textAlign(TextAlign.Center)
          .margin(10)
          .onClick(() => {
            if (this.all == 0) {
              this.all = 1
            } else {
              this.all = 0
            }
          })
      }
      Column().height(140)
      Button('下一步', { type: ButtonType.Normal, stateEffect: true })
        .width('80%')
        .margin(20)
        .borderRadius(30)
        .backgroundColor('#6C5DD3')
        .onClick(()=>{
          this.index++
          router.pushUrl({url:'pages/guild/doc3',params:{token: this.token , userId:this.userId, telephone:this.telephone,vip:this.vip}})
        })
    }
    .width('100%')
    .height('100%')
  }
}