if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Practice_Params {
    isShow?: boolean;
    WeightRecord?: number;
    WeightInit?: number;
    TodayTrainTime?: number;
    TodayCaluli?: number;
    AllTrainTime?: number;
    AllCaluli?: number;
}
import { DialogAction, DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import router from "@ohos:router";
export class Practice extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isShow = new ObservedPropertySimplePU(false, this, "isShow");
        this.__WeightRecord = new ObservedPropertySimplePU(55.5, this, "WeightRecord");
        this.__WeightInit = new ObservedPropertySimplePU(67.5, this, "WeightInit");
        this.__TodayTrainTime = new ObservedPropertySimplePU(12, this, "TodayTrainTime");
        this.__TodayCaluli = new ObservedPropertySimplePU(190, this, "TodayCaluli");
        this.__AllTrainTime = new ObservedPropertySimplePU(102, this, "AllTrainTime");
        this.__AllCaluli = new ObservedPropertySimplePU(112, this, "AllCaluli");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Practice_Params) {
        if (params.isShow !== undefined) {
            this.isShow = params.isShow;
        }
        if (params.WeightRecord !== undefined) {
            this.WeightRecord = params.WeightRecord;
        }
        if (params.WeightInit !== undefined) {
            this.WeightInit = params.WeightInit;
        }
        if (params.TodayTrainTime !== undefined) {
            this.TodayTrainTime = params.TodayTrainTime;
        }
        if (params.TodayCaluli !== undefined) {
            this.TodayCaluli = params.TodayCaluli;
        }
        if (params.AllTrainTime !== undefined) {
            this.AllTrainTime = params.AllTrainTime;
        }
        if (params.AllCaluli !== undefined) {
            this.AllCaluli = params.AllCaluli;
        }
    }
    updateStateVars(params: Practice_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isShow.purgeDependencyOnElmtId(rmElmtId);
        this.__WeightRecord.purgeDependencyOnElmtId(rmElmtId);
        this.__WeightInit.purgeDependencyOnElmtId(rmElmtId);
        this.__TodayTrainTime.purgeDependencyOnElmtId(rmElmtId);
        this.__TodayCaluli.purgeDependencyOnElmtId(rmElmtId);
        this.__AllTrainTime.purgeDependencyOnElmtId(rmElmtId);
        this.__AllCaluli.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isShow.aboutToBeDeleted();
        this.__WeightRecord.aboutToBeDeleted();
        this.__WeightInit.aboutToBeDeleted();
        this.__TodayTrainTime.aboutToBeDeleted();
        this.__TodayCaluli.aboutToBeDeleted();
        this.__AllTrainTime.aboutToBeDeleted();
        this.__AllCaluli.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isShow: ObservedPropertySimplePU<boolean>;
    get isShow() {
        return this.__isShow.get();
    }
    set isShow(newValue: boolean) {
        this.__isShow.set(newValue);
    }
    private __WeightRecord: ObservedPropertySimplePU<number>;
    get WeightRecord() {
        return this.__WeightRecord.get();
    }
    set WeightRecord(newValue: number) {
        this.__WeightRecord.set(newValue);
    }
    private __WeightInit: ObservedPropertySimplePU<number>;
    get WeightInit() {
        return this.__WeightInit.get();
    }
    set WeightInit(newValue: number) {
        this.__WeightInit.set(newValue);
    }
    private __TodayTrainTime: ObservedPropertySimplePU<number>;
    get TodayTrainTime() {
        return this.__TodayTrainTime.get();
    }
    set TodayTrainTime(newValue: number) {
        this.__TodayTrainTime.set(newValue);
    }
    private __TodayCaluli: ObservedPropertySimplePU<number>;
    get TodayCaluli() {
        return this.__TodayCaluli.get();
    }
    set TodayCaluli(newValue: number) {
        this.__TodayCaluli.set(newValue);
    }
    private __AllTrainTime: ObservedPropertySimplePU<number>;
    get AllTrainTime() {
        return this.__AllTrainTime.get();
    }
    set AllTrainTime(newValue: number) {
        this.__AllTrainTime.set(newValue);
    }
    private __AllCaluli: ObservedPropertySimplePU<number>;
    get AllCaluli() {
        return this.__AllCaluli.get();
    }
    set AllCaluli(newValue: number) {
        this.__AllCaluli.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(16:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.padding({ left: 10, right: 10 });
            Column.backgroundImage({ "id": 16777280, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Column.backgroundImageSize({ width: '100%', height: '100%' });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(17:7)", "entry");
            Text.height(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //标题
            Row.create({ space: 15 });
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(19:7)", "entry");
            //标题
            Row.padding(15);
            //标题
            Row.width('100%');
            //标题
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('训练');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(20:9)", "entry");
            Text.fontSize(24);
            Text.fontWeight(600);
            Text.fontColor('#FFFFFF');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777312, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/PracticePage.ets(24:9)", "entry");
            Image.width(24);
            Image.height(24);
            Image.onClick(() => {
                router.pushUrl({ url: 'pages/TrainRecordPage' });
            });
        }, Image);
        //标题
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/PracticePage.ets(36:7)", "entry");
            Scroll.height('100%');
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(37:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //训练时长+卡路里
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(39:11)", "entry");
            //训练时长+卡路里
            Row.width('100%');
            //训练时长+卡路里
            Row.height(120);
            //训练时长+卡路里
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 左侧卡片：今日训练时长
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(41:13)", "entry");
            // 左侧卡片：今日训练时长
            Column.width('48%');
            // 左侧卡片：今日训练时长
            Column.height(100);
            // 左侧卡片：今日训练时长
            Column.backgroundColor('#FFFFFF');
            // 左侧卡片：今日训练时长
            Column.borderRadius(8);
            // 左侧卡片：今日训练时长
            Column.onClick(() => {
                router.pushUrl({ url: 'pages/TrainTimePage' });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(42:15)", "entry");
            Row.width('100%');
            Row.height(30);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('今日训练时长');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(43:17)", "entry");
            Text.fontSize(20);
            Text.fontWeight(400);
            Text.fontColor('#333333');
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('>');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(48:17)", "entry");
            Text.fontColor('#333333');
            Text.margin({ right: 10 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(57:15)", "entry");
            Row.alignItems(VerticalAlign.Bottom);
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.TodayTrainTime.toString());
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(58:17)", "entry");
            Text.fontSize(35);
            Text.fontWeight(600);
            Text.fontColor('#6C55E4');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('分钟');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(62:17)", "entry");
            Text.fontSize(20);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        Row.pop();
        // 左侧卡片：今日训练时长
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(83:13)", "entry");
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.width('48%');
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.height(100);
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.backgroundColor('#FFFFFF');
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.borderRadius(8);
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.onClick(() => {
                router.pushUrl({ url: 'pages/CaloriePage' });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(84:15)", "entry");
            Row.width('100%');
            Row.height(30);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('燃烧卡路里');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(85:17)", "entry");
            Text.fontSize(20);
            Text.fontWeight(400);
            Text.fontColor('#333333');
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('>');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(90:17)", "entry");
            Text.fontColor('#333333');
            Text.margin({ right: 10 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(99:15)", "entry");
            Row.alignItems(VerticalAlign.Bottom);
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.TodayCaluli.toString());
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(100:17)", "entry");
            Text.fontSize(35);
            Text.fontWeight(600);
            Text.fontColor('#6C55E4');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('千卡');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(104:17)", "entry");
            Text.fontSize(20);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        Row.pop();
        //.border({
        //  width: 1,
        //  color: '#6C55E4', // 边框颜色为紫色
        //})
        // 右侧卡片：燃烧卡路里
        Column.pop();
        //训练时长+卡路里
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //体重记录
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(130:11)", "entry");
            //体重记录
            Column.backgroundColor('#FFFFFF');
            //体重记录
            Column.padding({ top: 30, bottom: 30 });
            //体重记录
            Column.width('100%');
            //体重记录
            Column.height(200);
            //体重记录
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题行
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(132:13)", "entry");
            // 标题行
            Row.width('100%');
            // 标题行
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('体重记录');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(133:15)", "entry");
            Text.fontSize(24);
            Text.fontColor('#333333');
            Text.fontWeight(500);
            Text.margin({ left: 15 });
        }, Text);
        Text.pop();
        // 标题行
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 体重数据行
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(144:13)", "entry");
            // 体重数据行
            Row.width('100%');
            // 体重数据行
            Row.justifyContent(FlexAlign.Start);
            // 体重数据行
            Row.margin({ top: 20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.WeightRecord.toString() + 'kg');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(145:15)", "entry");
            Text.fontSize(35);
            Text.fontColor('#6C55E4');
            Text.fontWeight(700);
            Text.margin({ left: 15 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(151:15)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.WeightRecord <= this.WeightInit) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('已减' + (this.WeightInit - this.WeightRecord).toString() + 'kg');
                        Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(153:19)", "entry");
                        Text.fontSize(16);
                        Text.fontColor('#999999');
                        Text.margin({ left: 10 });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('增重' + (this.WeightRecord - this.WeightInit).toString() + 'kg');
                        Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(158:19)", "entry");
                        Text.fontSize(16);
                        Text.fontColor('#999999');
                        Text.margin({ left: 10 });
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        Row.pop();
        // 体重数据行
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 按钮
            Button.createWithLabel('记录体重');
            Button.debugLine("entry/src/main/ets/pages/PracticePage.ets(170:13)", "entry");
            // 按钮
            Button.width('40%');
            // 按钮
            Button.height(48);
            // 按钮
            Button.backgroundColor('#666EE8');
            // 按钮
            Button.fontColor('#FFFFFF');
            // 按钮
            Button.fontSize(18);
            // 按钮
            Button.borderRadius(24);
            // 按钮
            Button.margin({ top: 20 });
            // 按钮
            Button.onClick(() => {
                let numbers: string[] = [];
                for (let i = 40; i <= 200; i += 0.5) {
                    numbers.push(i.toString() + ' kg');
                }
                DialogHelper.showTextPickerDialog({
                    title: "计体重",
                    range: numbers.map(String),
                    onAction: (action: number, dialogId: string, value: string | string[]) => {
                        if (action == DialogAction.SURE) {
                            const weightStr = (value as string).replace(' kg', '');
                            const weight = parseFloat(weightStr);
                            this.WeightRecord = weight;
                        }
                    }
                });
            });
        }, Button);
        // 按钮
        Button.pop();
        //体重记录
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //锻炼时长竖状图
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(209:11)", "entry");
            //锻炼时长竖状图
            Column.width('100%');
            //锻炼时长竖状图
            Column.height(200);
            //锻炼时长竖状图
            Column.backgroundColor('#FFFFFF');
            //锻炼时长竖状图
            Column.borderRadius(8);
            //锻炼时长竖状图
            Column.margin({ top: 15 });
            //锻炼时长竖状图
            Column.onClick(() => {
                router.pushUrl({ url: 'pages/TrainTimePage' });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题行
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(211:13)", "entry");
            // 标题行
            Row.margin({ top: 15 });
            // 标题行
            Row.width('100%');
            // 标题行
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //左边标题
            Text.create('锻炼时长');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(213:15)", "entry");
            //左边标题
            Text.fontSize(24);
            //左边标题
            Text.fontColor('#333333');
            //左边标题
            Text.fontWeight(500);
            //左边标题
            Text.margin({ left: 15 });
        }, Text);
        //左边标题
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //右边数据
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(220:15)", "entry");
            //右边数据
            Row.margin({ right: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.AllTrainTime.toString());
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(221:17)", "entry");
            Text.fontSize(34);
            Text.fontColor('#6249E3');
            Text.fontWeight(500);
            Text.margin({ right: 5 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('分钟');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(227:17)", "entry");
            Text.fontSize(22);
            Text.fontColor('#939EB5');
        }, Text);
        Text.pop();
        //右边数据
        Row.pop();
        // 标题行
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //图表                                       //暂时贴图
            Image.create({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/PracticePage.ets(238:13)", "entry");
            //图表                                       //暂时贴图
            Image.margin({ top: 15 });
            //图表                                       //暂时贴图
            Image.width('100%');
            //图表                                       //暂时贴图
            Image.height(120);
        }, Image);
        //锻炼时长竖状图
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //卡路里竖状图
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(254:11)", "entry");
            //卡路里竖状图
            Column.width('100%');
            //卡路里竖状图
            Column.height(200);
            //卡路里竖状图
            Column.backgroundColor('#FFFFFF');
            //卡路里竖状图
            Column.borderRadius(8);
            //卡路里竖状图
            Column.margin({ top: 15 });
            //卡路里竖状图
            Column.onClick(() => {
                router.pushUrl({ url: 'pages/CaloriePage' });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题行
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(256:13)", "entry");
            // 标题行
            Row.margin({ top: 15 });
            // 标题行
            Row.width('100%');
            // 标题行
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //左边标题
            Text.create('卡路里');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(258:15)", "entry");
            //左边标题
            Text.fontSize(24);
            //左边标题
            Text.fontColor('#333333');
            //左边标题
            Text.fontWeight(500);
            //左边标题
            Text.margin({ left: 15 });
        }, Text);
        //左边标题
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //右边数据
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(265:15)", "entry");
            //右边数据
            Row.margin({ right: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.AllCaluli.toString());
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(266:17)", "entry");
            Text.fontSize(34);
            Text.fontColor('#6249E3');
            Text.fontWeight(500);
            Text.margin({ right: 5 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('千卡');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(272:17)", "entry");
            Text.fontSize(22);
            Text.fontColor('#939EB5');
        }, Text);
        Text.pop();
        //右边数据
        Row.pop();
        // 标题行
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //图表                                       //暂时贴图
            Image.create({ "id": 16777273, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/PracticePage.ets(283:13)", "entry");
            //图表                                       //暂时贴图
            Image.margin({ top: 15 });
            //图表                                       //暂时贴图
            Image.width('100%');
            //图表                                       //暂时贴图
            Image.height(120);
        }, Image);
        //卡路里竖状图
        Column.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
