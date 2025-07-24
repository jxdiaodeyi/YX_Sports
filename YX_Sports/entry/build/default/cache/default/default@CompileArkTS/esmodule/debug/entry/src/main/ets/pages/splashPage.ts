if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SplashPage_Params {
    isActive?: boolean;
    rotateAngle?: number;
}
import router from "@ohos:router";
class SplashPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isActive = new ObservedPropertySimplePU(true, this, "isActive");
        this.__rotateAngle = new ObservedPropertySimplePU(0, this, "rotateAngle");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SplashPage_Params) {
        if (params.isActive !== undefined) {
            this.isActive = params.isActive;
        }
        if (params.rotateAngle !== undefined) {
            this.rotateAngle = params.rotateAngle;
        }
    }
    updateStateVars(params: SplashPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isActive.purgeDependencyOnElmtId(rmElmtId);
        this.__rotateAngle.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isActive.aboutToBeDeleted();
        this.__rotateAngle.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isActive: ObservedPropertySimplePU<boolean>;
    get isActive() {
        return this.__isActive.get();
    }
    set isActive(newValue: boolean) {
        this.__isActive.set(newValue);
    }
    private __rotateAngle: ObservedPropertySimplePU<number>;
    get rotateAngle() {
        return this.__rotateAngle.get();
    }
    set rotateAngle(newValue: number) {
        this.__rotateAngle.set(newValue);
    }
    aboutToAppear() {
        // 启动旋转动画
        this.startRotation();
        //4秒后跳转到引导页
        setTimeout(() => {
            this.isActive = false;
            router.replaceUrl({ url: 'pages/Starter' });
        }, 4000);
    }
    startRotation() {
        const id = setInterval(() => {
            this.rotateAngle = (this.rotateAngle + 10) % 360;
            if (!this.isActive) {
                clearInterval(id);
            }
        }, 50);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#FFFF');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //中间图标与字
            Column.create();
            //中间图标与字
            Column.width('100%');
            //中间图标与字
            Column.height('100%');
            //中间图标与字
            Column.padding(30);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('60%');
            Column.alignItems(HorizontalAlign.Center);
            Column.justifyContent(FlexAlign.End);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.backgroundColor('#6C5DD3');
            Row.borderRadius(15);
            Row.margin({ bottom: 20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777308, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 75, height: 75 });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("悦享健身");
            Text.fontSize(40);
            Text.fontColor('#666666');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("想要身体健， 天天来锻炼");
            Text.fontSize(18);
            Text.fontColor('#999999');
            Text.margin({ top: 10 });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 底部的转圈元素
            Stack.create();
            // 底部的转圈元素
            Stack.width('100%');
            // 底部的转圈元素
            Stack.layoutWeight(1);
            // 底部的转圈元素
            Stack.alignContent(Alignment.Bottom);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777297, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.rotate({ angle: this.rotateAngle });
        }, Image);
        // 底部的转圈元素
        Stack.pop();
        //中间图标与字
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SplashPage";
    }
}
registerNamedRoute(() => new SplashPage(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/splashPage", pageFullPath: "entry/src/main/ets/pages/splashPage", integratedHsp: "false", moduleType: "followWithHap" });
