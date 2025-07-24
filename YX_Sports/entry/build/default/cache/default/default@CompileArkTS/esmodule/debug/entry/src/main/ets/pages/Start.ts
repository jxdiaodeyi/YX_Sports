if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Start_Params {
    buttonText?: string;
    num?: number;
    buttontexting?: string;
    buttontexted?: string;
    uiContext?: UIContext;
    promptAction?: PromptAction;
    showPrivacyDialog?: boolean;
}
import type { PromptAction as PromptAction } from "@ohos:arkui.UIContext";
import router from "@ohos:router";
class Start extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__buttonText = new ObservedPropertySimplePU('获取验证码', this, "buttonText");
        this.__num = new ObservedPropertySimplePU(1, this, "num");
        this.__buttontexting = new ObservedPropertySimplePU('输入电话', this, "buttontexting");
        this.__buttontexted = new ObservedPropertySimplePU('输入验证码', this, "buttontexted");
        this.uiContext = this.getUIContext();
        this.promptAction = this.uiContext.getPromptAction();
        this.__showPrivacyDialog = new ObservedPropertySimplePU(true // 保留原有状态控制
        , this, "showPrivacyDialog");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Start_Params) {
        if (params.buttonText !== undefined) {
            this.buttonText = params.buttonText;
        }
        if (params.num !== undefined) {
            this.num = params.num;
        }
        if (params.buttontexting !== undefined) {
            this.buttontexting = params.buttontexting;
        }
        if (params.buttontexted !== undefined) {
            this.buttontexted = params.buttontexted;
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
        this.__buttonText.purgeDependencyOnElmtId(rmElmtId);
        this.__num.purgeDependencyOnElmtId(rmElmtId);
        this.__buttontexting.purgeDependencyOnElmtId(rmElmtId);
        this.__buttontexted.purgeDependencyOnElmtId(rmElmtId);
        this.__showPrivacyDialog.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__buttonText.aboutToBeDeleted();
        this.__num.aboutToBeDeleted();
        this.__buttontexting.aboutToBeDeleted();
        this.__buttontexted.aboutToBeDeleted();
        this.__showPrivacyDialog.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __buttonText: ObservedPropertySimplePU<string>;
    get buttonText() {
        return this.__buttonText.get();
    }
    set buttonText(newValue: string) {
        this.__buttonText.set(newValue);
    }
    private __num: ObservedPropertySimplePU<number>;
    get num() {
        return this.__num.get();
    }
    set num(newValue: number) {
        this.__num.set(newValue);
    }
    private __buttontexting: ObservedPropertySimplePU<string>;
    get buttontexting() {
        return this.__buttontexting.get();
    }
    set buttontexting(newValue: string) {
        this.__buttontexting.set(newValue);
    }
    private __buttontexted: ObservedPropertySimplePU<string>;
    get buttontexted() {
        return this.__buttontexted.get();
    }
    set buttontexted(newValue: string) {
        this.__buttontexted.set(newValue);
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: this.buttontexting });
            TextInput.type(InputType.Number);
            TextInput.backgroundColor('#FFFFFF');
            TextInput.width('80%');
            TextInput.padding(15);
            TextInput.borderRadius(15);
            TextInput.onChange((value: string) => {
                this.buttontexting = value;
            });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.buttonText);
            Button.width('80%');
            Button.height(40);
            Button.margin({ top: 20 });
            Button.fontColor('#000000');
            Button.backgroundColor('#FFFFFF');
            Button.onClick(() => {
                if (this.num == 1) {
                    this.num++;
                    this.promptAction.showToast({
                        message: '已发送验证码',
                        duration: 2000,
                    });
                    this.buttonText = '登录';
                    this.buttontexting = this.buttontexted;
                }
                else if (this.num == 2) {
                    router.replaceUrl({ url: 'pages/doc1' });
                }
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
