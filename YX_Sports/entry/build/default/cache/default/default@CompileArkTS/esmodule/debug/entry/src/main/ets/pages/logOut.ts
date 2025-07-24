if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LogOut_Params {
    text1?: string;
    text2?: string;
}
import { sharedTitle } from "@normalized:N&&&entry/src/main/ets/pages/title&";
class LogOut extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__text1 = new ObservedPropertySimplePU("您可以通过隐私政策列明的联系方式联系我们要求注销账户或在我们的产品中直接申请注销账号。 " +
            "敬请您注意并知悉，您提交注销申请后，我们需要15天时间处理您的账户注销。如您在15天内没有再次使用该注销账号登录，" +
            "我们将在15天后清除您的账号信息，完成注销，如果您在15天内进行了此账号的登录，则视为您主动放弃此次注销操作的申请。" +
            "当您注销账号后，将（可能）产生包括但不限于如下后果：", this, "text1");
        this.__text2 = new ObservedPropertySimplePU("您可以通过隐私政策列明的联系方式联系我们要求注销账户或在我们的产品中直接申请注销账号。" +
            " 敬请您注意并知悉，您提交注销申请后，我们需要15天时间处理您的账户注销。如您在15天内没有再次使用该注销账号登录，" +
            "我们将在15天后清除您的账号信息，完成注销，如果您在15天内进行了此账号的登录，则视为您主动放弃此次注销操作的申请。" +
            "当您注销账号后，将（可能）产生包括但不限于如下后果：", this, "text2");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LogOut_Params) {
        if (params.text1 !== undefined) {
            this.text1 = params.text1;
        }
        if (params.text2 !== undefined) {
            this.text2 = params.text2;
        }
    }
    updateStateVars(params: LogOut_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__text1.purgeDependencyOnElmtId(rmElmtId);
        this.__text2.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__text1.aboutToBeDeleted();
        this.__text2.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __text1: ObservedPropertySimplePU<string>;
    get text1() {
        return this.__text1.get();
    }
    set text1(newValue: string) {
        this.__text1.set(newValue);
    }
    private __text2: ObservedPropertySimplePU<string>;
    get text2() {
        return this.__text2.get();
    }
    set text2(newValue: string) {
        this.__text2.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new sharedTitle(this, { title: "注销账号", backUrl: 'pages/manage' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/logOut.ets", line: 18, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: "注销账号",
                            backUrl: 'pages/manage'
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
            Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: '100%', height: 0.3 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //text1
            Column.create();
            //text1
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(60);
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('注销条件');
            Text.fontSize(25);
            Text.fontColor('#333333');
            Text.margin({ left: 15 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.text1);
            Text.fontSize(15);
            Text.lineHeight(30);
            Text.margin({ left: 15, right: 15 });
        }, Text);
        Text.pop();
        Row.pop();
        //text1
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //text2
            Column.create();
            //text2
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(60);
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('注销需满足的条件');
            Text.fontSize(25);
            Text.fontColor('#333333');
            Text.margin({ left: 15 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.text2);
            Text.fontSize(15);
            Text.lineHeight(30);
            Text.margin({ left: 15, right: 15 });
        }, Text);
        Text.pop();
        Row.pop();
        //text2
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //注销
            Row.create();
            //注销
            Row.width('80%');
            //注销
            Row.height(40);
            //注销
            Row.alignItems(VerticalAlign.Center);
            //注销
            Row.justifyContent(FlexAlign.Center);
            //注销
            Row.margin({ top: 60 });
            //注销
            Row.backgroundColor('#ff0000');
            //注销
            Row.borderRadius(15);
            //注销
            Row.onClick(() => {
                //注销逻辑代码
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("申请注销");
            Text.fontColor('#ffff');
        }, Text);
        Text.pop();
        //注销
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "LogOut";
    }
}
registerNamedRoute(() => new LogOut(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/logOut", pageFullPath: "entry/src/main/ets/pages/logOut", integratedHsp: "false", moduleType: "followWithHap" });
