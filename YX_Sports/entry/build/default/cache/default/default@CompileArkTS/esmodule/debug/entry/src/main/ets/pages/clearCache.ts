if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ClearCache_Params {
    photoCache?: number;
    viewCache?: number;
}
import { DialogAction, DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import { sharedTitle } from "@normalized:N&&&entry/src/main/ets/pages/title&";
class ClearCache extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__photoCache = new ObservedPropertySimplePU(12.2, this, "photoCache");
        this.__viewCache = new ObservedPropertySimplePU(17.9, this, "viewCache");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ClearCache_Params) {
        if (params.photoCache !== undefined) {
            this.photoCache = params.photoCache;
        }
        if (params.viewCache !== undefined) {
            this.viewCache = params.viewCache;
        }
    }
    updateStateVars(params: ClearCache_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__photoCache.purgeDependencyOnElmtId(rmElmtId);
        this.__viewCache.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__photoCache.aboutToBeDeleted();
        this.__viewCache.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __photoCache: ObservedPropertySimplePU<number>;
    get photoCache() {
        return this.__photoCache.get();
    }
    set photoCache(newValue: number) {
        this.__photoCache.set(newValue);
    }
    private __viewCache: ObservedPropertySimplePU<number>;
    get viewCache() {
        return this.__viewCache.get();
    }
    set viewCache(newValue: number) {
        this.__viewCache.set(newValue);
    }
    clearItem(tex: string, cacheId: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(60);
            Row.backgroundColor('#ffff');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.onClick(() => {
                DialogHelper.showAlertDialog({
                    title: "",
                    content: "确定要清除缓存吗？",
                    onAction: (action) => {
                        if (action == DialogAction.SURE) {
                            if (cacheId == 0)
                                this.photoCache = 0;
                            else
                                this.viewCache = 0;
                            DialogHelper.showToastTip({
                                message: "操作成功",
                                imageRes: { "id": 125830038, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }
                            });
                        }
                    }
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(tex);
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.margin({ right: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (cacheId == 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.photoCache.toString() + 'M');
                        Text.fontSize(16);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.viewCache.toString() + 'M');
                        Text.fontSize(16);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 16, height: 16 });
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
                    let componentCall = new sharedTitle(this, { title: '清除缓存' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/clearCache.ets", line: 59, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '清除缓存'
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
        //photoCache
        this.clearItem.bind(this)("清除图片缓存", 0);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: '100%', height: 0.3 });
        }, Image);
        //viewCache
        this.clearItem.bind(this)("清除视频缓存", 1);
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ClearCache";
    }
}
registerNamedRoute(() => new ClearCache(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/clearCache", pageFullPath: "entry/src/main/ets/pages/clearCache", integratedHsp: "false", moduleType: "followWithHap" });
