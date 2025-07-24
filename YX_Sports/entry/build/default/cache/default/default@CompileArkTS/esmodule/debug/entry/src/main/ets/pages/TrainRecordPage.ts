if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TrainRecordPage_Params {
    message?: string;
    curIndex?: number;
    trainType?: boolean;
    todayDuration?: number;
    thisWeekDuration?: number;
    thisMonthDuration?: number;
    thisYearDuration?: number;
    todayCalorie?: number;
    thisWeekCalorie?: number;
    thisMonthCalorie?: number;
    thisYearCalorie?: number;
}
import router from "@ohos:router";
class TrainRecordPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__curIndex = new ObservedPropertySimplePU(0, this, "curIndex");
        this.__trainType = new ObservedPropertySimplePU(false, this, "trainType");
        this.__todayDuration = new ObservedPropertySimplePU(102, this, "todayDuration");
        this.__thisWeekDuration = new ObservedPropertySimplePU(300, this, "thisWeekDuration");
        this.__thisMonthDuration = new ObservedPropertySimplePU(2830, this, "thisMonthDuration");
        this.__thisYearDuration = new ObservedPropertySimplePU(2830, this, "thisYearDuration");
        this.__todayCalorie = new ObservedPropertySimplePU(112, this, "todayCalorie");
        this.__thisWeekCalorie = new ObservedPropertySimplePU(2030, this, "thisWeekCalorie");
        this.__thisMonthCalorie = new ObservedPropertySimplePU(32353, this, "thisMonthCalorie");
        this.__thisYearCalorie = new ObservedPropertySimplePU(32353, this, "thisYearCalorie");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TrainRecordPage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.curIndex !== undefined) {
            this.curIndex = params.curIndex;
        }
        if (params.trainType !== undefined) {
            this.trainType = params.trainType;
        }
        if (params.todayDuration !== undefined) {
            this.todayDuration = params.todayDuration;
        }
        if (params.thisWeekDuration !== undefined) {
            this.thisWeekDuration = params.thisWeekDuration;
        }
        if (params.thisMonthDuration !== undefined) {
            this.thisMonthDuration = params.thisMonthDuration;
        }
        if (params.thisYearDuration !== undefined) {
            this.thisYearDuration = params.thisYearDuration;
        }
        if (params.todayCalorie !== undefined) {
            this.todayCalorie = params.todayCalorie;
        }
        if (params.thisWeekCalorie !== undefined) {
            this.thisWeekCalorie = params.thisWeekCalorie;
        }
        if (params.thisMonthCalorie !== undefined) {
            this.thisMonthCalorie = params.thisMonthCalorie;
        }
        if (params.thisYearCalorie !== undefined) {
            this.thisYearCalorie = params.thisYearCalorie;
        }
    }
    updateStateVars(params: TrainRecordPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__curIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__trainType.purgeDependencyOnElmtId(rmElmtId);
        this.__todayDuration.purgeDependencyOnElmtId(rmElmtId);
        this.__thisWeekDuration.purgeDependencyOnElmtId(rmElmtId);
        this.__thisMonthDuration.purgeDependencyOnElmtId(rmElmtId);
        this.__thisYearDuration.purgeDependencyOnElmtId(rmElmtId);
        this.__todayCalorie.purgeDependencyOnElmtId(rmElmtId);
        this.__thisWeekCalorie.purgeDependencyOnElmtId(rmElmtId);
        this.__thisMonthCalorie.purgeDependencyOnElmtId(rmElmtId);
        this.__thisYearCalorie.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__curIndex.aboutToBeDeleted();
        this.__trainType.aboutToBeDeleted();
        this.__todayDuration.aboutToBeDeleted();
        this.__thisWeekDuration.aboutToBeDeleted();
        this.__thisMonthDuration.aboutToBeDeleted();
        this.__thisYearDuration.aboutToBeDeleted();
        this.__todayCalorie.aboutToBeDeleted();
        this.__thisWeekCalorie.aboutToBeDeleted();
        this.__thisMonthCalorie.aboutToBeDeleted();
        this.__thisYearCalorie.aboutToBeDeleted();
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
    private __trainType: ObservedPropertySimplePU<boolean>;
    get trainType() {
        return this.__trainType.get();
    }
    set trainType(newValue: boolean) {
        this.__trainType.set(newValue);
    }
    private __todayDuration: ObservedPropertySimplePU<number>; // 当日训练时长
    get todayDuration() {
        return this.__todayDuration.get();
    }
    set todayDuration(newValue: number) {
        this.__todayDuration.set(newValue);
    }
    private __thisWeekDuration: ObservedPropertySimplePU<number>; // 本周训练时长
    get thisWeekDuration() {
        return this.__thisWeekDuration.get();
    }
    set thisWeekDuration(newValue: number) {
        this.__thisWeekDuration.set(newValue);
    }
    private __thisMonthDuration: ObservedPropertySimplePU<number>; // 本月训练时长
    get thisMonthDuration() {
        return this.__thisMonthDuration.get();
    }
    set thisMonthDuration(newValue: number) {
        this.__thisMonthDuration.set(newValue);
    }
    private __thisYearDuration: ObservedPropertySimplePU<number>; // 本年训练时长
    get thisYearDuration() {
        return this.__thisYearDuration.get();
    }
    set thisYearDuration(newValue: number) {
        this.__thisYearDuration.set(newValue);
    }
    private __todayCalorie: ObservedPropertySimplePU<number>; // 当日卡路里
    get todayCalorie() {
        return this.__todayCalorie.get();
    }
    set todayCalorie(newValue: number) {
        this.__todayCalorie.set(newValue);
    }
    private __thisWeekCalorie: ObservedPropertySimplePU<number>; // 本周卡路里
    get thisWeekCalorie() {
        return this.__thisWeekCalorie.get();
    }
    set thisWeekCalorie(newValue: number) {
        this.__thisWeekCalorie.set(newValue);
    }
    private __thisMonthCalorie: ObservedPropertySimplePU<number>; // 本月卡路里
    get thisMonthCalorie() {
        return this.__thisMonthCalorie.get();
    }
    set thisMonthCalorie(newValue: number) {
        this.__thisMonthCalorie.set(newValue);
    }
    private __thisYearCalorie: ObservedPropertySimplePU<number>; // 本年卡路里
    get thisYearCalorie() {
        return this.__thisYearCalorie.get();
    }
    set thisYearCalorie(newValue: number) {
        this.__thisYearCalorie.set(newValue);
    }
    //导航栏样式
    navBar(tex: string, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(tex);
            Text.fontColor(index == this.curIndex ? "#6C55E4" : "#CCCCCC");
            Text.fontSize(20);
        }, Text);
        Text.pop();
        Column.pop();
    }
    showRecord(type: boolean, image: Resource, record: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (type == false) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.height(200);
                        Column.backgroundColor('#FFFFFF');
                        Column.borderRadius(8);
                        Column.margin({ top: 15 });
                        Column.onClick(() => {
                            router.pushUrl({ url: 'pages/TrainTimePage' });
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 标题行
                        Row.create();
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
                        //右边数据
                        Row.margin({ right: 15 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(record.toString());
                        Text.fontSize(34);
                        Text.fontColor('#6249E3');
                        Text.fontWeight(500);
                        Text.margin({ right: 5 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('分钟');
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
                        Image.create(image);
                        //图表                                       //暂时贴图
                        Image.margin({ top: 15 });
                        //图表                                       //暂时贴图
                        Image.width('100%');
                        //图表                                       //暂时贴图
                        Image.height(120);
                    }, Image);
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.height(200);
                        Column.backgroundColor('#FFFFFF');
                        Column.borderRadius(8);
                        Column.margin({ top: 15 });
                        Column.onClick(() => {
                            router.pushUrl({ url: 'pages/CaloriePage' });
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 标题行
                        Row.create();
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
                        //右边数据
                        Row.margin({ right: 15 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(record.toString());
                        Text.fontSize(34);
                        Text.fontColor('#6249E3');
                        Text.fontWeight(500);
                        Text.margin({ right: 5 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('千卡');
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
                        Image.create(image);
                        //图表                                       //暂时贴图
                        Image.margin({ top: 15 });
                        //图表                                       //暂时贴图
                        Image.width('100%');
                        //图表                                       //暂时贴图
                        Image.height(120);
                    }, Image);
                    Column.pop();
                });
            }
        }, If);
        If.pop();
    }
    //主页面
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(40);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //标题部分
            Row.create();
            //标题部分
            Row.justifyContent(FlexAlign.SpaceBetween);
            //标题部分
            Row.width('100%');
            //标题部分
            Row.height(30);
            //标题部分
            Row.padding(5);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(30);
            Image.height(30);
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('训练记录');
            Text.fontColor('#333333');
            Text.fontSize(24);
            Text.fontWeight(700);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('     ');
            Text.fontSize(24);
        }, Text);
        Text.pop();
        //标题部分
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //导航栏
            Column.create();
            //导航栏
            Column.height('100%');
            //导航栏
            Column.width('100%');
            //导航栏
            Column.margin({ top: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.Start });
            Tabs.onChange((index: number) => { this.curIndex = index; });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 20 });
                    Column.justifyContent(FlexAlign.Start);
                    Column.width('100%');
                    Column.height('100%');
                }, Column);
                this.showRecord.bind(this)(false, { "id": 16777282, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, this.todayDuration);
                this.showRecord.bind(this)(true, { "id": 16777283, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, this.todayCalorie);
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, "日", 0);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 20 });
                    Column.justifyContent(FlexAlign.Start);
                    Column.width('100%');
                    Column.height('100%');
                }, Column);
                this.showRecord.bind(this)(false, { "id": 16777282, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, this.thisWeekDuration);
                this.showRecord.bind(this)(true, { "id": 16777283, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, this.thisWeekCalorie);
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, "周", 1);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 20 });
                    Column.justifyContent(FlexAlign.Start);
                    Column.width('100%');
                    Column.height('100%');
                }, Column);
                this.showRecord.bind(this)(false, { "id": 16777282, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, this.thisMonthDuration);
                this.showRecord.bind(this)(true, { "id": 16777283, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, this.thisMonthCalorie);
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, "月", 2);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 20 });
                    Column.justifyContent(FlexAlign.Start);
                    Column.width('100%');
                    Column.height('100%');
                }, Column);
                this.showRecord.bind(this)(false, { "id": 16777282, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, this.thisYearDuration);
                this.showRecord.bind(this)(true, { "id": 16777283, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, this.thisYearCalorie);
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.navBar.call(this, "总", 3);
                } });
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        //导航栏
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TrainRecordPage";
    }
}
registerNamedRoute(() => new TrainRecordPage(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/TrainRecordPage", pageFullPath: "entry/src/main/ets/pages/TrainRecordPage", integratedHsp: "false", moduleType: "followWithHap" });
