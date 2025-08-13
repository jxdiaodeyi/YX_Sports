import { router } from '@kit.ArkUI';

interface Type{
  name:string,
  img:string,
  isDownloaded: boolean,
  isDownloading: boolean
}

@Entry
@Component
struct aerobic {
  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;
  @State datas:Type[]=[
    {name:'Bright Future' ,img:'/image/home/xaizai.png', isDownloaded: false, isDownloading: false},
    {name:'Amdih in' ,img:'/image/home/xaizai.png', isDownloaded: false, isDownloading: false},
    {name:'Noduf foud' ,img:'/image/home/xaizai.png', isDownloaded: false, isDownloading: false},
    {name:'uptown girl' ,img:'/image/home/xaizai.png', isDownloaded: false, isDownloading: false},
    {name:'Words I Couldn\'t Say' ,img:'/image/home/xaizai.png', isDownloaded: false, isDownloading: false},
    {name:'Every Breath You Take' ,img:'/image/home/xaizai.png', isDownloaded: false, isDownloading: false},
  ]
  @State showDownloadingDialog: boolean = false;
  @State showSuccessDialog: boolean = false;
  @State currentDownloadIndex: number = -1;

  handleDownload(index: number) {
    if (this.datas[index].isDownloaded || this.datas[index].isDownloading) {
      return;
    }

    this.currentDownloadIndex = index;
    setTimeout(()=>{
      let newData = this.datas.slice();
      newData[index].isDownloading = true;
      newData[index].img = '/image/home/loading.png';
      this.datas = newData;

      setTimeout(() => {
        this.showDownloadingDialog = false;
      }, 2000);
    })


    // 模拟下载过程 - 延长到5秒
    setTimeout(() => {
      let updatedData = this.datas.slice();
      updatedData[index].isDownloading = false;
      updatedData[index].isDownloaded = true;
      updatedData[index].img = "/image/home/gou.png";
      this.datas = updatedData;

      // 隐藏下载中弹窗，显示成功弹窗
      this.showDownloadingDialog = false;
      this.showSuccessDialog = true;

      // 成功弹窗2秒后自动消失
      setTimeout(() => {
        this.showSuccessDialog = false;
      }, 2000);
    }, 3000);
  }
//********************************顶部*************************************************//
  @Builder
  Top(){
    Row() {
      Image("/image/home/return.png").width(40).height(40).onClick(()=>{
        router.back()
      })
      Text('有氧').fontSize(20).fontWeight(900)
      Text().width(40)
    }.width('100%').justifyContent(FlexAlign.SpaceBetween).borderWidth({
      bottom: 1
    })
  }
//********************************添加列表*********************************************//
  @Builder
  itemui(item:Type, index: number){
    Column({space:1}){
      Row(){
        Text(item.name).padding(15).fontSize(15).layoutWeight(1)
        Image(item.img)
          .width(20)
          .height(20)
          .onClick(() => {
            this.handleDownload(index);
          })
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(15)
    }
  }


  @Builder
  downloadingDialog() {
    Column() {
      Column() {
        LoadingProgress()
          .width(40)
          .height(40)
          .color(Color.White)
        Text('下载中')
          .fontSize(14)
          .fontColor(Color.White)
          .margin({ top: 12 })
      }
      .width(100)
      .height(100)
      .backgroundColor(Color.Black)
      .borderRadius(8)
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('rgba(0,0,0,0.3)')
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
  }

  @Builder
  successDialog() {
    Column() {
      Column() {
        Image('/image/mine/yes.png')
          .width(40)
          .height(40)
          .fillColor(Color.White)
        Text('下载成功')
          .fontSize(14)
          .fontColor(Color.White)
          .margin({ top: 12 })
      }
      .width(100)
      .height(100)
      .backgroundColor(Color.Black)
      .borderRadius(8)
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('rgba(0,0,0,0.3)')
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
  }
//****************************************下载列表******************************************//
  @Builder
  musicList(){
    List() {
      ForEach(this.datas,(item: Type, index: number)=> {
        ListItem() {
          this.itemui(item, index)
        }
      })
    }
    .divider({ strokeWidth: 0.5, color: '#eee' })
  }
  build() {
    Column(){
      this.Top()

      this.musicList()

    }
    .padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) })
    .bindContentCover(this.showDownloadingDialog, this.downloadingDialog())
    .bindContentCover(this.showSuccessDialog, this.successDialog())
  }
}