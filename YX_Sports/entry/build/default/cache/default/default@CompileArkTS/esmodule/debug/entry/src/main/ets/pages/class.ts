if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Page_Params {
    message?: string;
    isOnWarm?: boolean;
    isOnRelax?: boolean;
    isShowTitle?: boolean;
    isShowTrain?: boolean;
    token?: string;
    courseId?: number;
    vip?: number;
    userId?: number;
    datas?: classType;
    courseDate?: classInfoType;
    comment?: commentUser[];
    warmUpArry?: string[];
    warmUpArryCount?: number[];
    trainArry?: string[];
    trainArryCount?: number[];
    relaxArry?: string[];
    relaxArryCount?: number[];
}
import promptAction from "@ohos:promptAction";
import router from "@ohos:router";
import http from "@ohos:net.http";
import address from "@normalized:N&&&entry/src/main/resources/rawfile/IPaddress&";
import type classNetWorkType from '../mod/home/classType';
import type { classInfoNetWorkType, classInfoType, classType } from '../mod/home/classType';
interface pageInfoType {
    token: string;
    courseId: number;
    vip: number;
    userId: number;
}
interface commentUser {
    img: string;
    name: string;
    date: string;
    num: number;
    content: string;
    heart: string;
    redheart: string;
    flag: boolean;
}
class Page extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__isOnWarm = new ObservedPropertySimplePU(false, this, "isOnWarm");
        this.__isOnRelax = new ObservedPropertySimplePU(false, this, "isOnRelax");
        this.__isShowTitle = new ObservedPropertySimplePU(false, this, "isShowTitle");
        this.__isShowTrain = new ObservedPropertySimplePU(false, this, "isShowTrain");
        this.__token = new ObservedPropertySimplePU((this.getUIContext().getRouter().getParams() as pageInfoType).token, this, "token");
        this.__courseId = new ObservedPropertySimplePU((this.getUIContext().getRouter().getParams() as pageInfoType).courseId, this, "courseId");
        this.__vip = new ObservedPropertySimplePU((this.getUIContext().getRouter().getParams() as pageInfoType).vip, this, "vip");
        this.__userId = new ObservedPropertySimplePU((this.getUIContext().getRouter().getParams() as pageInfoType).userId
        //**********************课程信息数据**********************//
        , this, "userId");
        this.__datas = new ObservedPropertyObjectPU(Object()
        //**********************课程具体内容数据**********************//
        , this, "datas");
        this.__courseDate = new ObservedPropertyObjectPU(Object()
        //**********************评论数据**********************//
        , this, "courseDate");
        this.__comment = new ObservedPropertyObjectPU([
            {
                img: '/image/home/class8.png',
                name: '西瓜',
                date: '11-20',
                num: 122,
                content: '好累啊,不过拉伸完还是很放松的',
                heart: '/image/home/class9.png',
                redheart: '/image/home/class10.png',
                flag: false
            },
            {
                img: '/image/home/class8.png',
                name: '西瓜',
                date: '11-20',
                num: 122,
                content: '好累啊,不过拉伸完还是很放松的',
                heart: '/image/home/class9.png',
                redheart: '/image/home/class10.png',
                flag: false
            },
            {
                img: '/image/home/class8.png',
                name: '西瓜',
                date: '11-20',
                num: 122,
                content: '好累啊,不过拉伸完还是很放松的',
                heart: '/image/home/class9.png',
                redheart: '/image/home/class10.png',
                flag: false
            },
            {
                img: '/image/home/class8.png',
                name: '西瓜',
                date: '11-20',
                num: 122,
                content: '好累啊,不过拉伸完还是很放松的',
                heart: '/image/home/class9.png',
                redheart: '/image/home/class10.png',
                flag: false
            },
            {
                img: '/image/home/class8.png',
                name: '西瓜',
                date: '11-20',
                num: 122,
                content: '好累啊,不过拉伸完还是很放松的',
                heart: '/image/home/class9.png',
                redheart: '/image/home/class10.png',
                flag: false
            },
            {
                img: '/image/home/class8.png',
                name: '西瓜',
                date: '11-20',
                num: 122,
                content: '好累啊,不过拉伸完还是很放松的',
                heart: '/image/home/class9.png',
                redheart: '/image/home/class10.png',
                flag: false
            }
        ]
        //**********************热身动作数据**********************//
        , this, "comment");
        this.__warmUpArry = new ObservedPropertyObjectPU([], this, "warmUpArry");
        this.__warmUpArryCount = new ObservedPropertyObjectPU([]
        //**********************训练动作数据**********************//
        , this, "warmUpArryCount");
        this.__trainArry = new ObservedPropertyObjectPU([], this, "trainArry");
        this.__trainArryCount = new ObservedPropertyObjectPU([]
        //**********************放松动作数据**********************//
        , this, "trainArryCount");
        this.__relaxArry = new ObservedPropertyObjectPU([], this, "relaxArry");
        this.__relaxArryCount = new ObservedPropertyObjectPU([]
        //**************************标题**************************//
        , this, "relaxArryCount");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Page_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.isOnWarm !== undefined) {
            this.isOnWarm = params.isOnWarm;
        }
        if (params.isOnRelax !== undefined) {
            this.isOnRelax = params.isOnRelax;
        }
        if (params.isShowTitle !== undefined) {
            this.isShowTitle = params.isShowTitle;
        }
        if (params.isShowTrain !== undefined) {
            this.isShowTrain = params.isShowTrain;
        }
        if (params.token !== undefined) {
            this.token = params.token;
        }
        if (params.courseId !== undefined) {
            this.courseId = params.courseId;
        }
        if (params.vip !== undefined) {
            this.vip = params.vip;
        }
        if (params.userId !== undefined) {
            this.userId = params.userId;
        }
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
        if (params.courseDate !== undefined) {
            this.courseDate = params.courseDate;
        }
        if (params.comment !== undefined) {
            this.comment = params.comment;
        }
        if (params.warmUpArry !== undefined) {
            this.warmUpArry = params.warmUpArry;
        }
        if (params.warmUpArryCount !== undefined) {
            this.warmUpArryCount = params.warmUpArryCount;
        }
        if (params.trainArry !== undefined) {
            this.trainArry = params.trainArry;
        }
        if (params.trainArryCount !== undefined) {
            this.trainArryCount = params.trainArryCount;
        }
        if (params.relaxArry !== undefined) {
            this.relaxArry = params.relaxArry;
        }
        if (params.relaxArryCount !== undefined) {
            this.relaxArryCount = params.relaxArryCount;
        }
    }
    updateStateVars(params: Page_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__isOnWarm.purgeDependencyOnElmtId(rmElmtId);
        this.__isOnRelax.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowTitle.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowTrain.purgeDependencyOnElmtId(rmElmtId);
        this.__token.purgeDependencyOnElmtId(rmElmtId);
        this.__courseId.purgeDependencyOnElmtId(rmElmtId);
        this.__vip.purgeDependencyOnElmtId(rmElmtId);
        this.__userId.purgeDependencyOnElmtId(rmElmtId);
        this.__datas.purgeDependencyOnElmtId(rmElmtId);
        this.__courseDate.purgeDependencyOnElmtId(rmElmtId);
        this.__comment.purgeDependencyOnElmtId(rmElmtId);
        this.__warmUpArry.purgeDependencyOnElmtId(rmElmtId);
        this.__warmUpArryCount.purgeDependencyOnElmtId(rmElmtId);
        this.__trainArry.purgeDependencyOnElmtId(rmElmtId);
        this.__trainArryCount.purgeDependencyOnElmtId(rmElmtId);
        this.__relaxArry.purgeDependencyOnElmtId(rmElmtId);
        this.__relaxArryCount.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__isOnWarm.aboutToBeDeleted();
        this.__isOnRelax.aboutToBeDeleted();
        this.__isShowTitle.aboutToBeDeleted();
        this.__isShowTrain.aboutToBeDeleted();
        this.__token.aboutToBeDeleted();
        this.__courseId.aboutToBeDeleted();
        this.__vip.aboutToBeDeleted();
        this.__userId.aboutToBeDeleted();
        this.__datas.aboutToBeDeleted();
        this.__courseDate.aboutToBeDeleted();
        this.__comment.aboutToBeDeleted();
        this.__warmUpArry.aboutToBeDeleted();
        this.__warmUpArryCount.aboutToBeDeleted();
        this.__trainArry.aboutToBeDeleted();
        this.__trainArryCount.aboutToBeDeleted();
        this.__relaxArry.aboutToBeDeleted();
        this.__relaxArryCount.aboutToBeDeleted();
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
    private __isOnWarm: ObservedPropertySimplePU<boolean>;
    get isOnWarm() {
        return this.__isOnWarm.get();
    }
    set isOnWarm(newValue: boolean) {
        this.__isOnWarm.set(newValue);
    }
    private __isOnRelax: ObservedPropertySimplePU<boolean>;
    get isOnRelax() {
        return this.__isOnRelax.get();
    }
    set isOnRelax(newValue: boolean) {
        this.__isOnRelax.set(newValue);
    }
    private __isShowTitle: ObservedPropertySimplePU<boolean>;
    get isShowTitle() {
        return this.__isShowTitle.get();
    }
    set isShowTitle(newValue: boolean) {
        this.__isShowTitle.set(newValue);
    }
    private __isShowTrain: ObservedPropertySimplePU<boolean>;
    get isShowTrain() {
        return this.__isShowTrain.get();
    }
    set isShowTrain(newValue: boolean) {
        this.__isShowTrain.set(newValue);
    }
    private __token: ObservedPropertySimplePU<string>;
    get token() {
        return this.__token.get();
    }
    set token(newValue: string) {
        this.__token.set(newValue);
    }
    private __courseId: ObservedPropertySimplePU<number>;
    get courseId() {
        return this.__courseId.get();
    }
    set courseId(newValue: number) {
        this.__courseId.set(newValue);
    }
    private __vip: ObservedPropertySimplePU<number>;
    get vip() {
        return this.__vip.get();
    }
    set vip(newValue: number) {
        this.__vip.set(newValue);
    }
    private __userId: ObservedPropertySimplePU<number>;
    get userId() {
        return this.__userId.get();
    }
    set userId(newValue: number) {
        this.__userId.set(newValue);
    }
    //**********************课程信息数据**********************//
    private __datas: ObservedPropertyObjectPU<classType>;
    get datas() {
        return this.__datas.get();
    }
    set datas(newValue: classType) {
        this.__datas.set(newValue);
    }
    //**********************课程具体内容数据**********************//
    private __courseDate: ObservedPropertyObjectPU<classInfoType>;
    get courseDate() {
        return this.__courseDate.get();
    }
    set courseDate(newValue: classInfoType) {
        this.__courseDate.set(newValue);
    }
    //**********************评论数据**********************//
    private __comment: ObservedPropertyObjectPU<commentUser[]>;
    get comment() {
        return this.__comment.get();
    }
    set comment(newValue: commentUser[]) {
        this.__comment.set(newValue);
    }
    //**********************热身动作数据**********************//
    private __warmUpArry: ObservedPropertyObjectPU<string[]>;
    get warmUpArry() {
        return this.__warmUpArry.get();
    }
    set warmUpArry(newValue: string[]) {
        this.__warmUpArry.set(newValue);
    }
    private __warmUpArryCount: ObservedPropertyObjectPU<number[]>;
    get warmUpArryCount() {
        return this.__warmUpArryCount.get();
    }
    set warmUpArryCount(newValue: number[]) {
        this.__warmUpArryCount.set(newValue);
    }
    //**********************训练动作数据**********************//
    private __trainArry: ObservedPropertyObjectPU<string[]>;
    get trainArry() {
        return this.__trainArry.get();
    }
    set trainArry(newValue: string[]) {
        this.__trainArry.set(newValue);
    }
    private __trainArryCount: ObservedPropertyObjectPU<number[]>;
    get trainArryCount() {
        return this.__trainArryCount.get();
    }
    set trainArryCount(newValue: number[]) {
        this.__trainArryCount.set(newValue);
    }
    //**********************放松动作数据**********************//
    private __relaxArry: ObservedPropertyObjectPU<string[]>;
    get relaxArry() {
        return this.__relaxArry.get();
    }
    set relaxArry(newValue: string[]) {
        this.__relaxArry.set(newValue);
    }
    private __relaxArryCount: ObservedPropertyObjectPU<number[]>;
    get relaxArryCount() {
        return this.__relaxArryCount.get();
    }
    set relaxArryCount(newValue: number[]) {
        this.__relaxArryCount.set(newValue);
    }
    //**************************标题**************************//
    title(classInfo: classType, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.margin({ bottom: 15 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(classInfo.cname);
            Text.fontSize(30);
            Text.fontWeight(FontWeight.Bold);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create("/image/home/class2.png");
            Image.width(30);
            Image.height(30);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(classInfo.ctime + '分钟');
            Text.fontWeight(FontWeight.Bold);
            Text.fontSize(20);
            Text.padding(5);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.Center);
            Row.width('35%');
            Row.border({
                width: {
                    top: 0,
                    bottom: 0,
                    left: 1,
                    right: 1
                },
                color: { left: '#f7fafa', right: '#f7fafa' }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create("/image/home/class3.png");
            Image.width(30);
            Image.height(30);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('k' + classInfo.difficulty + '难度');
            Text.fontWeight(FontWeight.Bold);
            Text.fontSize(20);
            Text.padding(5);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create("/image/home/class4.png");
            Image.width(30);
            Image.height(30);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(classInfo.ccalorie + '卡路里');
            Text.fontWeight(FontWeight.Bold);
            Text.fontSize(20);
            Text.padding(10);
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('每天坚持这几个腹部动作，能够有效的减去腹部脂肪，一周见效！');
            Text.fontColor('#C4A699');
        }, Text);
        Text.pop();
        Column.pop();
    }
    titleback(data: classType, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height("100%");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Top });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create("/image/home/" + data.iname);
            Image.width('100%');
            Image.height(200);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.width("100%");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(40);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create("/image/home/return.png");
            Image.width(40);
            Image.height(40);
            Image.onClick(() => {
                router.back({ url: '', params: { token: this.token } });
            });
        }, Image);
        Column.pop();
        Stack.pop();
        Column.pop();
    }
    //**************************训练音乐**************************//
    trainMusic(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.border({
                width: {
                    top: 1,
                    bottom: 1,
                    left: 0,
                    right: 0
                },
                color: { top: '#F2F4F6', bottom: '#F2F4F6' }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('80%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('训练音乐');
            Text.fontSize(25);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 25, bottom: 10 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('Bright FUtures');
            Text.fontColor('#C4A699');
            Text.fontSize(25);
            Text.margin({ bottom: 25 });
            Text.width('100%');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/image/home/class5.png');
            Image.width(50);
            Image.onClick(() => {
                router.pushUrl({ url: "pages/home/trainMusic" });
            });
        }, Image);
        Row.pop();
    }
    //**************************主体内容**************************//
    trainContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ top: 15 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //热身
            Row.create();
            //热身
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('热身·' + this.warmUpArry.length + '个');
            Text.width('80%');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Toggle.create({ type: ToggleType.Switch, isOn: this.isOnWarm });
            Toggle.onChange((isOn: boolean) => {
                this.isOnWarm = isOn;
                console.log('开关状态:', isOn);
            });
            Toggle.width(50);
            Toggle.height(30);
        }, Toggle);
        Toggle.pop();
        //热身
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.border({
                width: {
                    top: 0,
                    bottom: 1,
                    left: 0,
                    right: 0
                },
                color: { top: '#F2F4F6', bottom: '#F2F4F6' }
            });
            Column.margin(20);
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const data = _item;
                this.warmUpItemUI.bind(this)(data, index);
            };
            this.forEachUpdateFunction(elmtId, this.warmUpArry, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //训练
            Row.create();
            //训练
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('训练·' + this.trainArry.length + '个');
            Text.width('80%');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        //训练
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.margin({ top: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const data = _item;
                this.trainItemUI.bind(this)(data, index);
            };
            this.forEachUpdateFunction(elmtId, this.trainArry, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //拉伸放松
            Row.create();
            //拉伸放松
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('拉伸放松·' + this.relaxArry.length + '个');
            Text.width('80%');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Toggle.create({ type: ToggleType.Switch, isOn: this.isOnRelax });
            Toggle.onChange((isOn: boolean) => {
                this.isOnRelax = isOn;
                console.log('开关状态:', isOn);
            });
            Toggle.width(50);
            Toggle.height(30);
        }, Toggle);
        Toggle.pop();
        //拉伸放松
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.border({
                width: {
                    top: 0,
                    bottom: 1,
                    left: 0,
                    right: 0
                },
                color: { top: '#F2F4F6', bottom: '#F2F4F6' }
            });
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const data = _item;
                this.relaxItemUI.bind(this)(data, index);
            };
            this.forEachUpdateFunction(elmtId, this.relaxArry, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Column.pop();
    }
    //**********热身动作**********//
    warmUpItemUI(name: string, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/image/home/class1.png');
            Image.width(100);
            Image.height(100);
            Image.margin({ right: 20, bottom: 10 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(name);
            Text.margin({ bottom: 20 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.warmUpArryCount[index] + 'S');
            Text.width('100%');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
    }
    warmUp(data: classInfoType) {
        if (data.catStretch === 1) {
            this.warmUpArry.push("猫式伸展");
            this.warmUpArryCount.push(data.catStretchCount);
        }
        if (data.highKnee === 1) {
            this.warmUpArry.push("高抬腿");
            this.warmUpArryCount.push(data.highKneeCount);
        }
        if (data.jumpJack === 1) {
            this.warmUpArry.push("开合跳");
            this.warmUpArryCount.push(data.jumpJackCount);
        }
    }
    //**********训练动作**********//
    trainItemUI(name: string, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/image/home/class1.png');
            Image.width(100);
            Image.height(100);
            Image.margin({ right: 20, bottom: 10 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(name);
            Text.margin({ bottom: 20 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.trainArryCount[index] + 'S');
            Text.width('100%');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
    }
    train(data: classInfoType) {
        if (data.armCircle === 1) {
            this.trainArry.push("手臂环绕");
            this.trainArryCount.push(data.armCircleCount);
        }
        if (data.neckCircle === 1) {
            this.trainArry.push("颈部环绕");
            this.trainArryCount.push(data.neckCircleCount);
        }
        if (data.waistTwist === 1) {
            this.trainArry.push("腰部扭转");
            this.trainArryCount.push(data.waistTwistCount);
        }
        if (data.kneeCircle === 1) {
            this.trainArry.push("膝关节环绕");
            this.trainArryCount.push(data.kneeCircleCount);
        }
        if (data.lungeWalk === 1) {
            this.trainArry.push("弓步走");
            this.trainArryCount.push(data.lungeWalkCount);
        }
    }
    //**********放松动作**********//
    relaxItemUI(name: string, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/image/home/class1.png');
            Image.width(100);
            Image.height(100);
            Image.margin({ right: 20, bottom: 10 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(name);
            Text.margin({ bottom: 20 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.relaxArryCount[index] + 'S');
            Text.width('100%');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
    }
    relax(data: classInfoType) {
        if (data.sideLung === 1) {
            this.relaxArry.push("体侧拉伸");
            this.relaxArryCount.push(data.sideLungCount);
        }
        if (data.gluteActive === 1) {
            this.relaxArry.push("臀部激活");
            this.relaxArryCount.push(data.gluteActiveCount);
        }
    }
    //**********获取课程内容网络**********//
    async getShowTrainContent() {
        let httpRequest = http.createHttp();
        let encodedClass = encodeURIComponent(this.courseId); // 编码中文
        let url = address.IP + `/getCourseContent?courseid=${encodedClass}`;
        try {
            let response = await httpRequest.request(url, {
                method: http.RequestMethod.GET,
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            });
            let result = JSON.parse(response.result as string) as classInfoNetWorkType;
            if (result.code === 200) {
                this.courseDate = result.data;
                this.warmUp(this.courseDate);
                this.train(this.courseDate);
                this.relax(this.courseDate);
                this.isShowTrain = true;
            }
        }
        catch (e) {
            promptAction.showToast({ message: "网络错误" });
        }
    }
    //**********获取课程信息网络**********//
    async getShowContent() {
        let httpRequest = http.createHttp();
        let encodedClass = encodeURIComponent(this.courseId); // 编码中文
        let url = address.IP + `/getSingleCourse?id=${encodedClass}`;
        try {
            let response = await httpRequest.request(url, {
                method: http.RequestMethod.GET,
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            });
            let result = JSON.parse(response.result as string) as classNetWorkType;
            if (result.code === 200) {
                this.datas = result.data;
                this.isShowTitle = true;
            }
        }
        catch (e) {
            promptAction.showToast({ message: "网络错误" });
        }
    }
    //**************************评论**************************//
    recommendContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('课程评价');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 15 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.margin({ top: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/image/home/class7.png');
            Image.width(50);
            Image.height(50);
            Image.margin({ right: 10 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '留下你的精彩评论' });
            TextInput.width('80%');
        }, TextInput);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const data = _item;
                this.comUserUi.bind(this)(data, index);
            };
            this.forEachUpdateFunction(elmtId, this.comment, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('——————我是有底线的———————');
            Text.fontColor('#C4A699');
            Text.width('100%');
            Text.margin({ top: 20, bottom: 10 });
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.vip === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('成为会员，即刻开练');
                        Button.onClick(() => {
                            router.pushUrl({ url: "pages/plan/vip", params: { userId: this.userId, token: this.token } });
                        });
                        Button.backgroundColor("#FF9900");
                        Button.width('80%');
                        Button.margin({ bottom: 10 });
                    }, Button);
                    Button.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    comUserUi(data: commentUser, num: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.margin({ top: 15, bottom: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(data.img);
            Image.width(50);
            Image.height(50);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.name);
            Text.margin({ bottom: 5 });
            Text.fontColor('#C4A699');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.date);
            Text.fontColor('#C4A699');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(data.flag ? data.redheart : data.heart);
            Image.width(20);
            Image.height(20);
            Image.margin({ right: 5 });
            Image.onClick(async () => {
                this.toggleLikeStatus(num);
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.num + '');
            Text.fontColor('#C4A699');
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.content);
            Text.width('100%');
            Text.margin({ left: 40 });
        }, Text);
        Text.pop();
        Column.pop();
    }
    toggleLikeStatus(index: number) {
        // 创建新数组以触发UI更新
        this.comment = this.comment.map((item, i) => {
            if (i === index) {
                // 切换当前项的flag状态，并更新点赞数
                return {
                    img: item.img,
                    name: item.name,
                    date: item.date,
                    num: item.flag ? item.num - 1 : item.num + 1,
                    content: item.content,
                    heart: item.heart,
                    redheart: item.redheart,
                    flag: !item.flag
                };
            }
            return item;
        });
    }
    //**************************build**************************//
    aboutToAppear(): void {
        this.getShowContent();
        this.getShowTrainContent();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isShowTitle && this.isShowTrain) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Scroll.create();
                        Scroll.scrollable(ScrollDirection.Vertical);
                    }, Scroll);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Stack.create({ alignContent: Alignment.Top });
                    }, Stack);
                    this.titleback.bind(this)(ObservedObject.GetRawObject(this.datas));
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.backgroundColor('white');
                        Column.borderRadius(20);
                        Column.padding(10);
                        Column.margin({ top: 180 });
                    }, Column);
                    this.title.bind(this)(ObservedObject.GetRawObject(this.datas));
                    this.trainMusic.bind(this)();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                    }, Column);
                    this.trainContent.bind(this)();
                    this.recommendContent.bind(this)();
                    Column.pop();
                    Column.pop();
                    Stack.pop();
                    Scroll.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Page";
    }
}
registerNamedRoute(() => new Page(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/class", pageFullPath: "entry/src/main/ets/pages/class", integratedHsp: "false", moduleType: "followWithHap" });
