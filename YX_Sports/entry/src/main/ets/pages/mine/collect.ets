import { sharedTitle } from './title';

@Entry
@Component
struct Collect {
  @State content : string = ""

  build() {
    Column(){
      sharedTitle({title:'我的收藏',type:0})
      Image('/image/mine/bottomLine.png').size({width:'100%',height:0.3})
      Row(){
        Image('/image/mine/collected.png')
          .size({width:136,height:136})
          .borderRadius(15)
          .margin({top:10,left:10})
        Column(){
          Text("15分钟迷人肩颈背全套打造改善圆肩驼背")
            .fontSize(15)
          Text("k1初学·3分钟·70千卡")
            .fontSize(10)
        }
      }
    }
  }
}