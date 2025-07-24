if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinB extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 0;
        this.scale2 = 1;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 0;
        this.scale2 = 1;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    scale1: number;
    @Local
    scale2: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width(this.spinSize);
            Stack.height(this.spinSize);
            Stack.onAppear(() => {
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
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.scale({ x: this.scale1, y: this.scale1 });
            Canvas.width('100%');
            Canvas.height('100%');
            Canvas.opacity(0.6);
            Canvas.borderRadius(this.spinSize);
            Canvas.backgroundColor(this.spinColor);
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.scale({ x: this.scale2, y: this.scale2 });
            Canvas.width('100%');
            Canvas.height('100%');
            Canvas.opacity(0.6);
            Canvas.borderRadius(this.spinSize);
            Canvas.backgroundColor(this.spinColor);
        }, Canvas);
        Canvas.pop();
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
