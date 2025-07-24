if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SysInformation_Params {
    title?: string;
    date?: string;
}
import { sharedTitle } from "@normalized:N&&&entry/src/main/ets/pages/title&";
import router from "@ohos:router";
class SysInformation extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__title = new ObservedPropertySimplePU("年度会员强势来袭，这次你打算加入我们燃脂了吗？", this, "title");
        this.__date = new ObservedPropertySimplePU("6-11", this, "date");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SysInformation_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.date !== undefined) {
            this.date = params.date;
        }
    }
    updateStateVars(params: SysInformation_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__title.purgeDependencyOnElmtId(rmElmtId);
        this.__date.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__title.aboutToBeDeleted();
        this.__date.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __title: ObservedPropertySimplePU<string>;
    get title() {
        return this.__title.get();
    }
    set title(newValue: string) {
        this.__title.set(newValue);
    }
    private __date: ObservedPropertySimplePU<string>;
    get date() {
        return this.__date.get();
    }
    set date(newValue: string) {
        this.__date.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F5F5F5');
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new sharedTitle(this, { title: '系统通知' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/sysInfo.ets", line: 12, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '系统通知'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "sharedTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: '100%', height: 0.3 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(140);
            Row.backgroundColor('#ffff');
            Row.onClick(() => {
                router.replaceUrl({ url: 'pages/detail' });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('65%');
            Column.height(121);
            Column.justifyContent(FlexAlign.SpaceBetween);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.date);
            Text.fontColor('#B7CFCF');
            Text.width('100%');
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777309, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(121);
            Image.height(121);
            Image.borderRadius(5);
            Image.margin({ right: 10, left: 5 });
        }, Image);
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SysInformation";
    }
}
registerNamedRoute(() => new SysInformation(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/sysInfo", pageFullPath: "entry/src/main/ets/pages/sysInfo", integratedHsp: "false", moduleType: "followWithHap" });
