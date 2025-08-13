import address from '../../../resources/rawfile/IPaddress.json'
import { promptAction, router, Router } from "@kit.ArkUI"
import {homeNetWorkType,fat,show} from"../../mod/home/homeType"
import { http } from "@kit.NetworkKit"
import { JSON } from "@kit.ArkTS"

@Component
export struct home {
  @State vip:number=0
  @State token: string=""
  @State userId: number=0
  @State isloading:boolean = false;
  @State isShow:boolean=false;

//******************************轮播数据******************************//
  swiperCard:fat[]=[
    { name:'全身突击燃脂计划',name2:"1周·强化·减脂" },
    { name:'全身突击燃脂计划',name2:"1周·强化·减脂" }
  ]
//******************************全部数据******************************//
  datas:show[] = []

  //************************************* 顶部导航栏 *****************************************//
  @Builder
  Top(){
    Text().height(10)
    Row() {
      Text('课程')
        .fontSize(30)
        .width('90%')
      Image('image/home/search.png')
        .backgroundColor('#FFFFFF')
        .height(20)
        .height(20)
        .onClick(() => {
          // 点击跳转到搜索页面
          router.pushUrl({ url: 'pages/home/search',params:{token:this.token} }) // 目标页面路径
        })
    }

  }
//*************************************全身突击燃脂部分*****************************************//
  @Builder
  fatLoss(data:fat){
    Column() {
      Stack() {
        Image('image/home/fatBurning.jpg')
          .width('100%')
          .height('100%')
          .borderRadius(20)
          .objectFit(ImageFit.Cover)
        Column(){
          Text(data.name)
            .fontSize(25)
            .fontWeight(25)
            .fontColor('#FFFFFF')
          Text(data.name2)
            .fontSize(15)
            .fontWeight(20)
            .fontColor('#FFFFFF')
          Text().height(200)
          Button('立即获取')
            .width(100)
            .height(50)
            .borderRadius(15)
            //.borderColor('#FFFFFF')
            .backgroundColor('#FFFFFF')
            .fontColor('#000000')
        }
        .alignItems(HorizontalAlign.Start)
        .width('90%')
        .height('80%')
        .onClick(()=>{
          router.pushUrl({url:'pages/class',params:{token:this.token,courseId: 58,vip:this.vip,userId:this.userId}})
        })



      }
    }
    .width(350)
    .height(350)
    //.alignItems(HorizontalAlign.Start)

  }
  @Builder
  useFatloss(dataFatLoss:fat[]){
    Scroll(){
      Row({space:15}){ForEach(dataFatLoss,(item:fat)=>{
        this.fatLoss(item)
      })
      }
    }.scrollable(ScrollDirection.Horizontal).scrollBar(BarState.Off)
  }
//***************************************轮播课程*****************************************//
  @Builder
  show(data:show){
    Column({space:5}){
      Image(this.getImage(data.iname))
        .width(200)
        .height(150)
        .borderRadius(12)

      Text(data.cname)
        .fontSize(20)
        .fontWeight(40)

      Row(){
        Text('k'+data.difficulty+'级难度'+data.ctime+'分钟.'+data.ccalorie+'千卡')
          .fontSize(15)
          .fontWeight(10)
          .fontColor('#A7A4A1')
          .margin({bottom:10})

      }
    }
    .alignItems(HorizontalAlign.Start)
    .onClick(()=>{
      router.pushUrl({url:'pages/class',params:{token:this.token,courseId:data.id,vip:this.vip,userId:this.userId}})
    })
    .padding(5)
}
  @Builder
  showContent(dataArray:show[]){
    Scroll() {
      Row() {
        ForEach(dataArray, (item: show) => {
          this.show(item)
        }
        )
      }

    }
    .width('100%')
    .scrollBar(BarState.Off)
    .scrollable(ScrollDirection.Horizontal)
    .border({
      width: {bottom: 1 },//可以看到我们只填写了botton一个属性
      color: {bottom: '#A7A4A1' }})

  }
  getImage(imageName:string){

    if (imageName==='abdomen.jpg') {return 'image/home/abdomen.jpg'}
    else if(imageName==='arm.jpg'){return 'image/home/arm.jpg'}
    else if(imageName==='arse.webp'){return'image/home/arse.webp'}
    else if(imageName==='back.webp'){return'image/home/back.webp'}
    else if(imageName==='leg.webp'){return'image/home/leg.webp'}
    else if(imageName==='stretch.webp'){return'image/home/stretch.webp'}
    else if(imageName==='tricpes.jpg'){return'image/home/tricpes.jpg'}
    return ''

  }
  //*******网络接口*******//
  async getShowContent() {
    let httpRequest = http.createHttp();
    let url = address.IP+`/getShowContent`;
    try {
      let response = await httpRequest.request(url, {
        method: http.RequestMethod.GET,
        header: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });
      let result=JSON.parse(response.result as string)as homeNetWorkType;
      if (result.code===200)
      {
        this.datas=result.data;
        this.isShow=true;
      }
    }catch (e) {
      promptAction.showToast({message:"网络错误"})
    }


  }
//***************************************为你推荐*****************************************//
  @Builder
  recommend(data:show){
    Image(this.getImage(data.iname))
      .width(200)
      .height(200)
      .borderRadius(12)
      .onClick(()=>{
        router.pushUrl({url:'pages/class',params:{token:this.token,courseId:data.id,vip:this.vip,userId:this.userId}})
      })
}
  @Builder
  recommendContend(dataRecommend:show[]){
    Row() {
      Text('为你推荐')
        .fontSize(20)
        .width('70%')
      Button('查看更多')
        .height(20)
        .backgroundColor('#FFFFFF')
        .fontColor('#2B2B2B')
        .borderColor('#2B2B2B')
        .border({ width: 1 })
    }

    Scroll() {
      Row({ space: 15 }) {
        ForEach(dataRecommend, (item2: show) => {
          this.recommend(item2)
        })
      }

    }
    .width('100%')
    .scrollBar(BarState.Off)
    .scrollable(ScrollDirection.Horizontal)

  }
//****************************************全部课程*****************************************//
  @Builder
  all(data:show){
  Row(){
    Image(this.getImage(data.iname))
      .width(100)
      .height(100)
      .borderRadius(12)

    Column(){
      Row() {
        Text(data.cname)
          .fontSize(15)
          .fontWeight(5)
          .width(200)
        Text()
          .width('22%')
      }
      Text('k'+data.difficulty+'级难度'+data.ctime+'分钟.'+data.ccalorie+'千卡')
        .fontSize(10)
        //.width('100%')
        .width(300).fontSize(12).padding(10)
        .lineHeight(20)
    }
  }
  .onClick(()=>{
    router.pushUrl({url:'pages/class',params:{token:this.token,courseId:data.id,vip:this.vip,userId:this.userId}})
  })
  .padding(5)

}
  @Builder
  allContents(dataALL:show[]){
    Column(){
      Row(){
        Text('全部课程')
          .fontSize(30)
        Text()
          .width('80%')
      }
      Column({ space: 5 }) {
        List(){
          ForEach(dataALL, (item3: show) => {
            ListItem() {
              this.all(item3)
            }
          })
          if(this.isloading){
            ListItem(){
              Row({space:10}){
                Text().width('30%')
                Text('加载中')
                LoadingProgress().width(50).height(50)
              }
            }
          }
        }
        .scrollBar(BarState.Off)
        .onScrollIndex((start:number,end:number)=>{
          if(end==this.datas.length-1){
            this.isloading=true
            setTimeout(()=>{
              this.isloading = false
            },2000)
          }
        })
      }.height('80%')
    }

  }



  //****************************************Building*****************************************//
  aboutToAppear(): void {
    this.getShowContent()
  }

  build() {
    if (this.isShow) {

      Column({ space: 15 }) {

        this.Top()

        Scroll() {
          Column({ space: 15 }) {

            this.useFatloss(this.swiperCard)

            this.showContent(this.datas)

            Column({ space: 15 }) {
              this.recommendContend(this.datas)
              this.allContents(this.datas)
            }
          }
        }
        .scrollable(ScrollDirection.Vertical)
        .scrollBar(BarState.Off)
        .height('90%')

      }
      .padding('10')
      .width('100%')
      .height('100%')
    }
  }
}