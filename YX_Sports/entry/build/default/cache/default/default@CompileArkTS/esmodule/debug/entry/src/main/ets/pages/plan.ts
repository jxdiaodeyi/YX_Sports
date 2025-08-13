if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Plan_Params {
    vip?: number;
    beginDay?: string;
    registerTime?: number;
    nowDataTime?: number;
    sportDate?: number;
    sportTime?: number;
    //运动卡片内容数组
    planCard?: planMes[];
}
import promptAction from "@ohos:promptAction";
import router from "@ohos:router";
import type { planMes } from "../mod/plan/planType";
//测试
function test(beginDay: string) {
    promptAction.showToast({
        message: beginDay
    });
}
//获取每个周周一的日期
function getMondayOfWeek(inputDate: Date | string): string {
    // 处理日期参数，统一转换为Date对象
    const targetDate: Date = typeof inputDate === 'string' ? new Date(inputDate) : new Date(inputDate);
    // 验证日期有效性
    if (isNaN(targetDate.getTime())) {
        throw new Error('Invalid date input: 请提供有效的日期格式');
    }
    // 获取当前日期是一周中的第几天（0表示周日，1表示周一，...，6表示周六）
    const day: number = targetDate.getDay();
    // 计算与周一的差值
    const diff: number = day === 0 ? -6 : 1 - day;
    // 计算周一的日期
    const monday: Date = new Date(targetDate);
    monday.setDate(targetDate.getDate() + diff);
    // 重置时间为00:00:00，避免时间部分影响
    monday.setHours(0, 0, 0, 0);
    // 格式化返回为YYYY-MM-DD，避免toString()带来的浏览器/环境差异
    const year: number = monday.getFullYear();
    const month: string = String(monday.getMonth() + 1).padStart(2, '0');
    const date: string = String(monday.getDate()).padStart(2, '0');
    return `${year}-${month}-${date}`;
}
//获取总天数  返回dayDiff（注册总天数）
function getDaysBetweenDates(date1: string, date2: string): number {
    // 将日期字符串转换为Date对象（支持格式："YYYY-MM-DD"、"YYYY/MM/DD"等）
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    // 检查日期是否有效
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
        throw new Error("无效的日期格式");
    }
    // 计算时间差（毫秒），取绝对值
    const timeDiff = Math.abs(d1.getTime() - d2.getTime());
    // 转换为天数（1天 = 86400000毫秒），向下取整
    const dayDiff = Math.floor(timeDiff / 86400000);
    return dayDiff;
}
//获取当前是第几日
function nowDayTime(inputDate: Date | string): string {
    // 处理日期参数，统一转换为Date对象
    const targetDate: Date = typeof inputDate === 'string' ? new Date(inputDate) : new Date(inputDate);
    // 验证日期有效性
    if (isNaN(targetDate.getTime())) {
        throw new Error('Invalid date input: 请提供有效的日期格式');
    }
    // 获取当前日期是一周中的第几天（0表示周日，1表示周一，...，6表示周六）
    const day: number = targetDate.getDay();
    // 计算与周一的差值
    const diff: number = day === 0 ? -6 : 1 - day;
    // 计算周一的日期
    const monday: Date = new Date(targetDate);
    monday.setDate(targetDate.getDate() + diff);
    // 重置时间为00:00:00，避免时间部分影响
    monday.setHours(0, 0, 0, 0);
    // 格式化返回为YYYY-MM-DD，避免toString()带来的浏览器/环境差异
    const date: string = String(monday.getDate()).padStart(2, '0');
    return `${date}`;
}
//获取一个周的日期
function handleDay(today: string, i: number): number {
    // 将日期字符串转换为Date对象
    const targetDate = new Date(today);
    // 检查日期是否有效
    if (isNaN(targetDate.getTime())) {
        console.error("无效的日期字符串");
        return 0; // 或其他默认值
    }
    // 计算i天后的日期
    targetDate.setDate(targetDate.getDate() + i);
    // 返回日期中的"日"部分
    return targetDate.getDate();
}
//获取当前时间  返回YYYY-MM-DD
function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear(); // 年（4位数字）
    const month = date.getMonth() + 1; // 月（0-11，需+1）
    const day = date.getDate(); // 日（1-31）
    // 补零处理，确保月份和日期为两位数
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    return `${year}-${formattedMonth}-${formattedDay}`;
}
export class Plan extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__vip = new ObservedPropertySimplePU(0, this, "vip");
        this.__beginDay = new ObservedPropertySimplePU(getMondayOfWeek(getFormattedDate()), this, "beginDay");
        this.__registerTime = new ObservedPropertySimplePU(1, this, "registerTime");
        this.__nowDataTime = new ObservedPropertySimplePU(Number(nowDayTime(getFormattedDate())), this, "nowDataTime");
        this.__sportDate = new ObservedPropertySimplePU(6, this, "sportDate");
        this.__sportTime = new ObservedPropertySimplePU(6, this, "sportTime");
        this.planCard = [
            { name: '小腿塑性', time: '20分钟', difficulty: '简单', icon: 'runing.png' },
            { name: '腹肌撕裂', time: '20分钟', difficulty: '简单', icon: 'runing.png' },
            { name: '跑步入门', time: '20分钟', difficulty: '简单', icon: 'runing.png' },
            { name: '小腿塑性', time: '20分钟', difficulty: '简单', icon: 'runing.png' },
            { name: '腹肌撕裂', time: '20分钟', difficulty: '简单', icon: 'runing.png' },
            { name: '跑步入门', time: '20分钟', difficulty: '简单', icon: 'runing.png' },
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Plan_Params) {
        if (params.vip !== undefined) {
            this.vip = params.vip;
        }
        if (params.beginDay !== undefined) {
            this.beginDay = params.beginDay;
        }
        if (params.registerTime !== undefined) {
            this.registerTime = params.registerTime;
        }
        if (params.nowDataTime !== undefined) {
            this.nowDataTime = params.nowDataTime;
        }
        if (params.sportDate !== undefined) {
            this.sportDate = params.sportDate;
        }
        if (params.sportTime !== undefined) {
            this.sportTime = params.sportTime;
        }
        if (params.planCard !== undefined) {
            this.planCard = params.planCard;
        }
    }
    updateStateVars(params: Plan_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__vip.purgeDependencyOnElmtId(rmElmtId);
        this.__beginDay.purgeDependencyOnElmtId(rmElmtId);
        this.__registerTime.purgeDependencyOnElmtId(rmElmtId);
        this.__nowDataTime.purgeDependencyOnElmtId(rmElmtId);
        this.__sportDate.purgeDependencyOnElmtId(rmElmtId);
        this.__sportTime.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__vip.aboutToBeDeleted();
        this.__beginDay.aboutToBeDeleted();
        this.__registerTime.aboutToBeDeleted();
        this.__nowDataTime.aboutToBeDeleted();
        this.__sportDate.aboutToBeDeleted();
        this.__sportTime.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __vip: ObservedPropertySimplePU<number>; //会员状态
    get vip() {
        return this.__vip.get();
    }
    set vip(newValue: number) {
        this.__vip.set(newValue);
    }
    private __beginDay: ObservedPropertySimplePU<string>; //周一的日期YYYY-MM-DD
    get beginDay() {
        return this.__beginDay.get();
    }
    set beginDay(newValue: string) {
        this.__beginDay.set(newValue);
    }
    private __registerTime: ObservedPropertySimplePU<number>; //最开始的注册时间
    get registerTime() {
        return this.__registerTime.get();
    }
    set registerTime(newValue: number) {
        this.__registerTime.set(newValue);
    }
    private __nowDataTime: ObservedPropertySimplePU<number>; //今天的时间DD
    get nowDataTime() {
        return this.__nowDataTime.get();
    }
    set nowDataTime(newValue: number) {
        this.__nowDataTime.set(newValue);
    }
    private __sportDate: ObservedPropertySimplePU<number>; //每周锻炼天数
    get sportDate() {
        return this.__sportDate.get();
    }
    set sportDate(newValue: number) {
        this.__sportDate.set(newValue);
    }
    private __sportTime: ObservedPropertySimplePU<number>; //每周锻炼时长
    get sportTime() {
        return this.__sportTime.get();
    }
    set sportTime(newValue: number) {
        this.__sportTime.set(newValue);
    }
    //运动卡片内容数组
    private planCard: planMes[];
    //时间和小点
    demo(beginDay: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("");
            Text.backgroundColor(this.nowDataTime == beginDay ? "#ffffff" : "#6C55E4");
            Text.width(10);
            Text.height(10);
            Text.borderRadius(5);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(beginDay + '');
            Text.fontColor("#ffffff");
            Text.fontSize(18);
            Text.margin(10);
        }, Text);
        Text.pop();
        Column.pop();
    }
    //标题和时间
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
            Text.create("第" + Math.floor(this.registerTime / 7 + 1) + "周计划");
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
        }, Row);
        this.demo.bind(this)(handleDay(this.beginDay, 0));
        this.demo.bind(this)(handleDay(this.beginDay, 1));
        this.demo.bind(this)(handleDay(this.beginDay, 2));
        this.demo.bind(this)(handleDay(this.beginDay, 3));
        this.demo.bind(this)(handleDay(this.beginDay, 4));
        this.demo.bind(this)(handleDay(this.beginDay, 5));
        this.demo.bind(this)(handleDay(this.beginDay, 6));
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Progress.create({ value: this.registerTime % 7, total: this.sportDate, type: ProgressType.Ring });
            Progress.width(70);
            Progress.height(100);
            Progress.color("#ffffff");
            Progress.style({ strokeWidth: 7 });
        }, Progress);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.registerTime % 7 + 1 + '/7');
            Text.fontSize(20);
            Text.fontColor('#007DFF');
            Text.fontWeight(600);
            Text.fontColor("#ffffff");
        }, Text);
        Text.pop();
        Stack.pop();
        Row.pop();
    }
    //运动卡片
    sport(planCardMes: planMes, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 15 });
            Column.onClick(() => {
                router.pushUrl({ url: "pages/class" });
                test(this.beginDay);
            });
            Column.backgroundImage('image/plan/' + planCardMes.icon);
            Column.backgroundImageSize(ImageSize.Cover);
            Column.width('100%');
            Column.height(150);
            Column.borderRadius(15);
            Column.padding(20);
            Column.justifyContent(FlexAlign.End);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(planCardMes.name);
            Text.fontSize(25);
            Text.fontColor('#ffffff');
            Text.fontWeight(900);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('image/plan/time.png');
            Image.width(15);
            Image.height(15);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(planCardMes.time);
            Text.fontSize(15);
            Text.fontColor('#ffffff');
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('image/plan/difficulty.png');
            Image.width(15);
            Image.height(15);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(planCardMes.difficulty);
            Text.fontSize(15);
            Text.fontColor('#ffffff');
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    //今日运动
    todaySport(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const planCardMes = _item;
                this.sport.bind(this)(planCardMes);
            };
            this.forEachUpdateFunction(elmtId, this.planCard, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('——————我是有底线的———————');
            Text.fontColor('#C4A699');
            Text.width('100%');
            Text.margin({ top: 20, bottom: 10 });
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.height(40);
        }, Blank);
        Blank.pop();
        Column.pop();
        Scroll.pop();
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
        this.todaySport.bind(this)();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
