//import { CustomDialogController } from '@ohos.dialog'
import { router } from '@kit.ArkUI'

@Entry
@Component

struct NumberKeyboardPage {
  @State inputValue: string = ''; // 存储输入的值
  @State WeightInit:number = 40
  @State WeightTarget:number = 40
  @State Month: number = new Date().getMonth() + 1;//当前月份
  //@State Years: number = new Date().getFullYear();//当前年份
  @State Day: number = new Date().getDate();//当前日期
  @State editingType: 'init' | 'target' = 'init'; // 限制只能为'init'或'target'

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
              if (this.editingType === 'init') {
                this.WeightInit = parseFloat(this.inputValue); // 更新初始体重
              } else {
                this.WeightTarget = parseFloat(this.inputValue); // 更新目标体重
              }
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

  build() {
    Column() {
      Text().height(40)
      //标题部分
      Row(){
        Image($r('app.media.return'))
          .width(40)
          .height(40)
          .onClick(()=>{
            router.back()
          })
        Text('体重记录')
          .fontColor('#333333')
          .fontSize(24)
          .fontWeight(700)
        Text('     ')
          .fontSize(24)
      }
      .justifyContent(FlexAlign.SpaceBetween)
      .width('100%')
      .height(30)
      .padding(5)

      //记录部分
      Column({space:5}){
        Row(){
          //初始体重
          Text('初始体重')
            .fontSize(22)
            .fontColor('#333333')

          Row({space:15}){
            Text(this.WeightInit.toString()+'公斤')
              .fontColor('#999999')
              .fontSize(18)
            Image($r('app.media.RightArrow'))
              .width(22)
              .height(22)
          }
        }
        .width('100%')
        //.height(50)
        .backgroundColor('#FFFFFF')
        .padding(5)
        .justifyContent(FlexAlign.SpaceBetween)
        .margin({top:5})
        .onClick(() => {
          this.editingType = 'init'; // 标记为编辑初始体重
          this.numberKeyboardDialog.open()
        })

        //目标体重
        Row(){
          Text('目标体重')
            .fontSize(22)
            .fontColor('#333333')

          Row({space:15}){
            Text(this.WeightTarget.toString()+'公斤')
              .fontColor('#999999')
              .fontSize(18)
            Image($r('app.media.RightArrow'))
              .width(22)
              .height(22)
          }
        }
        .width('100%')
        //.height(30)
        .backgroundColor('#FFFFFF')
        .padding(5)
        .justifyContent(FlexAlign.SpaceBetween)
        .onClick(() => {
          this.editingType = 'target'; // 标记为编辑目标体重
          this.numberKeyboardDialog.open()
        })

      }
      .height('100%')
      .width('100%')
      .backgroundColor('#F9F9F9')
      .margin({top:15})

    }
  }
}