import { router } from '@kit.ArkUI';
import { DialogAction, DialogHelper } from '@pura/harmony-dialog';
import {EnglishKeyboardView} from '@abner/keyboard'
//import { ToastUtil } from '@pura/harmony-utils';

@Entry
@Component
struct EditInfoPage {
  @State inputValue: string = ''; // 存储输入的值
  @State WeightInit:number = 40
  @State Month: number = new Date().getMonth() + 1;//当前月份
  //@State Years: number = new Date().getFullYear();//当前年份
  @State Day: number = new Date().getDate();//当前日期
  @State HeightRecord:number = 165
  @State Sexual:string='女'
  @State NickName:string = '瘦到90斤'
  @State isShowKeyboard: boolean = false; // 标记昵称键盘是否显示

  //体重处理--------------------------------------------------
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
  MyDialog(){
    Column({space:5}) {
      //标题
      Row(){
        // 叉图标：点击关闭弹窗，不修改数据
        Image($r('app.media.cha'))
          .width(24)
          .height(24)
          .onClick(() => {
            // 直接关闭弹窗，不修改WeightInit
            this.numberKeyboardDialog.close();
            // 清空输入框（可选，避免下次打开时显示上次输入）
            this.inputValue = '';
          })
          .padding(5) // 扩大点击区域，提升体验

        // 日期文本
        Text(`${this.Month}月${this.Day}日`)
          .fontSize(24)

        // 勾图标：点击关闭弹窗，并修改WeightInit
        Image($r('app.media.gou'))
          .height(35)
          .width(35)
          .onClick(() => {
            // 验证输入合法性：非空、不是纯小数点
            if (this.inputValue && this.inputValue !== '.') {
              // 将输入的字符串转换为数字，更新到WeightInit
              this.WeightInit = parseFloat(this.inputValue); // 更新体重
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
      .backgroundColor('#FFFFFF')
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
      .backgroundColor('#FFFFFF')

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
            .backgroundColor('#FFFFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('2')
            .onClick(() => {
              /* 处理数字2的输入逻辑 */
              this.handleNumberInput('1')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('3')
            .onClick(() => {
              /* 处理数字3的输入逻辑 */
              this.handleNumberInput('1')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFFFF')
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
            .backgroundColor('#FFFFFF')
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
            .backgroundColor('#FFFFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button('6')
            .onClick(() => {
              /* 处理数字6的输入逻辑 */
              this.handleNumberInput('1')
            })
            .height('100%')
            .width('30%')
            .backgroundColor('#FFFFFF')
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
            .backgroundColor('#FFFFFF')
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
            .backgroundColor('#FFFFFF')
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
            .backgroundColor('#FFFFFF')
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
            .backgroundColor('#FFFFFF')
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
            .backgroundColor('#FFFFFF')
            .fontColor('#403E33')
            .fontSize(30)
            .fontWeight(300)
            .borderRadius(5)

          Button(){
            Image($r('app.media.BackSpace'))
              .width(24)
              .height(24)
          }
          .onClick(() => {
            /* 处理删除的输入逻辑 */
            this.clearLastChar()
          })
          .height('100%')
          .width('30%')
          .backgroundColor('#FFFFFF')
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

  private numberKeyboardDialog: CustomDialogController = new CustomDialogController(
    {
      builder: this.MyDialog.bind(this),
      alignment: DialogAlignment.Bottom
    }
  )
//-----------------------------------------------------------------

//--------------------------昵称键盘构建----------------------------------------------
  // 定义键盘弹窗控制器
  private keyboardDialog: CustomDialogController = new CustomDialogController({
    builder: this.KeyboardDialogBuilder.bind(this), // 绑定弹窗布局
    alignment: DialogAlignment.Bottom, // 弹窗显示在底部（适合键盘）
    autoCancel: true, // 点击外部可关闭弹窗
    maskColor: 'rgba(0, 0, 0, 0.3)' // 弹窗背景遮罩（可选）
  });

  // 弹窗布局构建器
  @Builder
  KeyboardDialogBuilder() {
    Column() {
      // 显示输入的文本（可选，用于预览输入内容）
      Row() {
        Text(this.NickName || '请输入...')
          .fontSize(18)
          .padding(10)
          .width('100%')
          .backgroundColor('#FFFFFF')
          .borderRadius(5)
      }
      .padding(10)
      .width('100%')

      // 英文键盘组件
      EnglishKeyboardView({
        // 点击字符按键（如a、b、1、2等）
        onItemClick: (item: string) => {
          this.NickName += item; // 将输入的字符追加到文本中

        },
        // 点击删除键
        onDelete: () => {
          if (this.NickName.length > 0) {
            this.NickName = this.NickName.substring(0, this.NickName.length - 1); // 删除最后一个字符
          };
        },
        // 点击完成键
        onComplete: () => {
          this.keyboardDialog.close(); // 关闭弹窗
        },
        // 点击中文切换键（如果需要切换到中文键盘，可在此处处理）
        onChinese: () => {
          // 例如：可以切换到其他中文键盘组件
        },
        // 点击空格键
        onSpace: () => {
          this.NickName += ' '; // 追加空格
        },
        // 点击数字键（切换到数字输入模式，可在此处处理）
        onNumber: () => {
          // 例如：切换到数字键盘布局
        },

        // 以下是可选的样式配置（根据需要调整）
        bgColor: '#F5F5F5', // 键盘整体背景色
        englishBgColor: '#FFFFFF', // 英文字母按键背景色
        otherBgColor: '#E8E8E8', // 功能键（删除、完成等）背景色
        rectBorderWidth: 1, // 按键边框宽度
        rectBorderRadius: 8, // 按键圆角
        rectTextSize: 18, // 按键文字大小
        rectTextColor: '#333333', // 按键文字颜色
        deleteIconWidth: 24, // 删除图标宽度
        //deleteIconSrc: $r('app.media.delete_icon'), // 自定义删除图标（可选）
        rectHeight: 50, // 按键高度
        marginTop: 5, // 键盘顶部边距
        marginBottom: 5 // 键盘底部边距
      })
        .width('100%')
        .height(300) // 键盘高度（根据需要调整）
    }
    .width('100%')
    .backgroundColor('#F0F0F0')
  }

//-------------------------------------------------------------------------------------------

  //----------------------------选择头像-----------------------------------------------
  // 定义弹窗控制器
  private photoDialog: CustomDialogController = new CustomDialogController({
    builder: this.PhotoDialogBuilder.bind(this),
    alignment: DialogAlignment.Bottom, // 弹窗显示在底部
    maskColor: 'rgba(0, 0, 0, 0.3)', // 半透明遮罩
    autoCancel: true // 点击遮罩关闭弹窗
  });

  // 弹窗内容构建器
  @Builder
  PhotoDialogBuilder() {
    Column() {
      // 1. 拍照选项
      Button('拍照')
        .width('100%')
        .height(55)
        .fontSize(18)
        .fontColor('#333333')
        .backgroundColor('#FFFFFF')
        .borderRadius(0)
        .onClick(() => {
          this.photoDialog.close(); // 选择后关闭弹窗
          // 可添加拍照逻辑（如调用相机）
        })

      // 2. 从相册选择选项
      Button('从相册选择')
        .width('100%')
        .height(55)
        .fontSize(18)
        .fontColor('#333333')
        .backgroundColor('#FFFFFF')
        .borderRadius(0)
        .onClick(() => {
          this.photoDialog.close(); // 关闭弹窗
          //router.pushUrl({ url: 'pages/AlbumPage' }); // 跳转到相册页面（后面加）
        })


      // 3. 取消选项
      Button('取消')
        .width('100%')
        .margin({top:5})
        .height(55)
        .fontSize(18)
        .fontColor('#666666')
        .backgroundColor('#FFFFFF')
        .borderRadius(0)
        .onClick(() => {
          this.photoDialog.close(); // 关闭弹窗
        })
    }
    .width('100%')
    .backgroundColor('#F2F2F2')
    .borderRadius({ topLeft: 15, topRight: 15 }) // 顶部圆角
  }

  //----------------------------------------------------------------------------------------

  build() {
    Column(){
      Text().height(40)
      //标题
      Row(){
        Image($r('app.media.return'))
          .width(20)
          .height(20)
          .margin(({left:5}))
          .onClick(()=>{
            router.back()
          })
        Text('编辑资料')
          .fontColor('#333333')
          .fontSize(20)
          .fontWeight(600)

        Text('保存')
          .fontSize(18)
          .fontColor('#999999')
          .margin({right:5})
          .onClick(()=>{
            router.back()
          })
      }
      .justifyContent(FlexAlign.SpaceBetween)
      .width('100%')
      .height(30)
      //.padding(15)
      .backgroundColor('#FFFFFF')

      Column({space:2}){
        //头像
        Row(){
          Text('头像')
            .fontSize(18)
            .fontColor('#353535')
          Row({space:4}){
            Image($r('app.media.pho'))
              .width(40)
              .height(40)
            Image($r('app.media.RightArrow'))
              .width(18)
              .height(18)
          }

        }
        .padding(5)
        .backgroundColor('#FFFFFF')
        .width('100%')
        .height(60)
        .justifyContent(FlexAlign.SpaceBetween)
        .onClick(()=>{
          this.photoDialog.open(); // 打开弹窗
        })

        //昵称
        Row(){
          Text('昵称')
            .fontSize(18)
            .fontColor('#353535')
          Row({space:4}){
            Text(this.NickName)
              .fontSize(18)
              .fontColor('#BAB9BA')
            Image($r('app.media.RightArrow'))
              .width(18)
              .height(18)
          }

        }
        .padding(5)
        .backgroundColor('#FFFFFF')
        .width('100%')
        .height(60)
        .justifyContent(FlexAlign.SpaceBetween)
        .onClick(()=>{this.keyboardDialog.open()})

        //性别
        Row(){
          Text('性别')
            .fontSize(18)
            .fontColor('#353535')
          Row({space:4}){
            Text(this.Sexual)
              .fontSize(18)
              .fontColor('#BAB9BA')
            Image($r('app.media.RightArrow'))
              .width(18)
              .height(18)
          }

        }
        .padding(5)
        .backgroundColor('#FFFFFF')
        .width('100%')
        .height(60)
        .justifyContent(FlexAlign.SpaceBetween)
        .onClick(() => {
          // 定义性别选项范围（男/女）
          const genders: string[] = ['男', '女'];

          DialogHelper.showTextPickerDialog({
            title: "设置性别", // 更新标题为"设置性别"
            range: genders, // 选择范围改为男和女
            onAction: (action: number, dialogId: string, value: string | string[]) => {
              if (action === DialogAction.SURE) {
                const selectedGender = value as string;
                this.Sexual = selectedGender; // 更新性别记录
              }
            }
          });
        })

        //身高
        Row(){
          Text('身高')
            .fontSize(18)
            .fontColor('#353535')
          Row({space:4}){
            Text(this.HeightRecord.toString()+'cm')
              .fontSize(18)
              .fontColor('#BAB9BA')
            Image($r('app.media.RightArrow'))
              .width(18)
              .height(18)
          }

        }
        .padding(5)
        .backgroundColor('#FFFFFF')
        .width('100%')
        .height(60)
        .justifyContent(FlexAlign.SpaceBetween)
        .onClick(() => {

          let numbers: string[] = [];
          for (let i = 120; i <= 200; i+=1) {
            numbers.push(i.toString()+' cm');
          }

          DialogHelper.showTextPickerDialog({
            title: "设置身高",
            range: numbers.map(String), // 设置范围为120-200的整数
            onAction: (action: number, dialogId: string, value: string | string[]) => {
              if (action == DialogAction.SURE) {
                const heightStr = (value as string).replace(' cm', '');
                const heightNum = parseFloat(heightStr);
                this.HeightRecord=heightNum
              }
            }

          })


        })

        //体重
        Row(){
          Text('体重')
            .fontSize(18)
            .fontColor('#353535')
          Row({space:4}){
            Text(this.WeightInit.toString()+'公斤')
              .fontSize(18)
              .fontColor('#BAB9BA')
            Image($r('app.media.RightArrow'))
              .width(18)
              .height(18)
          }

        }
        .padding(5)
        .backgroundColor('#FFFFFF')
        .width('100%')
        .height(60)
        .justifyContent(FlexAlign.SpaceBetween)
        .onClick(() => {
          this.numberKeyboardDialog.open()
        })

        //ID号
        Row(){
          Text('ID号')
            .fontSize(18)
            .fontColor('#353535')
          Row({space:4}){
            Text('345674583')
              .fontSize(18)
              .fontColor('#BAB9BA')
            // Image($r('app.media.RightArrow'))
            //   .width(18)
            //   .height(18)
          }

        }
        .padding(5)
        .backgroundColor('#FFFFFF')
        .width('100%')
        .height(60)
        .justifyContent(FlexAlign.SpaceBetween)
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