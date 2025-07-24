if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FitnessGoal_Params {
    goal_base?: string[];
}
import { DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import { sharedTitle } from "@normalized:N&&&entry/src/main/ets/pages/title&";
class FitnessGoal extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__goal_base = new ObservedPropertyObjectPU(['塑形', '基础'], this, "goal_base");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FitnessGoal_Params) {
        if (params.goal_base !== undefined) {
            this.goal_base = params.goal_base;
        }
    }
    updateStateVars(params: FitnessGoal_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__goal_base.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__goal_base.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __goal_base: ObservedPropertyObjectPU<string[]>;
    get goal_base() {
        return this.__goal_base.get();
    }
    set goal_base(newValue: string[]) {
        this.__goal_base.set(newValue);
    }
    rowItem(title: string, temp: string, data: string[], id: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(60);
            Row.backgroundColor('#ffff');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.onClick(() => {
                DialogHelper.showActionSheetDialog({
                    title: "请选择上传方式",
                    sheets: data,
                    onAction: (index) => {
                        this.goal_base[id] = data[index];
                    }
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.goal_base[id]);
            Text.fontSize(18);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F5F5F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({ bottom: 10 });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    //标题
                    sharedTitle(this, { title: "健身目标与基础" }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/fitnessGoal.ets", line: 44, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: "健身目标与基础"
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "sharedTitle" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.rowItem.bind(this)("健身目标", this.goal_base[0], ["减脂", "塑形", "增肌", "健康"], 0);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: '90%', height: 0.5 });
        }, Image);
        this.rowItem.bind(this)("健身基础", this.goal_base[1], ["初级", "中级", "高级"], 1);
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "FitnessGoal";
    }
}
registerNamedRoute(() => new FitnessGoal(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/fitnessGoal", pageFullPath: "entry/src/main/ets/pages/fitnessGoal", integratedHsp: "false", moduleType: "followWithHap" });
