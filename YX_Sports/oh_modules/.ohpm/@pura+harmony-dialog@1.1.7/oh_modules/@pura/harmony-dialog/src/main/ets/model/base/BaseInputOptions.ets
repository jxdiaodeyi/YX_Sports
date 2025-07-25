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

import { ActionStrCallBack, StringCalBack } from '../../utils/constraint';
import { ButtonOptions } from '../ButtonOptions'
import { InputFilter } from '../InputFilter';
import { BaseContentOptions } from './BaseContentOptions';

/**
 * TODO Base输入弹出框，参数类
 * author: 桃花镇童长老ᥫ᭡
 * since: 2024/08/18
 */
export interface BaseInputOptions extends BaseContentOptions {

  text: string; //设置输入框当前的文本内容。
  fontColor?: ResourceColor; //字体颜色
  fontSize?: Length; //字体大小
  placeholder?: ResourceStr; //设置无输入时的提示文本。
  placeholderColor ?: ResourceColor //设置placeholder文本颜色。
  inputBackgroundColor?: ResourceColor; //输入框背景
  inputBorder?: BorderOptions; //输入框Border
  inputHeight?: Length; //输入框高度

  defaultFocus?: boolean //设置弹框默认获得焦点，打开弹窗同时弹出输入法
  maxLength?: number; //文本的最大输入字符数。  默认值：Infinity，可以无限输入。
  inputFilter?: InputFilter; //通过正则表达式设置输入过滤器。
  onChange?: StringCalBack;

  buttons?: Array<ResourceStr | ButtonOptions>; //弹出框操作区按钮，最多支持4个按钮。
  onAction: ActionStrCallBack; //按钮的CallBack事件。

}