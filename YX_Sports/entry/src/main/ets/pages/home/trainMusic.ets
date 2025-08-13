import { router } from '@kit.ArkUI';
import { musicItem } from '../../mod/home/musicType';

@Entry
@Component
struct TrainMusic {
  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;
  @State isOn: boolean = false
  @State currentSelectedIndex: number = -1; // 当前选中项的索引

  @State musicList: musicItem [] = [
    { title: 'Bright Future',img:'/img/check.png', isSelected: false },
    { title: 'Amdih in',img:'/img/check.png', isSelected: false },
    { title: 'Noduf foud' ,img:'/img/check.png', isSelected: false},
  ]
//*********************************顶部************************************************//
  @Builder
    Top(){
      Row() {
        Image('/image/home/return.png').width(40).height(40).onClick(()=>{
            router.back()
        })
        Text('训练音乐').fontSize(20).fontWeight(900)
        Text().width(40)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).borderWidth({
        bottom: 1
      })
      .padding(15)
  }
//**********************************音乐开关***********************************************//
  @Builder
  musicSwitch(){
    Row(){
      Text('训练背景音乐').fontSize(15).fontWeight(600)
      Toggle({ type: ToggleType.Switch, isOn: this.isOn })
        .onChange((isOn: boolean) => {
          this.isOn = isOn
          console.log('开关状态:', isOn)
        })
        .width(50).height(30)
    }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(15)
  }
//************************************音乐列表*********************************************//
  @Builder
  itemui(item: musicItem , index: number){
    Row(){
      Text(item.title).padding(15).fontSize(15).width('50%')
      if (this.currentSelectedIndex === index) {
        Image(item.img)
          .width(20)
          .height(20)
          .fillColor('#007AFF') // 选中时蓝色
      } // 根据状态切换颜色
    }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(15).onClick(()=>{
      this.currentSelectedIndex = index;

    })
}
  @Builder
  musicListItem(musicList:musicItem[]){
    List() {
      ForEach(musicList, (item: musicItem , index?: number)=> {
        ListItem() {
          this.itemui(item, index!) // 传递index参数 }
        }
      })
    }
    //.layoutWeight(1)
    .divider({ strokeWidth: 0.5, color: '#eee' })

    Row(){Text('下载更多音乐').fontSize(15).fontColor('#ffaea2a2')}.width('100%').justifyContent(FlexAlign.Start).padding(15)

    Button('添加更多音乐').onClick((event: ClickEvent) => { router.pushUrl({url:'pages/home/musicBank'})

    }).backgroundColor('#FFFFFF').fontColor('#000000').borderColor('#000000').borderWidth(1)


  }

  build() {
    Column() {

    this.Top()

    this.musicSwitch()

      Row(){Text('当前课程推荐音乐').fontSize(15).fontColor('#ffaea2a2')}.width('100%').justifyContent(FlexAlign.Start).padding(15)

      // 音乐列表
      this.musicListItem(this.musicList)
    } .padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) })
  }
}
