if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    message?: string;
    curIndex?: number;
    change?: boolean;
    token?: string;
    userId?: number;
    telephone?: string;
    vip?: number;
    tokenFaker?: string;
}
import { home } from "@normalized:N&&&entry/src/main/ets/pages/home/home&";
import { Plan } from "@normalized:N&&&entry/src/main/ets/pages/plan/plan&";
import { PracticePage } from "@normalized:N&&&entry/src/main/ets/pages/practice/PracticePage&";
import { vipplan } from "@normalized:N&&&entry/src/main/ets/pages/plan/vipplan&";
import { Mine } from "@normalized:N&&&entry/src/main/ets/pages/mine/mine&";
interface userInfoType {
    token: string;
    userId: number;
    telephone: string;
    vip: number;
}
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__curIndex = new ObservedPropertySimplePU(0, this, "curIndex");
        this.__change = new ObservedPropertySimplePU(false, this, "change");
        this.__token = new ObservedPropertySimplePU((this.getUIContext().getRouter().getParams() as userInfoType).token, this, "token");
        this.__userId = new ObservedPropertySimplePU((this.getUIContext().getRouter().getParams() as userInfoType).userId, this, "userId");
        this.__telephone = new ObservedPropertySimplePU((this.getUIContext().getRouter().getParams() as userInfoType).telephone, this, "telephone");
        this.__vip = new ObservedPropertySimplePU((this.getUIContext().getRouter().getParams() as userInfoType).vip, this, "vip");
        this.tokenFaker = this.token;
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
        if (params.token !== undefined) {
            this.token = params.token;
        }
        if (params.userId !== undefined) {
            this.userId = params.userId;
        }
        if (params.telephone !== undefined) {
            this.telephone = params.telephone;
        }
        if (params.vip !== undefined) {
            this.vip = params.vip;
        }
        if (params.tokenFaker !== undefined) {
            this.tokenFaker = params.tokenFaker;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__curIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__change.purgeDependencyOnElmtId(rmElmtId);
        this.__token.purgeDependencyOnElmtId(rmElmtId);
        this.__userId.purgeDependencyOnElmtId(rmElmtId);
        this.__telephone.purgeDependencyOnElmtId(rmElmtId);
        this.__vip.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__curIndex.aboutToBeDeleted();
        this.__change.aboutToBeDeleted();
        this.__token.aboutToBeDeleted();
        this.__userId.aboutToBeDeleted();
        this.__telephone.aboutToBeDeleted();
        this.__vip.aboutToBeDeleted();
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
    private __token: ObservedPropertySimplePU<string>;
    get token() {
        return this.__token.get();
    }
    set token(newValue: string) {
        this.__token.set(newValue);
    }
    private __userId: ObservedPropertySimplePU<number>;
    get userId() {
        return this.__userId.get();
    }
    set userId(newValue: number) {
        this.__userId.set(newValue);
    }
    private __telephone: ObservedPropertySimplePU<string>;
    get telephone() {
        return this.__telephone.get();
    }
    set telephone(newValue: string) {
        this.__telephone.set(newValue);
    }
    private __vip: ObservedPropertySimplePU<number>;
    get vip() {
        return this.__vip.get();
    }
    set vip(newValue: number) {
        this.__vip.set(newValue);
    }
    private tokenFaker: string;
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
                            let componentCall = new home(this, { token: this.token, userId: this.userId, vip: this.vip }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 44, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    token: this.token,
                                    userId: this.userId,
                                    vip: this.vip
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "home" });
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
                    if (this.vip) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new Plan(this, { token: this.token, userId: this.userId }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 48, col: 13 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                token: this.token,
                                                userId: this.userId
                                            };
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
                                        let componentCall = new vipplan(this, { token: this.token, userId: this.userId }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 51, col: 13 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                token: this.token,
                                                userId: this.userId
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "vipplan" });
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
                            let componentCall = new PracticePage(this, { token: this.token, userId: this.userId }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 55, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    token: this.token,
                                    userId: this.userId
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "PracticePage" });
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
                            let componentCall = new Mine(this, { token: this.token, userId: this.userId, vip: this.vip }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 58, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    token: this.token,
                                    userId: this.userId,
                                    vip: this.vip
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Mine" });
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
