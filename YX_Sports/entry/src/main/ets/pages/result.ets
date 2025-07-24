import { router } from '@kit.ArkUI'

interface Type1 {
  img:Resource
  name:string
  time:number
  num:number
}
//推荐课程
@Entry
@Component
struct Result {
  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;

  datas:Type1[]=[
    {img:$r('app.media.result1'),name:'瘦小腹，四个人动作' ,time:3,num:66},
    {img:$r('app.media.result2'),name:'平小腹，练翘臀' ,time:3,num:66},
    {img:$r('app.media.result3'),name:'平板支撑初级教程' ,time:3,num:66},
    {img:$r('app.media.result4'),name:'HIT腹部燃脂' ,time:3,num:66},
    {img:$r('app.media.result5'),name:'HIT腹部撕裂者' ,time:3,num:66},
    {img:$r('app.media.result6'),name:'马甲线养成' ,time:3,num:66},
  ]
  @Builder
  itemui(item:Type1){
    Column({space:1}){

        Image(item.img).width(180)
          .height(250)
          .borderRadius(12)
        Column(){
          Text(item.name).fontSize(15)
            .fontWeight(5)
            .width('80%')

          Text('k1初学者.'+item.time+'分钟'+item.num+'千卡').fontSize(10).padding(5)
        }
        .padding(15)

    }

  }

  @State isloading: boolean = false; // 控制加载提示的显示



  build() {
    Column() {
      Row() {
        Image($r('app.media.return')).width(50).height(50)
      }.width('100%')
      .borderWidth({
        bottom: 1
      })
      .onClick(() => {
        // 点击跳转到搜索页面
        router.replaceUrl({ url: 'pages/sousuo' }) // 目标页面路径
      })
Scroll(){
      Column() {
        Column() {
          Row() {
            Text('腹部').fontSize(25)
          }.width('100%')

          Row() {
            Text('12课程').fontSize(15)
          }.width('100%')
        }.width('100%').justifyContent(FlexAlign.Start).padding(15)

        Column() {
          Grid() {
            ForEach(this.datas, (item: Type1) => {
              GridItem() {
                this.itemui(item)
              }
            })
            if (this.isloading) {
              GridItem() {
                Row({ space: 10 }) {
                  // Text().width('20%')
                  Text('加载中')
                  LoadingProgress()
                    .width(50)
                    .height(50)
                }
                .width('100%')
                .justifyContent(FlexAlign.Center)
              }
              .columnStart(0)
              .columnEnd(1) // 跨两列显示
            }

          }
          .columnsTemplate('1fr 1fr') // 设置为两列
          .columnsGap(10) // 列间距
          .rowsGap(10) // 行间距
          .scrollBar(BarState.Off)
          .onScrollIndex((start: number, end: number) => {
            // 当滚动到最后一项时显示加载提示
            if (end >= this.datas.length - 1 && !this.isloading) {
              this.isloading = true;
              // 2秒后自动隐藏加载提示
              setTimeout(() => {
                this.isloading = false;
              }, 2000);
            }
          })

        }
        .borderRadius(15)
        .padding(15)
        .width('100%')
        .height('90%')




      }
    }
    }
    .padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) })

  }
}