if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class SpinJ extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scaleSize = this.spinSize * 0.75;
        this.tran1 = 0;
        this.oldSize = this.spinSize;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : undefined);
        this.scaleSize = this.spinSize * 0.75;
        this.tran1 = 0;
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Local
    scaleSize: number;
    @Local
    tran1: number;
    private oldSize: number;
    aboutToAppear(): void {
        this.oldSize = this.spinSize;
        this.scaleSize = this.spinSize * 0.75;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width(this.oldSize);
            Stack.height(this.oldSize);
            Stack.alignContent(Alignment.Center);
            Stack.onAppear(() => {
                this.getUIContext().keyframeAnimateTo({ iterations: -1, delay: 0 }, [
                    {
                        duration: 500,
                        curve: Curve.EaseInOut,
                        event: () => {
                            this.tran1 = 0;
                            this.scaleSize = this.oldSize * 1.1;
                        }
                    },
                    {
                        duration: 190,
                        curve: Curve.Linear,
                        event: () => {
                            this.tran1 = this.oldSize / 3;
                        }
                    },
                    {
                        duration: 0,
                        curve: Curve.Linear,
                        event: () => {
                            this.tran1 = 0;
                        }
                    },
                    {
                        duration: 10,
                        curve: Curve.Linear,
                        event: () => {
                        }
                    },
                    {
                        duration: 500,
                        curve: Curve.EaseIn,
                        event: () => {
                            this.scaleSize = this.oldSize * 0.75;
                            this.tran1 = 0;
                        }
                    }
                ]);
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.rowsTemplate('1fr 1fr 1fr');
            Grid.columnsTemplate('1fr 1fr 1fr');
            Grid.width(this.scaleSize);
            Grid.height(this.scaleSize);
        }, Grid);
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.translate({ x: this.tran1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.oldSize * 0.25);
                    Canvas.height(this.oldSize * 0.25);
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
                GridItem.translate({ x: this.tran1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.oldSize * 0.25);
                    Canvas.height(this.oldSize * 0.25);
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
                GridItem.translate({ y: this.tran1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.oldSize * 0.25);
                    Canvas.height(this.oldSize * 0.25);
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
                GridItem.translate({ y: -this.tran1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.oldSize * 0.25);
                    Canvas.height(this.oldSize * 0.25);
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
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.oldSize * 0.25);
                    Canvas.height(this.oldSize * 0.25);
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
                GridItem.translate({ y: this.tran1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.oldSize * 0.25);
                    Canvas.height(this.oldSize * 0.25);
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
                GridItem.translate({ y: -this.tran1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.oldSize * 0.25);
                    Canvas.height(this.oldSize * 0.25);
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
                GridItem.translate({ x: -this.tran1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.oldSize * 0.25);
                    Canvas.height(this.oldSize * 0.25);
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
                GridItem.translate({ x: -this.tran1 });
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Canvas.create();
                    Canvas.width(this.oldSize * 0.25);
                    Canvas.height(this.oldSize * 0.25);
                    Canvas.backgroundColor(this.spinColor);
                    Canvas.shadow(ShadowStyle.OUTER_DEFAULT_XS);
                }, Canvas);
                Canvas.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        Grid.pop();
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
