import { router } from '@kit.ArkUI';

interface Type1 {
  img:Resource
  name:string
  num:number
}

@Entry
@Component
struct MusicBank {
  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;

  datas:Type1[]=[
    {img:$r('app.media.musicBrank'),name:'有氧 （6首）' ,num:66},
    {img:$r('app.media.musicBrank'),name:'运动 （6首）' ,num:66},
    {img:$r('app.media.musicBrank'),name:'热情 （6首）' ,num:66},
    {img:$r('app.media.musicBrank'),name:'舒缓 （6首）' ,num:66},
    {img:$r('app.media.musicBrank'),name:'热情 （6首）' ,num:66},
    {img:$r('app.media.musicBrank'),name:'舒缓 （6首）' ,num:66},

  ]
  @Builder
  itemui(item:Type1){
    Column({space:1}){

      Image(item.img).width(180)
        .height(250)
        .borderRadius(12)
        // .onClick(()=>{
        //   router.replaceUrl({url:'pages/musicBank'})
        // })
      Column(){
        Row(){
          Text(item.name).fontSize(15)
            .fontWeight(5)

        }.width('100%').justifyContent(FlexAlign.Start)

       Row(){
         Text('已下载'+item.num+'首').padding(5).fontSize(15).fontColor('#ffaea2a2')
       }.width('100%').justifyContent(FlexAlign.Start)
      }
      .padding(15)

    }.onClick(()=>{
      router.replaceUrl({url:'pages/youyang'})
    })


  }

  @State isloading: boolean = false;
  build() {
    Column(){
      Row() {
        Image($r('app.media.return')).width(40).height(40).onClick(()=>{
          router.replace({url:'pages/trainMusic'})

        })
        Text('音乐库').fontSize(20).fontWeight(900)
        Text().width(40)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).borderWidth({
        bottom: 1
      })
      .padding(15)

      Column(){
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
        }}


    }.padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) }).padding(15)

  }
}