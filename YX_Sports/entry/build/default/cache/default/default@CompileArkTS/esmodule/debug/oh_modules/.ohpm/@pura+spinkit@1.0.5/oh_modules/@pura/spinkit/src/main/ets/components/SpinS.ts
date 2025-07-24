if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinS extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.round1 = this.spinSize * 0.2;
        this.scale1 = 1;
        this.scale2 = 0.3;
        this.scale3 = 0.4;
        this.scale4 = 0.5;
        this.scale5 = 0.6;
        this.scale6 = 0.7;
        this.scale7 = 0.8;
        this.scale8 = 0.9;
        this.angle1 = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.round1 = this.spinSize * 0.2;
        this.scale1 = 1;
        this.scale2 = 0.3;
        this.scale3 = 0.4;
        this.scale4 = 0.5;
        this.scale5 = 0.6;
        this.scale6 = 0.7;
        this.scale7 = 0.8;
        this.scale8 = 0.9;
        this.angle1 = 0;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    round1: number;
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
    scale7: number;
    @Local
    scale8: number;
    @Local
    angle1: number;
    aboutToAppear(): void {
        this.round1 = this.spinSize * 0.2;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.renderFit(RenderFit.CENTER);
            Stack.width(this.spinSize);
            Stack.height(this.spinSize);
            Stack.rotate({ angle: this.angle1 });
            Stack.onAppear(() => {
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, [{
                        duration: 1200,
                        curve: Curve.Linear,
                        event: () => {
                            this.angle1 = 360;
                        }
                    }]);
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
            Column.rotate({ angle: 45 });
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
            Column.rotate({ angle: 90 });
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
            Column.rotate({ angle: 135 });
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
            Column.rotate({ angle: 180 });
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
            Column.rotate({ angle: 225 });
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 270 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale7, y: this.scale7 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 315 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale8, y: this.scale8 });
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
