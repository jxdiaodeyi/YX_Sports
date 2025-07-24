import { router } from '@kit.ArkUI';

interface MusicItem {
  title: string;
  img:Resource;
  isSelected?: boolean;
}

@Entry
@Component
struct TrainMusic {
  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;
  @State isOn: boolean = false
  @State currentSelectedIndex: number = -1; // 当前选中项的索引

  @State musicList: MusicItem[] = [
    { title: 'Bright Future',img:$r('app.media.gou'), isSelected: false },
    { title: 'Amdih in',img:$r('app.media.gou'), isSelected: false },
    { title: 'Noduf foud' ,img:$r('app.media.gou'), isSelected: false},
  ]
@Builder
itemui(item: MusicItem, index: number){
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

  build() {
    Column() {

    Row() {
      Image($r('app.media.return')).width(40).height(40).onClick(()=>{
        router.back()
      })
      Text('训练音乐').fontSize(20).fontWeight(900)
      Text().width(40)
    }.width('100%').justifyContent(FlexAlign.SpaceBetween).borderWidth({
      bottom: 1
    })
    .padding(15)

      Row(){
      Text('训练背景音乐').fontSize(15).fontWeight(600)
        Toggle({ type: ToggleType.Switch, isOn: this.isOn })
          .onChange((isOn: boolean) => {
            this.isOn = isOn
            console.log('开关状态:', isOn)
          })
          .width(50).height(30)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(15)

      Row(){Text('当前课程推荐音乐').fontSize(15).fontColor('#ffaea2a2')}.width('100%').justifyContent(FlexAlign.Start).padding(15)

      // 音乐列表
      List() {
        ForEach(this.musicList, (item: MusicItem, index?: number)=> {
          ListItem() {
            this.itemui(item, index!) // 传递index参数 }
          }
      })
      }
      //.layoutWeight(1)
      .divider({ strokeWidth: 0.5, color: '#eee' })

      Row(){Text('下载更多音乐').fontSize(15).fontColor('#ffaea2a2')}.width('100%').justifyContent(FlexAlign.Start).padding(15)

      Button('添加更多音乐').onClick((event: ClickEvent) => { router.pushUrl({url:'pages/musicBank'})
        
      }).backgroundColor('#FFFFFF').fontColor('#000000').borderColor('#000000').borderWidth(1)

    } .padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) })
  }
}
