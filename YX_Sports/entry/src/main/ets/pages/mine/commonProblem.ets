import { sharedTitle } from './title';

interface commonProblemType{
  p : string,
  id : number,
}

@Entry
@Component
struct CommonProblem {
  @State isOn : boolean[] = [false,false,false,false]
  @State cnt : number[] = [0,0,0,0]
  @State solutions : string[][] = [
    ["1.检查网络环境是否良好","2.可能是会员解锁内容","3.建议清除部分缓存"],
    ["1.十分钟内未到账是正常的"],
    ["1.可以降低画质观看","2.可能同时观看人数过多，可以稍后再看，或者缓存起来"],
    ["1.刷新界面即可","2.检查是否上传"]
  ]

  problems :  commonProblemType[] = [
    {p:"为什么视频加载不出来",id:0},
    {p:"为什么会员没有到账",id:1},
    {p:"为什么视频总是卡顿",id:2},
    {p:"为什么头像改了之后没变",id:3}
  ]

  @Builder
  problemItem(t: commonProblemType){
    Row(){
      Text(t.p)
        .margin({left:10})
      Image(this.isOn[t.id] == true ? '/image/commonImage/upPlay.png' : '/image/commonImage/downPlay.png').size({width:15,height:15}).margin({right:10})
    }
    .width('100%')
    .height(50)
    .justifyContent(FlexAlign.SpaceBetween)
    .alignItems(VerticalAlign.Center)
    .backgroundColor('#ffff')
    .onClick(()=>{

      this.isOn[t.id] = ++this.cnt[t.id] % 2 == 0;

      for(let i = 0; i < 6; i++)
        if(i != t.id)
          this.isOn[i] = false;

    })
  }

  build() {
    Column(){
      sharedTitle({title:'常见问题'})
      ForEach(this.problems,(item: commonProblemType)=>{
        Image('/image/mine/bottomLine.png').size({width:'100%',height:0.3})
        this.problemItem(item)
        if(this.isOn[item.id]){
          List(){
            ForEach(this.solutions[item.id],(t:string)=>{
              ListItem(){
                Text(t)
                  .fontSize(15)
                  .margin({left:10})
              }
              .height(100/this.solutions[item.id].length)

            })
          }
          .width('100%')
          .animation({
            duration:1000,
            curve:Curve.Linear,
            delay:0,
            playMode:PlayMode.Normal,
            iterations:1,
          })
          .height(100)
        }
      })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F5F5F5')
  }
}