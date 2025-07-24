if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Plan_Params {
    begin?: number;
    days?: number;
}
import router from "@ohos:router";
export class Plan extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__begin = new ObservedPropertySimplePU(1, this, "begin");
        this.__days = new ObservedPropertySimplePU(1, this, "days");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Plan_Params) {
        if (params.begin !== undefined) {
            this.begin = params.begin;
        }
        if (params.days !== undefined) {
            this.days = params.days;
        }
    }
    updateStateVars(params: Plan_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__begin.purgeDependencyOnElmtId(rmElmtId);
        this.__days.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__begin.aboutToBeDeleted();
        this.__days.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __begin: ObservedPropertySimplePU<number>;
    get begin() {
        return this.__begin.get();
    }
    set begin(newValue: number) {
        this.__begin.set(newValue);
    }
    private __days: ObservedPropertySimplePU<number>;
    get days() {
        return this.__days.get();
    }
    set days(newValue: number) {
        this.__days.set(newValue);
    }
    day(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.backgroundColor("#6C55E4");
            Row.width('100%');
            Row.height(150);
            Row.borderRadius(15);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("第" + this.begin + "周计划");
            Text.width('50%');
            Text.fontSize(20);
            Text.fontWeight(900);
            Text.fontColor('#ffffff');
            Text.textAlign(TextAlign.Start);
            Text.height('40%');
            Text.margin(15);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height("10%");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("");
            Text.backgroundColor(this.days == 1 ? "#ffffff" : "#6C55E4");
            Text.width(10);
            Text.height(10);
            Text.borderRadius(5);
            Text.margin(15);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("");
            Text.backgroundColor(this.days == 2 ? "#ffffff" : "#6C55E4");
            Text.width(10);
            Text.height(10);
            Text.borderRadius(5);
            Text.margin(15);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("");
            Text.backgroundColor(this.days == 3 ? "#ffffff" : "#6C55E4");
            Text.width(10);
            Text.height(10);
            Text.borderRadius(5);
            Text.margin(15);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("");
            Text.backgroundColor(this.days == 4 ? "#ffffff" : "#6C55E4");
            Text.width(10);
            Text.height(10);
            Text.borderRadius(5);
            Text.margin(15);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("");
            Text.backgroundColor(this.days == 5 ? "#ffffff" : "#6C55E4");
            Text.width(10);
            Text.height(10);
            Text.borderRadius(5);
            Text.margin(15);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("");
            Text.backgroundColor(this.days == 6 ? "#ffffff" : "#6C55E4");
            Text.width(10);
            Text.height(10);
            Text.borderRadius(5);
            Text.margin(15);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("");
            Text.backgroundColor(this.days == 7 ? "#ffffff" : "#6C55E4");
            Text.width(10);
            Text.height(10);
            Text.borderRadius(5);
            Text.margin(15);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height("30%");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("21");
            Text.fontColor("#ffffff");
            Text.fontSize(18);
            Text.margin(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("22");
            Text.fontColor("#ffffff");
            Text.fontSize(18);
            Text.margin(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("23");
            Text.fontColor("#ffffff");
            Text.fontSize(18);
            Text.margin(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("24");
            Text.fontColor("#ffffff");
            Text.fontSize(18);
            Text.margin(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("25");
            Text.fontColor("#ffffff");
            Text.fontSize(18);
            Text.margin(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("26");
            Text.fontColor("#ffffff");
            Text.fontSize(18);
            Text.margin(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("27");
            Text.fontColor("#ffffff");
            Text.fontSize(18);
            Text.margin(10);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Progress.create({ value: this.days, total: 6, type: ProgressType.Ring });
            Progress.width(70);
            Progress.height(100);
            Progress.color("#ffffff");
            Progress.style({ strokeWidth: 7 });
        }, Progress);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.days + '/7');
            Text.fontSize(20);
            Text.fontColor('#007DFF');
            Text.fontWeight(600);
            Text.fontColor("#ffffff");
        }, Text);
        Text.pop();
        Stack.pop();
        Row.pop();
    }
    sport(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 15 });
            Column.onClick(() => {
                router.pushUrl({ url: "pages/class" });
            });
            Column.backgroundImage({ "id": 16777241, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Column.backgroundImageSize(ImageSize.Cover);
            Column.width('100%');
            Column.height(150);
            Column.borderRadius(15);
            Column.padding(20);
            Column.justifyContent(FlexAlign.End);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("小腿塑性");
            Text.fontSize(25);
            Text.fontColor('#ffffff');
            Text.fontWeight(900);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777242, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('20分钟');
            Text.fontSize(15);
            Text.fontColor('#ffffff');
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('简单');
            Text.fontSize(15);
            Text.fontColor('#ffffff');
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 15 });
            Column.padding(15);
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding(14);
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('计划');
            Text.fontSize(25);
            Text.fontWeight(900);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
            Image.onClick(() => {
                router.pushUrl({ url: "pages/sportplan" });
            });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.scrollBar(BarState.Off);
            Scroll.edgeEffect(EdgeEffect.Spring);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 15 });
        }, Column);
        this.day.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("今日运动");
            Text.fontSize(20);
            Text.fontWeight(700);
        }, Text);
        Text.pop();
        this.sport.bind(this)();
        this.sport.bind(this)();
        this.sport.bind(this)();
        this.sport.bind(this)();
        this.sport.bind(this)();
        this.sport.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('');
            Text.height(50);
        }, Text);
        Text.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
