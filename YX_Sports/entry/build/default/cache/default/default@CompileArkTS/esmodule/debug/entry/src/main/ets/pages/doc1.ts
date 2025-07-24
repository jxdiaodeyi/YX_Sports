if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface doc1_Params {
    index?: number;
    flag?: number;
}
import router from "@ohos:router";
export class doc1 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__index = new ObservedPropertySimplePU(1, this, "index");
        this.__flag = new ObservedPropertySimplePU(0, this, "flag");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: doc1_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.flag !== undefined) {
            this.flag = params.flag;
        }
    }
    updateStateVars(params: doc1_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__index.purgeDependencyOnElmtId(rmElmtId);
        this.__flag.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__index.aboutToBeDeleted();
        this.__flag.aboutToBeDeleted();
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
    private __flag: ObservedPropertySimplePU<number>;
    get flag() {
        return this.__flag.get();
    }
    set flag(newValue: number) {
        this.__flag.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
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
            Row.create();
            Row.width('25%');
        }, Row);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Progress.create({ value: this.index, total: 2, type: ProgressType.Linear });
            Progress.width('30%');
            Progress.color('#ff1604b5');
        }, Progress);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(120);
        }, Column);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('您的性别是');
            Text.fontSize(40);
            Text.fontWeight(999);
            Text.width('100%');
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(120);
        }, Column);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('我是女生');
            Text.fontColor(this.flag == 1 ? '#ffffff' : '#000000');
            Text.backgroundColor(this.flag == 1 ? '#6C5DD3' : '#ffffff');
            Text.width(150);
            Text.height(70);
            Text.fontSize(30);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.margin(30);
            Text.onClick(() => {
                if (this.flag == 0 || this.flag == 2) {
                    this.flag = 1;
                }
                else {
                    this.flag = 0;
                }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('我是男生');
            Text.fontColor(this.flag == 2 ? '#ffffff' : '#000000');
            Text.backgroundColor(this.flag == 2 ? '#6C5DD3' : '#ffffff');
            Text.width(150);
            Text.height(70);
            Text.fontSize(30);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.onClick(() => {
                if (this.flag == 0 || this.flag == 1) {
                    this.flag = 2;
                }
                else {
                    this.flag = 0;
                }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(120);
        }, Column);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('下一步', { type: ButtonType.Normal, stateEffect: true });
            Button.width('80%');
            Button.margin(20);
            Button.borderRadius(30);
            Button.backgroundColor('#6C5DD3');
            Button.onClick(() => {
                this.index++;
                router.pushUrl({ url: 'pages/doc2' });
            });
        }, Button);
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "doc1";
    }
}
registerNamedRoute(() => new doc1(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/doc1", pageFullPath: "entry/src/main/ets/pages/doc1", integratedHsp: "false", moduleType: "followWithHap" });
