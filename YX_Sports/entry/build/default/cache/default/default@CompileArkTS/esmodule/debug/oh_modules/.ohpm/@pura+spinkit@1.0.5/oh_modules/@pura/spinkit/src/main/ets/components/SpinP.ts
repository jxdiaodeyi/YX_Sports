if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinP extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.round1 = this.spinSize * 0.2;
        this.opacity1 = 0;
        this.opacity2 = 0;
        this.opacity3 = 0;
        this.opacity4 = 0;
        this.opacity5 = 0;
        this.opacity6 = 0;
        this.opacity7 = 0;
        this.opacity8 = 0;
        this.opacity9 = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.round1 = this.spinSize * 0.2;
        this.opacity1 = 0;
        this.opacity2 = 0;
        this.opacity3 = 0;
        this.opacity4 = 0;
        this.opacity5 = 0;
        this.opacity6 = 0;
        this.opacity7 = 0;
        this.opacity8 = 0;
        this.opacity9 = 0;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    round1: number;
    @Local
    opacity1: number;
    @Local
    opacity2: number;
    @Local
    opacity3: number;
    @Local
    opacity4: number;
    @Local
    opacity5: number;
    @Local
    opacity6: number;
    @Local
    opacity7: number;
    @Local
    opacity8: number;
    @Local
    opacity9: number;
    aboutToAppear(): void {
        this.round1 = this.spinSize * 0.2;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.renderFit(RenderFit.CENTER);
            Stack.width(this.spinSize);
            Stack.height(this.spinSize);
            Stack.onAppear(() => {
                let keyframes1: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity1 = 1;
                        }
                    },
                    {
                        duration: 720,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity1 = 0;
                        }
                    }
                ];
                let keyframes2: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity2 = 1;
                        }
                    },
                    {
                        duration: 720,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity2 = 0;
                        }
                    }
                ];
                let keyframes3: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity3 = 1;
                        }
                    },
                    {
                        duration: 720,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity3 = 0;
                        }
                    }
                ];
                let keyframes4: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity4 = 1;
                        }
                    },
                    {
                        duration: 720,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity4 = 0;
                        }
                    }
                ];
                let keyframes5: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity5 = 1;
                        }
                    },
                    {
                        duration: 720,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity5 = 0;
                        }
                    }
                ];
                let keyframes6: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity6 = 1;
                        }
                    },
                    {
                        duration: 720,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity6 = 0;
                        }
                    }
                ];
                let keyframes7: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity7 = 1;
                        }
                    },
                    {
                        duration: 720,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity7 = 0;
                        }
                    }
                ];
                let keyframes8: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity8 = 1;
                        }
                    },
                    {
                        duration: 720,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity8 = 0;
                        }
                    }
                ];
                let keyframes9: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity9 = 1;
                        }
                    },
                    {
                        duration: 720,
                        curve: Curve.Linear,
                        event: () => {
                            this.opacity9 = 0;
                        }
                    }
                ];
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes1);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -1067 }, keyframes2);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -934 }, keyframes3);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -801 }, keyframes4);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -668 }, keyframes5);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -535 }, keyframes6);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -402 }, keyframes7);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -268 }, keyframes8);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -134 }, keyframes9);
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 0 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1 / 2);
            Canvas.height(this.round1 * 1.2);
            Canvas.borderRadius(0);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.opacity(this.opacity1);
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 40 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1 / 2);
            Canvas.height(this.round1 * 1.2);
            Canvas.borderRadius(0);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.opacity(this.opacity2);
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 80 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1 / 2);
            Canvas.height(this.round1 * 1.2);
            Canvas.borderRadius(0);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.opacity(this.opacity3);
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 120 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1 / 2);
            Canvas.height(this.round1 * 1.2);
            Canvas.borderRadius(0);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.opacity(this.opacity4);
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 160 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1 / 2);
            Canvas.height(this.round1 * 1.2);
            Canvas.borderRadius(0);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.opacity(this.opacity5);
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 200 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1 / 2);
            Canvas.height(this.round1 * 1.2);
            Canvas.borderRadius(0);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.opacity(this.opacity6);
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 240 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1 / 2);
            Canvas.height(this.round1 * 1.2);
            Canvas.borderRadius(0);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.opacity(this.opacity7);
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 280 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1 / 2);
            Canvas.height(this.round1 * 1.2);
            Canvas.borderRadius(0);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.opacity(this.opacity8);
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 320 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1 / 2);
            Canvas.height(this.round1 * 1.2);
            Canvas.borderRadius(0);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.opacity(this.opacity9);
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
