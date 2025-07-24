if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Doc3_Params {
    index?: number;
}
import router from "@ohos:router";
class Doc3 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__index = new ObservedPropertySimplePU(2, this, "index");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Doc3_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params: Doc3_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__index.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __index: ObservedPropertySimplePU<number>;
    get index() {
        return this.__index.get();
    }
    set index(newValue: number) {
        this.__index.set(newValue);
    }
    onPageShow() {
        setTimeout(() => {
            router.pushUrl({
                url: 'pages/Index' // 目标页面的路由地址
            });
        }, 2000);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.onClick(() => {
                this.index--;
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('您的专属计划已生成！');
            Text.fontSize(30);
            Text.fontWeight(999);
            Text.margin(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(40);
        }, Row);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Progress.create({ value: 100, total: 100, type: ProgressType.Ring });
            Progress.width(200);
            Progress.height(200);
            Progress.color("#007DFF");
            Progress.style({ strokeWidth: 35 });
        }, Progress);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('100%');
            Text.fontSize(20);
            Text.fontColor('#007DFF');
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        Stack.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Doc3";
    }
}
registerNamedRoute(() => new Doc3(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/doc3", pageFullPath: "entry/src/main/ets/pages/doc3", integratedHsp: "false", moduleType: "followWithHap" });
