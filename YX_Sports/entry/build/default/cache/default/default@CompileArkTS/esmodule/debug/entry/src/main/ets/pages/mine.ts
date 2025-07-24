if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface mine_Params {
    //数据
    datas?: Type1[];
    bottomRectHeight?: number;
    topRectHeight?: number;
}
import router from "@ohos:router";
interface Type1 {
    img: Resource;
    title: string;
    lianjie: string;
}
export class mine extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.datas = [
            { img: { "id": 16777293, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, title: "训练记录", lianjie: "pages/TrainRecordPage" },
            { img: { "id": 16777294, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, title: "体重记录", lianjie: "pages/WeightRecordPage" },
            //{img:$r('app.media.c'),title:"我的收藏",lianjie:"pages/WeightRecordPage"},
            { img: { "id": 16777299, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, title: "常见问题", lianjie: "pages/NormalQuestionPage" },
            { img: { "id": 16777300, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, title: "意见反馈", lianjie: "pages/yijian" }
        ];
        this.__bottomRectHeight = this.createStorageProp('bottomRectHeight', 0, "bottomRectHeight");
        this.__topRectHeight = this.createStorageProp('topRectHeight', 0, "topRectHeight");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: mine_Params) {
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
    }
    updateStateVars(params: mine_Params) {
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
    //数据
    private datas: Type1[];
    //UI
    items(data: Type1, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.onClick(() => {
                router.pushUrl({ url: data.lianjie });
            });
            Row.width('100%');
            Row.padding(20);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(data.img);
            Image.size({ width: 25, height: 25 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.title);
            Text.fontSize(15);
            Text.fontColor(Color.Black);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ left: 240 });
        }, Image);
        Row.pop();
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Start);
            Column.width("100%");
            Column.height("100%");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //顶部
            Column.create();
            //顶部
            Column.backgroundColor('#9EA0E7');
            //顶部
            Column.height('30%');
            //顶部
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //设置与通知
            Row.create();
            //设置与通知
            Row.width('100%');
            //设置与通知
            Row.height('20%');
            //设置与通知
            Row.justifyContent(FlexAlign.End);
            //设置与通知
            Row.padding({ right: 20 });
            //设置与通知
            Row.margin({ top: px2vp(this.topRectHeight) });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777307, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.height(25);
            Image.width(25);
            Image.margin({ right: 20 });
            Image.onClick(() => {
                router.pushUrl({ url: 'pages/settingPage' });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777303, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(28);
            Image.height(28);
            Image.onClick(() => {
                router.pushUrl({ url: 'pages/sysInfo' });
            });
        }, Image);
        //设置与通知
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //头像
            Row.create({ space: 10 });
            //头像
            Row.padding(20);
            //头像
            Row.height('40%');
            //头像
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777284, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 60, height: 60 });
            Image.onClick(() => {
                router.pushUrl({ url: 'pages/EditInfoPage' });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("瘦成一道闪电");
            Text.fontColor('#ffff');
            Text.fontSize(22);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("LV1");
            Text.fontColor('#ffff');
            Text.backgroundColor('#8174E7');
            Text.borderRadius(8);
            Text.width(50);
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        //头像
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //会员
            Row.create();
            //会员
            Row.backgroundColor('#2D2D2D');
            //会员
            Row.borderRadius({
                topLeft: 15,
                topRight: 15,
                bottomLeft: 0,
                bottomRight: 0
            });
            //会员
            Row.width('90%');
            //会员
            Row.layoutWeight(1);
            //会员
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('60%');
            Row.margin({ left: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777302, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 25, height: 25 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("VIP会员 | 定制专属健身");
            Text.fontColor('#FBDEB9');
            Text.width('100%');
            Text.fontSize(18);
            Text.margin({ left: 5 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(24);
            Row.width(90);
            Row.margin({ right: 10 });
            Row.justifyContent(FlexAlign.Center);
            Row.backgroundColor('#FFE3BE');
            Row.borderRadius(10);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("立即开通");
            Text.onClick(() => {
                router.pushUrl({ url: "pages/vip" });
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 10, height: 10 });
        }, Image);
        Row.pop();
        //会员
        Row.pop();
        //顶部
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //循环，数组，元素
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const i = _item;
                this.items.bind(this)(i);
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        //循环，数组，元素
        ForEach.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
