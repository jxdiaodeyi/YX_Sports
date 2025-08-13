if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Vip_Params {
    flag?: number;
    changes?: boolean;
}
import { DialogHelper, SpinType } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import router from "@ohos:router";
export interface vip {
    changes: boolean;
}
class Vip extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__flag = new ObservedPropertySimplePU(0, this, "flag");
        this.__changes = new ObservedPropertySimplePU(false
        // @State vip:boolean=false
        , this, "changes");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Vip_Params) {
        if (params.flag !== undefined) {
            this.flag = params.flag;
        }
        if (params.changes !== undefined) {
            this.changes = params.changes;
        }
    }
    updateStateVars(params: Vip_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__flag.purgeDependencyOnElmtId(rmElmtId);
        this.__changes.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__flag.aboutToBeDeleted();
        this.__changes.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __flag: ObservedPropertySimplePU<number>;
    get flag() {
        return this.__flag.get();
    }
    set flag(newValue: number) {
        this.__flag.set(newValue);
    }
    private __changes: ObservedPropertySimplePU<boolean>;
    get changes() {
        return this.__changes.get();
    }
    set changes(newValue: boolean) {
        this.__changes.set(newValue);
    }
    // @State vip:boolean=false
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(40);
            Text.backgroundColor("#FFDBAD");
            Text.width("100%");
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.Start);
            Row.width("100%");
            Row.backgroundColor("#FFDBAD");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("会员中心");
            Text.fontSize(30);
            Text.fontWeight(999);
            Text.margin({ left: 90 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777311, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.height("45%");
            Image.width("102%");
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("会员套餐");
            Text.fontSize(20);
            Text.fontWeight(999);
            Text.margin({ top: 20, left: 30 });
            Text.width("100%");
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin(10);
            Column.borderWidth(0.1);
            Column.borderColor("#E4E4E4");
            Column.width("30%");
            Column.height(120);
            Column.backgroundColor(this.flag == 1 ? "#F2E7DC" : "#ffffff");
            Column.justifyContent(FlexAlign.Center);
            Column.borderRadius(20);
            Column.onClick(() => {
                this.flag = 1;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("连续包年");
            Text.fontSize(20);
            Text.fontWeight(999);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("￥138.0");
            Text.fontSize(30);
            Text.fontColor(Color.Red);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("原价￥299");
            Text.fontSize(20);
            Text.fontColor("#CBE7DC");
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.borderWidth(0.1);
            Column.borderColor("#E4E4E4");
            Column.width("30%");
            Column.height(120);
            Column.backgroundColor(this.flag == 2 ? "#F2E7DC" : "#ffffff");
            Column.justifyContent(FlexAlign.Center);
            Column.borderRadius(20);
            Column.onClick(() => {
                this.flag = 2;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("季卡");
            Text.fontSize(20);
            Text.fontWeight(999);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("￥78.0");
            Text.fontSize(30);
            Text.fontColor(Color.Red);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("原价￥299");
            Text.fontSize(20);
            Text.fontColor("#CBE7DC");
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin(10);
            Column.borderColor("#E4E4E4");
            Column.borderWidth(0.1);
            Column.width("30%");
            Column.height(120);
            Column.backgroundColor(this.flag == 3 ? "#F2E7DC" : "#ffffff");
            Column.justifyContent(FlexAlign.Center);
            Column.borderRadius(20);
            Column.onClick(() => {
                this.flag = 3;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("12个月");
            Text.fontSize(20);
            Text.fontWeight(999);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("￥198.0");
            Text.fontSize(30);
            Text.fontColor(Color.Red);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("原价￥299");
            Text.fontSize(20);
            Text.fontColor("#CBE7DC");
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("到期按自动续费，可随时取消");
            Text.fontSize(20);
            Text.fontWeight(500);
            Text.fontColor("#1d454444");
            Text.width("100%");
            Text.textAlign(TextAlign.Center);
            Text.margin(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("立即开通");
            Text.fontSize(20);
            Text.fontWeight(999);
            Text.textAlign(TextAlign.Center);
            Text.backgroundColor("#EBD5C1");
            Text.width("90%");
            Text.height(50);
            Text.borderRadius(20);
            Text.onClick(() => {
                let log = DialogHelper.showLoadingDialog({
                    loadType: SpinType.spinP,
                    loadColor: Color.White,
                    loadSize: 70,
                    backgroundColor: '#BB000000',
                    content: "正在购买中，请不要离开",
                    fontSize: 18,
                    padding: { top: 30, right: 50, bottom: 30, left: 50 },
                    autoCancel: true
                });
                setTimeout(() => {
                    DialogHelper.closeDialog(log);
                }, 2000);
                router.replaceUrl({ url: "pages/Index", params: { changes: true } });
            });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Vip";
    }
}
registerNamedRoute(() => new Vip(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/vip", pageFullPath: "entry/src/main/ets/pages/vip", integratedHsp: "false", moduleType: "followWithHap" });
