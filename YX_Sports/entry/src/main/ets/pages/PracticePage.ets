import { DialogAction, DialogHelper} from '@pura/harmony-dialog'
import { router, Router } from '@kit.ArkUI'

@Component
export struct Practice {
  @State isShow:boolean = false
  @State WeightRecord:number = 55.5
  @State WeightInit: number = 67.5
  @State TodayTrainTime:number = 12
  @State TodayCaluli:number = 190
  @State AllTrainTime:number=102
  @State AllCaluli:number=112


  build() {
    Column(){
      Text().height(20)
      //标题
      Row({space:15}){
        Text('训练')
          .fontSize(24)
          .fontWeight(600)
          .fontColor('#FFFFFF')
        Image($r('app.media.xunlian1'))
          .width(24)
          .height(24)
          .onClick(()=>{
            router.pushUrl({url:'pages/TrainRecordPage'})
          })

      }
      .padding(15)
      .width('100%')
      .justifyContent(FlexAlign.SpaceBetween)

      Scroll(){
        Column(){
          //训练时长+卡路里
          Row() {
            // 左侧卡片：今日训练时长
            Column() {
              Row() {
                Text('今日训练时长')
                  .fontSize(20)
                  .fontWeight(400)
                  .fontColor('#333333') // 标题颜色为黑色
                  .margin({ left: 10 })
                Text('>')
                  .fontColor('#333333') // 箭头颜色为黑色
                  .margin({ right: 10 })
              }
              .width('100%')
              .height(30) // 标题行高度
              .justifyContent(FlexAlign.SpaceBetween)


              Row() {
                Text(this.TodayTrainTime.toString()) // 数字部分
                  .fontSize(35)
                  .fontWeight(600)
                  .fontColor('#6C55E4') // 紫色
                Text('分钟') // 单位部分
                  .fontSize(20)
                  .fontColor('#999999') // 浅灰色
              }
              .alignItems(VerticalAlign.Bottom) // 左对齐
              .justifyContent(FlexAlign.End) // 底部对齐
              //.margin({ top: 10 }) // 数据行与标题行间距
            }
            .width('48%') // 占据一半宽度
            .height(100)
            .backgroundColor('#FFFFFF') // 卡片背景为白色
            .borderRadius(8) // 圆角
            .onClick(()=>{
              router.pushUrl({url:'pages/TrainTimePage'})
            })
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})

            // 右侧卡片：燃烧卡路里
            Column() {
              Row() {
                Text('燃烧卡路里')
                  .fontSize(20)
                  .fontWeight(400)
                  .fontColor('#333333') // 标题颜色为黑色
                  .margin({ left: 10 })
                Text('>')
                  .fontColor('#333333') // 箭头颜色为黑色
                  .margin({ right: 10 })
              }
              .width('100%')
              .height(30) // 标题行高度
              .justifyContent(FlexAlign.SpaceBetween)


              Row() {
                Text(this.TodayCaluli.toString()) // 数字部分
                  .fontSize(35)
                  .fontWeight(600)
                  .fontColor('#6C55E4') // 紫色
                Text('千卡') // 单位部分
                  .fontSize(20)
                  .fontColor('#999999') // 浅灰色
              }
              .alignItems(VerticalAlign.Bottom) // 左对齐
              .justifyContent(FlexAlign.End) // 底部对齐
              //.margin({ top: 10 }) // 数据行与标题行间距
            }
            .width('48%') // 占据一半宽度
            .height(100)
            .backgroundColor('#FFFFFF') // 卡片背景为白色
            .borderRadius(8) // 圆角
            .onClick(()=>{
              router.pushUrl({url:'pages/CaloriePage'})
            })
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
          }
          .width('100%')
          .height(120)
          .justifyContent(FlexAlign.SpaceBetween)


          //体重记录
          Column() {
            // 标题行
            Row(){
              Text('体重记录')
                .fontSize(24)
                .fontColor('#333333')
                .fontWeight(500)
                .margin({left:15})
            }
            .width('100%')
            .justifyContent(FlexAlign.Start)


            // 体重数据行
            Row(){
              Text(this.WeightRecord.toString()+'kg')
                .fontSize(35)
                .fontColor('#6C55E4')
                .fontWeight(700)
                .margin({left:15})

              Row(){
                if(this.WeightRecord<=this.WeightInit){
                  Text('已减'+(this.WeightInit-this.WeightRecord).toString()+'kg')
                    .fontSize(16)
                    .fontColor('#999999')
                    .margin({left:10})
                }else{
                  Text('增重'+(this.WeightRecord-this.WeightInit).toString()+'kg')
                    .fontSize(16)
                    .fontColor('#999999')
                    .margin({left:10})
                }
              }
            }
            .width('100%')
            .justifyContent(FlexAlign.Start)
            .margin({ top: 20 })

            // 按钮
            Button('记录体重')
              .width('40%')
              .height(48)
              .backgroundColor('#666EE8')
              .fontColor('#FFFFFF')
              .fontSize(18)
              .borderRadius(24)
              .margin({ top: 20 })
              .onClick(() => {

                let numbers: string[] = [];
                for (let i = 40; i <= 200; i+=0.5) {
                  numbers.push(i.toString()+' kg');
                }

                DialogHelper.showTextPickerDialog({
                  title: "计体重",
                  range: numbers.map(String), // 设置范围为0-200的整数
                  onAction: (action: number, dialogId: string, value: string | string[]) => {
                    if (action == DialogAction.SURE) {
                      const weightStr = (value as string).replace(' kg', '');
                      const weight = parseFloat(weightStr);
                      this.WeightRecord=weight
                    }
                  }

                })


              })
          }
          .backgroundColor('#FFFFFF')
          .padding({ top: 30, bottom: 30 }) // 整体内边距
          .width('100%')
          .height(200)
          .borderRadius(8)


          //锻炼时长竖状图
          Column(){
            // 标题行
            Row(){
              //左边标题
              Text('锻炼时长')
                .fontSize(24)
                .fontColor('#333333')
                .fontWeight(500)
                .margin({left:15})

              //右边数据
              Row(){
                Text(this.AllTrainTime.toString())
                  .fontSize(34)
                  .fontColor('#6249E3')
                  .fontWeight(500)
                  .margin({right:5})

                Text('分钟')
                  .fontSize(22)
                  .fontColor('#939EB5')
              }
              .margin({right:15})
            }
            .margin({top:15})
            .width('100%')
            .justifyContent(FlexAlign.SpaceBetween)

            //图表                                       //暂时贴图
            Image($r('app.media.duanlianshichang'))
              .margin({top:15})
              .width('100%')
              .height(120)
          }
          .width('100%')
          .height(200)
          .backgroundColor('#FFFFFF')
          .borderRadius(8)
          .margin({top:15})
          .onClick(()=>{
            router.pushUrl({url:'pages/TrainTimePage'})
          })


          //卡路里竖状图
          Column(){
            // 标题行
            Row(){
              //左边标题
              Text('卡路里')
                .fontSize(24)
                .fontColor('#333333')
                .fontWeight(500)
                .margin({left:15})

              //右边数据
              Row(){
                Text(this.AllCaluli.toString())
                  .fontSize(34)
                  .fontColor('#6249E3')
                  .fontWeight(500)
                  .margin({right:5})

                Text('千卡')
                  .fontSize(22)
                  .fontColor('#939EB5')
              }
              .margin({right:15})
            }
            .margin({top:15})
            .width('100%')
            .justifyContent(FlexAlign.SpaceBetween)

            //图表                                       //暂时贴图
            Image($r('app.media.kaluli'))
              .margin({top:15})
              .width('100%')
              .height(120)
          }
          .width('100%')
          .height(200)
          .backgroundColor('#FFFFFF')
          .borderRadius(8)
          .margin({top:15})
          .onClick(()=>{
            router.pushUrl({url:'pages/CaloriePage'})
          })

        }
      }
      .height('100%')
      .scrollBar(BarState.Off)


    }
    .width('100%')
    .height('100%')
    .padding({ left: 10, right: 10 })
    .backgroundImage($r('app.media.duanlianBackGround'))
    .backgroundImageSize({width:'100%',height:'100%'})
  }
}




