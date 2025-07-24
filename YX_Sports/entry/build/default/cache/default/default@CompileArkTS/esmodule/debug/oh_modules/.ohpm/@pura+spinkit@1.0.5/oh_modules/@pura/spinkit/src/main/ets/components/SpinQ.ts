if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinQ extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.round1 = this.spinSize * 0.15;
        this.scale1 = 0;
        this.scale2 = 0;
        this.scale3 = 0;
        this.scale4 = 0;
        this.scale5 = 0;
        this.scale6 = 0;
        this.scale7 = 0;
        this.scale8 = 0;
        this.scale9 = 0;
        this.scale10 = 0;
        this.scale11 = 0;
        this.scale12 = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.round1 = this.spinSize * 0.15;
        this.scale1 = 0;
        this.scale2 = 0;
        this.scale3 = 0;
        this.scale4 = 0;
        this.scale5 = 0;
        this.scale6 = 0;
        this.scale7 = 0;
        this.scale8 = 0;
        this.scale9 = 0;
        this.scale10 = 0;
        this.scale11 = 0;
        this.scale12 = 0;
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
    scale9: number;
    @Local
    scale10: number;
    @Local
    scale11: number;
    @Local
    scale12: number;
    aboutToAppear(): void {
        this.round1 = this.spinSize * 0.15;
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
                            this.scale1 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale1 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes2: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale2 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale2 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes3: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale3 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale3 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes4: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale4 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale4 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes5: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale5 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale5 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes6: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale6 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale6 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes7: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale7 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale7 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes8: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale8 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale8 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes9: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale9 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale9 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes10: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale10 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale10 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes11: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale11 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale11 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes12: Array<KeyframeState> = [
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale12 = 1;
                        }
                    },
                    {
                        duration: 480,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale12 = 0;
                        }
                    },
                    {
                        duration: 240,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes1);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -1100 }, keyframes2);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -1000 }, keyframes3);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -900 }, keyframes4);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -800 }, keyframes5);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -700 }, keyframes6);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -600 }, keyframes7);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -500 }, keyframes8);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -400 }, keyframes9);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -300 }, keyframes10);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -200 }, keyframes11);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: -100 }, keyframes12);
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
            Canvas.scale({ x: this.scale1, y: this.scale1, z: 1 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 30 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale2, y: this.scale2, z: 1 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 60 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale3, y: this.scale3, z: 1 });
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
            Canvas.scale({ x: this.scale4, y: this.scale4, z: 1 });
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
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale5, y: this.scale5, z: 1 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 150 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale6, y: this.scale6, z: 1 });
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
            Canvas.scale({ x: this.scale7, y: this.scale7, z: 1 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 210 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale8, y: this.scale8, z: 1 });
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
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale9, y: this.scale9, z: 1 });
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
            Canvas.scale({ x: this.scale10, y: this.scale10, z: 1 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 300 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale11, y: this.scale11, z: 1 });
        }, Canvas);
        Canvas.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width(this.round1);
            Column.rotate({ angle: 330 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create();
            Canvas.width(this.round1);
            Canvas.height(this.round1);
            Canvas.borderRadius(this.round1);
            Canvas.backgroundColor(this.spinColor);
            Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
            Canvas.scale({ x: this.scale12, y: this.scale12, z: 1 });
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
