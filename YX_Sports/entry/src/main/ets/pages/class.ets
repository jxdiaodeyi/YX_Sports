import { text } from '@kit.ArkGraphics2D'
import { promptAction, router } from '@kit.ArkUI'
import { http } from '@kit.NetworkKit'
import address from '../../resources/rawfile/IPaddress.json'
import classNetWorkType, { classInfoNetWorkType, classInfoType, classType} from '../mod/home/classType'


interface pageInfoType{
  token:string,
  courseId:number,
  vip:number,
  userId:number
}

interface commentUser
{
  img:string
  name:string
  date:string
  num:number
  content:string
  heart:string
  redheart:string
  flag:boolean
}

@Entry
@Component
struct Page {

  @State message: string = 'Hello World';
  @State isOnWarm: boolean = false;
  @State isOnRelax: boolean = false;
  @State isShowTitle: boolean = false;
  @State isShowTrain:boolean=false;
  @State token: string = (this.getUIContext().getRouter().getParams() as pageInfoType).token
  @State courseId: number = (this.getUIContext().getRouter().getParams() as pageInfoType).courseId
  @State vip: number = (this.getUIContext().getRouter().getParams() as pageInfoType).vip
  @State userId: number = (this.getUIContext().getRouter().getParams() as pageInfoType).userId
  //**********************课程信息数据**********************//
  @State datas: classType = Object()
  //**********************课程具体内容数据**********************//
  @State courseDate: classInfoType = Object()

  //**********************评论数据**********************//
  @State comment: commentUser[] = [
    {
      img: '/image/home/class8.png',
      name: '西瓜',
      date: '11-20',
      num: 122,
      content: '好累啊,不过拉伸完还是很放松的',
      heart: '/image/home/class9.png',
      redheart: '/image/home/class10.png',
      flag: false
    },
    {
      img: '/image/home/class8.png',
      name: '西瓜',
      date: '11-20',
      num: 122,
      content: '好累啊,不过拉伸完还是很放松的',
      heart: '/image/home/class9.png',
      redheart: '/image/home/class10.png',
      flag: false
    },
    {
      img: '/image/home/class8.png',
      name: '西瓜',
      date: '11-20',
      num: 122,
      content: '好累啊,不过拉伸完还是很放松的',
      heart: '/image/home/class9.png',
      redheart: '/image/home/class10.png',
      flag: false
    },
    {
      img: '/image/home/class8.png',
      name: '西瓜',
      date: '11-20',
      num: 122,
      content: '好累啊,不过拉伸完还是很放松的',
      heart: '/image/home/class9.png',
      redheart: '/image/home/class10.png',
      flag: false
    },
    {
      img: '/image/home/class8.png',
      name: '西瓜',
      date: '11-20',
      num: 122,
      content: '好累啊,不过拉伸完还是很放松的',
      heart: '/image/home/class9.png',
      redheart: '/image/home/class10.png',
      flag: false
    },
    {
      img: '/image/home/class8.png',
      name: '西瓜',
      date: '11-20',
      num: 122,
      content: '好累啊,不过拉伸完还是很放松的',
      heart: '/image/home/class9.png',
      redheart: '/image/home/class10.png',
      flag: false
    }
  ]
  //**********************热身动作数据**********************//
  @State warmUpArry: string[] = []
  @State warmUpArryCount: number[] = []
  //**********************训练动作数据**********************//
  @State trainArry: string[] = []
  @State trainArryCount: number[] = []
  //**********************放松动作数据**********************//
  @State relaxArry: string[] = []
  @State relaxArryCount: number[] = []

  //**************************标题**************************//
  @Builder
  title(classInfo: classType) {
    Column({ space: 10 }) {
      Text(classInfo.cname)
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .width('100%')
      Row() {
        Row() {
          Image("/image/home/class2.png")
            .width(30)
            .height(30)
          Text(classInfo.ctime + '分钟')
            .fontWeight(FontWeight.Bold)
            .fontSize(20)
            .padding(5)
        }
        .justifyContent(FlexAlign.Start)

        Row() {
          Image("/image/home/class3.png")
            .width(30)
            .height(30)

          Text('k' + classInfo.difficulty + '难度')
            .fontWeight(FontWeight.Bold)
            .fontSize(20)
            .padding(5)
        }
        .justifyContent(FlexAlign.Center)
        .width('35%')
        .border({
          width: {
            top: 0,
            bottom: 0,
            left: 1,
            right: 1
          },
          color: { left: '#f7fafa', right: '#f7fafa' }
        })

        Row() {
          Image("/image/home/class4.png")
            .width(30)
            .height(30)
          Text(classInfo.ccalorie + '卡路里')
            .fontWeight(FontWeight.Bold)
            .fontSize(20)
            .padding(10)
        }
        .justifyContent(FlexAlign.Start)
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)

      Text('每天坚持这几个腹部动作，能够有效的减去腹部脂肪，一周见效！')
        .fontColor('#C4A699')
    }
    .margin({ bottom: 15 })
  }
  @Builder
  titleback(data: classType) {
    Column() {
      Stack({ alignContent: Alignment.Top }) {
        Image("/image/home/" + data.iname)
          .width('100%')
          .height(200)
        Column() {
          Text().height(40)
          Image("/image/home/return.png")
            .width(40)
            .height(40)
            .onClick(() => {
              router.back({url: '',params:{token:this.token}})
            })
        }
        .alignItems(HorizontalAlign.Start)
        .width("100%")
      }
    }
    .width('100%')
    .height("100%")
  }

  //**************************训练音乐**************************//
  @Builder
  trainMusic() {
    Row() {
      Column() {
        Text('训练音乐')
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
          .margin({ top: 25, bottom: 10 })
          .width('100%')
        Text('Bright FUtures')
          .fontColor('#C4A699')
          .fontSize(25)
          .margin({ bottom: 25 })
          .width('100%')
      }
      .width('80%')

      Image('/image/home/class5.png')
        .width(50)
        .onClick(() => {
          router.pushUrl({ url: "pages/home/trainMusic" })
        })
    }
    .width('100%')
    .border({
      width: {
        top: 1,
        bottom: 1,
        left: 0,
        right: 0
      },
      color: { top: '#F2F4F6', bottom: '#F2F4F6' }
    })
  }

  //**************************主体内容**************************//
  @Builder
  trainContent() {
    Column() {
      Column() {
        //热身
        Row() {
          Text('热身·'+this.warmUpArry.length+'个')
            .width('80%')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
          Toggle({ type: ToggleType.Switch, isOn: this.isOnWarm })
            .onChange((isOn: boolean) => {
              this.isOnWarm = isOn
              console.log('开关状态:', isOn);
            })
            .width(50)
            .height(30)
        }
        .width('100%')
        Column() {
          ForEach(this.warmUpArry, (data: string, index: number) => {
            this.warmUpItemUI(data, index)
          })
        }
        .border({
          width: {
            top: 0,
            bottom: 1,
            left: 0,
            right: 0
          },
          color: { top: '#F2F4F6', bottom: '#F2F4F6' }
        })
        .margin(20)
        .width('100%')
        //训练
        Row() {
          Text('训练·'+this.trainArry.length+'个')
            .width('80%')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
        }
        .width('100%')
        Column() {
          ForEach(this.trainArry, (data: string, index: number) => {
            this.trainItemUI(data, index)
          })
        }
        .width('100%')
        .margin({ top: 20 })
      }
      .margin({ top: 15 })
      //拉伸放松
      Row() {
        Text('拉伸放松·'+this.relaxArry.length+'个')
          .width('80%')
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
        Toggle({ type: ToggleType.Switch, isOn: this.isOnRelax })
          .onChange((isOn: boolean) => {
            this.isOnRelax = isOn
            console.log('开关状态:', isOn);
          })
          .width(50)
          .height(30)
      }
      .width('100%')
      Column() {
        ForEach(this.relaxArry, (data: string, index: number) => {
          this.relaxItemUI(data, index)
        })
      }
      .border({
        width: {
          top: 0,
          bottom: 1,
          left: 0,
          right: 0
        },
        color: { top: '#F2F4F6', bottom: '#F2F4F6' }
      })
      .width('100%')
    }
  }
  //**********热身动作**********//
  @Builder
  warmUpItemUI(name: string, index: number) {
    Row() {
      Image('/image/home/class1.png')
        .width(100)
        .height(100)
        .margin({ right: 20, bottom: 10 })
      Column() {
        Text(name)
          .margin({ bottom: 20 })
          .width('100%')
        Text(this.warmUpArryCount[index] + 'S')
          .width('100%')
      }
    }
    .width('100%')
  }
  warmUp(data: classInfoType) {
    if (data.catStretch === 1) {
      this.warmUpArry.push("猫式伸展")
      this.warmUpArryCount.push(data.catStretchCount)
    }
    if (data.highKnee === 1) {
      this.warmUpArry.push("高抬腿")
      this.warmUpArryCount.push(data.highKneeCount)
    }
    if (data.jumpJack === 1) {
      this.warmUpArry.push("开合跳")
      this.warmUpArryCount.push(data.jumpJackCount)
    }
  }
  //**********训练动作**********//
  @Builder
  trainItemUI(name: string, index: number) {
    Row() {
      Image('/image/home/class1.png')
        .width(100)
        .height(100)
        .margin({ right: 20, bottom: 10 })
      Column() {
        Text(name)
          .margin({ bottom: 20 })
          .width('100%')
        Text(this.trainArryCount[index] + 'S')
          .width('100%')
      }
    }
    .width('100%')
  }
  train(data: classInfoType) {
    if (data.armCircle === 1) {
      this.trainArry.push("手臂环绕")
      this.trainArryCount.push(data.armCircleCount)
    }
    if (data.neckCircle === 1) {
      this.trainArry.push("颈部环绕")
      this.trainArryCount.push(data.neckCircleCount)
    }
    if (data.waistTwist === 1) {
      this.trainArry.push("腰部扭转")
      this.trainArryCount.push(data.waistTwistCount)
    }
    if (data.kneeCircle === 1) {
      this.trainArry.push("膝关节环绕")
      this.trainArryCount.push(data.kneeCircleCount)
    }
    if (data.lungeWalk === 1) {
      this.trainArry.push("弓步走")
      this.trainArryCount.push(data.lungeWalkCount)
    }
  }
  //**********放松动作**********//
  @Builder
  relaxItemUI(name: string, index: number) {
    Row() {
      Image('/image/home/class1.png')
        .width(100)
        .height(100)
        .margin({ right: 20, bottom: 10 })
      Column() {
        Text(name)
          .margin({ bottom: 20 })
          .width('100%')
        Text(this.relaxArryCount[index] + 'S')
          .width('100%')
      }
    }
    .width('100%')
  }
  relax(data: classInfoType) {
    if (data.sideLung === 1) {
      this.relaxArry.push("体侧拉伸")
      this.relaxArryCount.push(data.sideLungCount)
    }
    if (data.gluteActive === 1) {
      this.relaxArry.push("臀部激活")
      this.relaxArryCount.push(data.gluteActiveCount)
    }
  }
  //**********获取课程内容网络**********//
  async getShowTrainContent() {
    let httpRequest = http.createHttp();
    let encodedClass = encodeURIComponent(this.courseId); // 编码中文
    let url = address.IP + `/getCourseContent?courseid=${encodedClass}`;
    try {
      let response = await httpRequest.request(url, {
        method: http.RequestMethod.GET,
        header: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });
      let result = JSON.parse(response.result as string) as classInfoNetWorkType;
      if (result.code === 200) {
        this.courseDate = result.data;
        this.warmUp(this.courseDate)
        this.train(this.courseDate)
        this.relax(this.courseDate)
        this.isShowTrain = true;
      }
    } catch (e) {
      promptAction.showToast({ message: "网络错误" })
    }
  }
  //**********获取课程信息网络**********//
  async getShowContent() {
    let httpRequest = http.createHttp();
    let encodedClass = encodeURIComponent(this.courseId); // 编码中文
    let url = address.IP + `/getSingleCourse?id=${encodedClass}`;
    try {
      let response = await httpRequest.request(url, {
        method: http.RequestMethod.GET,
        header: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });
      let result = JSON.parse(response.result as string) as classNetWorkType;
      if (result.code === 200) {
        this.datas = result.data;
        this.isShowTitle = true;
      }
    } catch (e) {
      promptAction.showToast({ message: "网络错误" })
    }
  }

  //**************************评论**************************//
  @Builder
  recommendContent() {
    Column() {
      Text('课程评价')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 15 })
        .width('100%')

      Row() {
        Image('/image/home/class7.png')
          .width(50)
          .height(50)
          .margin({ right: 10 })
        TextInput({ placeholder: '留下你的精彩评论' })
          .width('80%')
      }
      .width('100%')
      .margin({ top: 10 })

      Column() {
        ForEach(this.comment, (data: commentUser, index: number) => {
          this.comUserUi(data, index)
        })
      }


      Text('——————我是有底线的———————')
        .fontColor('#C4A699')
        .width('100%')
        .margin({ top: 20, bottom: 10 })
        .textAlign(TextAlign.Center)
      if(this.vip===0) {
        Button('成为会员，即刻开练')
          .onClick(() => {
            router.pushUrl({ url: "pages/plan/vip",params:{userId:this.userId,token:this.token}})
          })
          .backgroundColor("#FF9900")
          .width('80%')
          .margin({ bottom: 10 })
      }
    }
  }
  @Builder
  comUserUi(data: commentUser, num: number) {
    Column() {
      Row() {
        Row() {
          Image(data.img)
            .width(50)
            .height(50)
          Column() {
            Text(data.name)
              .margin({ bottom: 5 })
              .fontColor('#C4A699')
            Text(data.date)
              .fontColor('#C4A699')
          }
        }

        Row() {
          Image(data.flag ? data.redheart : data.heart)
            .width(20)
            .height(20)
            .margin({ right: 5 })
            .onClick(async () => {
              this.toggleLikeStatus(num)
            })
          Text(data.num + '')
            .fontColor('#C4A699')
        }
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceBetween)
      .margin({ top: 15, bottom: 15 })

      Text(data.content)
        .width('100%')
        .margin({ left: 40 })
    }
  }
  toggleLikeStatus(index: number) {
    // 创建新数组以触发UI更新
    this.comment = this.comment.map((item, i) => {
      if (i === index) {
        // 切换当前项的flag状态，并更新点赞数
        return {
          img: item.img,
          name: item.name,
          date: item.date,
          num: item.flag ? item.num - 1 : item.num + 1,
          content: item.content,
          heart: item.heart,
          redheart: item.redheart,
          flag: !item.flag
        };
      }
      return item;
    });
  }

  //**************************build**************************//
  aboutToAppear(): void {
    this.getShowContent()
    this.getShowTrainContent()
  }

  build() {
    if (this.isShowTitle && this.isShowTrain) {
      Scroll() {
        Stack({ alignContent: Alignment.Top }) {
          this.titleback(this.datas)
          Column() {
            this.title(this.datas)

            this.trainMusic()

            Column() {

              this.trainContent()

              this.recommendContent()

            }

          }
          .width('100%')
          .backgroundColor('white')
          .borderRadius(20)
          .padding(10)
          .margin({ top: 180 })
        }

      }
      .scrollable(ScrollDirection.Vertical)
    }
  }
}