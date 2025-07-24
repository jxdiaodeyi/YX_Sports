## 介绍

CustomizeKeyboard是一个自定义键盘组件库，目前支持英文、股票数字、车牌省份简称、车牌字母等常见自定义键盘。

目前功能项：

- 1、**支持英文键盘**
- 2、**支持股票代码键盘**
- 3、**支持车牌省份键盘**
- 4、**支持车牌字母键盘**

## 开发环境

DevEco Studio NEXT Developer Beta1,Build Version: 5.0.7.200

Api版本：**12**

modelVersion：5.0.0

## 效果

<p align="center">
<img src="https://vipandroid-image.oss-cn-beijing.aliyuncs.com/harmony/keyboard/keyboard_01.png" width="150px" />
<img src="https://vipandroid-image.oss-cn-beijing.aliyuncs.com/harmony/keyboard/keyboard_02.png" width="150px" />
<img src="https://vipandroid-image.oss-cn-beijing.aliyuncs.com/harmony/keyboard/keyboard_03.png" width="150px" />
<img src="https://vipandroid-image.oss-cn-beijing.aliyuncs.com/harmony/keyboard/keyboard_04.png" width="150px" />
</p>

## 快速使用

有多种使用方式，比如远程依赖、本地静态共享包依赖,源码方式依赖，推荐使用**远程依赖**，方便快捷，有最新修改可以及时生效。

### 1、远程依赖方式使用【推荐】

方式一：在Terminal窗口中，执行如下命令安装三方包，DevEco Studio会自动在工程的oh-package.json5中自动添加三方包依赖。

**建议：在使用的模块路径下进行执行命令。**

```
ohpm install @abner/keyboard
```

方式二：在工程的oh-package.json5中设置三方包依赖，配置示例如下：

```
"dependencies": { "@abner/keyboard": "^1.0.2"}
```

<p align="center"><img src="https://vipandroid-image.oss-cn-beijing.aliyuncs.com/harmony/keyboard/keyboard_06.jpg" width="300"></p>

### 查看是否引用成功

无论使用哪种方式进行依赖，最终都会在使用的模块中，生成一个oh_modules文件，并创建源代码文件，有则成功，无则失败，如下：

<p align="center"><img src="https://vipandroid-image.oss-cn-beijing.aliyuncs.com/harmony/keyboard/keyboard_05.jpg" width="300"></p>

## 代码使用

### 1、车牌省份简称


```typescript

LicensePlateView({
  onItemClick: (item: string, index: number) => {
    //点击事件
    console.log("=====点击内容：" + item + "===点击索引：" + index)
  },
  onDelete: () => {
    //点击删除
    console.log("=====点击删除")
  }
})

```

**属性介绍**

| 属性                    | 类型                                       | 概述          |
|-----------------------|------------------------------------------|-------------|
| onItemClick           | (item: string, index: number) => void    | 点击条目回调      |
| onDelete              | () => void                               | 点击删除回调      |
| onComplete            | (item: string) => void                   | 点击完成回调      |
| rowsGap               | Length                                   | 行间距         |
| columnsGap            | Length                                   | 列间距         |
| columnSize            | number                                   | 展示几列，默认是10列 |
| bgColor               | ResourceColor                            | 背景颜色        |
| marginLeft            | Length                                   | 距离左边        |
| marginRight           | Length                                   | 距离右边        |
| rectHeight            | Length                                   | 每个格子高度      |
| titleHeight           | Length                                   | 标题栏高度       |
| rootHeight            | Length                                   | 键盘整体的高度     |
| gridMarginTop         | Length                                   | 网格距离顶部      |
| gridMarginBottom      | Length                                   | 网格距离底部      |
| completeTextColor     | ResourceColor                            | 完成按钮的颜色     |
| completeFontSize      | number/string/ Resource                  | 完成文字大小      |
| isShowComplete        | boolean                                  | 是否显示完成按钮    |
| rectBgColor           | ResourceColor                            | 格子背景        |
| rectSelectBgColor     | ResourceColor                            | 格子选中背景      |
| rectBorderWidth       | Length                                   | 格子边框宽度      |
| rectBorderRadius      | Length                                   | 格子圆角        |
| rectBorderColor       | ResourceColor                            | 格子边框颜色      |
| rectBorderSelectColor | ResourceColor                            | 格子选中边框颜色    |
| rectTextSize          | Length                                   | 格子的文字大小     |
| rectTextColor         | Length                                   | 格子文字的默认颜色   |
| rectSelectTextColor   | ResourceColor                            | 格子文字的选中颜色   |
| prohibit              | boolean                                  | 是否禁止后面的车牌简称 |
| deleteIconWidth       | Length                                   | 删除图片宽度      |
| deleteIconSrc         | PixelMap/ResourceStr/ DrawableDescriptor | 删除icon资源    |

### 2、车牌字母键盘

```typescript
LicensePlateLetterView({
  onItemClick: (item: string, index: number) => {
    //点击事件
    console.log("=====点击内容：" + item + "===点击索引：" + index)
  },
  onDelete: () => {
    //点击删除
    console.log("=====点击删除")
  }
})
```

**属性介绍**


| 属性                    | 类型                                       | 概述          |
|-----------------------|------------------------------------------|-------------|
| onItemClick           | (item: string, index: number) => void    | 点击条目回调      |
| onDelete              | () => void                               | 点击删除回调      |
| onComplete            | (item: string) => void                   | 点击完成回调      |
| rowsGap               | Length                                   | 行间距         |
| columnsGap            | Length                                   | 列间距         |
| columnSize            | number                                   | 展示几列，默认是10列 |
| bgColor               | ResourceColor                            | 背景颜色        |
| marginLeft            | Length                                   | 距离左边        |
| marginRight           | Length                                   | 距离右边        |
| rectHeight            | Length                                   | 每个格子高度      |
| titleHeight           | Length                                   | 标题栏高度       |
| rootHeight            | Length                                   | 键盘整体的高度     |
| gridMarginTop         | Length                                   | 网格距离顶部      |
| gridMarginBottom      | Length                                   | 网格距离底部      |
| completeTextColor     | ResourceColor                            | 完成按钮的颜色     |
| completeFontSize      | number/string/ Resource                  | 完成文字大小      |
| isShowComplete        | boolean                                  | 是否显示完成按钮    |
| rectBgColor           | ResourceColor                            | 格子背景        |
| rectSelectBgColor     | ResourceColor                            | 格子选中背景      |
| rectBorderWidth       | Length                                   | 格子边框宽度      |
| rectBorderRadius      | Length                                   | 格子圆角        |
| rectBorderColor       | ResourceColor                            | 格子边框颜色      |
| rectBorderSelectColor | ResourceColor                            | 格子选中边框颜色    |
| rectTextSize          | Length                                   | 格子的文字大小     |
| rectTextColor         | Length                                   | 格子文字的默认颜色   |
| rectSelectTextColor   | ResourceColor                            | 格子文字的选中颜色   |
| numProhibit           | boolean                                  | 是否禁止数字      |
| numProhibitColor      | ResourceColor                            | 禁止文字颜色      |
| deleteIconWidth       | Length                                   | 删除图片宽度      |
| deleteIconSrc         | PixelMap/ResourceStr/ DrawableDescriptor | 删除icon资源    |

### 3、股票代码键盘

```typescript
StockCodeView({
        onItemClick: (item: string, index: number) => {
          //点击事件
          console.log("=====点击内容：" + item + "===点击索引：" + index)
        },
        onDelete: () => {
          //点击删除
          console.log("=====点击删除")
        },
        onHide: () => {
          //点击隐藏
          console.log("=====点击隐藏")
        },
        onClear: () => {
          //点击清空
          console.log("=====点击清空")
        },
        onConfirm: () => {
          //点击确认
          console.log("=====点击确认")
        }
      })
```

**属性介绍**


| 属性               | 类型                                          | 概述         |
|------------------|---------------------------------------------|------------|
| onItemClick      | (item: string, index: number) => void       | 点击条目回调     |
| onDelete         | () => void                                  | 点击删除回调     |
| onHide           | () => void                                  | 点击隐藏回调     |
| onClear          | () => void                                  | 点击清空回调     |
| onConfirm        | () => void                                  | 点击确认回调     |
| bgColor          | ResourceColor                               | 背景颜色       |
| codeBgColor      | ResourceColor                               | code背景颜色   |
| numberColor      | ResourceColor                               | 数字背景颜色     |
| notNumberColor   | ResourceColor                               | 不是数字背景颜色   |
| rootHeight       | number                                      | 键盘总体的高度    |
| rectHeight       | Length                                      | 每个格子高度     |
| rowsGap          | Length                                      | 行间距        |
| columnsGap       | Length                                      | 列间距        |
| gridMarginTop    | Length                                      | 网格距离顶部     |
| gridMarginBottom | Length                                      | 网格距离底部     |
| rectBorderRadius | Length                                      | 格子边框圆角     |
| marginLeft       | Length                                      | 距离左边       |
| marginRight      | Length                                      | 距离右边       |
| deleteIconWidth  | Length                                      | 删除icon宽度   |
| deleteIconSrc    | PixelMap / ResourceStr / DrawableDescriptor | 删除icon资源   |
| rectTextSize     | Length                                      | 格子文字大小     |
| rectTextColor    | ResourceColor                               | 格子文字的默认颜色  |


### 4、股票代码键盘

```typescript
EnglishKeyboardView({
        onItemClick: (item: string) => {
          //点击事件
          console.log("=====点击内容：" + item)
        },
        onDelete: () => {
          //点击删除
          console.log("=====点击删除")
        },
        onComplete: () => {
          //点击确定
          console.log("=====点击确定")
        },
        onChinese: () => {
          //点击中文切换
          console.log("=====点击中文切换")
        },
        onSpace: () => {
          //点击空格
          console.log("=====点击空格")
        },
        onNumber: () => {
          //点击数字
          console.log("=====点击数字")
        }
      })
```

**属性介绍**


| 属性               | 类型                                        | 概述        |
|------------------|-------------------------------------------|-----------|
| onItemClick      | (item: string) => void                    | 点击条目回调    |
| onDelete         | () => void                                | 点击删除回调    |
| onComplete       | () => void                                | 点击完成回调    |
| onChinese        | () => void                                | 点击中文回调    |
| onSpace          | () => void                                | 点击空格回调    |
| onNumber         | () => void                                | 点击数字回调    |
| bgColor          | ResourceColor                             | 背景颜色      |
| englishBgColor   | ResourceColor                             | 英文背景颜色    |
| otherBgColor     | ResourceColor                             | 非英文背景颜色   |
| rectBorderWidth  | Length                                    | 格子边框宽度    |
| rectBorderRadius | Length                                    | 格子边框圆角    |
| rectTextSize     | Length                                    | 格子的文字大小   |
| rectTextColor    | ResourceColor                             | 格子文字的默认颜色 |
| deleteIconWidth  | Length                                    | 删除icon宽度  |
| deleteIconSrc    | PixelMap /ResourceStr /DrawableDescriptor | 删除icon资源  |
| rectHeight       | Length                                    | 每个格子高度    |
| marginTop        | Length                                    | 距离上边的距离   |
| marginBottom     | Length                                    | 距离下边的距离   |

## 更多案例

可以查看相关Demo【右侧仓库地址】。

## 咨询作者

如果您在使用上有问题，解决不了，或者查看精华的鸿蒙技术文章，可扫码进行操作。

<p><img src="https://vipandroid-image.oss-cn-beijing.aliyuncs.com/harmony/abner.jpg" width="150"></p>

## License

```
Copyright (C) AbnerMing, CustomizeKeyboard Open Source Project

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
