import { promptAction, router, TabBarPosition } from '@kit.ArkUI';
import { home } from './home/home';
import { Plan } from './plan/plan';

import { PracticePage } from './practice/PracticePage';
import { vipplan } from './plan/vipplan';
import { Mine } from './mine/mine';


interface userInfoType{
  token:string,
  userId:number,
  telephone:string,
  vip:number
}

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  @State curIndex: number = 0;
  @State change:boolean=false
  @State token:string=(this.getUIContext().getRouter().getParams()as userInfoType).token
  @State userId:number=(this.getUIContext().getRouter().getParams()as userInfoType).userId
  @State telephone:string=(this.getUIContext().getRouter().getParams()as userInfoType).telephone
  @State vip:number=(this.getUIContext().getRouter().getParams()as userInfoType).vip
  private tokenFaker:string=this.token
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


  build() {
    Column(){
      Tabs({barPosition:BarPosition.End}){
        TabContent(){
          home({token:this.token,userId:this.userId,vip:this.vip})
        }.tabBar(this.navBar($r("app.media.home"),$r("app.media.img_0"),"首页",0))
        TabContent(){
          if(this.vip){
            Plan({token:this.token,userId:this.userId})
          }else {

            vipplan({token:this.token,userId:this.userId})//{token:this.token,userId:this.userId,vip:this.vip}
          }
        }.tabBar(this.navBar($r("app.media.plan"),$r("app.media.img_1"),"计划",1))
        TabContent(){
          PracticePage({token:this.token,userId:this.userId})
        }.tabBar(this.navBar($r("app.media.practice"),$r("app.media.img_2"),"训练",2))
        TabContent(){
          Mine({token:this.token,userId:this.userId,vip:this.vip})
        }.tabBar(this.navBar($r("app.media.mine"),$r("app.media.img_3"),"我的",3))
      }
      .onChange((index : number) => {this.curIndex = index;})
    }
    .height('100%')
    .width('100%')
  }
}