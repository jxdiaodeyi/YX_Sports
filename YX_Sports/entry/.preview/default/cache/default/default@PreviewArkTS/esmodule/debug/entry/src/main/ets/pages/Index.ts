if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    message?: string;
    curIndex?: number;
}
import { Practice } from "@normalized:N&&&entry/src/main/ets/pages/PracticePage&";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__curIndex = new ObservedPropertySimplePU(0, this, "curIndex");
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
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__curIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__curIndex.aboutToBeDeleted();
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
    navBar(selImg: Resource, img: Resource, tex: string, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(12:5)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(index == this.curIndex ? selImg : img);
            Image.debugLine("entry/src/main/ets/pages/Index.ets(13:7)", "entry");
            Image.size({ width: 20, height: 20 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(tex);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(15:7)", "entry");
            Text.fontColor(index == this.curIndex ? "#6C55E4" : "#CCCCCC");
            Text.fontSize(10);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(22:5)", "entry");
            Column.height('100%');
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.End });
            Tabs.debugLine("entry/src/main/ets/pages/Index.ets(23:7)", "entry");
            Tabs.onChange((index: number) => { this.curIndex = index; });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create("首页内容");
                    Text.debugLine("entry/src/main/ets/pages/Index.ets(25:11)", "entry");
                }, Text);
                Text.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, { "id": 16777228, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" }, { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" }, "首页", 0);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/Index.ets(24:9)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create("计划内容");
                    Text.debugLine("entry/src/main/ets/pages/Index.ets(28:11)", "entry");
                }, Text);
                Text.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, { "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" }, { "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" }, "计划", 1);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/Index.ets(27:9)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Practice(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 31, col: 11 });
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
                    this.navBar.call(this, { "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" }, { "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" }, "训练", 2);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/Index.ets(30:9)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create("我的内容");
                    Text.debugLine("entry/src/main/ets/pages/Index.ets(34:11)", "entry");
                }, Text);
                Text.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, { "id": 16777227, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" }, { "id": 16777220, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" }, "我的", 3);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/Index.ets(33:9)", "entry");
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
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.watermalon_sport", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
