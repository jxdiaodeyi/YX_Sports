import { PromptAction, router} from '@kit.ArkUI';


@Entry
@Component

struct Start {
  @State buttonText: string = '获取验证码'
  @State num: number = 1
  @State buttontexting: string = '输入电话'
  @State buttontexted: string = '输入验证码'
  private uiContext: UIContext = this.getUIContext();
  private promptAction: PromptAction = this.uiContext.getPromptAction();
  @State showPrivacyDialog: boolean = true // 保留原有状态控制

  aboutToAppear() { // 添加生命周期函数
    this.showSystemPrivacyDialog()
  }

  // 新增方法：显示系统对话框
  showSystemPrivacyDialog() {
    try {
      this.promptAction.showDialog({
        title: '隐私政策',
        message: '隐私保护政策\n' +
          '\n' +
          '1.为了便于您了解您在使用我们的服务时,我们需要收集的信息类型与用途,我们将结合具体服务向您逐一说明。\n' +
          '\n' +
          '2.为完成创建账号，您需提供手机号码，用于账号免密登录或短信验证注册。用户注册完成后，会默认使用您的手机号码作为的用户名。如果不同意，将无法完成注册', // 这里放入您的隐私政策内容
        buttons: [
          {
            text: '不同意并退出',
            color: '#000000'
          },
          {
            text: '同意并继续',
            color: '#000000'
          }
        ]
      }, (err, data) => {
        if (err) {
          console.error('showDialog err: ' + err)
          return
        }
        if (data.index === 0) { // 点击了"不同意并退出"
          // 这里可以添加退出应用的逻辑
        } else { // 点击了"同意并继续"
          this.showPrivacyDialog = false // 关闭自定义弹窗（如果同时使用）
        }
      })
    } catch (error) {
      console.error('showDialog error: ' + error)
    }
  }

  build() {
    Stack() {

      Column() {
        Text().height(30)
        Row() {
          Image($r('app.media.return'))
            .width(50)
            .height(50)
          Text().width("80%")
        }

        Text().height(100)

        Row() {
          Column() {
            Text('悦享健身').fontSize(50).fontColor('#FFFFFF')
            Text('爱生活 爱自己').fontSize(25).fontColor('#FFFFFF')
          }
        }
        .width('100%')
        .justifyContent(FlexAlign.Start)
        .padding(15)

        Text().height(50)

        Row() {
          Text('未注册手机验证后即完成注册')
            .fontColor('#000000')
            .fontSize(20)
            .backgroundColor('FF867474')
            .borderRadius(8)
          Text().width('20%')
        }.padding(15)

        TextInput({ placeholder: this.buttontexting })
          .type(InputType.Number)
          .backgroundColor('#FFFFFF')
          .width('80%')
          .padding(15)
          .borderRadius(15)
          .onChange((value: string) => {
            this.buttontexting = value
          })

        Button(this.buttonText)
          .width('80%')
          .height(40)
          .margin({ top: 20 })
          .fontColor('#000000')
          .backgroundColor('#FFFFFF')
          .onClick(() => {
            if (this.num == 1) {
              this.num++
              this.promptAction.showToast({
                message: '已发送验证码',
                duration: 2000,
              })
              this.buttonText = '登录'
              this.buttontexting = this.buttontexted

            }
             else if(this.num == 2){
              router.replaceUrl({url:'pages/doc1'})
            }
          })

        Text().height(200)
        Column() {
          Row() {
            Text('其他登录方式')
              .fontSize(15)
          }

          Row({ space: 15 }) {
            Image($r('app.media.wechat')).width(30).height(30)
            Image($r('app.media.qq')).width(30).height(30)
            Image($r('app.media.weibo')).width(30).height(30)

          }
        }

        Text().height(30)
        Text('登录即表示您已同意《用户协议》和《隐私政策》').fontSize(15).onClick(()=>{router.pushUrl({url:"pages/PrivatePoliticPage"})})
      }

      .backgroundImage($r('app.media.qidong'))
      .backgroundImageSize(ImageSize.Cover)
      .width('100%')
      .height('100%')

    }
  }
}
