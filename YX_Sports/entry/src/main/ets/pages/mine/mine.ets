import { promptAction, router } from "@kit.ArkUI"
import { url } from "@kit.ArkTS"
import { http } from "@kit.NetworkKit";
import address from "../../../resources/rawfile/IPaddress.json";
import { mineListType, mineNetWorkType, userInfoType } from "../../mod/mine/minewindows";

//获取账号头像
export  function  getAvatar(name:string) : string{
  switch (name){
    case '瘦成一道闪电':
      return '/image/mine/pho.png'
    default:
      return '/image/mine/head.png';
  }
}


@Component
export struct  Mine{
  @State isUpdate : boolean = false
  @State phoneNumber : string = ''
  @State token : string = ''
  @State  vip:number=0
  @State  userInfo : userInfoType = {} as userInfoType
  @State userId:number=this.userInfo.userId
  @StorageProp('bottomRectHeight')
  bottomRectHeight: number = 0;
  @StorageProp('topRectHeight')
  topRectHeight: number = 0;


  //数据
  data:mineListType[] = [
    {img:'/image/mine/a.png',title:"训练记录",id:0},
    {img:'/image/mine/b.png',title:"体重记录",id:1},
    {img:'/image/mine/c.png',title:"我的收藏",id:2},
    {img:'/image/mine/d.png',title:"每日食谱",id:3},
    {img:'/image/mine/e.png',title:"常见问题",id:4},
    {img:'/image/mine/f.png',title:"立即反馈",id:5}
  ]
  //列表选项UI
  @Builder
  items(data:mineListType){
    Row(){
      Image(data.img).size({width:25,height:25})
      Text(data.title)
        .fontSize(15)
        .fontColor(Color.Black)
        .margin({left:10})
      Image('/image/mine/rightBack.png')
        .width(15)
        .height(15)
        .margin({left:240})
    }
    .width('100%')
    .padding(20)
    //判断id确定跳转
    .onClick(()=>{
      if(data.id == 0){
        router.pushUrl({url:'pages/practice/TrainRecordPage',params:{token:this.token,userId:this.userId}})
      }
      if(data.id == 1){
        router.pushUrl({url:'pages/practice/WeightRecordPage',params:{token:this.token,userId:this.userId}})
      }
      if(data.id == 2){
        router.pushUrl({url:'pages/mine/collect'})
      }
      if(data.id == 4){
        router.pushUrl({url:'pages/mine/commonProblem'})
      }
      if(data.id == 5){
        router.pushUrl({url:'pages/home/suggestion'})
      }
    })
  }

  @Builder
  settingAndInformBuilder() {
    //设置与通知
    Row() {
      Image('/image/mine/set.png')
        .height(25)
        .width(25)
        .margin({ right: 20 })
        .onClick(() => {
          router.pushUrl({ url: 'pages/mine/settingPage' });
        });
      Image('/image/mine/msg.png')
        .width(28)
        .height(28)
        .onClick(() => {
          router.pushUrl({ url: 'pages/mine/sysInfo' });
        });
    }
    .width('100%')
    .height('20%')
    .justifyContent(FlexAlign.End)
    .padding({ right: 20 })
    .margin({ top: px2vp(this.topRectHeight) })
  }

  @Builder
  UserInfoBuilder() {
    Row({ space: 10 }) {
      // this.getAvatar(this.userInfo.username)
      Image(getAvatar(this.userInfo.username)).size({ width: 60, height: 60 })
        .onClick(()=>{
          router.pushUrl({url:'pages/mine/userInfo',params:{userInfo:this.userInfo,token:this.token,vip:this.vip}})
        })
      Column() {
        //this.userInfo.name
        Text(this.userInfo.username)
          .fontColor('#ffff')
          .fontSize(22)
          .width('100%');
        Row() {
          Text("LV"+this.vip)
            .fontColor('#ffff')
            .backgroundColor('#8174E7')
            .borderRadius(8)
            .width(50)
            .textAlign(TextAlign.Center);
        }
        .width('100%')
        .justifyContent(FlexAlign.Start);
      };
    }
    .padding(20)
    .height('40%')
    .width('100%')
  }
  //获取用户信息（头像,会员等级，昵称）
  async getUserInfo(){
    let httpRequest = http.createHttp()
    let encodeUserId = encodeURIComponent(this.userId)
    let u = address.IP+`/me?userId=${encodeUserId}`
    try {
      let respond = await httpRequest.request(u,{
        method:http.RequestMethod.GET,
        header: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${this.token}`
        }
      })
      let result = JSON.parse(respond.result as string) as mineNetWorkType
      if(result.code == 200){
        ///console.log("用户信息获取成功");

        this.userInfo = result.data
      }
      else{
        //console.log(result.message);
        //promptAction.showToast({message:"获取失败"})
      }
    }
    catch (error){
      promptAction.showToast({message:"请求错误"})
    }
  }
  // //连接后台后，当页面显示时获取用户信息
  // onPageShow(): void {
  //   promptAction.showToast({message:"正在获取数据"})
  //   const params = this.getUIContext().getRouter().getParams() as Record<string, string>;
  //   if(params){
  //     this.phoneNumber = params.phoneNumber
  //     this.token = params.token
  //   }
  //   this.getUserInfo()
  // }



  @Builder
  memberShipBuilder() {
    //会员
    Row() {
      Row() {
        Image('/image/mine/memberShip.png').size({ width: 25, height: 25 });
        Text("VIP会员 | 定制专属健身")
          .fontColor('#FBDEB9')
          .width('100%')
          .fontSize(18)
          .margin({ left: 5 });
      }
      .width('60%')
      .margin({ left: 10 });

      Row() {
        Text("立即开通");
        Image('/image/mine/rightBack.png').size({ width: 10, height: 10 });
      }
      .height(24)
      .width(90)
      .margin({ right: 10 })
      .justifyContent(FlexAlign.Center)
      .backgroundColor('#FFE3BE')
      .borderRadius(10)
      .onClick(()=>{
        router.pushUrl({url:'pages/plan/vip',params:{userId:this.userId,token:this.token}})
      })

    }
    .linearGradient({
      angle: GradientDirection.Left,
      colors: [['#4C4C4D', 0], ['#3D3D3D', 0.3], ['#1E1E1E', 0.9]]
    })
    .borderRadius({
      topLeft: 15,
      topRight: 15,
      bottomLeft: 0,
      bottomRight: 0
    })
    .width('90%')
    .layoutWeight(1)
    .justifyContent(FlexAlign.SpaceBetween)
  }

aboutToAppear(): void {
  this.getUserInfo()
}


  build() {
    Column() {
      //顶部
      Column() {
        //设置与通知
        this.settingAndInformBuilder()
        //头像
        this.UserInfoBuilder()
        //会员
        if(this.vip===0) {
          this.memberShipBuilder()
        }
      }
      .height('30%')
      .width('100%')
      .linearGradient({
        angle:GradientDirection.LeftTop,
        colors:[['#B5C0EF',0],['#7460E5',1]]
      })
      //列表项
      Column({space:20}){
        ForEach(this.data,(i:mineListType) => {
          this.items(i)
        })
      }
    }
    .width('100%')
    .height('100%')
  }
}

