if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinA extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.x = 0;
        this.y = 0;
        this.angle = 0;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    x: number;
    @Local
    y: number;
    @Local
    angle: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.spinSize);
            Canvas.height(this.spinSize);
            Canvas.backgroundColor(this.spinColor);
            Canvas.renderFit(RenderFit.CENTER);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.rotate({ perspective: this.spinSize, x: this.x, y: this.y, angle: this.angle });
            Canvas.onAppear(() => {
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, [
                    {
                        duration: 600,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.angle = 180;
                            this.x = this.spinSize / 2;
                            this.y = 0;
                        }
                    },
                    {
                        duration: 0,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.angle = 0;
                        }
                    },
                    {
                        duration: 600,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.angle = 180;
                            this.x = 0;
                            this.y = this.spinSize / 2;
                        }
                    }
                ]);
            });
        }, Canvas);
        Canvas.pop();
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
