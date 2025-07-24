if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinC extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 0.4;
        this.scale2 = 0.4;
        this.scale3 = 0.4;
        this.scale4 = 0.4;
        this.scale5 = 0.4;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 0.4;
        this.scale2 = 0.4;
        this.scale3 = 0.4;
        this.scale4 = 0.4;
        this.scale5 = 0.4;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    scale1: number;
    @Local
    scale2: number;
    @Local
    scale3: number;
    @Local
    scale4: number;
    @Local
    scale5: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(this.spinSize);
            Row.height(this.spinSize * 0.8);
            Row.onAppear(() => {
                let keyframes1: Array<KeyframeState> = [
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 1;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 0.4;
                        }
                    },
                    {
                        duration: 720,
                        event: () => {
                        }
                    }
                ];
                let keyframes2: Array<KeyframeState> = [
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale2 = 1;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale2 = 0.4;
                        }
                    },
                    {
                        duration: 720,
                        event: () => {
                        }
                    }
                ];
                let keyframes3: Array<KeyframeState> = [
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale3 = 1;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale3 = 0.4;
                        }
                    },
                    {
                        duration: 720,
                        event: () => {
                        }
                    }
                ];
                let keyframes4: Array<KeyframeState> = [
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale4 = 1;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale4 = 0.4;
                        }
                    },
                    {
                        duration: 720,
                        event: () => {
                        }
                    }
                ];
                let keyframes5: Array<KeyframeState> = [
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale5 = 1;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale5 = 0.4;
                        }
                    },
                    {
                        duration: 720,
                        event: () => {
                        }
                    }
                ];
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes1);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -1100 }, keyframes2);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -1000 }, keyframes3);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -900 }, keyframes4);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -800 }, keyframes5);
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height('100%');
            Canvas.width('14%');
            Canvas.margin({ left: '3%', right: '3%' });
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ y: this.scale1 });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height('100%');
            Canvas.width('14%');
            Canvas.margin({ left: '3%', right: '3%' });
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ y: this.scale2 });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height('100%');
            Canvas.width('14%');
            Canvas.margin({ left: '3%', right: '3%' });
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ y: this.scale3 });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height('100%');
            Canvas.width('14%');
            Canvas.margin({ left: '3%', right: '3%' });
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ y: this.scale4 });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height('100%');
            Canvas.width('14%');
            Canvas.margin({ left: '3%', right: '3%' });
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ y: this.scale5 });
        }, Canvas);
        Canvas.pop();
        Row.pop();
    }
    public updateStateVars(params) {
        if (params === undefined) {
            return;
        }
        if ("spinSize" in params) {
            this.updateParam("spinSize", params.spinSize);
        }
        if ("spinColor" in params) {
            this.updateParam("spinColor", params.spinColor);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
