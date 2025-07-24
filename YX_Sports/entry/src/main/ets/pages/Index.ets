import { router, TabBarPosition } from '@kit.ArkUI';
import { Home } from './home';
import { mine } from './mine';
import { Plan } from './plan';
import { Practice } from './PracticePage';
import { vip } from './vip';
import { SubscriptionPlan } from './vipplan';



@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  @State curIndex: number = 0;
  @State change:boolean=false

  @Builder
  navBar(selImg:Resource, img:Resource, tex:string, index:number){
    Column({space:5}){
      Image(index == this.curIndex ? selImg : img)
        .size({width:20, height: 20})
      Text(tex)
        .fontColor(index == this.curIndex ? "#6C55E4" : "#CCCCCC")
      .fontSize(10)
    }
  }

  aboutToAppear():boolean {
    const params = router.getParams()as vip | undefined
    if (params) {
      this.change=params.changes
    }
    return this.change
  }


  build() {
    Column(){
      Tabs({barPosition:BarPosition.End}){
        TabContent(){
          Home()
        }.tabBar(this.navBar($r("app.media.home"),$r("app.media.img_0"),"首页",0))
        TabContent(){
          if(this.aboutToAppear()){
            Plan()
          }else {
            SubscriptionPlan()
          }
        }.tabBar(this.navBar($r("app.media.plan"),$r("app.media.img_1"),"计划",1))
        TabContent(){
          Practice()
        }.tabBar(this.navBar($r("app.media.practice"),$r("app.media.img_2"),"训练",2))
        TabContent(){
          mine()
        }.tabBar(this.navBar($r("app.media.mine"),$r("app.media.img_3"),"我的",3))
      }
      .onChange((index : number) => {this.curIndex = index;})
    }
    .height('100%')
    .width('100%')
  }
}