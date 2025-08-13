if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TrainMusic_Params {
    bottomRectHeight?: number;
    topRectHeight?: number;
    isOn?: boolean;
    currentSelectedIndex?: number;
    musicList?: MusicItem[];
}
import router from "@ohos:router";
interface MusicItem {
    title: string;
    img: Resource;
    isSelected?: boolean;
}
class TrainMusic extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomRectHeight = this.createStorageProp('bottomRectHeight', 0, "bottomRectHeight");
        this.__topRectHeight = this.createStorageProp('topRectHeight', 0, "topRectHeight");
        this.__isOn = new ObservedPropertySimplePU(false, this, "isOn");
        this.__currentSelectedIndex = new ObservedPropertySimplePU(-1, this, "currentSelectedIndex");
        this.__musicList = new ObservedPropertyObjectPU([
            { title: 'Bright Future', img: { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, isSelected: false },
            { title: 'Amdih in', img: { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, isSelected: false },
            { title: 'Noduf foud', img: { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, isSelected: false },
        ], this, "musicList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TrainMusic_Params) {
        if (params.isOn !== undefined) {
            this.isOn = params.isOn;
        }
        if (params.currentSelectedIndex !== undefined) {
            this.currentSelectedIndex = params.currentSelectedIndex;
        }
        if (params.musicList !== undefined) {
            this.musicList = params.musicList;
        }
    }
    updateStateVars(params: TrainMusic_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bottomRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isOn.purgeDependencyOnElmtId(rmElmtId);
        this.__currentSelectedIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__musicList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bottomRectHeight.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__isOn.aboutToBeDeleted();
        this.__currentSelectedIndex.aboutToBeDeleted();
        this.__musicList.aboutToBeDeleted();
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
    private __isOn: ObservedPropertySimplePU<boolean>;
    get isOn() {
        return this.__isOn.get();
    }
    set isOn(newValue: boolean) {
        this.__isOn.set(newValue);
    }
    private __currentSelectedIndex: ObservedPropertySimplePU<number>; // 当前选中项的索引
    get currentSelectedIndex() {
        return this.__currentSelectedIndex.get();
    }
    set currentSelectedIndex(newValue: number) {
        this.__currentSelectedIndex.set(newValue);
    }
    private __musicList: ObservedPropertyObjectPU<MusicItem[]>;
    get musicList() {
        return this.__musicList.get();
    }
    set musicList(newValue: MusicItem[]) {
        this.__musicList.set(newValue);
    }
    itemui(item: MusicItem, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding(15);
            Row.onClick(() => {
                this.currentSelectedIndex = index;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.title);
            Text.padding(15);
            Text.fontSize(15);
            Text.width('50%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.currentSelectedIndex === index) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(item.img);
                        Image.width(20);
                        Image.height(20);
                        Image.fillColor('#007AFF');
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            } // 根据状态切换颜色
        }, If);
        If.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({ top: px2vp(this.topRectHeight), bottom: px2vp(this.bottomRectHeight) });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.borderWidth({
                bottom: 1
            });
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.onClick(() => {
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('训练音乐');
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
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('训练背景音乐');
            Text.fontSize(15);
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Toggle.create({ type: ToggleType.Switch, isOn: this.isOn });
            Toggle.onChange((isOn: boolean) => {
                this.isOn = isOn;
                console.log('开关状态:', isOn);
            });
            Toggle.width(50);
            Toggle.height(30);
        }, Toggle);
        Toggle.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('当前课程推荐音乐');
            Text.fontSize(15);
            Text.fontColor('#ffaea2a2');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 音乐列表
            List.create();
            // 音乐列表
            List.divider({ strokeWidth: 0.5, color: '#eee' });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
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
                        this.itemui.bind(this)(item, index!) // 传递index参数 }
                        ;
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.musicList, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        // 音乐列表
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('下载更多音乐');
            Text.fontSize(15);
            Text.fontColor('#ffaea2a2');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('添加更多音乐');
            Button.onClick((event: ClickEvent) => {
                router.pushUrl({ url: 'pages/musicBank' });
            });
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#000000');
            Button.borderColor('#000000');
            Button.borderWidth(1);
        }, Button);
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TrainMusic";
    }
}
registerNamedRoute(() => new TrainMusic(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/trainMusic", pageFullPath: "entry/src/main/ets/pages/trainMusic", integratedHsp: "false", moduleType: "followWithHap" });
