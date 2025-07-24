if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinW extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.angle1 = 0;
        this.angle2 = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.angle1 = 0;
        this.angle2 = 0;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    angle1: number;
    @Local
    angle2: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.renderFit(RenderFit.CENTER);
            Stack.width(this.spinSize);
            Stack.height(this.spinSize);
            Stack.onAppear(() => {
                let keyframes1: Array<KeyframeState> = [
                    {
                        duration: 2000,
                        curve: Curve.Linear,
                        event: () => {
                            this.angle1 = 360;
                        }
                    }
                ];
                let keyframes2: Array<KeyframeState> = [
                    {
                        duration: 1000,
                        curve: Curve.Linear,
                        event: () => {
                            this.angle2 = -360;
                        }
                    }
                ];
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes1);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes2);
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.spinSize);
            Canvas.height(this.spinSize);
            Canvas.border({
                width: this.spinSize * 0.08,
                radius: this.spinSize,
                color: this.spinColor,
                style: {
                    top: BorderStyle.Solid,
                    right: BorderStyle.Dotted,
                    bottom: BorderStyle.Dotted,
                    left: BorderStyle.Solid
                }
            });
            Canvas.rotate({ angle: this.angle1 });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.spinSize * 0.45);
            Canvas.height(this.spinSize * 0.45);
            Canvas.border({
                width: this.spinSize * 0.08,
                radius: this.spinSize,
                color: this.spinColor,
                style: {
                    top: BorderStyle.Solid,
                    right: BorderStyle.Solid,
                    bottom: BorderStyle.Dotted,
                    left: BorderStyle.Solid
                }
            });
            Canvas.rotate({ angle: this.angle2 });
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
