if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Page_Params {
    message?: string;
    isOn?: boolean;
    datas?: type[];
    exercies?: type[];
    comment?: commentUser[];
}
import router from "@ohos:router";
interface type {
    img: Resource;
    name: string;
    num: number;
}
interface commentUser {
    img: Resource;
    name: string;
    date: string;
    num: number;
    content: string;
    heart: Resource;
    redheart: Resource;
    flag: boolean;
}
class Page extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__isOn = new ObservedPropertySimplePU(false, this, "isOn");
        this.__datas = new ObservedPropertyObjectPU([
            { img: { "id": 16777321, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '猫式支撑', num: 11 },
            { img: { "id": 16777321, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '四点支撑', num: 11 }
        ], this, "datas");
        this.__exercies = new ObservedPropertyObjectPU([
            { img: { "id": 16777321, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '收腹踢腿', num: 12 },
            { img: { "id": 16777321, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '交替平板支撑', num: 12 },
            { img: { "id": 16777321, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '收腹踢腿', num: 12 },
            { img: { "id": 16777321, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '交替平板支撑', num: 12 },
            { img: { "id": 16777321, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '收腹踢腿', num: 12 },
            { img: { "id": 16777321, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '交替平板支撑', num: 12 }
        ], this, "exercies");
        this.__comment = new ObservedPropertyObjectPU([
            { img: { "id": 16777323, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '西瓜', date: '11-20', num: 122, content: '好累啊,不过拉伸完还是很放松的', heart: { "id": 16777324, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, redheart: { "id": 16777316, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, flag: false },
            { img: { "id": 16777323, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '西瓜', date: '11-20', num: 122, content: '好累啊,不过拉伸完还是很放松的', heart: { "id": 16777324, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, redheart: { "id": 16777316, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, flag: false },
            { img: { "id": 16777323, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '西瓜', date: '11-20', num: 122, content: '好累啊,不过拉伸完还是很放松的', heart: { "id": 16777324, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, redheart: { "id": 16777316, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, flag: false },
            { img: { "id": 16777323, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '西瓜', date: '11-20', num: 122, content: '好累啊,不过拉伸完还是很放松的', heart: { "id": 16777324, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, redheart: { "id": 16777316, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, flag: false },
            { img: { "id": 16777323, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '西瓜', date: '11-20', num: 122, content: '好累啊,不过拉伸完还是很放松的', heart: { "id": 16777324, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, redheart: { "id": 16777316, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, flag: false },
            { img: { "id": 16777323, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: '西瓜', date: '11-20', num: 122, content: '好累啊,不过拉伸完还是很放松的', heart: { "id": 16777324, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, redheart: { "id": 16777316, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, flag: false }
        ], this, "comment");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Page_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.isOn !== undefined) {
            this.isOn = params.isOn;
        }
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
        if (params.exercies !== undefined) {
            this.exercies = params.exercies;
        }
        if (params.comment !== undefined) {
            this.comment = params.comment;
        }
    }
    updateStateVars(params: Page_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__isOn.purgeDependencyOnElmtId(rmElmtId);
        this.__datas.purgeDependencyOnElmtId(rmElmtId);
        this.__exercies.purgeDependencyOnElmtId(rmElmtId);
        this.__comment.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__isOn.aboutToBeDeleted();
        this.__datas.aboutToBeDeleted();
        this.__exercies.aboutToBeDeleted();
        this.__comment.aboutToBeDeleted();
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
    private __isOn: ObservedPropertySimplePU<boolean>;
    get isOn() {
        return this.__isOn.get();
    }
    set isOn(newValue: boolean) {
        this.__isOn.set(newValue);
    }
    private __datas: ObservedPropertyObjectPU<type[]>;
    get datas() {
        return this.__datas.get();
    }
    set datas(newValue: type[]) {
        this.__datas.set(newValue);
    }
    private __exercies: ObservedPropertyObjectPU<type[]>;
    get exercies() {
        return this.__exercies.get();
    }
    set exercies(newValue: type[]) {
        this.__exercies.set(newValue);
    }
    private __comment: ObservedPropertyObjectPU<commentUser[]>;
    get comment() {
        return this.__comment.get();
    }
    set comment(newValue: commentUser[]) {
        this.__comment.set(newValue);
    }
    itemui(data: type, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(data.img);
            Image.width(100);
            Image.height(100);
            Image.margin({ right: 20, bottom: 10 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.name);
            Text.margin({ bottom: 20 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.num + 'S');
            Text.width('100%');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.height("100%");
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Top });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height("100%");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Top });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777315, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
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
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        Column.pop();
        Stack.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor('white');
            Column.borderRadius(20);
            Column.padding(10);
            Column.margin({ top: 180 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.margin({ bottom: 15 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('全身突击燃脂计划');
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
            Image.create({ "id": 16777317, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(30);
            Image.height(30);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('20分钟');
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
            Image.create({ "id": 16777318, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(30);
            Image.height(30);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('20分钟');
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
            Image.create({ "id": 16777319, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(30);
            Image.height(30);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('20分钟');
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
            Image.create({ "id": 16777320, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(50);
            Image.onClick(() => {
                router.pushUrl({ url: "pages/music" });
            });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ top: 15 });
            Column.height("100%");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('热身·2个');
            Text.width('80%');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
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
            const forEachItemGenFunction = _item => {
                const data = _item;
                this.itemui.bind(this)(data);
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('训练·6个');
            Text.width('80%');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height("100%");
            Column.width('100%');
            Column.margin({ top: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const data = _item;
                this.itemui.bind(this)(data);
            };
            this.forEachUpdateFunction(elmtId, this.exercies, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('');
            Text.width('100%');
            Text.height(370);
            Text.border({
                width: {
                    top: 0,
                    bottom: 1,
                    left: 0,
                    right: 0
                },
                color: { top: '#F2F4F6', bottom: '#F2F4F6' }
            });
            Text.margin({ bottom: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('拉伸放松·2个');
            Text.width('80%');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
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
            const forEachItemGenFunction = _item => {
                const data = _item;
                this.itemui.bind(this)(data);
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Column.pop();
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
            Image.create({ "id": 16777322, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
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
            Button.createWithLabel('成为会员，即刻开练');
            Button.backgroundColor("#FF9900");
            Button.width('80%');
            Button.margin({ bottom: 10 });
        }, Button);
        Button.pop();
        Column.pop();
        Column.pop();
        Column.pop();
        Stack.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Page";
    }
}
registerNamedRoute(() => new Page(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/class", pageFullPath: "entry/src/main/ets/pages/class", integratedHsp: "false", moduleType: "followWithHap" });
