if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface PrivatePoliticPage_Params {
    message?: string;
}
import router from "@ohos:router";
class PrivatePoliticPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PrivatePoliticPage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: PrivatePoliticPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(40);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width('100%');
            Row.height(30);
            Row.padding(5);
            Row.border({
                width: { bottom: 1 },
                color: { bottom: '#F2F2F2' }, // 底部颜色
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.height(40);
            Image.width(40);
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('隐私政策');
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
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.height('100%');
            Scroll.margin({ top: 15 });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding(10);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('本应用尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本应用会按照本隐私权政策的规定使用和披露您的个人信息。但本应用将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本应用不会将这些信息对外披露或向第三方提供。本应用会不时更新本隐私权政策。 您在同意本应用服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本应用服务使用协议不可分割的一部分。\n' +
                '\n' +
                '\n' +
                '\n' +
                '1. 适用范围\n' +
                '\n' +
                '(a) 在您注册本应用帐号时，您根据本应用要求提供的个人注册信息；\n' +
                '\n' +
                '\n' +
                '\n' +
                '(b) 在您使用本应用网络服务，或访问本应用平台网页时，本应用自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；\n' +
                '\n' +
                '\n' +
                '\n' +
                '(c) 本应用通过合法途径从商业伙伴处取得的用户个人数据。\n' +
                '\n' +
                '\n' +
                '\n' +
                '您了解并同意，以下信息不适用本隐私权政策：\n' +
                '\n' +
                '\n' +
                '\n' +
                '(a) 您在使用本应用平台提供的搜索服务时输入的关键字信息；\n' +
                '\n' +
                '\n' +
                '\n' +
                '(b) 本应用收集到的您在本应用发布的有关信息数据，包括但不限于参与活动、成交信息及评价详情；\n' +
                '\n' +
                '\n' +
                '\n' +
                '(c) 违反法律规定或违反本应用规则行为及本应用已对您采取的措施。');
            Text.fontSize(20);
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "PrivatePoliticPage";
    }
}
registerNamedRoute(() => new PrivatePoliticPage(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/PrivatePoliticPage", pageFullPath: "entry/src/main/ets/pages/PrivatePoliticPage", integratedHsp: "false", moduleType: "followWithHap" });
