if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinE extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 1;
        this.opacity1 = 1;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 1;
        this.opacity1 = 1;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    scale1: number;
    @Local
    opacity1: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.spinSize);
            Canvas.height(this.spinSize);
            Canvas.borderRadius(this.spinSize);
            Canvas.backgroundColor(this.spinColor);
            Canvas.renderFit(RenderFit.CENTER);
            Canvas.scale({ x: this.scale1, y: this.scale1 });
            Canvas.opacity(this.opacity1);
            Canvas.onAppear(() => {
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, [
                    {
                        duration: 0,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 0;
                            this.opacity1 = 1;
                        }
                    },
                    {
                        duration: 1000,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 1.0;
                            this.opacity1 = 0.01;
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
