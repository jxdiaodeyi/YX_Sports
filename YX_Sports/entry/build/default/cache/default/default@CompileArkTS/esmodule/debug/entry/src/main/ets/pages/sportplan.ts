if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Sportplan_Params {
    flag?: number;
    progressValue?: number;
    duration?: number;
}
import router from "@ohos:router";
import { DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
class Sportplan extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__flag = new ObservedPropertySimplePU(0, this, "flag");
        this.__progressValue = new ObservedPropertySimplePU(1, this, "progressValue");
        this.__duration = new ObservedPropertySimplePU(1, this, "duration");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Sportplan_Params) {
        if (params.flag !== undefined) {
            this.flag = params.flag;
        }
        if (params.progressValue !== undefined) {
            this.progressValue = params.progressValue;
        }
        if (params.duration !== undefined) {
            this.duration = params.duration;
        }
    }
    updateStateVars(params: Sportplan_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__flag.purgeDependencyOnElmtId(rmElmtId);
        this.__progressValue.purgeDependencyOnElmtId(rmElmtId);
        this.__duration.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__flag.aboutToBeDeleted();
        this.__progressValue.aboutToBeDeleted();
        this.__duration.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __flag: ObservedPropertySimplePU<number>;
    get flag() {
        return this.__flag.get();
    }
    set flag(newValue: number) {
        this.__flag.set(newValue);
    }
    private __progressValue: ObservedPropertySimplePU<number>;
    get progressValue() {
        return this.__progressValue.get();
    }
    set progressValue(newValue: number) {
        this.__progressValue.set(newValue);
    }
    private __duration: ObservedPropertySimplePU<number>;
    get duration() {
        return this.__duration.get();
    }
    set duration(newValue: number) {
        this.__duration.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding(10);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('修改训练计划');
            Text.fontSize(25);
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('保存');
            Text.fontColor('#6249E3');
            Text.fontSize(20);
            Text.onClick(() => {
                DialogHelper.showToastTip({
                    message: "保存成功",
                    imageRes: { "id": 125830038, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }
                });
                router.back();
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width('100%');
            Row.height(80);
            Row.border({ width: { top: 1, bottom: 1, left: 0, right: 0 }, color: { top: '#F2F4F6', bottom: '#F2F4F6' } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('改变训练计划');
            Text.fontSize(25);
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.onClick(() => {
                this.progressValue = 1;
                this.duration = 1;
            });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('你的目标');
            Text.width("100%");
            Text.fontSize(25);
            Text.fontWeight(600);
            Text.textAlign(TextAlign.Start);
            Text.margin(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(100);
            Row.border({ width: { top: 0, bottom: 1, left: 0, right: 0 }, color: { top: '#F2F4F6', bottom: '#F2F4F6' } });
            Row.justifyContent(FlexAlign.SpaceAround);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('减肥');
            Text.fontSize(25);
            Text.fontWeight(600);
            Text.width(120);
            Text.height(90);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.fontColor(this.flag == 0 ? '#ffffff' : '#8FC4CE');
            Text.backgroundColor(this.flag == 0 ? '#6249E3' : '#FFFFFF');
            Text.onClick(() => {
                this.flag = 0;
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('塑性');
            Text.fontSize(25);
            Text.fontWeight(600);
            Text.width(120);
            Text.height(90);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.fontColor(this.flag == 1 ? '#ffffff' : '#8FC4CE');
            Text.backgroundColor(this.flag == 1 ? '#6249E3' : '#FFFFFF');
            Text.onClick(() => {
                this.flag = 1;
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('增肌');
            Text.fontSize(25);
            Text.fontWeight(600);
            Text.width(120);
            Text.height(90);
            Text.borderRadius(15);
            Text.textAlign(TextAlign.Center);
            Text.fontColor(this.flag == 2 ? '#ffffff' : '#8FC4CE');
            Text.backgroundColor(this.flag == 2 ? '#6249E3' : '#FFFFFF');
            Text.onClick(() => {
                this.flag = 2;
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin(30);
            Column.width('100%');
            Column.height(150);
            Column.border({ width: { top: 0, bottom: 1, left: 0, right: 0 }, color: { top: '#F2F4F6', bottom: '#F2F4F6' } });
            Column.justifyContent(FlexAlign.SpaceAround);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('每周锻炼天数');
            Text.width("100%");
            Text.fontSize(25);
            Text.fontWeight(600);
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.progressValue + '天');
            Text.width("100%");
            Text.fontSize(25);
            Text.fontWeight(600);
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Slider.create({
                min: 1,
                max: 7,
                value: this.progressValue,
                step: 1,
                style: SliderStyle.OutSet
            });
            Slider.blockColor('#1E90FF');
            Slider.selectedColor('#1E90FF');
            Slider.trackColor('#E0E0E0');
            Slider.width('100%');
            Slider.onChange((value: number) => {
                this.progressValue = value; // 更新进度值
            });
        }, Slider);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height(150);
            Column.border({ width: { top: 0, bottom: 1, left: 0, right: 0 }, color: { top: '#F2F4F6', bottom: '#F2F4F6' } });
            Column.justifyContent(FlexAlign.SpaceAround);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('每次锻炼时长');
            Text.width("100%");
            Text.fontSize(25);
            Text.fontWeight(600);
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.duration + '分钟');
            Text.width("100%");
            Text.fontSize(25);
            Text.fontWeight(600);
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Slider.create({
                min: 10,
                max: 120,
                value: this.duration,
                step: 1,
                style: SliderStyle.OutSet
            });
            Slider.blockColor('#1E90FF');
            Slider.selectedColor('#1E90FF');
            Slider.trackColor('#E0E0E0');
            Slider.width('100%');
            Slider.onChange((value: number) => {
                this.duration = value; // 更新进度值
            });
        }, Slider);
        Column.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Sportplan";
    }
}
registerNamedRoute(() => new Sportplan(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/sportplan", pageFullPath: "entry/src/main/ets/pages/sportplan", integratedHsp: "false", moduleType: "followWithHap" });
