/*
 * Copyright (C) 2024 桃花镇童长老 @pura/spinkit
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


/**
 * TODO SpinKit动画组件
 * author: 桃花镇童长老
 * since: 2024/05/01
 * 仓库主页：https://ohpm.openharmony.cn/#/cn/detail/@pura%2Fspinkit
 * github: https://github.com/787107497
 * gitee: https://gitee.com/tongyuyan/spinkit
 * QQ交流群: 569512366
 */
@ComponentV2
export struct SpinB {
  @Require @Param spinSize: number;
  @Require @Param spinColor: ResourceColor;
  @Local scale1: number = 0;
  @Local scale2: number = 1;

  build() {
    Stack() {
      Canvas()
        .scale({ x: this.scale1, y: this.scale1 })
        .bounceStyle()
      Canvas()
        .scale({ x: this.scale2, y: this.scale2 })
        .bounceStyle()
    }
    .width(this.spinSize)
    .height(this.spinSize)
    .onAppear(() => {
      this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, [
        {
          duration: 1000,
          curve: Curve.EaseInOut,
          event: () => {
            this.scale1 = 1;
            this.scale2 = 0;
          }
        },
        {
          duration: 1000,
          curve: Curve.EaseInOut,
          event: () => {
            this.scale1 = 0;
            this.scale2 = 1;
          }
        }
      ]);
    })
  }

  @Styles
  bounceStyle() {
    .width('100%')
    .height('100%')
    .opacity(0.6)
    .borderRadius(this.spinSize)
    .backgroundColor(this.spinColor)
  }
}