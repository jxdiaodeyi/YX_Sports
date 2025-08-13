if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MusicBank_Params {
    bottomRectHeight?: number;
    topRectHeight?: number;
    datas?: Type1[];
    isloading?: boolean;
}
import router from "@ohos:router";
interface Type1 {
    img: Resource;
    name: string;
    num: number;
}
class MusicBank extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomRectHeight = this.createStorageProp('bottomRectHeight', 0, "bottomRectHeight");
        this.__topRectHeight = this.createStorageProp('topRectHeight', 0, "topRectHeight");
        this.datas = [
            { img: { "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '有氧 （6首）', num: 66 },
            { img: { "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '运动 （6首）', num: 66 },
            { img: { "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '热情 （6首）', num: 66 },
            { img: { "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '舒缓 （6首）', num: 66 },
            { img: { "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '热情 （6首）', num: 66 },
            { img: { "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '舒缓 （6首）', num: 66 },
        ];
        this.__isloading = new ObservedPropertySimplePU(false, this, "isloading");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MusicBank_Params) {
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
        if (params.isloading !== undefined) {
            this.isloading = params.isloading;
        }
    }
    updateStateVars(params: MusicBank_Params) {
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
            Column.onClick(() => {
                router.replaceUrl({ url: 'pages/youyang' });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(item.img);
            Image.width(180);
            Image.height(250);
            Image.borderRadius(12);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // .onClick(()=>{
            //   router.replaceUrl({url:'pages/musicBank'})
            // })
            Column.create();
            // .onClick(()=>{
            //   router.replaceUrl({url:'pages/musicBank'})
            // })
            Column.padding(15);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.name);
            Text.fontSize(15);
            Text.fontWeight(5);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('已下载' + item.num + '首');
            Text.padding(5);
            Text.fontSize(15);
            Text.fontColor('#ffaea2a2');
        }, Text);
        Text.pop();
        Row.pop();
        // .onClick(()=>{
        //   router.replaceUrl({url:'pages/musicBank'})
        // })
        Column.pop();
        Column.pop();
    }
    private __isloading: ObservedPropertySimplePU<boolean>;
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
            Column.padding(15);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.borderWidth({
                bottom: 1
            });
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.onClick(() => {
                router.replace({ url: 'pages/trainMusic' });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('音乐库');
            Text.fontSize(20);
            Text.fontWeight(900);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.width(40);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
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
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "MusicBank";
    }
}
registerNamedRoute(() => new MusicBank(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/musicBank", pageFullPath: "entry/src/main/ets/pages/musicBank", integratedHsp: "false", moduleType: "followWithHap" });
