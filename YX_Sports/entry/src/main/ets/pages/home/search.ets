import { App, promptAction, router } from '@kit.ArkUI'
import address from '../../../resources/rawfile/IPaddress.json'
import {searchContent,searchNetWorkType}from '../../mod/home/searchType'
import { http } from '@kit.NetworkKit';

import { JSON } from '@kit.ArkTS';

@Entry
@Component
struct search {
  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;
  @State token:string=(this.getUIContext().getRouter().getParams()as searchNetWorkType).token
  @State isShow:boolean=false
  @State index:number=0

  //***************************全体数据***************************//
  datas:searchContent[]=[]

  //***************************热搜数据***************************//
  hotWords: string[] = [
    '快速瘦身攻略', '生理期减脂', '极速燃脂',
    '瘦小腿', '产后修复', '帕梅拉'
  ];

  //颜色
  hotColors: string[] = [
    '#FF5722', '#E91E63', '#2196F3',
    '#4CAF50', '#9C27B0', '#FF9800'
  ];

//*********************************** 顶部搜索栏 ******************************************//
  @Builder
  topSearch(){
    Row({ space: 15 }) {
      Image('image/home/search.png')
        .width(20)
        .height(20)
        .onClick(() => {
          router.pushUrl({ url: 'pages/home/result' })
        })

      TextInput({ placeholder: '请输入关键词' })
        .type(InputType.Normal)
        .width('80%')
        .height(40)

      Text('取消')
        .fontSize(15)
        .onClick(() => {
          router.back()
        })
    }
    .padding(15)
    .width('100%')
    .height(50)
    .borderRadius(25)
    .backgroundColor('#40f5f5f5')

  }

//****************************************历史搜索 ********************************************//
  @Builder
  historySearch(){
    Column({ space: 5 }) {
      Row() {
        Text('历史搜索').fontSize(20)
        Image('/image/home/trash.png')
          .width(20)
          .height(20)
          .margin({right:10})
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceBetween)
      .padding({left:10,top:5,bottom:5})

      Row({space:5}) {
        Text('减脂')
          .fontSize(17)
          .backgroundColor('#FFEEEE')
          .borderRadius(15)
          .height(30)
          .padding({ left: 15, right: 15 })
        Text('增肌')
          .fontSize(17)
          .backgroundColor('#FFEEEE')
          .borderRadius(15)
          .height(30)
          .padding({ left: 15, right: 15 })
        Text('塑性')
          .fontSize(17)
          .backgroundColor('#FFEEEE')
          .borderRadius(15)
          .height(30)
          .padding({ left: 15, right: 15 })
        Text('有氧')
          .fontSize(17)
          .backgroundColor('#FFEEEE')
          .borderRadius(15)
          .height(30)
          .padding({ left: 15, right: 15 })
      }
      .padding(15)
    }
    .width('100%')
    .justifyContent(FlexAlign.Start)
    .alignItems(HorizontalAlign.Start)

  }

//**************************************** 热搜榜 *********************************************//
  @Builder
  hotSearchItem(text: string, color: string) {
    Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {
      // 热搜图标
      Image('image/home/fire.png')
        .width(24)
        .height(24)
        .margin({ right: 12 })

      // 热搜文本
      Text(text)
        .fontSize(13)
        .fontColor(color)
        .fontWeight(300)
    }
    .backgroundColor('#F1F3F2')
    .height(40)
    .width(100)
    .borderRadius(10)
    .margin({left:5,right:5,bottom:5})
  }
  @Builder
  hotSearch(){
    Column() {
      Text('热搜榜')
        .fontSize(20)
        .width('100%')
        .padding(15)

      // 使用Flex换行布局
      Flex({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap, }) {
        ForEach(this.hotWords, (item: string, index: number) => {
          this.hotSearchItem(item, this.hotColors[index])

        })
      }
      .width('100%')

    }
    .width('100%')
    .justifyContent(FlexAlign.Start)
    .padding(15)

  }
//**************************************** 推荐运动列表 *********************************************//
  @Builder
  recommandItem(item:searchContent,index:number){
    Column(){
      Row(){
        Text(index+"")
          .width(30)
          .height(30)
          .padding({right:15})
        Image(this.getImage(item.iname)).width(100)
          .height(100)
          .borderRadius(12)
        Column(){
          Text(item.cname).fontSize(15)
            .fontWeight(5)
            .width('70%')

          Text('k'+item.difficulty+'级难度'+item.ctime+'分钟.'+item.ccalorie+'千卡')
            .fontSize(10)
            .padding({top:15})
        }
        .width('100%')
        .alignItems(HorizontalAlign.Start)
        .padding(15)
      }
      .width('100%')
      .padding({right:15})
      .onClick(()=>{
        router.pushUrl({url:'pages/class',params:{token:this.token,courseId:item.id}})
      })
    }
    .margin(5)
  }
  @Builder
  recommandList(itemArray:searchContent[]){
    Column() {
      ForEach(itemArray, (items: searchContent) => {
        ListItem() {
          this.recommandItem(items,++this.index)
        }
      })
    }
    .borderRadius(15)
    .padding(15)
    .width('90%')
    .linearGradient({
      direction:GradientDirection.Top,
      colors:[[0xFFFFFF,0],[0xFFEDED,3]]
    })

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
  async getRcommandContent(){
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
      let result=JSON.parse(response.result as string)as searchNetWorkType;
      if (result.code===200)
      {
        this.datas=result.data;
        this.isShow=true;
      }
    }catch (e) {
      promptAction.showToast({message:"网络错误"})
    }
  }

  //**************************************** build *********************************************//
  aboutToAppear(): void {
    this.getRcommandContent()
  }

  build() {
    if(this.isShow) {
      Column({ space: 20 }) {
        // 搜索栏
        this.topSearch()

        Scroll() {
          Column() {
            // 历史搜索
            this.historySearch()

            // 热搜榜
            this.hotSearch()

            // 推荐列表
            this.recommandList(this.datas)

            Text().height(45)
          }
        }
        .scrollable(ScrollDirection.Vertical) // 确保可以垂直滚动
        .scrollBar(BarState.Off)
      }
      .padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) })
    }
  }
}