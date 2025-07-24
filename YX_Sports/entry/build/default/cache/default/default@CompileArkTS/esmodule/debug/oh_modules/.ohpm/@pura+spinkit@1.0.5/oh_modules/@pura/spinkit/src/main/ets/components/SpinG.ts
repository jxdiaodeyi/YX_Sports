if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinG extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 1;
        this.scale2 = 0.5;
        this.scale3 = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 1;
        this.scale2 = 0.5;
        this.scale3 = 0;
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(this.spinSize);
            Row.height(this.spinSize / 3);
            Row.onAppear(() => {
                let keyframes1: Array<KeyframeState> = [
                    {
                        duration: 560,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale1 = 0;
                        }
                    },
                    {
                        duration: 560,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale1 = 1;
                        }
                    },
                    {
                        duration: 280,
                        event: () => {
                        }
                    }
                ];
                let keyframes2: Array<KeyframeState> = [
                    {
                        duration: 280,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale2 = 1;
                        }
                    },
                    {
                        duration: 560,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale2 = 0;
                        }
                    },
                    {
                        duration: 280,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale2 = 0.5;
                        }
                    },
                    {
                        duration: 280,
                        event: () => {
                        }
                    }
                ];
                let keyframes3: Array<KeyframeState> = [
                    {
                        duration: 560,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale3 = 1;
                        }
                    },
                    {
                        duration: 560,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale3 = 0;
                        }
                    },
                    {
                        duration: 280,
                        event: () => {
                        }
                    }
                ];
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 280 }, keyframes1);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 120 }, keyframes2);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes3);
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height(this.spinSize / 3);
            Canvas.width(this.spinSize / 3);
            Canvas.borderRadius(this.spinSize / 3);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale1, y: this.scale1 });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height(this.spinSize / 3);
            Canvas.width(this.spinSize / 3);
            Canvas.borderRadius(this.spinSize / 3);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale2, y: this.scale2 });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height(this.spinSize / 3);
            Canvas.width(this.spinSize / 3);
            Canvas.borderRadius(this.spinSize / 3);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale3, y: this.scale3 });
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
