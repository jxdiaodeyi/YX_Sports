if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface suggestion_Params {
    bottomRectHeight?: number;
    topRectHeight?: number;
    feedbackText?: string;
    selectedTypes?: boolean[];
    showImagePicker?: boolean;
    showSuccessDialog?: boolean;
    isSubmit?: boolean;
    feedbackTypes?: string[];
}
import router from "@ohos:router";
class suggestion extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomRectHeight = this.createStorageProp('bottomRectHeight', 0, "bottomRectHeight");
        this.__topRectHeight = this.createStorageProp('topRectHeight', 0, "topRectHeight");
        this.__feedbackText = new ObservedPropertySimplePU('', this, "feedbackText");
        this.__selectedTypes = new ObservedPropertyObjectPU([false, false, false, false], this, "selectedTypes");
        this.__showImagePicker = new ObservedPropertySimplePU(false, this, "showImagePicker");
        this.__showSuccessDialog = new ObservedPropertySimplePU(false, this, "showSuccessDialog");
        this.__isSubmit = new ObservedPropertySimplePU(false, this, "isSubmit");
        this.feedbackTypes = ['功能建议', '程序BUG', '视频问题', '其它'];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: suggestion_Params) {
        if (params.feedbackText !== undefined) {
            this.feedbackText = params.feedbackText;
        }
        if (params.selectedTypes !== undefined) {
            this.selectedTypes = params.selectedTypes;
        }
        if (params.showImagePicker !== undefined) {
            this.showImagePicker = params.showImagePicker;
        }
        if (params.showSuccessDialog !== undefined) {
            this.showSuccessDialog = params.showSuccessDialog;
        }
        if (params.isSubmit !== undefined) {
            this.isSubmit = params.isSubmit;
        }
        if (params.feedbackTypes !== undefined) {
            this.feedbackTypes = params.feedbackTypes;
        }
    }
    updateStateVars(params: suggestion_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bottomRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__feedbackText.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedTypes.purgeDependencyOnElmtId(rmElmtId);
        this.__showImagePicker.purgeDependencyOnElmtId(rmElmtId);
        this.__showSuccessDialog.purgeDependencyOnElmtId(rmElmtId);
        this.__isSubmit.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bottomRectHeight.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__feedbackText.aboutToBeDeleted();
        this.__selectedTypes.aboutToBeDeleted();
        this.__showImagePicker.aboutToBeDeleted();
        this.__showSuccessDialog.aboutToBeDeleted();
        this.__isSubmit.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __bottomRectHeight: ObservedPropertyAbstractPU<number>;
    get bottomRectHeight() {
        return this.__bottomRectHeight.get();
    }
    set bottomRectHeight(newValue: number) {
        this.__bottomRectHeight.set(newValue);
    }
    private __topRectHeight: ObservedPropertyAbstractPU<number>;
    get topRectHeight() {
        return this.__topRectHeight.get();
    }
    set topRectHeight(newValue: number) {
        this.__topRectHeight.set(newValue);
    }
    private __feedbackText: ObservedPropertySimplePU<string>;
    get feedbackText() {
        return this.__feedbackText.get();
    }
    set feedbackText(newValue: string) {
        this.__feedbackText.set(newValue);
    }
    private __selectedTypes: ObservedPropertyObjectPU<boolean[]>;
    get selectedTypes() {
        return this.__selectedTypes.get();
    }
    set selectedTypes(newValue: boolean[]) {
        this.__selectedTypes.set(newValue);
    }
    private __showImagePicker: ObservedPropertySimplePU<boolean>;
    get showImagePicker() {
        return this.__showImagePicker.get();
    }
    set showImagePicker(newValue: boolean) {
        this.__showImagePicker.set(newValue);
    }
    private __showSuccessDialog: ObservedPropertySimplePU<boolean>;
    get showSuccessDialog() {
        return this.__showSuccessDialog.get();
    }
    set showSuccessDialog(newValue: boolean) {
        this.__showSuccessDialog.set(newValue);
    }
    private __isSubmit: ObservedPropertySimplePU<boolean>;
    get isSubmit() {
        return this.__isSubmit.get();
    }
    set isSubmit(newValue: boolean) {
        this.__isSubmit.set(newValue);
    }
    private feedbackTypes: string[];
    handleSubmit() {
        // 显示成功弹窗
        this.showSuccessDialog = true;
        // 2秒后关闭弹窗并返回上一页
        setTimeout(() => {
            this.showSuccessDialog = false;
            // 返回上一页逻辑
        }, 2000);
    }
    successDialog(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('rgba(F,F,F,F.4)');
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(140);
            Column.height(120);
            Column.backgroundColor('#333333');
            Column.borderRadius(12);
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 勾选图标
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Circle.create();
            Circle.width(50);
            Circle.height(50);
            Circle.fill(Color.White);
        }, Circle);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(30);
            Image.height(30);
            Image.fillColor('#4CAF50');
        }, Image);
        // 勾选图标
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('反馈成功');
            Text.fontSize(16);
            Text.fontColor(Color.White);
            Text.margin({ top: 16 });
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F4F4F4');
            Column.padding({
                top: px2vp(this.topRectHeight),
                bottom: px2vp(this.bottomRectHeight)
            });
            Column.bindContentCover(this.showSuccessDialog, { builder: () => {
                    this.successDialog.call(this);
                } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 头部导航
            Row.create();
            // 头部导航
            Row.width('100%');
            // 头部导航
            Row.height(56);
            // 头部导航
            Row.justifyContent(FlexAlign.SpaceBetween);
            // 头部导航
            Row.alignItems(VerticalAlign.Center);
            // 头部导航
            Row.padding({ left: 16, right: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(24);
            Image.height(24);
            Image.onClick(() => {
                // 返回逻辑
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('意见反馈');
            Text.fontSize(18);
            Text.fontWeight(500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.width(24);
        }, Text);
        Text.pop();
        // 头部导航
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 内容区域
            Column.create();
            // 内容区域
            Column.padding({ left: 16, right: 16, top: 16 });
            // 内容区域
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 问题描述
            Column.create({ space: 8 });
            // 问题描述
            Column.alignItems(HorizontalAlign.Start);
            // 问题描述
            Column.margin({ bottom: 24 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('问题描述');
            Text.fontSize(16);
            Text.fontColor('#333333');
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({ placeholder: '输入你的问题' });
            TextArea.width('100%');
            TextArea.height(120);
            TextArea.backgroundColor('#F5F5F5');
            TextArea.borderRadius(8);
            TextArea.padding(12);
            TextArea.fontSize(14);
            TextArea.onChange((value: string) => {
                this.feedbackText = value;
                this.isSubmit = value.trim().length > 0;
            });
        }, TextArea);
        // 问题描述
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // // 上传图片
            // Row(){
            //   Column({ space: 12 }) {
            //     Text('上传图片')
            //       .fontSize(16)
            //       .fontColor('#333333')
            //       .alignSelf(ItemAlign.Start)
            //
            //     Row() {
            //       Column() {
            //         Text('+')
            //           .fontSize(24)
            //           .fontColor('#CCCCCC')
            //       }
            //       .width(60)
            //       .height(60)
            //       .backgroundColor('#F5F5F5')
            //       .borderRadius(8)
            //       .border({ width: 1, color: '#E0E0E0', style: BorderStyle.Dashed })
            //       .justifyContent(FlexAlign.Center)
            //       .onClick(() => {
            //         this.showImagePicker = true;
            //       })
            //     }
            //     .justifyContent(FlexAlign.Start)
            //   }
            //   .margin({ bottom: 24 })
            // }
            // .justifyContent(FlexAlign.Start)
            // .width('100%')
            // 反馈类型
            Column.create({ space: 16 });
            // // 上传图片
            // Row(){
            //   Column({ space: 12 }) {
            //     Text('上传图片')
            //       .fontSize(16)
            //       .fontColor('#333333')
            //       .alignSelf(ItemAlign.Start)
            //
            //     Row() {
            //       Column() {
            //         Text('+')
            //           .fontSize(24)
            //           .fontColor('#CCCCCC')
            //       }
            //       .width(60)
            //       .height(60)
            //       .backgroundColor('#F5F5F5')
            //       .borderRadius(8)
            //       .border({ width: 1, color: '#E0E0E0', style: BorderStyle.Dashed })
            //       .justifyContent(FlexAlign.Center)
            //       .onClick(() => {
            //         this.showImagePicker = true;
            //       })
            //     }
            //     .justifyContent(FlexAlign.Start)
            //   }
            //   .margin({ bottom: 24 })
            // }
            // .justifyContent(FlexAlign.Start)
            // .width('100%')
            // 反馈类型
            Column.alignItems(HorizontalAlign.Start);
            // // 上传图片
            // Row(){
            //   Column({ space: 12 }) {
            //     Text('上传图片')
            //       .fontSize(16)
            //       .fontColor('#333333')
            //       .alignSelf(ItemAlign.Start)
            //
            //     Row() {
            //       Column() {
            //         Text('+')
            //           .fontSize(24)
            //           .fontColor('#CCCCCC')
            //       }
            //       .width(60)
            //       .height(60)
            //       .backgroundColor('#F5F5F5')
            //       .borderRadius(8)
            //       .border({ width: 1, color: '#E0E0E0', style: BorderStyle.Dashed })
            //       .justifyContent(FlexAlign.Center)
            //       .onClick(() => {
            //         this.showImagePicker = true;
            //       })
            //     }
            //     .justifyContent(FlexAlign.Start)
            //   }
            //   .margin({ bottom: 24 })
            // }
            // .justifyContent(FlexAlign.Start)
            // .width('100%')
            // 反馈类型
            Column.margin({ bottom: 40 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('反馈类型');
            Text.fontSize(16);
            Text.fontColor('#333333');
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const type = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width('100%');
                    Row.alignItems(VerticalAlign.Center);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Checkbox.create();
                    Checkbox.select(this.selectedTypes[index]);
                    Checkbox.onChange((value: boolean) => {
                        this.selectedTypes[index] = value;
                    });
                    Checkbox.width(20);
                    Checkbox.height(20);
                }, Checkbox);
                Checkbox.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(type);
                    Text.fontSize(14);
                    Text.fontColor('#333333');
                    Text.margin({ left: 8 });
                }, Text);
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.feedbackTypes, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        // // 上传图片
        // Row(){
        //   Column({ space: 12 }) {
        //     Text('上传图片')
        //       .fontSize(16)
        //       .fontColor('#333333')
        //       .alignSelf(ItemAlign.Start)
        //
        //     Row() {
        //       Column() {
        //         Text('+')
        //           .fontSize(24)
        //           .fontColor('#CCCCCC')
        //       }
        //       .width(60)
        //       .height(60)
        //       .backgroundColor('#F5F5F5')
        //       .borderRadius(8)
        //       .border({ width: 1, color: '#E0E0E0', style: BorderStyle.Dashed })
        //       .justifyContent(FlexAlign.Center)
        //       .onClick(() => {
        //         this.showImagePicker = true;
        //       })
        //     }
        //     .justifyContent(FlexAlign.Start)
        //   }
        //   .margin({ bottom: 24 })
        // }
        // .justifyContent(FlexAlign.Start)
        // .width('100%')
        // 反馈类型
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 提交按钮
            Button.createWithLabel('提交');
            // 提交按钮
            Button.width('100%');
            // 提交按钮
            Button.height(48);
            // 提交按钮
            Button.backgroundColor((this.isSubmit == true) ? '#6C55E4' : '#CCCCCC');
            // 提交按钮
            Button.fontColor('#FFFFFF');
            // 提交按钮
            Button.fontSize(16);
            // 提交按钮
            Button.borderRadius(24);
            // 提交按钮
            Button.onClick(() => {
                this.handleSubmit();
            });
        }, Button);
        // 提交按钮
        Button.pop();
        // 内容区域
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "suggestion";
    }
}
registerNamedRoute(() => new suggestion(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/yijian", pageFullPath: "entry/src/main/ets/pages/yijian", integratedHsp: "false", moduleType: "followWithHap" });
