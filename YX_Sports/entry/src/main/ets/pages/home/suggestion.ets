import { router } from '@kit.ArkUI';

@Entry
@Component
struct suggestion {
  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;

  @State feedbackText: string = '';
  @State selectedTypes: boolean[] = [false, false, false, false];
  @State showImagePicker: boolean = false;
  @State showSuccessDialog: boolean = false;

  private feedbackTypes: string[] = ['功能建议', '程序BUG', '视频问题', '其它'];
//*********************************顶部********************************************//
  @Builder
  Top(){
    Row() {
      Image('/image/home/return.png')
        .width(24)
        .height(24)
        .onClick(() => {
         router.back()
        })
      Text('意见反馈')
        .fontSize(18)
        .fontWeight(500)
      Text().width(24)
    }
    .width('100%')
    .height(56)
    .justifyContent(FlexAlign.SpaceBetween)
    .alignItems(VerticalAlign.Center)
    .padding({ left: 16, right: 16 })

  }

  handleSubmit() {
    // 显示成功弹窗
    this.showSuccessDialog = true;

    // 2秒后关闭弹窗并返回上一页
    setTimeout(() => {
      this.showSuccessDialog = false;
      // 返回上一页逻辑

    }, 2000);
  }

  @Builder
  successDialog() {
    Column() {
      Column() {
        // 勾选图标
        Stack() {
          Circle()
            .width(50)
            .height(50)
            .fill(Color.White)

          Image('/image/home/gou.png')
            .width(30)
            .height(30)
            .fillColor('#4CAF50')
        }

        Text('反馈成功')
          .fontSize(16)
          .fontColor(Color.White)
          .margin({ top: 16 })
      }
      .width(140)
      .height(120)
      .backgroundColor('#333333')
      .borderRadius(12)
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('rgba(F,F,F,F.4)')
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
  }
//**********************************问题描述****************************************//
  @Builder
  questionDescribe(){
    Column({ space: 8 }) {
      Text('问题描述')
        .fontSize(16)
        .fontColor('#333333')
        .alignSelf(ItemAlign.Start)

      TextArea({ placeholder: '输入你的问题' })
        .width('100%')
        .height(120)
        .backgroundColor('#F5F5F5')
        .borderRadius(8)
        .padding(12)
        .fontSize(14)
        .onChange((value: string) => {
          this.feedbackText = value;
        })
    }
    .alignItems(HorizontalAlign.Start)
    .margin({ bottom: 24 })
  }
//**********************************上传图片***************************************//
  @Builder
  pictureSubmit(){
    Row(){
      Column({ space: 12 }) {
        Text('上传图片')
          .fontSize(16)
          .fontColor('#333333')
          .alignSelf(ItemAlign.Start)

        Row() {
          Column() {
            Text('+')
              .fontSize(24)
              .fontColor('#CCCCCC')
          }
          .width(60)
          .height(60)
          .backgroundColor('#F5F5F5')
          .borderRadius(8)
          .border({ width: 1, color: '#E0E0E0', style: BorderStyle.Dashed })
          .justifyContent(FlexAlign.Center)
          .onClick(() => {
            this.showImagePicker = true;
          })
        }
        .justifyContent(FlexAlign.Start)
      }
      .margin({ bottom: 24 })
    }
    .justifyContent(FlexAlign.Start)
    .width('100%')
  }
//***********************************反馈类型*******************************************//
  @Builder
  feedbackType(){
    Column({ space: 16 }) {
      Text('反馈类型')
        .fontSize(16)
        .fontColor('#333333')
        .alignSelf(ItemAlign.Start)

      Column({ space: 12 }) {
        ForEach(this.feedbackTypes, (type: string, index: number) => {
          Row() {
            Checkbox()
              .select(this.selectedTypes[index])
              .onChange((value: boolean) => {
                this.selectedTypes[index] = value;
              })
              .width(20)
              .height(20)

            Text(type)
              .fontSize(14)
              .fontColor('#333333')
              .margin({ left: 8 })
          }
          .width('100%')
          .alignItems(VerticalAlign.Center)
        })
      }
    }
    .alignItems(HorizontalAlign.Start)
    .margin({ bottom: 40 })

  }
  build() {
    Column() {
      // 头部导航
      this.Top()

      // 内容区域
      Column() {
        // 问题描述
        this.questionDescribe()

        // 上传图片
        this.pictureSubmit()


        // 反馈类型
        this.feedbackType()

        // 提交按钮
        Button('提交')
          .width('100%')
          .height(48)
          .backgroundColor('#CCCCCC')
          .fontColor('#FFFFFF')
          .fontSize(16)
          .borderRadius(24)
          .onClick(() => {
            this.handleSubmit();
          })

      }
      .padding({ left: 16, right: 16, top: 16 })
      .layoutWeight(1)

    }
    .width('100%')
    .height('100%')
    .backgroundColor('#FFFFFF')
    .padding({
      top: px2vp(this.topRectHeight),
      bottom: px2vp(this.bottomRectHeight)
    })
    .bindContentCover(this.showSuccessDialog, this.successDialog())
  }
}