import { http } from '@kit.NetworkKit';
import { promptAction, router } from '@kit.ArkUI';
import address from '../../../resources/rawfile/IPaddress.json'
import registerNetWorkType from '../../mod/register/registerType';

@Entry
@Component
struct ZhucePage {
  @State password: string = '';
  @State telephone: string = '';
  @State firmPassword: string = '';

//*******************************标题*******************************//
  @Builder
  title(){
  Row() {
    Row() {
      Text("<")
        .fontSize(30)
        .fontColor(Color.White)
      Text("返回")
        .fontSize(20)
        .fontColor(Color.White)
    }
    .onClick(()=>{
      router.back()
    })
    Text().width(80)
    Text("账号注册")
      .fontSize(20)
      .fontColor(Color.White)
      .fontWeight(800)
  }
  .backgroundColor("#ff4174d7")
  .width("100%")
  .height(45)
  .justifyContent(FlexAlign.Start)
}

  //*******************************注册*******************************//
  @Builder
  register(){
    Column() {
      Row() {
        Text("手机号:")
          .textAlign(TextAlign.Start)
          .width(80)
          .padding({left:10})
        TextInput({ placeholder: "请输入手机号", text: $$this.telephone })
          .placeholderFont({
            size: 12,
          })
          .layoutWeight(1)
          .borderRadius(10)
          .backgroundColor("#ffffff")
      }
      .backgroundColor("#ffffff")
      .width("95%")
      .height(50)
      .borderWidth(0.7)
      .borderColor("#ffc8cfee")
      .borderRadius(10)
      .linearGradient({
        direction:GradientDirection.RightTop,
        colors:[[0xE5FAF9,0],[0xF8F6F5,0.5]]
      })
      .margin({top:10,bottom:10})

      Row({ space: 10 }) {
        Text("密码:")
          .textAlign(TextAlign.Start)
          .width(70)
          .padding({left:10})
        TextInput({ placeholder: "请输入密码", text: $$this.password })
          .type(InputType.Password)
          .placeholderFont({
            size: 12,
          })
          .layoutWeight(1)
          .borderRadius(10)
          .backgroundColor("#ffffff")
      }
      .backgroundColor("#ffffff")
      .width("95%")
      .height(50)
      .borderWidth(0.7)
      .borderColor("#ffc8cfee")
      .borderRadius(10)
      .linearGradient({
        direction:GradientDirection.RightTop,
        colors:[[0xE5FAF9,0],[0xF8F6F5,0.5]]
      })
      .margin({bottom:10})

      Row({ space: 10 }) {
        Text("确认密码:")
          .textAlign(TextAlign.Start)
          .width(80)
          .padding({left:10})
        TextInput({ placeholder: "请确认密码", text: $$this.firmPassword })
          .type(InputType.Password)
          .padding({ left: 5, right: 5 })
          .placeholderFont({
            size: 12,
          })
          .layoutWeight(1)
          .borderRadius(10)
          .backgroundColor("#ffffff")
      }
      .backgroundColor("#ffffff")
      .width("95%")
      .height(50)
      .borderWidth(0.7)
      .borderColor("#ffc8cfee")
      .borderRadius(10)
      .linearGradient({
        direction:GradientDirection.RightTop,
        colors:[[0xE5FAF9,0],[0xF8F6F5,0.5]]
      })
      .margin({bottom:10})

    }
    //.backgroundColor("#ffffff")
    .width("100%")
    .height(300)

    Button("保存")
      .backgroundColor("#0A59F6")
      .width("90%")
      .margin({ top: 20 })
      .onClick(() => {
        this.registerMethod();
      })
  }

  async registerMethod() {
    if (this.password.trim().length <= 0) {
      promptAction.showToast({
        message: "密码不能为空"
      });
    }
    if (this.firmPassword.trim().length <= 0) {
      promptAction.showToast({
        message: "请确认您的密码"
      });
    }
    if (this.telephone.trim().length <= 0) {
      promptAction.showToast({
        message: "手机号不能为空"
      });
    }
    if (this.password.trim() !== this.firmPassword.trim()) {
      promptAction.showToast({
        message: "两次密码不一致"
      });
    }
    let httpRequest = http.createHttp();
    //2.2服务器的地址
    let u = address.IP+"/register";
    try {
      //2.3发送请求
      let response = await httpRequest.request(u, {
        //确定请求方式，这里我们用post请求，还有get,delete,put
        method: http.RequestMethod.POST,
        //传输到服务器的参数
        extraData: {
          telephone: this.telephone,
          password: this.password
        },
        //如果是post请求，我们还要设置我们的请求头
        header: {
          "Content-Type": "application/json"
        }
      });

      //将json字符串转化成我们的对象来操作
      let result = JSON.parse(response.result as string) as registerNetWorkType;

      //注册成功
      if (result.code === 200) {
        await promptAction.showDialog({
          title: "注册成功",
          message: "快去登录吧",
          buttons: [{
            text: "好的",
            color: "#00000"
          }]
        }).then((result) => {
          router.replace({ url: "pages/login_register/login" });
        });
      } else if (result.code === 500) {
        promptAction.showToast({
          message: "注册失败"
        });
      }
    } catch (e) {
      promptAction.showToast({
        message: "注册失败"
      });
    }
  }
  //*******************************build*******************************//
  build() {
    Column() {
      Text().height(40)
      this.title()
      this.register()

    }
    .backgroundColor("#ffffff")
    .width("100%")
    .height("100%")
  }
}
