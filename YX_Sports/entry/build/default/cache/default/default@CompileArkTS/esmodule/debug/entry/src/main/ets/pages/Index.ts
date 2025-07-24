if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    message?: string;
    curIndex?: number;
    change?: boolean;
}
import router from "@ohos:router";
import { Home } from "@normalized:N&&&entry/src/main/ets/pages/home&";
import { mine } from "@normalized:N&&&entry/src/main/ets/pages/mine&";
import { Plan } from "@normalized:N&&&entry/src/main/ets/pages/plan&";
import { Practice } from "@normalized:N&&&entry/src/main/ets/pages/PracticePage&";
import type { vip } from './vip';
import { SubscriptionPlan } from "@normalized:N&&&entry/src/main/ets/pages/vipplan&";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__curIndex = new ObservedPropertySimplePU(0, this, "curIndex");
        this.__change = new ObservedPropertySimplePU(false, this, "change");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.curIndex !== undefined) {
            this.curIndex = params.curIndex;
        }
        if (params.change !== undefined) {
            this.change = params.change;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__curIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__change.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__curIndex.aboutToBeDeleted();
        this.__change.aboutToBeDeleted();
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
    private __curIndex: ObservedPropertySimplePU<number>;
    get curIndex() {
        return this.__curIndex.get();
    }
    set curIndex(newValue: number) {
        this.__curIndex.set(newValue);
    }
    private __change: ObservedPropertySimplePU<boolean>;
    get change() {
        return this.__change.get();
    }
    set change(newValue: boolean) {
        this.__change.set(newValue);
    }
    navBar(selImg: Resource, img: Resource, tex: string, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(index == this.curIndex ? selImg : img);
            Image.size({ width: 20, height: 20 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(tex);
            Text.fontColor(index == this.curIndex ? "#6C55E4" : "#CCCCCC");
            Text.fontSize(10);
        }, Text);
        Text.pop();
        Column.pop();
    }
    aboutToAppear(): boolean {
        const params = router.getParams() as vip | undefined;
        if (params) {
            this.change = params.changes;
        }
        return this.change;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.End });
            Tabs.onChange((index: number) => { this.curIndex = index; });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Home(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 42, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Home" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, { "id": 16777227, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, { "id": 16777228, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, "首页", 0);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.aboutToAppear()) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new Plan(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 46, col: 13 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "Plan" });
                            }
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new SubscriptionPlan(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 48, col: 13 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "SubscriptionPlan" });
                            }
                        });
                    }
                }, If);
                If.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, { "id": 16777234, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, { "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, "计划", 1);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Practice(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 52, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Practice" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, { "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, { "id": 16777230, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, "训练", 2);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new mine(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 55, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "mine" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, { "id": 16777233, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, { "id": 16777231, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, "我的", 3);
                } });
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
