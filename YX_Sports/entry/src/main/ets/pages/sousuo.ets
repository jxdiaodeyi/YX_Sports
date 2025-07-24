import { router } from '@kit.ArkUI'

interface Type1 {
  count:string
  img:Resource
  name:string
  time:number
  num:number
}

@Entry
@Component


struct Sousuo {
  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;
  datas:Type1[]=[
    {count:"1",img:$r('app.media.sousuo1'),name:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time:3,num:3},
    {count:"2",img:$r('app.media.sousuo1'),name:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time:3,num:3},
    {count:"3",img:$r('app.media.sousuo1'),name:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time:3,num:3},
    {count:"4",img:$r('app.media.sousuo1'),name:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time:3,num:3},
    {count:"5",img:$r('app.media.sousuo1'),name:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time:3,num:3},
    {count:"6",img:$r('app.media.sousuo1'),name:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time:3,num:3},
    {count:"7",img:$r('app.media.sousuo1'),name:'15分钟迷人肩颈背全套打造改善圆肩驼背' ,time:3,num:3}
  ]
  @Builder
  itemui(item:Type1){
    Column(){
      Row(){
        Text(item.count)
          .width(50)
          .height(50)
          .padding(15)
        Image(item.img).width(100)
          .onClick(()=>{
            router.pushUrl({url:"pages/class"})
          })
          .height(100)
          .borderRadius(12)
        Column(){
          Text(item.name).fontSize(15)
            .fontWeight(5)
            .width('70%')

          Text('k1初学者.'+item.time+'分钟'+item.num+'千卡').fontSize(10).padding(15)
        }
        .padding(15)
      }
    }
  }
  build() {
    Column({space:20}) {
      Row({ space: 15 }) {
        // 搜索图标
        Image($r('app.media.search')) // 替换为你的搜索图标资源
          .width(30)
          .height(30)
          .onClick(() => {
            // 点击跳转到搜索页面
            router.pushUrl({ url: 'pages/result' }) // 目标页面路径
          })


        // 输入框
        TextInput({ placeholder: '请输入关键词' })
          .type(InputType.Normal)
          .width('70%')
          .height(40)



        Text('取消')
          .fontSize(15)
          .onClick(() => {
            // 点击跳转到搜索页面
            router.replaceUrl({ url: 'pages/Index' }) // 目标页面路径
          })

      }
      .padding(15)
      .width('100%')
      .height(50)
      .borderRadius(25) // 圆角效果
      .backgroundColor('#40f5f5f5') // 背景色
      Scroll() {
        Column() {
          Column({ space: 15 }) {
            Row() {
              Text('历史搜索').fontSize(20)
              Image($r('app.media.shanchu')).width(20).height(20)
            }
            .width('100%')
            .justifyContent(FlexAlign.SpaceBetween)
            .padding(15)

            Text('减脂').fontSize(15).backgroundColor('#FFEEEE').borderRadius(15).height(25)
          }.width('100%').justifyContent(FlexAlign.Start)

          Column() {
            Text('热搜榜').fontSize(20).width('100%').padding(15)
            Row({ space: 10 }) {
              Text('快速瘦身攻略').fontSize(15).backgroundColor('#FFEEEE').borderRadius(15).height(25)
              Text('生理期减脂').fontSize(15).backgroundColor('#FFEEEE').borderRadius(15).height(25)
              Text('快速燃脂').fontSize(15).backgroundColor('#FFEEEE').borderRadius(15).height(25)
              Text('瘦小腿').fontSize(15).backgroundColor('#FFEEEE').borderRadius(15).height(25)
            }
          }.width('100%').justifyContent(FlexAlign.Start).padding(15)

          Column() {
            List() {
              ForEach(this.datas, (items: Type1) => {
                ListItem() {
                  this.itemui(items)
                }

              })
            }

          }.backgroundColor('#FFEDED')
          .borderRadius(15).padding(15).width('90%')

        }
      }
    }
    .padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) })
  }
}