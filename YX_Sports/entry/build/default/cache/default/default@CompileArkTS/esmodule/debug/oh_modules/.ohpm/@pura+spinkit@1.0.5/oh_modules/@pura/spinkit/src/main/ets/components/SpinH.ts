if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinH extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 1;
        this.scale2 = 1;
        this.scale3 = 1;
        this.scale4 = 1;
        this.scale5 = 1;
        this.scale6 = 1;
        this.scale7 = 1;
        this.scale8 = 1;
        this.scale9 = 1;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : undefined);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scale1 = 1;
        this.scale2 = 1;
        this.scale3 = 1;
        this.scale4 = 1;
        this.scale5 = 1;
        this.scale6 = 1;
        this.scale7 = 1;
        this.scale8 = 1;
        this.scale9 = 1;
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.rowsTemplate('1fr 1fr 1fr');
            Grid.columnsTemplate('1fr 1fr 1fr');
            Grid.renderFit(RenderFit.CENTER);
            Grid.width(this.spinSize);
            Grid.height(this.spinSize);
            Grid.onAppear(() => {
                let keyframes0: Array<KeyframeState> = [
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale7 = 0;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale7 = 1;
                        }
                    },
                    {
                        duration: 400,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes1: Array<KeyframeState> = [
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale4 = 0;
                            this.scale8 = 0;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale4 = 1;
                            this.scale8 = 1;
                        }
                    },
                    {
                        duration: 400,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes2: Array<KeyframeState> = [
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale1 = 0;
                            this.scale5 = 0;
                            this.scale9 = 0;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale1 = 1;
                            this.scale5 = 1;
                            this.scale9 = 1;
                        }
                    },
                    {
                        duration: 400,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes3: Array<KeyframeState> = [
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale2 = 0;
                            this.scale6 = 0;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale2 = 1;
                            this.scale6 = 1;
                        }
                    },
                    {
                        duration: 400,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                let keyframes4: Array<KeyframeState> = [
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.scale3 = 0;
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.Linear,
                        event: () => {
                            this.scale3 = 1;
                        }
                    },
                    {
                        duration: 400,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    }
                ];
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, keyframes0);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 100 }, keyframes1);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 200 }, keyframes2);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 300 }, keyframes3);
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 400 }, keyframes4);
            });
        }, Grid);
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.scale({ x: this.scale1, y: this.scale1, z: 1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.spinSize / 3);
                    Canvas.height(this.spinSize / 3);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.scale({ x: this.scale2, y: this.scale2, z: 1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.spinSize / 3);
                    Canvas.height(this.spinSize / 3);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.scale({ x: this.scale3, y: this.scale3, z: 1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.spinSize / 3);
                    Canvas.height(this.spinSize / 3);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.scale({ x: this.scale4, y: this.scale4, z: 1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.spinSize / 3);
                    Canvas.height(this.spinSize / 3);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.scale({ x: this.scale5, y: this.scale5, z: 1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.spinSize / 3);
                    Canvas.height(this.spinSize / 3);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.scale({ x: this.scale6, y: this.scale6, z: 1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.spinSize / 3);
                    Canvas.height(this.spinSize / 3);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.scale({ x: this.scale7, y: this.scale7, z: 1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.spinSize / 3);
                    Canvas.height(this.spinSize / 3);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.scale({ x: this.scale8, y: this.scale8, z: 1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.spinSize / 3);
                    Canvas.height(this.spinSize / 3);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.scale({ x: this.scale9, y: this.scale9, z: 1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.spinSize / 3);
                    Canvas.height(this.spinSize / 3);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        Grid.pop();
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
