/*
 * Copyright (C) 2024 桃花镇童长老 @pura/harmony-dialog
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import { TextPickerOptions } from '../model/TextPickerOptions';
import { ButtonOptions } from '../model/ButtonOptions';
import { Helper } from '../utils/Helper';
import { DialogAction, DialogThemeColorMode } from '../utils/constraint';
import { DialogHelper } from '../dialog/DialogHelper';
import { display } from '@kit.ArkUI';


/**
 * TODO TextPickerDialog组件
 * author: 桃花镇童长老ᥫ᭡
 * since: 2024/08/01
 */
@Preview
@Component
export struct TextPickerDialogView {
  @State selectValue: string | string[] = '';
  @Prop options: TextPickerOptions;
  @State title: string = ""; //标题
  @State primaryButton?: ButtonOptions = undefined; //弹框左侧按钮。
  @State secondaryButton?: ButtonOptions = undefined; //弹框右侧按钮。
  @State value: string | string[] = '';
  @State range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[] = [];
  @State isLargeScreen: boolean = false; //是否是大屏手机，例如Pad和展开的折叠屏；默认正常手机
  @StorageProp(DialogThemeColorMode) themeColorMode: ThemeColorMode =
    this.options.themeColorMode ?? ThemeColorMode.SYSTEM; //设置深色浅色，默认跟随系统。
  private foldStatusCallback: Callback<display.FoldStatus> = (foldStatus: display.FoldStatus) => {
    this.isLargeScreen = Helper.isLargeScreen();
  }
  aboutToAppear(): void {
    if (this.options.value) {
      this.value = this.options.value;
    } else {
      if (this.options.range instanceof Array) {
        let pickerItem = this.options.range[0];
        if (typeof pickerItem == 'string') { ///string[]
          this.value = pickerItem;
        } else if (pickerItem instanceof Array) { //string[][]
          let selected: string[] = [];
          let range = this.options.range as string[][];
          for (let index = 0; index < range.length; index++) {
            selected.push(range[index][0]);
          }
          this.value = selected;
        } else if ((pickerItem as TextPickerRangeContent).icon) { //TextPickerRangeContent
          this.value = Helper.getResourceStr(pickerItem.text ?? "") ?? ""
        } else {
          this.value = [];
          this.recursionPickerRange(this.options.range as TextCascadePickerRangeContent[])
        }
      } else { //Resource
        let array = getContext().resourceManager.getStringArrayValueSync(this.options.range);
        if (array && array.length > 0) {
          this.value = array[0];
        }
      }
    }
    this.selectValue = this.value;
    if (this.options.title) {
      this.title = Helper.getResourceStr(this.options.title) ?? "";
    }
    this.primaryButton = this.options.primaryButton as ButtonOptions;
    this.secondaryButton = this.options.secondaryButton as ButtonOptions;
    this.isLargeScreen = Helper.isLargeScreen();
    //开启折叠设备折叠状态变化的监听。
    display.on('foldStatusChange', this.foldStatusCallback);
  }

  aboutToDisappear(): void {
    //关闭折叠设备折叠状态变化的监听。
    display.off('foldStatusChange', this.foldStatusCallback);
  }

  /**
   * 递归获取默认值
   */
  recursionPickerRange(pickerRange: TextCascadePickerRangeContent[]) {
    if (pickerRange && pickerRange.length > 0) {
      let range = pickerRange[0];
      (this.value as string[]).push(Helper.getResourceStr(range.text ?? "") ?? "");
      this.recursionPickerRange(range.children ?? []);
    }
  }


  build() {
    WithTheme({ colorMode: this.themeColorMode }) {
      Column() {
        Row() {
          Button(this.primaryButton?.value)
            .buttonStyle(this.primaryButton?.buttonStyle ?? ButtonStyleMode.TEXTUAL)
            .role(this.primaryButton?.role ?? ButtonRole.NORMAL)
            .type(ButtonType.Capsule)
            .fontColor(this.primaryButton?.fontColor)
            .backgroundColor(this.primaryButton?.background ?? Color.Transparent)
            .margin({ top: 10, bottom: 10, left: 10 })
            .alignSelf(ItemAlign.Center)
            .align(Alignment.Center)
            .onClick(() => {
              if (this.options.actionCancel) {
                DialogHelper.closeDialog(this.options.dialogId ?? "");
              }
              if (this.options.onAction) {
                this.options.onAction(DialogAction.ONE, this.options.dialogId ?? "", this.selectValue);
              }
            })
          Text(this.title)
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Center)
            .fontColor(this.options.titleFontColor)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .ellipsisMode(EllipsisMode.END)
            .maxLines(1)
            .layoutWeight(1)
            .margin(5)
          Button(this.secondaryButton?.value)
            .buttonStyle(this.secondaryButton?.buttonStyle ?? ButtonStyleMode.TEXTUAL)
            .role(this.secondaryButton?.role ?? ButtonRole.NORMAL)
            .fontColor(this.secondaryButton?.fontColor)
            .backgroundColor(this.secondaryButton?.background ?? Color.Transparent)
            .type(ButtonType.Capsule)
            .margin({ top: 10, bottom: 10, right: 10 })
            .alignSelf(ItemAlign.Center)
            .align(Alignment.Center)
            .onClick(() => {
              if (this.options.actionCancel) {
                DialogHelper.closeDialog(this.options.dialogId ?? "");
              }
              if (this.options.onAction) {
                this.options.onAction(DialogAction.TWO, this.options.dialogId ?? "", this.selectValue);
              }
            })
        }
        .backgroundColor(this.options.titleBackground)
        .width('100%')

        TextPicker({ range: this.options.range, value: this.value })
          .textStyle(this.options.textStyle)
          .selectedTextStyle(this.options.selectedTextStyle)
          .disappearTextStyle(this.options.disappearTextStyle)
          .divider(this.options.divider)
          .canLoop(this.options.canLoop)
          .margin({ top: 20, bottom: 20 })
          .width('100%')
          .onChange((value: string | string[], index: number | number[]) => {
            this.selectValue = value;
            if (this.options.onChange) {
              this.options.onChange(value, index)
            }
          })
      }
      .backgroundColor(this.options.backgroundColor)
      .backgroundBlurStyle(this.options.backgroundBlurStyle)
      .borderRadius(this.options.cornerRadius)
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
      .width(this.options.width)
      .constraintSize({ maxWidth: this.options.maxWidth })
      .padding({ bottom: this.isLargeScreen ? 0 : 25 })
      .margin({ bottom: this.isLargeScreen ? 30 : 0 })
      .clip(true)
    }
  }

}