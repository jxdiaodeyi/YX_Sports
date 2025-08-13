import { promptAction, PromptAction, router } from '@kit.ArkUI';
import { it } from '@ohos/hypium';
import { DialogAction, DialogHelper } from '@pura/harmony-dialog';

import { sharedTitle } from './title';
import { text } from '@kit.ArkGraphics2D';
import { http } from '@kit.NetworkKit';
import address from "../../../resources/rawfile/IPaddress.json";
import { mineNetWorkType, userInfoListType, userInfoType } from '../../mod/mine/minewindows';
import { getAvatar } from './mine';

@Entry
@Component
struct UserInfo {
  @State token:string=(this.getUIContext().getRouter().getParams() as Record<string,string> ).token
  @State vip:number=(this.getUIContext().getRouter().getParams() as Record<string,number> ).vip
  @State inputValue : string = '0'; // 存储输入的值
  @State month : number = new Date().getMonth() + 1;//当前月份
  @State day : number = new Date().getDate();//当前日期
  @State isShowKeyboard : boolean = false; // 标记昵称键盘是否显示
  @State isEditing: boolean = false //昵称是否可编辑
  @State userInfo : userInfoType = {} as userInfoType
  //--------------底下这些数据有后台后在userInfo中获取
  @State weightInit : number = 40
  @State heightRecord : number = 165
  @State sexual : string = '女'
  @State ID : number = 345674583
  @State nickName : string = '瘦成一道闪电'
  //------------------------------------------------
  data : userInfoListType[] = [
    {title:'头像',id:0},
    {title:"性别",id:1},
    {title:"身高",id:2},
    {title:"体重",id:3},
    {title:"ID号",id:4}
  ]
  //----------------------------------体重弹框-----------
  // 处理数字输入
  handleNumberInput(num: string) {
    // 限制输入长度
    if (this.inputValue.length >= 10) return;

    // 处理小数点逻辑
    if (num === '.' && this.inputValue.includes('.')) return;

    // 处理前导零
    if (this.inputValue === '0' && num !== '.') {
      this.inputValue = num;
    } else {
      this.inputValue += num;
    }
  }
  // 删除最后一个字符
  clearLastChar() {
    if (this.inputValue.length > 0) {
      this.inputValue = this.inputValue.substring(0, this.inputValue.length - 1);
    }
  }
  @Builder
  weightDialog(){
    Column({space:5}) {
      //标题
      Row(){
        // 叉图标：点击关闭弹窗，不修改数据
        Image('/image/mine/no.png')
          .width(30)
          .height(30)
          .onClick(() => {
            // 直接关闭弹窗，不修改WeightInit
            this.numberKeyboardDialog.close();
            this.inputValue = '';
          })
          .padding(5) // 扩大点击区域，提升体验

        // 日期文本
        Text(`${this.month}月${this.day}日`)
          .fontSize(24)

        // 勾图标：点击关闭弹窗，并修改WeightInit
        Image('/image/mine/yes.png')
          .height(30)
          .width(30)
          .onClick(() => {
            // 验证输入合法性：非空、不是纯小数点
            if (this.inputValue && this.inputValue !== '.') {
              // 将输入的字符串转换为数字，更新到WeightInit
              this.userInfo.weight_current = parseFloat(this.inputValue); // 更新体重
            }
            // 关闭弹窗
            this.numberKeyboardDialog.close();
            // 清空输入框，避免下次打开时显示残留值
            this.inputValue = '';
          })
          .padding(5) // 扩大点击区域，提升体验
      }
      .width('100%')
      .height('15%')
      .backgroundColor('#FFFF')
      .padding(15)
      .justifyContent(FlexAlign.SpaceBetween)

      //输入框
      Row(){
        Text(this.inputValue || '公斤') // 没有输入时显示0
          .fontSize(30)
          .width('100%')
          .textAlign(TextAlign.Center)
          .fontColor('#999999')
      }
      .width('100%')
      .height('25%')
      .backgroundColor('#FFFF')

      // 数字键盘按键布局
      Column() {
        //123
        Row({space:8}) {
          Button('1')
            .onClick(() => {
              /* 处理数字1的输入逻辑 */
              this.handleNumberInput('1')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('2')
            .onClick(() => {
              /* 处理数字2的输入逻辑 */
              this.handleNumberInput('2')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('3')
            .onClick(() => {
              /* 处理数字3的输入逻辑 */
              this.handleNumberInput('3')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

        }
        .width('100%')
        .height('22%')
        .padding(5)
        .justifyContent(FlexAlign.SpaceBetween)

        //456
        Row({space:8}) {
          Button('4')
            .onClick(() => {
              /* 处理数字4的输入逻辑 */
              this.handleNumberInput('4')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('5')
            .onClick(() => {
              /* 处理数字5的输入逻辑 */
              this.handleNumberInput('5')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('6')
            .onClick(() => {
              /* 处理数字6的输入逻辑 */
              this.handleNumberInput('6')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

        }
        .width('100%')
        .height('22%')
        .padding(5)
        .justifyContent(FlexAlign.SpaceBetween)

        //789
        Row({space:8}) {
          Button('7')
            .onClick(() => {
              /* 处理数字7的输入逻辑 */
              this.handleNumberInput('7')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('8')
            .onClick(() => {
              /* 处理数字8的输入逻辑 */
              this.handleNumberInput('8')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('9')
            .onClick(() => {
              /* 处理数字9的输入逻辑 */
              this.handleNumberInput('9')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

        }
        .width('100%')
        .height('22%')
        .padding(5)
        .justifyContent(FlexAlign.SpaceBetween)

        //.0X
        Row({space:8}) {
          Button('.')
            .onClick(() => {
              /* 处理.的输入逻辑 */
              this.handleNumberInput('.')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('0')
            .onClick(() => {
              /* 处理数字0的输入逻辑 */
              this.handleNumberInput('0')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button(){
            Image('/image/mine/backSpace.png')
              .width(24)
              .height(24)
          }
          .onClick(() => {
            /* 处理删除的输入逻辑 */
            this.clearLastChar()
          })
          .height('100%')
          .width('30%')
          .backgroundColor('#FFFF')
          .fontColor('#403E33')
          .fontSize(30)
          .fontWeight(300)
          .borderRadius(5)

        }
        .width('100%')
        .height('22%')
        .padding(5)
        .justifyContent(FlexAlign.SpaceBetween)
      }
      .width('100%')
      .height('60%')
    }
    .backgroundColor('#F2F3F5')
    .width('100%')
    .height('60%')
    .padding(0)
  }
  //----------------------------------体重弹框
  private numberKeyboardDialog: CustomDialogController = new CustomDialogController({
      builder: this.weightDialog.bind(this),
      alignment: DialogAlignment.Bottom
    })

  @Styles
  rowCommon(){
    .width('100%')
    .height(60)
    .backgroundColor('#ffff')
  }

  @Builder
  leftTitle(title:string) {
    Text(title)
      .fontSize(18)
      .fontColor('#353535')
      .margin({ left: 10 })
  }
  //-------用户信息----------------------
  @Builder
  userInfoItem(t:userInfoListType){
    Row(){
      this.leftTitle(t.title)
      Row({space:4}){
        if(t.id == 0) Image(getAvatar(this.userInfo.username)).size({width:40,height:40})
        if(t.id == 1) Text(this.userInfo.gender).fontSize(18)
        if(t.id == 2) Text(this.userInfo.height+'cm').fontSize(18)
        if(t.id == 3) Text(this.userInfo.weight_current+'公斤').fontSize(18)
        if(t.id == 4) Text(this.userInfo.userId+'').fontSize(18)
        if(t.id != 4) Image('/image/mine/rightBack.png').size({width:18,height:18})
      }
      .margin({right:10})
    }
    .rowCommon()
    .justifyContent(FlexAlign.SpaceBetween)
    .onClick(()=>{
      if(t.id == 0){
        let sexes: string[] = ["拍照", "从相册选择"]
        DialogHelper.showActionSheetDialog({
          title: "",
          sheets: sexes,
          onAction: (index) => {}
        })
      }
      if(t.id == 1){
        // 定义性别选项范围（男/女）
        const genders: string[] = ['男', '女'];
        DialogHelper.showTextPickerDialog({
          title: "设置性别",
          range: genders,
          canLoop:false,
          onAction: (action: number,dialogId: string,value : string | string[]) => {
            if (action == DialogAction.SURE) {
              this.userInfo.gender = value as string
            }
          }
        })
      }
      if(t.id == 2){
        let numbers: string[] = [];
        for (let i = 120; i <= 200; i+=1) {
          numbers.push(i.toString()+' cm');
        }
        DialogHelper.showTextPickerDialog({
          title: "设置身高",
          range: numbers.map(String), // 设置范围为120-200的整数
          canLoop:false,
          onAction: (action: number, dialogId: string, value: string | string[]) => {
            if (action == DialogAction.SURE) {
              const heightStr = (value as string).replace(' cm', '');
              const heightNum = parseFloat(heightStr);
              this.userInfo.height = heightNum
            }
          }
        })
      }
      if(t.id == 3) this.numberKeyboardDialog.open()
    })
  }
  @Builder
  changeNickNameBuilder() {
    if (this.isEditing) {
      // 编辑状态显示输入框
      Column() {
        TextInput({ text: this.userInfo.username })
          .width('100%')
          .height(60)
          .fontSize(20)
          .maxLength(20)
          .backgroundColor('#ffff')
          .borderRadius(0)
          .onChange((value: string) => {
            this.userInfo.username = value;
          })
          .onEditChange((isEditing: boolean) => {
            // 编辑结束时切换回文本显示
            if (!isEditing) {
              this.isEditing = false;
            }
          })
          .onSubmit((event) => {
            this.isEditing = false;
          });
      };
    } else {
      // 非编辑状态显示文本
      Row() {
        this.leftTitle('昵称');
        Row() {
          Text(this.userInfo.username).fontSize(18);
          Image('/image/mine/rightBack.png').size({ width: 18, height: 18 });
        }
        .margin({ right: 10 });
      }
      .rowCommon()
      .justifyContent(FlexAlign.SpaceBetween)
      .onClick(() => {
        this.isEditing = true;
      });
    }
    Image('/image/mine/bottomLine.png').size({ width: '90%', height: 0.3 })
  }

  //-----------------------------------
  @Builder
  saveInfoBuilder() {
    Button(){
      Text("保存")
        .textAlign(TextAlign.Center)
        .fontSize(22);
    }
    .width('100%')
    .height(50)
    .margin({ top: 10 })
    .borderRadius(10)
    .backgroundColor('#ffff')
    .onClick(()=>{
      this.saveUserInfo()
    })
  }

  async saveUserInfo(){
    let httpRequest = http.createHttp()
    let u = address.IP+'/saveUserInfo'
    try{
      let response = await httpRequest.request(u,{
        method:http.RequestMethod.POST,
        extraData:{
          userId:this.userInfo.userId,
          username:this.userInfo.username,
          gender:this.userInfo.gender,
          height:this.userInfo.height,
          weight_current:this.userInfo.weight_current
        },
        header:{
          "Content-Type": "application/json",
        }
      })
      let result = JSON.parse(response.result as string) as mineNetWorkType
      if(result.code == 200){
        await promptAction.showDialog({
          title: "温馨提示",
          message: "保存成功",
          buttons: [{
            text: "好的",
            color: "#00000"
          }]
        }).then((result) => {
          router.replaceUrl({
            url: "pages/Index",
            params: {
              token: this.token,
              userId: this.userInfo.userId,
              //telephone: this.userInfo,
              vip: this.vip
            }
          })
        });
      }
    }
    catch (error){
      console.log("http请求失败")
    }
  }

  //----------获取从index的mine跳转传过来的用户信息----------------
  onPageShow(): void {
    const params = this.getUIContext().getRouter().getParams() as Record<string, userInfoType>
    if (params) {
      this.userInfo = params.userInfo
    }
  }
  // setUserId(id:number){
  //   this.userInfo.userId = id
  // }
  build() {
    Column(){

      Stack(){
        Row(){
          Image('/image/mine/leftBack.png')
            .width(20)
            .height(20)
            .margin({left:10,top:40})
            .onClick(()=>{
             router.replaceUrl({url:'pages/Index',params:{token:this.token,userId:this.userInfo.userId,vip:this.vip}})
            })
        }
        .width('100%')

        Text('编辑资料')
          .fontColor('#333333')
          .fontSize(20)
          .margin({top:40})

      }
      .width('100%')
      .height(80)
      .backgroundColor('#ffff')

      // sharedTitle({title:"编辑资料"})


      Column(){
        this.changeNickNameBuilder()
        ForEach(this.data,(item:userInfoListType)=>{
          this.userInfoItem(item)
          if(item.id != 4) Image('/image/mine/bottomLine.png').size({ width: '90%', height: 0.3 })
        })
        this.saveInfoBuilder()
      }
      .width('100%')
      .height('100%')
      .margin({top:10})
    }
    .backgroundColor('#F5F5F5')
    .height('100%')
    .width('100%')
  }
}