import image from "@ohos.multimedia.image"
import { router, Router } from "@kit.ArkUI"

interface Type1 {
    img:Resource
    name:string
    time:number
    num:number
}
interface  Type2{
  img2:Resource
}
interface Type3{
  img3:Resource
  name3:string
  time3:number
  num3:number
}
@Component
export struct Home {
  datas:Type1[] = [
    {img:$r('app.media.pameila'),name:"帕梅拉15分钟快乐舞蹈",time:3,num:70},
    {img:$r('app.media.pameila'),name:"帕梅拉15分钟快乐舞蹈",time:3,num:70},
    {img:$r('app.media.pameila'),name:"帕梅拉15分钟快乐舞蹈",time:3,num:70}
  ]
  data2:Type2[]=[
    {img2:$r('app.media.majiaxian')},
    {img2:$r('app.media.majiaxian')},
    {img2:$r('app.media.majiaxian')}
  ]
  data3:Type3[]=[
    { img3:$r('app.media.quanbu'),name3:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time3:3,num3:70},
    { img3:$r('app.media.quanbu'),name3:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time3:3,num3:70},
    { img3:$r('app.media.quanbu'),name3:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time3:3,num3:70},
    { img3:$r('app.media.quanbu'),name3:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time3:3,num3:70},
    { img3:$r('app.media.quanbu'),name3:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time3:3,num3:70},
    { img3:$r('app.media.quanbu'),name3:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time3:3,num3:70}
  ]
@Builder
pameila(data:Type1){
    Column(){
      Image(data.img)
        .width(200)
        .height(150)
        .borderRadius(12)
        .onClick(()=>{
          router.pushUrl({url:"pages/class"})
        })
      Text(data.name)
        .fontSize(15)
        .fontWeight(5)

      Row(){
        Text('k1初学.'+data.time+'分钟.'+data.num+'千卡')
          .fontSize(10)

      }
    }

    .padding(5)
}
@Builder
majiax(data:Type2){
    Image(data.img2)
      .width(200)
      .height(200)
      .borderRadius(12)
      .onClick(()=>{
        router.pushUrl({url:"pages/class"})
      })
}
@Builder
quanbu(data:Type3){
  Row(){
    Image(data.img3)
      .width(100)
      .height(100)
      .borderRadius(12)
      .onClick(()=>{
        router.pushUrl({url:"pages/class"})
      })

    Column(){
      Row() {
        Text(data.name3)
          .fontSize(15)
          .fontWeight(5)
          .width(200)
        Text()
          .width('22%')
      }
      Text('k1初学.'+data.time3+'分钟.'+data.num3+'千卡')
        .fontSize(10)
        //.width('100%')
        .width(300).fontSize(12).padding(10)
        .lineHeight(20)
    }
  }
  .backgroundColor(this.colors[Math.floor(Math.random()*3)])
  .padding(5)

}
colors:string[]=['#FFFFFF', '#FFFFFF','#FFFFFF']

  @State isloading:boolean = false;

  build() {
    Column({ space: 5 }) {
      Text().height(10)
      Row() {
        Text('课程')
          .fontSize(30)
          .width('90%')
        Search()
          .backgroundColor('#FFFFFF')
          .height(40)
          .width(40)
          .onClick(() => {
            // 点击跳转到搜索页面
            router.pushUrl({ url: 'pages/sousuo' }) // 目标页面路径
            })
      }

      Scroll() {
      Column({space:15}) {
        Swiper() {
          Image($r('app.media.lunbo1'))
            .onClick(()=>{
              router.pushUrl({url:"pages/class"})
            })
          Image($r('app.media.lunbo1'))
            .onClick(()=>{
              router.pushUrl({url:"pages/class"})
            })
        }

        .width(300)
        .height(300)
        .autoPlay(true)

        Scroll() {
          Row() {
            ForEach(this.datas, (item: Type1) => {
              this.pameila(item)
            })
          }

        }
        .width('100%')
        .scrollBar(BarState.Off)
        .scrollable(ScrollDirection.Horizontal)

        Column() {
          Row() {
            Text('为你推荐')
              .fontSize(20)
              .width('70%')
            Button('查看更多')
              .height(20)
              .backgroundColor('#FFFFFF')
              .fontColor('#2B2B2B')
              .borderColor('#2B2B2B')
              .border({ width: 1 })
          }

          Scroll() {
            Row({ space: 15 }) {
              ForEach(this.data2, (item2: Type2) => {
                this.majiax(item2)
              })
            }

          }

          .width('100%')
          .scrollBar(BarState.Off)
          .scrollable(ScrollDirection.Horizontal)

          Column(){
            Row(){
              Text('全部课程')
                .fontSize(30)
              Text()
                .width('80%')
            }
            Column({ space: 5 }) {
              List(){
              ForEach(this.data3, (item3: Type3) => {
                ListItem() {
                  this.quanbu(item3)
                }
              })
                if(this.isloading){
                  ListItem(){
                    Row({space:10}){
                      Text().width('30%')
                      Text('加载中')
                      LoadingProgress().width(50).height(50)
                     }
                  }
                }
              }
              .scrollBar(BarState.Off)
              .onScrollIndex((start:number,end:number)=>{
                if(end==this.data3.length-1){
                  this.isloading=true
                  setTimeout(()=>{
                    this.isloading = false
                  },2000)
                }
              })
            }.height('80%')
          }
        }
      }
      }
      .scrollable(ScrollDirection.Vertical)
      .scrollBar(BarState.Off)
      .height('90%')


  }
    .padding('10')
    .width('100%')
    .height('100%')
  }
}