if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Music_Params {
    nowMusic?: string;
    sliderValue?: number[];
    isOn?: boolean[];
    datas?: Type2[];
}
import router from "@ohos:router";
import { sharedTitle } from "@normalized:N&&&entry/src/main/ets/pages/title&";
interface Type2 {
    tex: string;
    id: number;
}
class Music extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__nowMusic = new ObservedPropertySimplePU('Bright Futures', this, "nowMusic");
        this.__sliderValue = new ObservedPropertyObjectPU([30, 40, 50], this, "sliderValue");
        this.__isOn = new ObservedPropertyObjectPU([false, false, false], this, "isOn");
        this.datas = [
            { tex: "音乐", id: 0 },
            { tex: "语音", id: 1 },
            { tex: "音效", id: 2 }
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Music_Params) {
        if (params.nowMusic !== undefined) {
            this.nowMusic = params.nowMusic;
        }
        if (params.sliderValue !== undefined) {
            this.sliderValue = params.sliderValue;
        }
        if (params.isOn !== undefined) {
            this.isOn = params.isOn;
        }
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
    }
    updateStateVars(params: Music_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__nowMusic.purgeDependencyOnElmtId(rmElmtId);
        this.__sliderValue.purgeDependencyOnElmtId(rmElmtId);
        this.__isOn.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__nowMusic.aboutToBeDeleted();
        this.__sliderValue.aboutToBeDeleted();
        this.__isOn.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __nowMusic: ObservedPropertySimplePU<string>;
    get nowMusic() {
        return this.__nowMusic.get();
    }
    set nowMusic(newValue: string) {
        this.__nowMusic.set(newValue);
    }
    private __sliderValue: ObservedPropertyObjectPU<number[]>;
    get sliderValue() {
        return this.__sliderValue.get();
    }
    set sliderValue(newValue: number[]) {
        this.__sliderValue.set(newValue);
    }
    private __isOn: ObservedPropertyObjectPU<boolean[]>;
    get isOn() {
        return this.__isOn.get();
    }
    set isOn(newValue: boolean[]) {
        this.__isOn.set(newValue);
    }
    private datas: Type2[];
    sliderItem(data: Type2, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height(100);
            Column.margin({ top: 10 });
            Column.backgroundColor('#ffff');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height('50%');
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.tex);
            Text.fontSize(15);
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
            Toggle.selectedColor('#45D585');
        }, Toggle);
        //开关组件
        Toggle.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777304, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 20, height: 20 });
            Image.margin({ left: 10 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Slider.create({
                value: this.sliderValue[data.id],
                min: 0,
                max: 100,
                step: 1
            });
            Slider.onChange((value: number) => {
                this.sliderValue[data.id] = value;
            });
            Slider.width('80%');
        }, Slider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777310, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 20, height: 20 });
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        Column.pop();
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
                    let componentCall = new 
                    //标题
                    sharedTitle(this, { title: "运动音乐" }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/music.ets", line: 68, col: 6 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: "运动音乐"
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
            //选择音乐
            Row.create();
            //选择音乐
            Row.width('100%');
            //选择音乐
            Row.height(100);
            //选择音乐
            Row.margin({ top: 10 });
            //选择音乐
            Row.padding(10);
            //选择音乐
            Row.justifyContent(FlexAlign.SpaceBetween);
            //选择音乐
            Row.backgroundColor('#ffff');
            //选择音乐
            Row.onClick(() => {
                router.pushUrl({ url: 'pages/trainMusic' });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("训练音乐");
            Text.fontSize(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.nowMusic);
            Text.fontSize(15);
            Text.fontColor('#ff676565');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
        }, Image);
        //选择音乐
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //设置音乐
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const i = _item;
                this.sliderItem.bind(this)(i);
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        //设置音乐
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Music";
    }
}
registerNamedRoute(() => new Music(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/music", pageFullPath: "entry/src/main/ets/pages/music", integratedHsp: "false", moduleType: "followWithHap" });
