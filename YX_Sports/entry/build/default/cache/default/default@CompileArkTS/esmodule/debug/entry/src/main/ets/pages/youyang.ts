if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Youyang_Params {
    bottomRectHeight?: number;
    topRectHeight?: number;
    datas?: Type[];
    showDownloadingDialog?: boolean;
    showSuccessDialog?: boolean;
    currentDownloadIndex?: number;
}
import router from "@ohos:router";
interface Type {
    name: string;
    img: Resource;
    isDownloaded: boolean;
    isDownloading: boolean;
}
class Youyang extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomRectHeight = this.createStorageProp('bottomRectHeight', 0, "bottomRectHeight");
        this.__topRectHeight = this.createStorageProp('topRectHeight', 0, "topRectHeight");
        this.__datas = new ObservedPropertyObjectPU([
            { name: 'Bright Future', img: { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, isDownloaded: false, isDownloading: false },
            { name: 'Amdih in', img: { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, isDownloaded: false, isDownloading: false },
            { name: 'Noduf foud', img: { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, isDownloaded: false, isDownloading: false },
            { name: 'uptown girl', img: { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, isDownloaded: false, isDownloading: false },
            { name: 'Words I Couldn\'t Say', img: { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, isDownloaded: false, isDownloading: false },
            { name: 'Every Breath You Take', img: { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, isDownloaded: false, isDownloading: false },
        ], this, "datas");
        this.__showDownloadingDialog = new ObservedPropertySimplePU(false, this, "showDownloadingDialog");
        this.__showSuccessDialog = new ObservedPropertySimplePU(false, this, "showSuccessDialog");
        this.__currentDownloadIndex = new ObservedPropertySimplePU(-1, this, "currentDownloadIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Youyang_Params) {
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
        if (params.showDownloadingDialog !== undefined) {
            this.showDownloadingDialog = params.showDownloadingDialog;
        }
        if (params.showSuccessDialog !== undefined) {
            this.showSuccessDialog = params.showSuccessDialog;
        }
        if (params.currentDownloadIndex !== undefined) {
            this.currentDownloadIndex = params.currentDownloadIndex;
        }
    }
    updateStateVars(params: Youyang_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bottomRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__datas.purgeDependencyOnElmtId(rmElmtId);
        this.__showDownloadingDialog.purgeDependencyOnElmtId(rmElmtId);
        this.__showSuccessDialog.purgeDependencyOnElmtId(rmElmtId);
        this.__currentDownloadIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bottomRectHeight.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__datas.aboutToBeDeleted();
        this.__showDownloadingDialog.aboutToBeDeleted();
        this.__showSuccessDialog.aboutToBeDeleted();
        this.__currentDownloadIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __bottomRectHeight: ObservedPropertyAbstractPU<number>;
    get bottomRectHeight() {
        return this.__bottomRectHeight.get();
    }
    set bottomRectHeight(newValue: number) {
        this.__bottomRectHeight.set(newValue);
    }
    private __topRectHeight: ObservedPropertyAbstractPU<number>;
    get topRectHeight() {
        return this.__topRectHeight.get();
    }
    set topRectHeight(newValue: number) {
        this.__topRectHeight.set(newValue);
    }
    private __datas: ObservedPropertyObjectPU<Type[]>;
    get datas() {
        return this.__datas.get();
    }
    set datas(newValue: Type[]) {
        this.__datas.set(newValue);
    }
    private __showDownloadingDialog: ObservedPropertySimplePU<boolean>;
    get showDownloadingDialog() {
        return this.__showDownloadingDialog.get();
    }
    set showDownloadingDialog(newValue: boolean) {
        this.__showDownloadingDialog.set(newValue);
    }
    private __showSuccessDialog: ObservedPropertySimplePU<boolean>;
    get showSuccessDialog() {
        return this.__showSuccessDialog.get();
    }
    set showSuccessDialog(newValue: boolean) {
        this.__showSuccessDialog.set(newValue);
    }
    private __currentDownloadIndex: ObservedPropertySimplePU<number>;
    get currentDownloadIndex() {
        return this.__currentDownloadIndex.get();
    }
    set currentDownloadIndex(newValue: number) {
        this.__currentDownloadIndex.set(newValue);
    }
    handleDownload(index: number) {
        if (this.datas[index].isDownloaded || this.datas[index].isDownloading) {
            return;
        }
        this.currentDownloadIndex = index;
        setTimeout(() => {
            let newData = this.datas.slice();
            newData[index].isDownloading = true;
            newData[index].img = { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" };
            this.datas = newData;
            setTimeout(() => {
                this.showDownloadingDialog = false;
            }, 2000);
        });
        // 模拟下载过程 - 延长到5秒
        setTimeout(() => {
            let updatedData = this.datas.slice();
            updatedData[index].isDownloading = false;
            updatedData[index].isDownloaded = true;
            updatedData[index].img = { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" };
            this.datas = updatedData;
            // 隐藏下载中弹窗，显示成功弹窗
            this.showDownloadingDialog = false;
            this.showSuccessDialog = true;
            // 成功弹窗2秒后自动消失
            setTimeout(() => {
                this.showSuccessDialog = false;
            }, 2000);
        }, 3000);
    }
    itemui(item: Type, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 1 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.name);
            Text.padding(15);
            Text.fontSize(15);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(item.img);
            Image.width(20);
            Image.height(20);
            Image.onClick(() => {
                this.handleDownload(index);
            });
        }, Image);
        Row.pop();
        Column.pop();
    }
    downloadingDialog(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('rgba(0,0,0,0.3)');
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(100);
            Column.height(100);
            Column.backgroundColor(Color.Black);
            Column.borderRadius(8);
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            LoadingProgress.create();
            LoadingProgress.width(40);
            LoadingProgress.height(40);
            LoadingProgress.color(Color.White);
        }, LoadingProgress);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('下载中');
            Text.fontSize(14);
            Text.fontColor(Color.White);
            Text.margin({ top: 12 });
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
    }
    successDialog(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('rgba(0,0,0,0.3)');
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(100);
            Column.height(100);
            Column.backgroundColor(Color.Black);
            Column.borderRadius(8);
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.fillColor(Color.White);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('下载成功');
            Text.fontSize(14);
            Text.fontColor(Color.White);
            Text.margin({ top: 12 });
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) });
            Column.bindContentCover(this.showDownloadingDialog, { builder: () => {
                    this.downloadingDialog.call(this);
                } });
            Column.bindContentCover(this.showSuccessDialog, { builder: () => {
                    this.successDialog.call(this);
                } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.borderWidth({
                bottom: 1
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.onClick(() => {
                router.replaceUrl({ url: 'pages/musicBank' }); // 返回逻辑
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('有氧');
            Text.fontSize(20);
            Text.fontWeight(900);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.width(40);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.divider({ strokeWidth: 0.5, color: '#eee' });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.itemui.bind(this)(item, index);
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Youyang";
    }
}
registerNamedRoute(() => new Youyang(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/youyang", pageFullPath: "entry/src/main/ets/pages/youyang", integratedHsp: "false", moduleType: "followWithHap" });
