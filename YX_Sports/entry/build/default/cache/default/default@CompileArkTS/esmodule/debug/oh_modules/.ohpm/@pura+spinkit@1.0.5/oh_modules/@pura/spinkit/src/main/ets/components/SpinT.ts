if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinT extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.round1 = this.spinSize * 0.2;
        this.rotate7 = 0;
        this.scale1 = 1;
        this.scale2 = 1;
        this.scale3 = 1;
        this.scale4 = 1;
        this.scale5 = 1;
        this.scale6 = 1;
        this.rotate1 = 0;
        this.rotate2 = 0;
        this.rotate3 = 0;
        this.rotate4 = 0;
        this.rotate5 = 0;
        this.rotate6 = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.round1 = this.spinSize * 0.2;
        this.rotate7 = 0;
        this.scale1 = 1;
        this.scale2 = 1;
        this.scale3 = 1;
        this.scale4 = 1;
        this.scale5 = 1;
        this.scale6 = 1;
        this.rotate1 = 0;
        this.rotate2 = 0;
        this.rotate3 = 0;
        this.rotate4 = 0;
        this.rotate5 = 0;
        this.rotate6 = 0;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    round1: number;
    @Local
    rotate7: number;
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
    @Local
    scale6: number;
    @Local
    rotate1: number;
    @Local
    rotate2: number;
    @Local
    rotate3: number;
    @Local
    rotate4: number;
    @Local
    rotate5: number;
    @Local
    rotate6: number;
    aboutToAppear(): void {
        this.round1 = this.spinSize * 0.2;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.renderFit(RenderFit.CENTER);
            Stack.width(this.spinSize);
            Stack.height(this.spinSize);
            Stack.rotate({ angle: this.rotate7 });
            Stack.onAppear(() => {
                let keyframes0: Array<KeyframeState> = [
                    {
                        duration: 3000,
                        curve: Curve.Linear,
                        event: () => {
                            this.rotate7 = 360;
                        }
                    }
                ];
                let keyframes1: Array<KeyframeState> = [
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 0.4;
                        }
                    },
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 1;
                        }
                    }
                ];
                let keyframes2: Array<KeyframeState> = [
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale2 = 0.4;
                        }
                    },
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale2 = 1;
                        }
                    }
                ];
                let keyframes3: Array<KeyframeState> = [
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale3 = 0.4;
                        }
                    },
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale3 = 1;
                        }
                    }
                ];
                let keyframes4: Array<KeyframeState> = [
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale4 = 0.4;
                        }
                    },
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale4 = 1;
                        }
                    }
                ];
                let keyframes5: Array<KeyframeState> = [
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale5 = 0.4;
                        }
                    },
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale5 = 1;
                        }
                    }
                ];
                let keyframes6: Array<KeyframeState> = [
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale6 = 0.4;
                        }
                    },
                    {
                        duration: 800,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale6 = 1;
                        }
                    }
                ];
                let keyframes7: Array<KeyframeState> = [
                    {
                        duration: 1550,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.rotate1 = 360;
                        }
                    },
                    {
                        duration: 50,
                        curve: Curve.EaseInOut,
                        event: () => {
                        }
                    }
                ];
                let keyframes8: Array<KeyframeState> = [
                    {
                        duration: 1500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.rotate2 = 360;
                        }
                    },
                    {
                        duration: 100,
                        curve: Curve.EaseInOut,
                        event: () => {
                        }
                    }
                ];
                let keyframes9: Array<KeyframeState> = [
                    {
                        duration: 1450,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.rotate3 = 360;
                        }
                    },
                    {
                        duration: 150,
                        curve: Curve.EaseInOut,
                        event: () => {
                        }
                    }
                ];
                let keyframes10: Array<KeyframeState> = [
                    {
                        duration: 1400,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.rotate4 = 360;
                        }
                    },
                    {
                        duration: 200,
                        curve: Curve.EaseInOut,
                        event: () => {
                        }
                    }
                ];
                let keyframes11: Array<KeyframeState> = [
                    {
                        duration: 1350,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.rotate5 = 360;
                        }
                    },
                    {
                        duration: 250,
                        curve: Curve.EaseInOut,
                        event: () => {
                        }
                    }
                ];
                let keyframes12: Array<KeyframeState> = [
                    {
                        duration: 1300,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.rotate6 = 360;
                        }
                    },
                    {
                        duration: 300,
                        curve: Curve.EaseInOut,
                        event: () => {
                        }
                    }
                ];
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes0);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -1100 }, keyframes1);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -1000 }, keyframes2);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -900 }, keyframes3);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -800 }, keyframes4);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -700 }, keyframes5);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -600 }, keyframes6);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -1100 }, keyframes7);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -1000 }, keyframes8);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -900 }, keyframes9);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -800 }, keyframes10);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -700 }, keyframes11);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -600 }, keyframes12);
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: this.rotate1 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale1, y: this.scale1 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: this.rotate2 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale2, y: this.scale2 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: this.rotate3 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale3, y: this.scale3 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: this.rotate4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale4, y: this.scale4 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: this.rotate5 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale5, y: this.scale5 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: this.rotate6 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale6, y: this.scale6 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        Stack.pop();
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
