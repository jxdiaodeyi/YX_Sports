if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface doc1_Params {
    index?: number;
    arm?: number;
    chest?: number;
    hip?: number;
    leg?: number;
    belly?: number;
    all?: number;
}
import router from "@ohos:router";
export class doc1 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__index = new ObservedPropertySimplePU(2, this, "index");
        this.__arm = new ObservedPropertySimplePU(0, this, "arm");
        this.__chest = new ObservedPropertySimplePU(0, this, "chest");
        this.__hip = new ObservedPropertySimplePU(0, this, "hip");
        this.__leg = new ObservedPropertySimplePU(0, this, "leg");
        this.__belly = new ObservedPropertySimplePU(0, this, "belly");
        this.__all = new ObservedPropertySimplePU(0, this, "all");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: doc1_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.arm !== undefined) {
            this.arm = params.arm;
        }
        if (params.chest !== undefined) {
            this.chest = params.chest;
        }
        if (params.hip !== undefined) {
            this.hip = params.hip;
        }
        if (params.leg !== undefined) {
            this.leg = params.leg;
        }
        if (params.belly !== undefined) {
            this.belly = params.belly;
        }
        if (params.all !== undefined) {
            this.all = params.all;
        }
    }
    updateStateVars(params: doc1_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__index.purgeDependencyOnElmtId(rmElmtId);
        this.__arm.purgeDependencyOnElmtId(rmElmtId);
        this.__chest.purgeDependencyOnElmtId(rmElmtId);
        this.__hip.purgeDependencyOnElmtId(rmElmtId);
        this.__leg.purgeDependencyOnElmtId(rmElmtId);
        this.__belly.purgeDependencyOnElmtId(rmElmtId);
        this.__all.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__index.aboutToBeDeleted();
        this.__arm.aboutToBeDeleted();
        this.__chest.aboutToBeDeleted();
        this.__hip.aboutToBeDeleted();
        this.__leg.aboutToBeDeleted();
        this.__belly.aboutToBeDeleted();
        this.__all.aboutToBeDeleted();
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
    private __arm: ObservedPropertySimplePU<number>;
    get arm() {
        return this.__arm.get();
    }
    set arm(newValue: number) {
        this.__arm.set(newValue);
    }
    private __chest: ObservedPropertySimplePU<number>;
    get chest() {
        return this.__chest.get();
    }
    set chest(newValue: number) {
        this.__chest.set(newValue);
    }
    private __hip: ObservedPropertySimplePU<number>;
    get hip() {
        return this.__hip.get();
    }
    set hip(newValue: number) {
        this.__hip.set(newValue);
    }
    private __leg: ObservedPropertySimplePU<number>;
    get leg() {
        return this.__leg.get();
    }
    set leg(newValue: number) {
        this.__leg.set(newValue);
    }
    private __belly: ObservedPropertySimplePU<number>;
    get belly() {
        return this.__belly.get();
    }
    set belly(newValue: number) {
        this.__belly.set(newValue);
    }
    private __all: ObservedPropertySimplePU<number>;
    get all() {
        return this.__all.get();
    }
    set all(newValue: number) {
        this.__all.set(newValue);
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
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
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
            Text.create('哪些部位是您想改善的？');
            Text.fontSize(40);
            Text.fontWeight(999);
            Text.width('100%');
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(80);
        }, Column);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('手臂');
            Text.fontColor(this.arm == 1 ? '#ffffff' : '#000000');
            Text.backgroundColor(this.arm == 1 ? '#6C5DD3' : '#ffffff');
            Text.width(100);
            Text.height(70);
            Text.fontSize(30);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.margin(10);
            Text.onClick(() => {
                if (this.arm == 0) {
                    this.arm = 1;
                }
                else {
                    this.arm = 0;
                }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('胸部');
            Text.fontColor(this.chest == 1 ? '#ffffff' : '#000000');
            Text.backgroundColor(this.chest == 1 ? '#6C5DD3' : '#ffffff');
            Text.width(100);
            Text.height(70);
            Text.fontSize(30);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.margin(10);
            Text.onClick(() => {
                if (this.chest == 0) {
                    this.chest = 1;
                }
                else {
                    this.chest = 0;
                }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('臀部');
            Text.fontColor(this.hip == 1 ? '#ffffff' : '#000000');
            Text.backgroundColor(this.hip == 1 ? '#6C5DD3' : '#ffffff');
            Text.width(100);
            Text.height(70);
            Text.fontSize(30);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.margin(10);
            Text.onClick(() => {
                if (this.hip == 0) {
                    this.hip = 1;
                }
                else {
                    this.hip = 0;
                }
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('腿部');
            Text.fontColor(this.leg == 1 ? '#ffffff' : '#000000');
            Text.backgroundColor(this.leg == 1 ? '#6C5DD3' : '#ffffff');
            Text.width(100);
            Text.height(70);
            Text.fontSize(30);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.margin(10);
            Text.onClick(() => {
                if (this.leg == 0) {
                    this.leg = 1;
                }
                else {
                    this.leg = 0;
                }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('腹部');
            Text.fontColor(this.belly == 1 ? '#ffffff' : '#000000');
            Text.backgroundColor(this.belly == 1 ? '#6C5DD3' : '#ffffff');
            Text.width(100);
            Text.height(70);
            Text.fontSize(30);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.margin(10);
            Text.onClick(() => {
                if (this.belly == 0) {
                    this.belly = 1;
                }
                else {
                    this.belly = 0;
                }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('全身');
            Text.fontColor(this.all == 1 ? '#ffffff' : '#000000');
            Text.backgroundColor(this.all == 1 ? '#6C5DD3' : '#ffffff');
            Text.width(100);
            Text.height(70);
            Text.fontSize(30);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.margin(10);
            Text.onClick(() => {
                if (this.all == 0) {
                    this.all = 1;
                }
                else {
                    this.all = 0;
                }
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(140);
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
                router.pushUrl({ url: 'pages/doc3' });
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
registerNamedRoute(() => new doc1(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/doc2", pageFullPath: "entry/src/main/ets/pages/doc2", integratedHsp: "false", moduleType: "followWithHap" });
