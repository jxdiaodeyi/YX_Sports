if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Information_Params {
    isOn?: boolean[];
    datas?: Type5[];
}
import { sharedTitle } from "@normalized:N&&&entry/src/main/ets/pages/title&";
interface Type5 {
    tex: string;
    id: number;
}
class Information extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isOn = new ObservedPropertyObjectPU([false, false, false, false], this, "isOn");
        this.datas = [
            { tex: "接受消息通知", id: 0 },
            { tex: "声音", id: 1 },
            { tex: "震动", id: 2 },
            { tex: "消息免打扰 (22:00~09:00)", id: 3 }
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Information_Params) {
        if (params.isOn !== undefined) {
            this.isOn = params.isOn;
        }
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
    }
    updateStateVars(params: Information_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isOn.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isOn.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isOn: ObservedPropertyObjectPU<boolean[]>;
    get isOn() {
        return this.__isOn.get();
    }
    set isOn(newValue: boolean[]) {
        this.__isOn.set(newValue);
    }
    private datas: Type5[];
    informationItem(data: Type5, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(50);
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.backgroundColor('#ffff');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.tex);
            Text.fontSize(18);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //开关组件
            Toggle.create({ type: ToggleType.Switch, isOn: this.isOn[data.id] });
            //开关组件
            Toggle.onChange((isOn: boolean) => {
                this.isOn[data.id] = isOn;
            });
            //开关组件
            Toggle.margin({ right: 10 });
            //开关组件
            Toggle.size({ width: 55, height: 28 });
            //开关组件
            Toggle.selectedColor('#45D585');
        }, Toggle);
        //开关组件
        Toggle.pop();
        Row.pop();
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
                    let componentCall = new sharedTitle(this, { title: '消息通知' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/information.ets", line: 44, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '消息通知'
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
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const i = _item;
                this.informationItem.bind(this)(i);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (i.id == 0) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create();
                                Row.width('100%');
                                Row.height(40);
                                Row.alignItems(VerticalAlign.Center);
                                Row.margin({ left: 10 });
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create("通知方式");
                                Text.fontSize(12);
                                Text.fontColor('#A5BFE0');
                            }, Text);
                            Text.pop();
                            Row.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (i.id == 1 || i.id == 2) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
                                Image.size({ width: '100%', height: 0.3 });
                            }, Image);
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Information";
    }
}
registerNamedRoute(() => new Information(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/information", pageFullPath: "entry/src/main/ets/pages/information", integratedHsp: "false", moduleType: "followWithHap" });
