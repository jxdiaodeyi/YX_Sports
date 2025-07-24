import { curves, router } from '@kit.ArkUI';

interface GeneratedTypeLiteralInterface_1 {
  title: string;
  options: Array<string>;
}

interface GeneratedTypeLiteralInterface_2 {
  title: string;
  options: string[];
}

@Entry
@Component
struct NormalQuestionPage {
  // 当前展开的下拉菜单索引，-1表示都不展开
  @State expandedIndex: number = -1;

  // 下拉数据源
  private dropdowns: Array<GeneratedTypeLiteralInterface_1> = [
    {
      title: '为什么视频加载不出来',
      options: ['这是一段描述1', '这是一段描述2', '这是一段描述3'] as string[]
    },
    {
      title: '如何找回密码',
      options: ['通过手机号找回', '通过邮箱找回', '联系客服'] as string[]
    },
    {
      title: '账号无法登录',
      options: ['检查网络连接', '更新应用版本', '清除缓存'] as string[]
    }
  ];

  build() {
    Column() {
      Text().height(40)
      // 标题栏
      Row() {
        Image($r('app.media.return'))
          .width(20)
          .height(20)
          .margin({ left: 5 })
          .onClick(() => {
            router.back();
          });
        Text('常见问题')
          .fontColor('#333333')
          .fontSize(20)
          .fontWeight(600);
        Text(' ');
      }
      .justifyContent(FlexAlign.SpaceBetween)
      .width('100%')
      .height(30);

      // 多个下拉框列表
      Column({ space: 3 }) {
        ForEach(this.dropdowns, (item: GeneratedTypeLiteralInterface_2, index) => {
          this.renderDropdown(item.title, item.options, index);
        }, (item: GeneratedTypeLiteralInterface_2) => item.title);
      }
      .width('100%')
      //.padding(10)
      .backgroundColor('#F2F2F2');

    }
    .height('100%')
    .width('100%');
  }

  // 渲染单个下拉框组件
  @Builder
  renderDropdown(title: string, options: Array<string>, index: number) {
    Column({ space: 3 }) {
      Row() {
        Text(title)
          .fontSize(16)
          .padding(12)
          //.width('100%')
          .height(40)
          //.backgroundColor('#F5F5F5')
          .borderRadius(8);

        Image(this.expandedIndex === index ? $r('app.media.arrow_up') : $r('app.media.arrow_down'))
          .width(16)
          .height(16)
          //.margin({ right: 12 });
      }
      .justifyContent(FlexAlign.SpaceBetween)
      .backgroundColor('#FEFEFE')
      .height(60)
      .width('100%')
      .onClick(() => {
        // 点击切换展开/收起状态
        animateTo({
          duration: 200, // 动画持续时间
        }, () => {
          if (this.expandedIndex === index) {
            this.expandedIndex = -1; // 收起自己
          } else {
            this.expandedIndex = index; // 展开自己，其他自动关闭
          }
        });
      });

      // 显示选项列表
      if (this.expandedIndex === index) {
        List() {
          ForEach(options, (option: string) => {
            ListItem() {
              Text(option)
                .fontSize(16)
                .padding(12)
                .width('100%')
                .onClick(() => {
                  // 可以在这里设置选中值等操作
                  console.info(`选择了：${option}`);
                  this.expandedIndex = -1; // 选择后关闭
                });
            };
          });
        }
        .width('100%')
        .height(120)
        .backgroundColor('#EEF7FE')
        .borderRadius(8)
        .margin({ top: 4 })
        .shadow({ radius: 4 });
      }
    }
    .width('100%');
  }
}