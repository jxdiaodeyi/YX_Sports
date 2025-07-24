if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface sharedTitle_Params {
    title?: string;
    h?: number;
    backUrl?;
}
import router from "@ohos:router";
export class sharedTitle extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.title = "";
        this.h = 80;
        this.backUrl = 'pages/settingPage';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: sharedTitle_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.h !== undefined) {
            this.h = params.h;
        }
        if (params.backUrl !== undefined) {
            this.backUrl = params.backUrl;
        }
    }
    updateStateVars(params: sharedTitle_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private title: string;
    private h: number;
    private backUrl;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width('100%');
            Stack.height(this.h);
            Stack.backgroundColor('#ffff');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777301, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
            Image.margin({ left: 10, top: 40 });
            Image.onClick(() => {
                router.pushUrl({ url: this.backUrl });
            });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.fontColor('#333333');
            Text.fontSize(20);
            Text.margin({ top: 40 });
        }, Text);
        Text.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
