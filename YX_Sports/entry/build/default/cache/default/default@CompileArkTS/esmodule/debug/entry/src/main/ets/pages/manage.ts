if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Manage_Params {
    phoneNumber?: string;
    isBind?: boolean[];
    datas?: Type4[];
}
import { DialogAction, DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import { sharedTitle } from "@normalized:N&&&entry/src/main/ets/pages/title&";
import router from "@ohos:router";
interface Type4 {
    img: Resource;
    text: string;
    id: number;
}
class Manage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__phoneNumber = new ObservedPropertySimplePU('15774067042', this, "phoneNumber");
        this.__isBind = new ObservedPropertyObjectPU([true, false, false], this, "isBind");
        this.datas = [
            { img: { "id": 16777268, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, text: '微信账号', id: 0 },
            { img: { "id": 16777269, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, text: '微博账号', id: 1 },
            { img: { "id": 16777257, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, text: 'QQ账号', id: 2 },
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Manage_Params) {
        if (params.phoneNumber !== undefined) {
            this.phoneNumber = params.phoneNumber;
        }
        if (params.isBind !== undefined) {
            this.isBind = params.isBind;
        }
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
    }
    updateStateVars(params: Manage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__phoneNumber.purgeDependencyOnElmtId(rmElmtId);
        this.__isBind.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__phoneNumber.aboutToBeDeleted();
        this.__isBind.aboutToBeDeleted();
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
    private __isBind: ObservedPropertyObjectPU<boolean[]>;
    get isBind() {
        return this.__isBind.get();
    }
    set isBind(newValue: boolean[]) {
        this.__isBind.set(newValue);
    }
    private datas: Type4[];
    bindItem(t: Type4, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(60);
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.backgroundColor('#ffff');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 2 });
            Row.margin({ left: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(t.img);
            Image.size({ width: 20, height: 20 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(t.text);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 2 });
            Row.margin({ right: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isBind[t.id] ? '解除绑定' : '去绑定');
            Text.fontSize(16);
            Text.onClick(() => {
                if (this.isBind[t.id]) {
                    DialogHelper.showAlertDialog({
                        title: '',
                        content: "是否确认解除绑定",
                        onAction: (action) => {
                            if (action == DialogAction.SURE) {
                                this.isBind[t.id] = false;
                            }
                        }
                    });
                }
                else {
                    //绑定逻辑代码
                }
            });
            Text.fontColor(this.isBind[t.id] ? '#999999' : '#72B681');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 15, height: 15 });
        }, Image);
        Row.pop();
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
                    let componentCall = new sharedTitle(this, { title: "账号管理" }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/manage.ets", line: 65, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: "账号管理"
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
            Row.create();
            Row.width('100%');
            Row.height(60);
            Row.margin({ top: 10 });
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.backgroundColor('#ffff');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 2 });
            Row.margin({ left: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777305, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 20, height: 20 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.phoneNumber);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 2 });
            Row.margin({ right: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('更换绑定');
            Text.fontColor('#999999');
            Text.fontSize(18);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.size({ width: 15, height: 15 });
        }, Image);
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(40);
            Row.margin({ left: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('第三方账号绑定');
            Text.fontColor('#999999');
            Text.fontSize(15);
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const i = _item;
                this.bindItem.bind(this)(i);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (i.id != 2) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Image.create({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
                                Image.size({ width: '100%', height: 0.3 });
                            }, Image);
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.layoutWeight(1);
            Row.alignItems(VerticalAlign.Bottom);
            Row.justifyContent(FlexAlign.Center);
            Row.margin({ bottom: 20 });
            Row.onClick(() => {
                router.replaceUrl({ url: 'pages/logOut' });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('不想使用悦享账号了?');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('注销账号');
            Text.fontColor('#72B681');
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Manage";
    }
}
registerNamedRoute(() => new Manage(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/manage", pageFullPath: "entry/src/main/ets/pages/manage", integratedHsp: "false", moduleType: "followWithHap" });
