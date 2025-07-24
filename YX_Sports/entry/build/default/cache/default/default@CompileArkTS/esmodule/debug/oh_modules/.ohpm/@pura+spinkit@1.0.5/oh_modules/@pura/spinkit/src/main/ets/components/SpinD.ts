if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinD extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.x1 = 0;
        this.y1 = 0;
        this.scale1 = 1;
        this.angle1 = 0;
        this.x2 = this.spinSize * 0.65;
        this.y2 = this.spinSize * 0.65;
        this.scale2 = 1;
        this.angle2 = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.x1 = 0;
        this.y1 = 0;
        this.scale1 = 1;
        this.angle1 = 0;
        this.x2 = this.spinSize * 0.65;
        this.y2 = this.spinSize * 0.65;
        this.scale2 = 1;
        this.angle2 = 0;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    x1: number;
    @Local
    y1: number;
    @Local
    scale1: number;
    @Local
    angle1: number;
    @Local
    x2: number;
    @Local
    y2: number;
    @Local
    scale2: number;
    @Local
    angle2: number;
    aboutToAppear(): void {
        this.x2 = this.spinSize * 0.65;
        this.y2 = this.spinSize * 0.65;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.width(this.spinSize);
            RelativeContainer.height(this.spinSize);
            RelativeContainer.onAppear(() => {
                let keyframes1: Array<KeyframeState> = [
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 0.5;
                            this.angle1 = -90;
                            this.x1 = this.spinSize * 0.65;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 1;
                            this.angle1 = -180;
                            this.x1 = this.spinSize * 0.65;
                            this.y1 = this.spinSize * 0.65;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 0.5;
                            this.angle1 = -270;
                            this.x1 = 0;
                            this.y1 = this.spinSize * 0.65;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 1;
                            this.angle1 = -360;
                            this.x1 = 0;
                            this.y1 = 0;
                        }
                    }
                ];
                let keyframes2: Array<KeyframeState> = [
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale2 = 0.5;
                            this.angle2 = -90;
                            this.x2 = 0;
                            this.y2 = this.spinSize * 0.65;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale2 = 1;
                            this.angle2 = -180;
                            this.x2 = 0;
                            this.y2 = 0;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale2 = 0.5;
                            this.angle2 = -270;
                            this.x2 = this.spinSize * 0.65;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale2 = 1;
                            this.angle2 = -360;
                            this.x2 = this.spinSize * 0.65;
                            this.y2 = this.spinSize * 0.65;
                        }
                    }
                ];
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes1);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes2);
            });
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height(this.spinSize * 0.35);
            Canvas.width(this.spinSize * 0.35);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.translate({ x: this.x1, y: this.y1 });
            Canvas.scale({ x: this.scale1, y: this.scale1 });
            Canvas.rotate({ angle: this.angle1 });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.height(this.spinSize * 0.35);
            Canvas.width(this.spinSize * 0.35);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.translate({ x: this.x2, y: this.y2 });
            Canvas.scale({ x: this.scale2, y: this.scale2 });
            Canvas.rotate({ angle: this.angle2 });
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
