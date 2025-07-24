if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Private_Params {
    isOn?: boolean;
}
import { sharedTitle } from "@normalized:N&&&entry/src/main/ets/pages/title&";
class Private extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isOn = new ObservedPropertySimplePU(false, this, "isOn");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Private_Params) {
        if (params.isOn !== undefined) {
            this.isOn = params.isOn;
        }
    }
    updateStateVars(params: Private_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isOn.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isOn.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isOn: ObservedPropertySimplePU<boolean>;
    get isOn() {
        return this.__isOn.get();
    }
    set isOn(newValue: boolean) {
        this.__isOn.set(newValue);
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
                    let componentCall = new sharedTitle(this, { title: '隐私设置' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/private.ets", line: 12, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '隐私设置'
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
            Row.height(60);
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.backgroundColor('#ffff');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("允许展示推荐内容");
            Text.fontSize(18);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Toggle.create({ type: ToggleType.Switch, isOn: this.isOn });
            Toggle.onChange((isOn: boolean) => {
                this.isOn = isOn;
            });
            Toggle.size({ width: 55, height: 30 });
            Toggle.margin({ right: 10 });
            Toggle.selectedColor('#45D585');
        }, Toggle);
        Toggle.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Private";
    }
}
registerNamedRoute(() => new Private(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/private", pageFullPath: "entry/src/main/ets/pages/private", integratedHsp: "false", moduleType: "followWithHap" });
