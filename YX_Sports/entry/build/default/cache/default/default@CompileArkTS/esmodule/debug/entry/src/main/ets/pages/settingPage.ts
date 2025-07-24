if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SettingPage_Params {
    sex?: string;
    second?: number;
    myIndex?: number;
}
import router from "@ohos:router";
import { DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import { DialogAction } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import { sharedTitle } from "@normalized:N&&&entry/src/main/ets/pages/title&";
class SettingPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__sex = new ObservedPropertySimplePU("女", this, "sex");
        this.__second = new ObservedPropertySimplePU(30, this, "second");
        this.__myIndex = new ObservedPropertySimplePU(3, this, "myIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SettingPage_Params) {
        if (params.sex !== undefined) {
            this.sex = params.sex;
        }
        if (params.second !== undefined) {
            this.second = params.second;
        }
        if (params.myIndex !== undefined) {
            this.myIndex = params.myIndex;
        }
    }
    updateStateVars(params: SettingPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__sex.purgeDependencyOnElmtId(rmElmtId);
        this.__second.purgeDependencyOnElmtId(rmElmtId);
        this.__myIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__sex.aboutToBeDeleted();
        this.__second.aboutToBeDeleted();
        this.__myIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __sex: ObservedPropertySimplePU<string>;
    get sex() {
        return this.__sex.get();
    }
    set sex(newValue: string) {
        this.__sex.set(newValue);
    }
    private __second: ObservedPropertySimplePU<number>;
    get second() {
        return this.__second.get();
    }
    set second(newValue: number) {
        this.__second.set(newValue);
    }
    private __myIndex: ObservedPropertySimplePU<number>;
    get myIndex() {
        return this.__myIndex.get();
    }
    set myIndex(newValue: number) {
        this.__myIndex.set(newValue);
    }
    title(t: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(50);
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(t);
            Text.fontColor('#C0A5C0');
            Text.textAlign(TextAlign.Start);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        Row.pop();
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
                    sharedTitle(this, { title: "设置", backUrl: 'pages/Index' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/settingPage.ets", line: 43, col: 8 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: "设置",
                            backUrl: 'pages/Index'
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
            //运动部分
            Column.create();
        }, Column);
        this.title.bind(this)("运动");
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.width('100%');
            Row.height(50);
            Row.backgroundColor('#ffff');
            Row.onClick(() => {
                router.pushUrl({ url: 'pages/music' });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("运动音乐");
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: '90%', height: 0.5 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.width('100%');
            Row.height(50);
            Row.backgroundColor('#ffff');
            Row.onClick(() => {
                let nums: string[] = [];
                for (let i = 1; i <= 2025; i++) {
                    nums.push(i.toString());
                }
                DialogHelper.showTextPickerDialog({
                    title: "",
                    range: nums,
                    onAction: (action: number, dialogId: string, value: string | string[]) => {
                        if (action == DialogAction.SURE) {
                            this.second = parseInt(value as string);
                        }
                    }
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("锻炼休息时间");
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.second + "秒");
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: '90%', height: 0.5 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.width('100%');
            Row.height(50);
            Row.backgroundColor('#ffff');
            Row.onClick(() => {
                let sexes: string[] = ["男教练", "女教练"];
                DialogHelper.showActionSheetDialog({
                    title: "",
                    sheets: sexes,
                    onAction: (index) => {
                        this.sex = sexes[index][0];
                    }
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("健身视频示范教练");
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.sex);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: '90%', height: 0.5 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.width('100%');
            Row.height(50);
            Row.backgroundColor('#ffff');
            Row.onClick(() => {
                router.pushUrl({ url: 'pages/fitnessGoal' });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("健身目标与基础");
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        Column.pop();
        //运动部分
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //隐私部分
            Column.create();
        }, Column);
        this.title.bind(this)("隐私");
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.width('100%');
            Row.height(50);
            Row.backgroundColor('#ffff');
            Row.onClick(() => {
                router.replaceUrl({ url: 'pages/manage' });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("账号管理");
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: '90%', height: 0.5 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.width('100%');
            Row.height(50);
            Row.backgroundColor('#ffff');
            Row.onClick(() => {
                router.replaceUrl({ url: 'pages/private' });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("隐私设置");
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        Column.pop();
        //隐私部分
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //其他
            Column.create();
        }, Column);
        this.title.bind(this)("其他");
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.width('100%');
            Row.height(50);
            Row.backgroundColor('#ffff');
            Row.onClick(() => {
                router.replaceUrl({ url: 'pages/information' });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("消息通知");
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: '90%', height: 0.5 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.width('100%');
            Row.height(50);
            Row.backgroundColor('#ffff');
            Row.onClick(() => {
                router.replaceUrl({ url: 'pages/clearCache' });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("清除缓存");
            Text.fontSize(20);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(15);
            Image.height(15);
            Image.margin({ right: 10 });
        }, Image);
        Row.pop();
        Column.pop();
        //其他
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //退出
            Row.create();
            //退出
            Row.width('100%');
            //退出
            Row.height(50);
            //退出
            Row.margin({ top: 20 });
            //退出
            Row.justifyContent(FlexAlign.Center);
            //退出
            Row.backgroundColor('#ffff');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("退出登录");
            Text.fontColor('#ff0000');
            Text.textAlign(TextAlign.Center);
            Text.fontSize(22);
        }, Text);
        Text.pop();
        //退出
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SettingPage";
    }
}
registerNamedRoute(() => new SettingPage(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/settingPage", pageFullPath: "entry/src/main/ets/pages/settingPage", integratedHsp: "false", moduleType: "followWithHap" });
