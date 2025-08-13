import { DialogAction, DialogHelper} from '@pura/harmony-dialog';
import { sharedTitle } from './title';

@Entry
@Component
struct ClearCache {
  @State photoCache: number = 12.2;
  @State viewCache: number = 17.9;


  @Builder
  clearItem(tex:string,cacheId:number){
    Row(){
      Text(tex)
        .fontSize(20)
        .margin({left:10})
      Row(){
        if(cacheId == 0){
          Text(this.photoCache.toString()+'M')
            .fontSize(16)
        }
        else {
          Text(this.viewCache.toString()+'M')
            .fontSize(16)
        }
        Image('/image/mine/rightBack.png').size({width:16,height:16})
      }
      .margin({right:10})
    }
    .width('100%')
    .height(60)
    .backgroundColor('#ffff')
    .justifyContent(FlexAlign.SpaceBetween)
    .alignItems(VerticalAlign.Center)
    .onClick(()=>{
      DialogHelper.showAlertDialog({
        title:"",
        content: "确定要清除缓存吗？",
        onAction: (action) => {
          if (action == DialogAction.SURE) {

            if(cacheId == 0)
              this.photoCache = 0
            else
              this.viewCache = 0

            DialogHelper.showToastTip({
              message: "操作成功",
              imageRes: $r('sys.media.ohos_ic_public_ok')
            })
          }
        }
      })
    })
  }

  build() {
    Column(){
      sharedTitle({title:'清除缓存',type:1}).margin({bottom:10})
      //photoCache
      this.clearItem("清除图片缓存",0)

      Image('/image/mine/bottomLine.png').size({width:'100%',height:0.3})

      //viewCache
     this.clearItem("清除视频缓存",1)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F5F5F5')
  }
}