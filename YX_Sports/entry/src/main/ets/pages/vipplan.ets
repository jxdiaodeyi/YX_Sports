import router from "@ohos.router";

interface PlanItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  selected: boolean;
  backgroundColor: string;
  isFree?: boolean;
}

@Component
export struct SubscriptionPlan {
  @State selectedPlanId: string = 'basic';
  @State plans: PlanItem[] = [
    {
      id: 'basic',
      title: '基本的计划',
      subtitle: '07天免费试用',
      price: '',
      selected: true,
      backgroundColor: '#E8F4FD',
      isFree: false
    },
    {
      id: 'advanced',
      title: '进阶计划',
      subtitle: '1个月30元',
      price: '',
      selected: false,
      backgroundColor: '#F5E6D3'
    },
    {
      id: 'premium',
      title: '高级计划',
      subtitle: '1年188元',
      price: '',
      selected: false,
      backgroundColor: '#F0E6F0'
    }
  ];

  // 回调函数
  onPlanSelected?: (planId: string) => void;
  onUnlockClick?: (planId: string) => void;

  selectPlan(planId: string) {
    this.selectedPlanId = planId;
    this.plans=this.plans.map((plan)=>{
      if(plan.id===planId)
      {
        return{
          id:plan.id,
          title:plan.title,
          subtitle:plan.subtitle,
          price:plan.price,
          selected:!plan.selected,
          backgroundColor:plan.backgroundColor,
          isFree:plan.isFree
        };
      }
      else
      {
        return{
          id:plan.id,
          title:plan.title,
          subtitle:plan.subtitle,
          price:plan.price,
          selected:false,
          backgroundColor:plan.backgroundColor,
          isFree:plan.isFree
        };
      }
      return plan;
    })
    // this.plans.forEach(plan => {
    //   plan.selected = plan.id === planId;
    // });

    if (this.onPlanSelected) {
      this.onPlanSelected(planId);
    }
  }

  handleUnlock() {
    if (this.onUnlockClick) {
      this.onUnlockClick(this.selectedPlanId);
    }
  }

  build() {
    Column() {
      // 头部图片区域
      Stack({ alignContent: Alignment.BottomStart }) {
        Image($r('app.media.musicBrank'))
          .width('100%')
          .height(280)
          .objectFit(ImageFit.Cover)
          .borderRadius({ topLeft: 0, topRight: 0, bottomLeft: 20, bottomRight: 20 })

        // 渐变遮罩
        Column()
          .width('100%')
          .height(280)
          .linearGradient({
            direction: GradientDirection.Bottom,
            colors: [['rgba(0,0,0,0)', 0], ['rgba(0,0,0,0.6)', 1]]
          })
          .borderRadius({ topLeft: 0, topRight: 0, bottomLeft: 20, bottomRight: 20 })

        Column({ space: 8 }) {
          Text('解锁你的个人专属计划')
            .fontSize(24)
            .fontColor('#FFFFFF')
            .fontWeight(FontWeight.Bold)

          Text('解锁所有功能和内容')
            .fontSize(16)
            .fontColor('#FFFFFF')
            .opacity(0.9)
        }
        .alignItems(HorizontalAlign.Start)
        .padding({ left: 24, bottom: 32 })
      }

      // 内容区域
      Column({ space: 24 }) {
        // 标题
        Column({ space: 8 }) {
          Text('30天免费试用')
            .fontSize(28)
            .fontColor('#333333')
            .fontWeight(FontWeight.Bold)

          Text('或者购买无限套餐')
            .fontSize(16)
            .fontColor('#999999')
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')

        // 计划选项
        Column({ space: 12 }) {
          ForEach(this.plans, (plan: PlanItem) => {
            Row() {
              Column({ space: 4 }) {
                Text(plan.title)
                  .fontSize(16)
                  .fontColor('#333333')
                  .fontWeight(FontWeight.Medium)

                Text(plan.subtitle)
                  .fontSize(14)
                  .fontColor('#666666')
              }
              .alignItems(HorizontalAlign.Start)
              .layoutWeight(1)

              // 选择圆圈
              Stack() {
                Circle()
                  .width(24)
                  .height(24)
                  .fill(plan.selected ? '#6C5CE7' : '#FFFFFF')
                  .strokeWidth(2)  // 单独设置边框宽度
                  .stroke(plan.selected ? '#6C5CE7' : '#CCCCCC')

                if (plan.selected) {
                  Text('✓')
                    .fontSize(14)
                    .fontColor('#FFFFFF')
                    .fontWeight(FontWeight.Bold)
                }
              }
            }
            .width('100%')
            .height(70)
            .backgroundColor(plan.backgroundColor)
            .borderRadius(12)
            .padding({ left: 20, right: 20 })
            .alignItems(VerticalAlign.Center)
            .onClick(() => {
              this.selectPlan(plan.id);
            })
          })
        }

        // 解锁按钮
        Button('立即解锁')
          .width('100%')
          .height(52)
          .backgroundColor('#6C5CE7')
          .fontColor('#FFFFFF')
          .fontSize(18)
          .fontWeight(FontWeight.Medium)
          .borderRadius(26)
          .margin({ top: 20 })
          .onClick(() => {
            router.replaceUrl({url:"pages/vip"})
          })

      }
      .padding({ left: 24, right: 24, top: 32 })
      .layoutWeight(1)

    }
    .width('100%')
    .height('100%')
    .backgroundColor('#FFFFFF')
  }
}
