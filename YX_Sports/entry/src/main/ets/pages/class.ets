import { text } from '@kit.ArkGraphics2D'
import { router } from '@kit.ArkUI'

interface type{
  img:Resource,
  name:string,
  num:number
}

interface commentUser
{
  img:Resource
  name:string
  date:string
  num:number
  content:string
  heart:Resource
  redheart:Resource
  flag:boolean
}

@Entry
@Component
struct Page {
  @State message: string = 'Hello World';
  @State isOn: boolean = false;
  @State datas: type[] = [
    { img: $r('app.media.class6'), name: '猫式支撑', num: 11 },
    { img: $r('app.media.class6'), name: '四点支撑', num: 11 }
  ]
  @State exercies: type[] = [
    { img: $r('app.media.class6'), name: '收腹踢腿', num: 12 },
    { img: $r('app.media.class6'), name: '交替平板支撑', num: 12 },
    { img: $r('app.media.class6'), name: '收腹踢腿', num: 12 },
    { img: $r('app.media.class6'), name: '交替平板支撑', num: 12 },
    { img: $r('app.media.class6'), name: '收腹踢腿', num: 12 },
    { img: $r('app.media.class6'), name: '交替平板支撑', num: 12 }
  ]

  @State comment:commentUser[]=[
    {img:$r('app.media.class8'),name:'西瓜',date:'11-20',num:122,content:'好累啊,不过拉伸完还是很放松的',heart:$r('app.media.class9'),redheart:$r('app.media.class10'),flag:false},
    {img:$r('app.media.class8'),name:'西瓜',date:'11-20',num:122,content:'好累啊,不过拉伸完还是很放松的',heart:$r('app.media.class9'),redheart:$r('app.media.class10'),flag:false},
    {img:$r('app.media.class8'),name:'西瓜',date:'11-20',num:122,content:'好累啊,不过拉伸完还是很放松的',heart:$r('app.media.class9'),redheart:$r('app.media.class10'),flag:false},
    {img:$r('app.media.class8'),name:'西瓜',date:'11-20',num:122,content:'好累啊,不过拉伸完还是很放松的',heart:$r('app.media.class9'),redheart:$r('app.media.class10'),flag:false},
    {img:$r('app.media.class8'),name:'西瓜',date:'11-20',num:122,content:'好累啊,不过拉伸完还是很放松的',heart:$r('app.media.class9'),redheart:$r('app.media.class10'),flag:false},
    {img:$r('app.media.class8'),name:'西瓜',date:'11-20',num:122,content:'好累啊,不过拉伸完还是很放松的',heart:$r('app.media.class9'),redheart:$r('app.media.class10'),flag:false}
  ]


  @Builder
  itemui(data: type) {
    Row() {
      Image(data.img)
        .width(100)
        .height(100)
        .margin({ right: 20, bottom: 10 })
      Column() {
        Text(data.name)
          .margin({ bottom: 20 })
          .width('100%')
        Text(data.num + 'S')
          .width('100%')
      }
    }
    .width('100%')
  }

  toggleLikeStatus(index: number) {
    // 创建新数组以触发UI更新
    this.comment = this.comment.map((item, i) => {
      if (i === index) {
        // 切换当前项的flag状态，并更新点赞数
        return {
          img: item.img,
          name: item.name,
          date: item.date,
          num: item.flag? item.num - 1 : item.num + 1,
          content: item.content,
          heart: item.heart,
          redheart: item.redheart,
          flag:!item.flag
        };
      }
      return item;
    });
  }

  @Builder
  comUserUi(data:commentUser,num:number)
  {
    Column()
    {
      Row()
      {
        Row()
        {
          Image(data.img)
            .width(50)
            .height(50)
          Column()
          {
            Text(data.name)
              .margin({bottom:5})
              .fontColor('#C4A699')
            Text(data.date)
              .fontColor('#C4A699')
          }
        }

        Row()
        {
          Image(data.flag?data.redheart:data.heart)
            .width(20)
            .height(20)
            .margin({right:5})
            .onClick(async ()=>{
              this.toggleLikeStatus(num)
            })
          Text(data.num+'')
            .fontColor('#C4A699')
        }
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceBetween)
      .margin({top:15,bottom:15})

      Text(data.content)
        .width('100%')
        .margin({left:40})
    }
  }

  build() {
    Scroll() {
      Stack({ alignContent: Alignment.Top}) {
        Column() {
          Stack({ alignContent: Alignment.Top}) {
            Image($r('app.media.class1'))
              .width('100%')
              .height(200)
            Column() {
              Text().height(40)
              Image($r("app.media.return"))
                .width(40)
                .height(40)
                .onClick(() => {
                  router.back()
                })
            }
            .alignItems(HorizontalAlign.Start)
            .width("100%")
          }
        }
        .width('100%')
        .height("100%")

        Column() {

          Column({ space: 10 }) {
            Text('全身突击燃脂计划')
              .fontSize(30)
              .fontWeight(FontWeight.Bold)
              .width('100%')
            Row() {
              Row() {
                Image($r('app.media.class2'))
                  .width(30)
                  .height(30)
                Text('20分钟')
                  .fontWeight(FontWeight.Bold)
                  .fontSize(20)
                  .padding(5)
              }
              .justifyContent(FlexAlign.Start)

              Row() {
                Image($r('app.media.class3'))
                  .width(30)
                  .height(30)

                Text('20分钟')
                  .fontWeight(FontWeight.Bold)
                  .fontSize(20)
                  .padding(5)
              }
              .justifyContent(FlexAlign.Center)
              .width('35%')
              .border({
                width: {
                  top: 0,
                  bottom: 0,
                  left: 1,
                  right: 1
                },
                color: { left: '#f7fafa', right: '#f7fafa' }
              })

              Row() {
                Image($r('app.media.class4'))
                  .width(30)
                  .height(30)
                Text('20分钟')
                  .fontWeight(FontWeight.Bold)
                  .fontSize(20)
                  .padding(10)
              }
              .justifyContent(FlexAlign.Start)
            }
            .width('100%')
            .justifyContent(FlexAlign.Start)

            Text('每天坚持这几个腹部动作，能够有效的减去腹部脂肪，一周见效！')
              .fontColor('#C4A699')
          }
          .margin({ bottom: 15 })

          Row() {
            Column() {
              Text('训练音乐')
                .fontSize(25)
                .fontWeight(FontWeight.Bold)
                .margin({ top: 25,bottom:10 })
                .width('100%')
              Text('Bright FUtures')
                .fontColor('#C4A699')
                .fontSize(25)
                .margin({ bottom: 25 })
                .width('100%')
            }
            .width('80%')

            Image($r('app.media.class5'))
              .width(50)
              .onClick(()=>{
                router.pushUrl({url:"pages/music"})
              })
          }
          .width('100%')
          .border({
            width: {
              top: 1,
              bottom: 1,
              left: 0,
              right: 0
            },
            color: { top: '#F2F4F6', bottom: '#F2F4F6' }
          })

          Column() {

            Row() {
              Text('热身·2个')
                .width('80%')
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
              Toggle({ type: ToggleType.Switch, isOn: this.isOn })
                .onChange((isOn: boolean) => {
                  this.isOn = isOn
                  console.log('开关状态:', isOn);
                })
                .width(50)
                .height(30)
            }
            .width('100%')

            Column() {
              ForEach(this.datas, (data: type) => {
                this.itemui(data)
              })
            }
            .border({
              width: {
                top: 0,
                bottom: 1,
                left: 0,
                right: 0
              },
              color: { top: '#F2F4F6', bottom: '#F2F4F6' }
            })
            .margin(20)
            .width('100%')

            Row() {
              Text('训练·6个')
                .width('80%')
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
            }
            .width('100%')

            Column() {
              ForEach(this.exercies, (data: type) => {
                this.itemui(data)
              })
            }
            .height("100%")
            .width('100%')
            .margin({top:20})
          }
          .margin({ top: 15 })
          .height("100%")

          Text('')
            .width('100%')
            .height(370)
            .border({
              width: {
                top: 0,
                bottom: 1,
                left: 0,
                right: 0
              },
              color: { top: '#F2F4F6', bottom: '#F2F4F6' }
            })
            .margin({bottom:20})

          Column()
          {
            Row() {
              Text('拉伸放松·2个')
                .width('80%')
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
              Toggle({ type: ToggleType.Switch, isOn: this.isOn })
                .onChange((isOn: boolean) => {
                  this.isOn = isOn
                  console.log('开关状态:', isOn);
                })
                .width(50)
                .height(30)
            }
            .width('100%')

            Column() {
              ForEach(this.datas, (data: type) => {
                this.itemui(data)
              })
            }
            .border({
              width: {
                top: 0,
                bottom: 1,
                left: 0,
                right: 0
              },
              color: { top: '#F2F4F6', bottom: '#F2F4F6' }
            })
            .width('100%')

            Column()
            {
              Text('课程评价')
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
                .margin({top:15})
                .width('100%')

              Row()
              {
                Image($r('app.media.class7'))
                  .width(50)
                  .height(50)
                  .margin({right:10})
                TextInput({placeholder:'留下你的精彩评论'})
                  .width('80%')
              }
              .width('100%')
              .margin({top:10})

              Column()
              {
                ForEach(this.comment,(data:commentUser,index:number)=>{
                  this.comUserUi(data,index)
                })
              }


              Text('——————我是有底线的———————')
                .fontColor('#C4A699')
                .width('100%')
                .margin({top:20,bottom:10})
                .textAlign(TextAlign.Center)

              Button('成为会员，即刻开练')
                .backgroundColor("#FF9900")
                .width('80%')
                .margin({bottom:10})
            }

          }

        }
        .width('100%')
        .backgroundColor('white')
        .borderRadius(20)
        .padding(10)
        .margin({top:180})
      }

    }
    .height("100%")
  }
}