import { promptAction, PromptAction, router} from '@kit.ArkUI';
import { http } from '@kit.NetworkKit';

import address from '../../../resources/rawfile/IPaddress.json'
import loginNetWorkType from '../../mod/login/loginType';

@Entry
@Component

struct login {

  @State phoneNumber: string = ''
  @State password: string = ''
  private uiContext: UIContext = this.getUIContext();
  private promptAction: PromptAction = this.uiContext.getPromptAction();
  @State showPrivacyDialog: boolean = true // 保留原有状态控制
  @State vip:number=0
  //*******************************标题*******************************//
  @Builder
  title(){
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
  }
  //*******************************登录*******************************//
  @Builder
  loginCompoent(){
    TextInput({ placeholder: "请输入手机号", text: $$this.phoneNumber })
      .type(InputType.Number)
      .backgroundColor('#FFFFFF')
      .width('80%')
      .padding(15)
      .borderRadius(15)

      .margin({bottom:10})
    TextInput({ placeholder: "请输入密码", text: $$this.password })
      .type(InputType.Number)
      .backgroundColor('#FFFFFF')
      .width('80%')
      .padding(15)
      .borderRadius(15)

    Button('登录')
      .width('80%')
      .height(40)
      .margin({ top: 20 })
      .fontColor('#000000')
      .backgroundColor('#FFFFFF')
      .onClick(()=>{
        this.login();
      })

    Text().height(180)

    Column() {
      Row() {
        Text('其他登录方式')
          .fontSize(15)
      }
      .margin({bottom:10})

      Row({ space: 15 }) {
        Image('image/login_register/wechat.png').width(30).height(30)
        Image('image/login_register/qq.png').width(30).height(30)
        Image('image/login_register/weibo.png').width(30).height(30)
        Image('image/login_register/register.png').width(30).height(30).onClick(()=>{
          router.pushUrl({url:"pages/login_register/register"})
        })

      }
      .justifyContent(FlexAlign.SpaceBetween)
      .width("60%")
    }

    Text().height(30)
    Text('登录即表示您已同意《用户协议》和《隐私政策》').fontSize(15).onClick(()=>{router.pushUrl({url:"pages/login_register/PrivatePoliticPage"})})
  }

  async login() {
    if (this.phoneNumber.trim().length <= 0) {
      promptAction.showToast({
        message: "手机号不能为空"
      });
    } else if (this.password.trim().length <= 0) {
      promptAction.showToast({
        message: "密码不能为空"
      });
    } else {
      let httpRequest = http.createHttp();
      let url = address.IP+"/login";
      try {
        let response = await httpRequest.request(url, {
          method: http.RequestMethod.POST,
          extraData: {
            telephone: this.phoneNumber,
            password: this.password
          },
          header: {
            "Content-Type": "application/json"
          }
        });
        let result = JSON.parse(response.result as string) as loginNetWorkType;
        if (result.code === 200) {
          if(result.data.isNew===0) {
            router.replaceUrl({
              url: "pages/guild/doc1",
              params: {
                token: result.token,
                userId: result.data.userId,
                telephone: this.phoneNumber,
                vip: result.data.vip
              }
            });
          }else{
            router.replaceUrl({
              url: "pages/Index",
              params: {
                token: result.token,
                userId: result.data.userId,
                telephone: this.phoneNumber,
                vip: result.data.vip
              }
            });
          }
        } else {
          promptAction.showToast({ message: "账号或密码错误，登录失败！" });
        }
      } catch (error) {
        promptAction.showToast({ message: "网路错误", });
      }
    }
  }
  //*******************************bulid*******************************//
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
          Text().width("80%")
        }

        Text().height(100)

        this.title()

       this.loginCompoent()


      }

      .backgroundImage('image/login_register/man.jpg')
      .backgroundImageSize(ImageSize.Cover)
      .width('100%')
      .height('100%')

    }
  }

}
