import { router, Router, TabBarPosition } from '@kit.ArkUI';
import { Mine } from './mine';

@Entry
@Component
struct Index {
  @State curIndex : number = 0;
  @State phoneNumber : string = ''

  @Builder
  navBar(selImg:string, img:string, tex:string, index:number){
    Column({space:5}){
      Image(index == this.curIndex ? selImg : img)
        .size({width:20, height: 20})
      Text(tex)
        .fontColor(index == this.curIndex ? "#6C55E4" : "#CCCCCC")
      .fontSize(10)
    }
  }

  onPageShow(): void {
    const params = this.getUIContext().getRouter().getParams() as Record<string,string>
    if(params){
      this.phoneNumber = params.phoneNumber
    }

  }
  build() {
    Column(){
      Tabs({barPosition:BarPosition.End}){
        TabContent(){
          Text("首页内容")
        }.tabBar(this.navBar('/image/mine/home.png','/image/indexImage/img_0.png',"首页",0))
        TabContent(){
          Text("计划内容")
        }.tabBar(this.navBar('/image/mine/plan.png','/image/indexImage/img_1.png',"计划",1))
        TabContent(){
          Text("训练内容")
        }.tabBar(this.navBar('/image/mine/practice.png','/image/indexImage/img_2.png',"训练",2))
        TabContent(){
          Mine({phoneNumber:this.phoneNumber})
        }.tabBar(this.navBar('/image/mine/mine.png','/image/indexImage/img_3.png',"我的",3))
      }
      .onChange((index : number) => {
          this.curIndex = index;
      })
    }
    .height('100%')
    .width('100%')
  }
}