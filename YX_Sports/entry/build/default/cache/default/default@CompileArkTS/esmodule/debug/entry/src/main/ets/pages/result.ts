if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Result_Params {
    bottomRectHeight?: number;
    topRectHeight?: number;
    datas?: Type1[];
    isloading?: boolean;
}
import router from "@ohos:router";
interface Type1 {
    img: Resource;
    name: string;
    time: number;
    num: number;
}
class Result extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomRectHeight = this.createStorageProp('bottomRectHeight', 0, "bottomRectHeight");
        this.__topRectHeight = this.createStorageProp('topRectHeight', 0, "topRectHeight");
        this.datas = [
            { img: { "id": 16777259, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '瘦小腹，四个人动作', time: 3, num: 66 },
            { img: { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '平小腹，练翘臀', time: 3, num: 66 },
            { img: { "id": 16777261, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '平板支撑初级教程', time: 3, num: 66 },
            { img: { "id": 16777262, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: 'HIT腹部燃脂', time: 3, num: 66 },
            { img: { "id": 16777263, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: 'HIT腹部撕裂者', time: 3, num: 66 },
            { img: { "id": 16777264, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '马甲线养成', time: 3, num: 66 },
        ];
        this.__isloading = new ObservedPropertySimplePU(false, this, "isloading");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Result_Params) {
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
        if (params.isloading !== undefined) {
            this.isloading = params.isloading;
        }
    }
    updateStateVars(params: Result_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bottomRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isloading.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bottomRectHeight.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__isloading.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __bottomRectHeight: ObservedPropertyAbstractPU<number>;
    get bottomRectHeight() {
        return this.__bottomRectHeight.get();
    }
    set bottomRectHeight(newValue: number) {
        this.__bottomRectHeight.set(newValue);
    }
    private __topRectHeight: ObservedPropertyAbstractPU<number>;
    get topRectHeight() {
        return this.__topRectHeight.get();
    }
    set topRectHeight(newValue: number) {
        this.__topRectHeight.set(newValue);
    }
    private datas: Type1[];
    itemui(item: Type1, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 1 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(item.img);
            Image.width(180);
            Image.height(250);
            Image.borderRadius(12);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding(15);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.name);
            Text.fontSize(15);
            Text.fontWeight(5);
            Text.width('80%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('k1初学者.' + item.time + '分钟' + item.num + '千卡');
            Text.fontSize(10);
            Text.padding(5);
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
    }
    private __isloading: ObservedPropertySimplePU<boolean>; // 控制加载提示的显示
    get isloading() {
        return this.__isloading.get();
    }
    set isloading(newValue: boolean) {
        this.__isloading.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.borderWidth({
                bottom: 1
            });
            Row.onClick(() => {
                // 点击跳转到搜索页面
                router.replaceUrl({ url: 'pages/sousuo' }); // 目标页面路径
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(50);
            Image.height(50);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.justifyContent(FlexAlign.Start);
            Column.padding(15);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('腹部');
            Text.fontSize(25);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('12课程');
            Text.fontSize(15);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.borderRadius(15);
            Column.padding(15);
            Column.width('100%');
            Column.height('90%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.columnsTemplate('1fr 1fr');
            Grid.columnsGap(10);
            Grid.rowsGap(10);
            Grid.scrollBar(BarState.Off);
            Grid.onScrollIndex((start: number, end: number) => {
                // 当滚动到最后一项时显示加载提示
                if (end >= this.datas.length - 1 && !this.isloading) {
                    this.isloading = true;
                    // 2秒后自动隐藏加载提示
                    setTimeout(() => {
                        this.isloading = false;
                    }, 2000);
                }
            });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.itemui.bind(this)(item);
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isloading) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        const itemCreation2 = (elmtId, isInitialRender) => {
                            GridItem.create(() => { }, false);
                            GridItem.columnStart(0);
                            GridItem.columnEnd(1);
                        };
                        const observedDeepRender = () => {
                            this.observeComponentCreation2(itemCreation2, GridItem);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create({ space: 10 });
                                Row.width('100%');
                                Row.justifyContent(FlexAlign.Center);
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // Text().width('20%')
                                Text.create('加载中');
                            }, Text);
                            // Text().width('20%')
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                LoadingProgress.create();
                                LoadingProgress.width(50);
                                LoadingProgress.height(50);
                            }, LoadingProgress);
                            Row.pop();
                            GridItem.pop();
                        };
                        observedDeepRender();
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Grid.pop();
        Column.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Result";
    }
}
registerNamedRoute(() => new Result(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/result", pageFullPath: "entry/src/main/ets/pages/result", integratedHsp: "false", moduleType: "followWithHap" });
