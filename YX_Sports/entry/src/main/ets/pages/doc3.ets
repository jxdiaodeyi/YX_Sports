import { router, Router } from '@kit.ArkUI';
@Entry
@Component
struct Doc3 {
  @State index: number = 2
  onPageShow() {
    setTimeout(() => {
      router.pushUrl({
        url: 'pages/Index' // 目标页面的路由地址
      })
    }, 2000);
  }
  build() {
    Column(){
      Text().height(10)
      Image($r('app.media.return'))
        .width(40)
        .height(40)
        .onClick(()=>{
          this.index--
          router.back()
        })
        Text('您的专属计划已生成！')
          .fontSize(30)
          .fontWeight(999)
          .margin(20)
        Row().height(40)
        Stack() {
          Progress({ value:100, total: 100, type: ProgressType.Ring })
            .width(200)
            .height(200)
            .color("#007DFF")
            .style({ strokeWidth: 35})
          Text('100%')
            .fontSize(20)
            .fontColor('#007DFF')
            .fontWeight(600)
        }
        .width('100%')

      }
      .alignItems(HorizontalAlign.Start)
      .width('100%')

  }
}
