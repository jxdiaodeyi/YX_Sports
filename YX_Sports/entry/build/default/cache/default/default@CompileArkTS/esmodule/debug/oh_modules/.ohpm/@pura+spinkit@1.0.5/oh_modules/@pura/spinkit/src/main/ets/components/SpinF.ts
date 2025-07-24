if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinF extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 0;
        this.scale2 = 1;
        this.angle1 = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 0;
        this.scale2 = 1;
        this.angle1 = 0;
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
    angle1: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.width(this.spinSize);
            RelativeContainer.height(this.spinSize);
            RelativeContainer.rotate({ angle: this.angle1 });
            RelativeContainer.onAppear(() => {
                let keyframes1: Array<KeyframeState> = [
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
                ];
                let keyframes2: Array<KeyframeState> = [
                    {
                        duration: 2000,
                        curve: Curve.Linear,
                        event: () => {
                            this.angle1 = 360;
                        }
                    }
                ];
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes1);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes2);
            });
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.alignRules({
                top: { anchor: '__container__', align: VerticalAlign.Top },
                middle: { anchor: '__container__', align: HorizontalAlign.Center },
            });
            Canvas.scale({ x: this.scale1, y: this.scale1 });
            Canvas.width('60%');
            Canvas.height('60%');
            Canvas.borderRadius(this.spinSize);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.alignRules({
                bottom: { anchor: '__container__', align: VerticalAlign.Bottom },
                middle: { anchor: '__container__', align: HorizontalAlign.Center },
            });
            Canvas.scale({ x: this.scale2, y: this.scale2 });
            Canvas.width('60%');
            Canvas.height('60%');
            Canvas.borderRadius(this.spinSize);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
        }, Canvas);
        Canvas.pop();
        RelativeContainer.pop();
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
