import { router } from '@kit.ArkUI';
import { DateType, DialogAction, DialogHelper } from '@pura/harmony-dialog';
import { DateUtil, DisplayUtil, LogUtil, ToastUtil } from '@pura/harmony-utils';

interface weekWork {
  weekid: number,
  weekTrainTime:number,
  weekTrainPic:Resource
}
@Entry
@Component


struct TrainTimePage {
  @State message: string = 'Hello World';
  @State Month: number = new Date().getMonth() + 1;//当前月份
  @State Years: number = new Date().getFullYear();//当前年份
  @State Day: number = new Date().getDate();//当前日期
  private months: string[] = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']

  //模拟数据
  datas:weekWork[]=[
    {
      weekid:0,
      weekTrainTime:0,
      weekTrainPic:$r('app.media.TrainTime3')
    },
    {
      weekid:1,
      weekTrainTime:20,
      weekTrainPic:$r('app.media.TrainTime2')
    },
    {
      weekid:2,
      weekTrainTime:102,
      weekTrainPic:$r('app.media.TrainTime1')
    }
  ]

  @Builder
  OneWeekTrainTime(item:weekWork){
    Column(){
      Row(){
        Text(this.Month.toString()+'月'+(1+7*item.weekid).toString()+'日-'+this.Month.toString()+'月'+(7+7*item.weekid).toString()+'日')
          .fontSize(20)
          .fontColor('#222B45')
          .fontWeight('500')
        Row(){
          Text(item.weekTrainTime.toString())
            .fontSize(26)
            .fontWeight(600)
            .fontColor('#6249E3')
          Text('分钟')
            .fontSize(20)
            .fontColor('#8F9BB3')
        }
        .width('30%')
        .justifyContent(FlexAlign.End)
        .margin({right:15})
      }
      .width('100%')
      .height(40)
      .padding(15)
      .justifyContent(FlexAlign.SpaceBetween)

      Image(item.weekTrainPic)
        .width('100%')
        .height(120)
        .margin({top:15})

    }
    .width('100%')
    .height(220)


  }


  build() {
    Column(){
      Row(){
        Image($r('app.media.leftback'))
          .width(20)
          .height(20)
          .onClick(()=>{
            router.back()
          })
        Text('训练时长')
          .fontColor('#333333')
          .fontSize(24)
          .fontWeight(700)
        Text('     ')
          .fontSize(24)
      }
      .justifyContent(FlexAlign.SpaceAround)
      .width('100%')
      .height(30)
      .padding(5)
      .border({
        width: { bottom: 1 },        // 底部宽度
        color: { bottom: '#F2F2F2' }, // 底部颜色
      })
      Row(){
        Text(this.months[this.Month-1]+this.Years.toString())
          .fontSize(24)
          .fontWeight(600)
        Image($r('app.media.rili'))
          .width(24)
          .height(24)
          .margin({top:15})
          .onClick(()=>{
            DialogHelper.showDatePickerDialog({
              dateType: DateType.Ymd,
              onAction: (action: number, dialogId: string, date: Date): void => {
                if (action == DialogAction.SURE) {
                  this.Years = date.getFullYear();       // 获取年份（四位数）
                  this.Month = date.getMonth() + 1;      // getMonth()返回0-11，需要+1转为实际月份
                  this.Day = date.getDate();             // 获取日期（1-31）
                }
              }
            })
          })
      }
      .width('100%')
      .height('30')
      .justifyContent(FlexAlign.SpaceBetween)
      .padding(15)

      List(){
        ForEach(this.datas,(item:weekWork)=>{
          ListItem(){
            this.OneWeekTrainTime(item)
          }
        })
      }
      .scrollBar(BarState.Off)
      .margin({top:30})


    }


  }

}