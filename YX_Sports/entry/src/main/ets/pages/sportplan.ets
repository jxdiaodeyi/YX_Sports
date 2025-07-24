import { router } from '@kit.ArkUI';
import { DialogHelper, SpinType } from '@pura/harmony-dialog';

@Entry
@Component
struct Sportplan {
  @State flag:number=0
  @State progressValue: number = 1;
  @State duration: number = 1;
  build() {
    Column(){
      Text().height(20)
      Row(){
        Image($r('app.media.return'))
          .width(20)
          .height(20)
          .onClick(()=>{
            router.back()
          })
        Text('修改训练计划')
          .fontSize(25)
          .fontWeight(600)
        Text('保存')
          .fontColor('#6249E3')
          .fontSize(20)
          .onClick(()=>{
              // DialogHelper.showLoadingDialog({
              //   loadType:SpinType.spinC,
              //   loadColor:Color.White,
              //   loadSize:50,
              //   backgroundColor:'#bb000000',
              //   content:"重新制定计划中",
              //   fontSize:30,
              // })
            // DialogHelper.showLoadingDialog({
            //   loadType: SpinType.spinP,
            //   loadColor: Color.White,
            //   loadSize: 70,
            //   backgroundColor: '#BB000000',
            //   content: "加载中…",
            //   fontSize: 18,
            //   padding: { top: 30, right: 50, bottom: 30, left: 50 },
            //   autoCancel: true
            // })
            DialogHelper.showToastTip({
              message: "保存成功",
              imageRes: $r('sys.media.ohos_ic_public_ok')
            })
            router.back()
            //进度条加载弹框
            //DialogHelper.showLoadingProgress({ progress: this.progress })
          })
      }
      .padding(10)
      .justifyContent(FlexAlign.SpaceBetween)
      .width('100%')
      Row() {
        Text('改变训练计划')
          .fontSize(25)
          .fontWeight(600)
        Image($r('app.media.reflash'))
          .width(40)
          .height(40)
          .onClick(()=>{
            this.progressValue=1
            this.duration=1
          })

      }
      .justifyContent(FlexAlign.SpaceBetween)
      .width('100%')
      .height(80)
      .border({ width: { top: 1, bottom: 1, left: 0, right: 0 },color:{top:'#F2F4F6',bottom:'#F2F4F6'}})
      Column() {
        Text('你的目标')
          .width("100%")
          .fontSize(25)
          .fontWeight(600)
          .textAlign(TextAlign.Start)
          .margin(20)
        Row(){
          Text('减肥')
            .fontSize(25)
            .fontWeight(600)
            .width(120)
            .height(90)
            .borderRadius(15)
            .textAlign(TextAlign.Center)
            .fontColor(this.flag==0?'#ffffff':'#8FC4CE')
            .backgroundColor(this.flag==0?'#6249E3':'#FFFFFF')
            .onClick(()=>{
              this.flag=0
            })
          Text('塑性')
            .fontSize(25)
            .fontWeight(600)
            .width(120)
            .height(90)
            .borderRadius(15)
            .textAlign(TextAlign.Center)
            .fontColor(this.flag==1?'#ffffff':'#8FC4CE')
            .backgroundColor(this.flag==1?'#6249E3':'#FFFFFF')
            .onClick(()=>{
              this.flag=1
            })
          Text('增肌')
            .fontSize(25)
            .fontWeight(600)
            .width(120)
            .height(90)
            .borderRadius(15)
            .textAlign(TextAlign.Center)
            .fontColor(this.flag==2?'#ffffff':'#8FC4CE')
            .backgroundColor(this.flag==2?'#6249E3':'#FFFFFF')
            .onClick(()=>{
              this.flag=2
            })
        }
        .width('100%')
        .height(100)
        .border({ width: { top: 0, bottom: 1, left: 0, right: 0 },color:{top:'#F2F4F6',bottom:'#F2F4F6'}})
        .justifyContent(FlexAlign.SpaceAround)
        Column(){
          Text('每周锻炼天数')
            .width("100%")
            .fontSize(25)
            .fontWeight(600)
            .textAlign(TextAlign.Start)
          Text(this.progressValue+'天')
            .width("100%")
            .fontSize(25)
            .fontWeight(600)
            .textAlign(TextAlign.Center)
          Slider({
            min: 1,
            max:7,
            value: this.progressValue,
            step: 1,
            style: SliderStyle.OutSet
          })
            .blockColor('#1E90FF') // 滑块颜色
            .selectedColor('#1E90FF') // 已选择部分颜色
            .trackColor('#E0E0E0') // 轨道背景颜色
            .width('100%')
            .onChange((value: number) => {
              this.progressValue = value; // 更新进度值
            })
        }
        .margin(30)
        .width('100%')
        .height(150)
        .border({ width: { top: 0, bottom: 1, left: 0, right: 0 },color:{top:'#F2F4F6',bottom:'#F2F4F6'}})
        .justifyContent(FlexAlign.SpaceAround)
        Column(){
          Text('每次锻炼时长')
            .width("100%")
            .fontSize(25)
            .fontWeight(600)
            .textAlign(TextAlign.Start)
          Text(this.duration+'分钟')
            .width("100%")
            .fontSize(25)
            .fontWeight(600)
            .textAlign(TextAlign.Center)
          Slider({
            min: 10,
            max: 120,
            value: this.duration,
            step: 1,
            style: SliderStyle.OutSet
          })
            .blockColor('#1E90FF') // 滑块颜色
            .selectedColor('#1E90FF') // 已选择部分颜色
            .trackColor('#E0E0E0') // 轨道背景颜色
            .width('100%')
            .onChange((value: number) => {
              this.duration = value; // 更新进度值
            })
        }
        .width('100%')
        .height(150)
        .border({ width: { top: 0, bottom: 1, left: 0, right: 0 },color:{top:'#F2F4F6',bottom:'#F2F4F6'}})
        .justifyContent(FlexAlign.SpaceAround)
      }

    }
    .width('100%')
    .height('100%')
  }
}