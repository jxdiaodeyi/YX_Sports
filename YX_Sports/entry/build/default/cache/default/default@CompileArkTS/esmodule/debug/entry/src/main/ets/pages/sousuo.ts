if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Sousuo_Params {
    bottomRectHeight?: number;
    topRectHeight?: number;
    datas?: Type1[];
}
import router from "@ohos:router";
interface Type1 {
    count: string;
    img: Resource;
    name: string;
    time: number;
    num: number;
}
class Sousuo extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomRectHeight = this.createStorageProp('bottomRectHeight', 0, "bottomRectHeight");
        this.__topRectHeight = this.createStorageProp('topRectHeight', 0, "topRectHeight");
        this.datas = [
            { count: "1", img: { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '15分钟迷人肩颈背全套打造改善圆肩驼背', time: 3, num: 3 },
            { count: "2", img: { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '15分钟迷人肩颈背全套打造改善圆肩驼背', time: 3, num: 3 },
            { count: "3", img: { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '15分钟迷人肩颈背全套打造改善圆肩驼背', time: 3, num: 3 },
            { count: "4", img: { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '15分钟迷人肩颈背全套打造改善圆肩驼背', time: 3, num: 3 },
            { count: "5", img: { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '15分钟迷人肩颈背全套打造改善圆肩驼背', time: 3, num: 3 },
            { count: "6", img: { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '15分钟迷人肩颈背全套打造改善圆肩驼背', time: 3, num: 3 },
            { count: "7", img: { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '15分钟迷人肩颈背全套打造改善圆肩驼背', time: 3, num: 3 }
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Sousuo_Params) {
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
    }
    updateStateVars(params: Sousuo_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bottomRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bottomRectHeight.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
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
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.count);
            Text.width(50);
            Text.height(50);
            Text.padding(15);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(item.img);
            Image.width(100);
            Image.onClick(() => {
                router.pushUrl({ url: "pages/class" });
            });
            Image.height(100);
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
            Text.width('70%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('k1初学者.' + item.time + '分钟' + item.num + '千卡');
            Text.fontSize(10);
            Text.padding(15);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 15 });
            Row.padding(15);
            Row.width('100%');
            Row.height(50);
            Row.borderRadius(25);
            Row.backgroundColor('#40f5f5f5');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 搜索图标
            Image.create({ "id": 16777265, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            // 搜索图标
            Image.width(30);
            // 搜索图标
            Image.height(30);
            // 搜索图标
            Image.onClick(() => {
                // 点击跳转到搜索页面
                router.pushUrl({ url: 'pages/result' }); // 目标页面路径
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 输入框
            TextInput.create({ placeholder: '请输入关键词' });
            // 输入框
            TextInput.type(InputType.Normal);
            // 输入框
            TextInput.width('70%');
            // 输入框
            TextInput.height(40);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('取消');
            Text.fontSize(15);
            Text.onClick(() => {
                // 点击跳转到搜索页面
                router.replaceUrl({ url: 'pages/Index' }); // 目标页面路径
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 15 });
            Column.width('100%');
            Column.justifyContent(FlexAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('历史搜索');
            Text.fontSize(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777266, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('减脂');
            Text.fontSize(15);
            Text.backgroundColor('#FFEEEE');
            Text.borderRadius(15);
            Text.height(25);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.justifyContent(FlexAlign.Start);
            Column.padding(15);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('热搜榜');
            Text.fontSize(20);
            Text.width('100%');
            Text.padding(15);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('快速瘦身攻略');
            Text.fontSize(15);
            Text.backgroundColor('#FFEEEE');
            Text.borderRadius(15);
            Text.height(25);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('生理期减脂');
            Text.fontSize(15);
            Text.backgroundColor('#FFEEEE');
            Text.borderRadius(15);
            Text.height(25);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('快速燃脂');
            Text.fontSize(15);
            Text.backgroundColor('#FFEEEE');
            Text.borderRadius(15);
            Text.height(25);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('瘦小腿');
            Text.fontSize(15);
            Text.backgroundColor('#FFEEEE');
            Text.borderRadius(15);
            Text.height(25);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor('#FFEDED');
            Column.borderRadius(15);
            Column.padding(15);
            Column.width('90%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const items = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.itemui.bind(this)(items);
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Sousuo";
    }
}
registerNamedRoute(() => new Sousuo(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/sousuo", pageFullPath: "entry/src/main/ets/pages/sousuo", integratedHsp: "false", moduleType: "followWithHap" });
