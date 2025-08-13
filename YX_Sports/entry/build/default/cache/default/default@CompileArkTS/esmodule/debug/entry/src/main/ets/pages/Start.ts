if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Start_Params {
    phoneNumber?: string;
    password?: string;
    uiContext?: UIContext;
    promptAction?: PromptAction;
    showPrivacyDialog?: boolean;
}
import promptAction from "@ohos:promptAction";
import type { PromptAction as PromptAction } from "@ohos:arkui.UIContext";
import router from "@ohos:router";
import http from "@ohos:net.http";
import type loginNetWorkType from '../mod/login/loginType';
import address from "@normalized:N&&&entry/src/main/resources/rawfile/IPaddress&";
class Start extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__phoneNumber = new ObservedPropertySimplePU('', this, "phoneNumber");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.uiContext = this.getUIContext();
        this.promptAction = this.uiContext.getPromptAction();
        this.__showPrivacyDialog = new ObservedPropertySimplePU(true // 保留原有状态控制
        //*******************************标题*******************************//
        , this, "showPrivacyDialog");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Start_Params) {
        if (params.phoneNumber !== undefined) {
            this.phoneNumber = params.phoneNumber;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.uiContext !== undefined) {
            this.uiContext = params.uiContext;
        }
        if (params.promptAction !== undefined) {
            this.promptAction = params.promptAction;
        }
        if (params.showPrivacyDialog !== undefined) {
            this.showPrivacyDialog = params.showPrivacyDialog;
        }
    }
    updateStateVars(params: Start_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__phoneNumber.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__showPrivacyDialog.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__phoneNumber.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__showPrivacyDialog.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __phoneNumber: ObservedPropertySimplePU<string>;
    get phoneNumber() {
        return this.__phoneNumber.get();
    }
    set phoneNumber(newValue: string) {
        this.__phoneNumber.set(newValue);
    }
    private __password: ObservedPropertySimplePU<string>;
    get password() {
        return this.__password.get();
    }
    set password(newValue: string) {
        this.__password.set(newValue);
    }
    private uiContext: UIContext;
    private promptAction: PromptAction;
    private __showPrivacyDialog: ObservedPropertySimplePU<boolean>; // 保留原有状态控制
    get showPrivacyDialog() {
        return this.__showPrivacyDialog.get();
    }
    set showPrivacyDialog(newValue: boolean) {
        this.__showPrivacyDialog.set(newValue);
    }
    //*******************************标题*******************************//
    title(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('悦享健身');
            Text.fontSize(50);
            Text.fontColor('#FFFFFF');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('爱生活 爱自己');
            Text.fontSize(25);
            Text.fontColor('#FFFFFF');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(50);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('未注册手机验证后即完成注册');
            Text.fontColor('#000000');
            Text.fontSize(20);
            Text.backgroundColor('FF867474');
            Text.borderRadius(8);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.width('20%');
        }, Text);
        Text.pop();
        Row.pop();
    }
    //*******************************登录*******************************//
    loginCompoent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: "请输入手机号", text: { value: this.phoneNumber, changeEvent: newValue => { this.phoneNumber = newValue; } } });
            TextInput.type(InputType.Number);
            TextInput.backgroundColor('#FFFFFF');
            TextInput.width('80%');
            TextInput.padding(15);
            TextInput.borderRadius(15);
            TextInput.margin({ bottom: 10 });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: "请输入密码", text: { value: this.password, changeEvent: newValue => { this.password = newValue; } } });
            TextInput.type(InputType.Number);
            TextInput.backgroundColor('#FFFFFF');
            TextInput.width('80%');
            TextInput.padding(15);
            TextInput.borderRadius(15);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('登录');
            Button.width('80%');
            Button.height(40);
            Button.margin({ top: 20 });
            Button.fontColor('#000000');
            Button.backgroundColor('#FFFFFF');
            Button.onClick(() => {
                this.login();
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(200);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('其他登录方式');
            Text.fontSize(15);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777268, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(30);
            Image.height(30);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777257, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(30);
            Image.height(30);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777269, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(30);
            Image.height(30);
        }, Image);
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(30);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('登录即表示您已同意《用户协议》和《隐私政策》');
            Text.fontSize(15);
            Text.onClick(() => { router.pushUrl({ url: "pages/PrivatePoliticPage" }); });
        }, Text);
        Text.pop();
    }
    async login() {
        if (this.phoneNumber.trim().length <= 0) {
            promptAction.showToast({
                message: "手机号不能为空"
            });
        }
        else if (this.password.trim().length <= 0) {
            promptAction.showToast({
                message: "密码不能为空"
            });
        }
        else {
            let httpRequest = http.createHttp();
            let url = address.IP + "/login";
            try {
                let response = await httpRequest.request(url, {
                    method: http.RequestMethod.POST,
                    extraData: {
                        telephone: this.phoneNumber,
                        password: this.password
                    },
                    header: {
                        "Content-Type": "application/json"
                    }
                });
                promptAction.showToast({ message: "账号或密码错误，登录失败！" });
                let result = JSON.parse(response.result as string) as loginNetWorkType;
                if (result.code === 200) {
                    router.replaceUrl({ url: "pages/Index", params: { token: result.token, userId: result.data.userId } });
                }
                else {
                    promptAction.showToast({ message: "账号或密码错误，登录失败！" });
                }
            }
            catch (error) {
                promptAction.showToast({ message: "网路错误", });
            }
        }
    }
    //*******************************bulid*******************************//
    aboutToAppear() {
        this.showSystemPrivacyDialog();
    }
    // 新增方法：显示系统对话框
    showSystemPrivacyDialog() {
        try {
            this.promptAction.showDialog({
                title: '隐私政策',
                message: '隐私保护政策\n' +
                    '\n' +
                    '1.为了便于您了解您在使用我们的服务时,我们需要收集的信息类型与用途,我们将结合具体服务向您逐一说明。\n' +
                    '\n' +
                    '2.为完成创建账号，您需提供手机号码，用于账号免密登录或短信验证注册。用户注册完成后，会默认使用您的手机号码作为的用户名。如果不同意，将无法完成注册',
                buttons: [
                    {
                        text: '不同意并退出',
                        color: '#000000'
                    },
                    {
                        text: '同意并继续',
                        color: '#000000'
                    }
                ]
            }, (err, data) => {
                if (err) {
                    console.error('showDialog err: ' + err);
                    return;
                }
                if (data.index === 0) { // 点击了"不同意并退出"
                    // 这里可以添加退出应用的逻辑
                }
                else { // 点击了"同意并继续"
                    this.showPrivacyDialog = false; // 关闭自定义弹窗（如果同时使用）
                }
            });
        }
        catch (error) {
            console.error('showDialog error: ' + error);
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundImage({ "id": 16777256, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Column.backgroundImageSize(ImageSize.Cover);
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(30);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(50);
            Image.height(50);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.width("80%");
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(100);
        }, Text);
        Text.pop();
        this.title.bind(this)();
        this.loginCompoent.bind(this)();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Start";
    }
}
registerNamedRoute(() => new Start(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/start", pageFullPath: "entry/src/main/ets/pages/start", integratedHsp: "false", moduleType: "followWithHap" });
