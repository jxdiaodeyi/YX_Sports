import { router, Router } from '@kit.ArkUI';

interface userInfoType{
  token:string,
  userId:number,
  telephone:string,
  vip:number
}

@Entry
@Component
struct Doc3 {
  @State token:string=(this.getUIContext().getRouter().getParams()as userInfoType).token
  @State userId:number=(this.getUIContext().getRouter().getParams()as userInfoType).userId
  @State telephone:string=(this.getUIContext().getRouter().getParams()as userInfoType).telephone
  @State vip:number=(this.getUIContext().getRouter().getParams()as userInfoType).vip
  @State index: number = 2
  onPageShow() {
    setTimeout(() => {
      router.pushUrl({
        url: 'pages/Index' // 目标页面的路由地址
      ,params:{token: this.token , userId:this.userId, telephone:this.telephone,vip:this.vip}})
    }, 2000);
  }
  build() {
    Column(){
      Text().height(10)
      Image('/image/home/return.png')
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
