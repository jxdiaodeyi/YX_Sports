if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Starter_Params {
    message?: string;
}
import router from "@ohos:router";
class Starter extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Starter_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: Starter_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.autoPlay(true);
            Swiper.loop(false);
            Swiper.height('100%');
            Swiper.width('100%');
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777290, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('好的身材需要锻炼');
            Text.fontSize(28);
            Text.fontWeight(600);
            Text.fontColor('#1E1E1E');
            Text.textAlign(TextAlign.Center);
            Text.margin({ top: 350 });
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777289, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('每天锻炼一小时');
            Text.fontSize(28);
            Text.fontWeight(600);
            Text.fontColor('#1E1E1E');
            Text.textAlign(TextAlign.Center);
            Text.margin({ top: 350 });
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777288, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('健康生活一辈子');
            Text.fontSize(28);
            Text.fontWeight(600);
            Text.fontColor('#1E1E1E');
            Text.textAlign(TextAlign.Center);
            Text.margin({ top: 350 });
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777287, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
            Column.margin({ bottom: 350 });
            Column.justifyContent(FlexAlign.End);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('让我们一起开始吧');
            Text.fontSize(28);
            Text.fontWeight(600);
            Text.fontColor('#1E1E1E');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('立即体验');
            Button.width('40%');
            Button.height(48);
            Button.backgroundColor('#6C5DD3');
            Button.fontColor('#FFFFFF');
            Button.fontSize(18);
            Button.borderRadius(24);
            Button.margin({ top: 20 });
            Button.onClick(() => {
                // 点击事件处理逻辑
                console.log('点击了立即体验按钮');
                router.replaceUrl({ url: 'pages/start' });
            });
        }, Button);
        Button.pop();
        Column.pop();
        Stack.pop();
        Swiper.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Starter";
    }
}
registerNamedRoute(() => new Starter(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/Starter", pageFullPath: "entry/src/main/ets/pages/Starter", integratedHsp: "false", moduleType: "followWithHap" });
