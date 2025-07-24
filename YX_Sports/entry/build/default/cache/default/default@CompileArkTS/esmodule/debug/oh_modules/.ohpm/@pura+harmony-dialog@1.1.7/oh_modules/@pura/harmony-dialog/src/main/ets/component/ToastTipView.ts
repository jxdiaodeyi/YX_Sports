if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ToastTipView_Params {
    options?: ToastTipOptions;
}
import { Orientation } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import type { ToastTipOptions } from '../model/ToastTipOptions';
export class ToastTipView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ToastTipView_Params) {
    }
    updateStateVars(params: ToastTipView_Params) {
        this.__options.reset(params.options);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__options.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__options.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __options: SynchedPropertySimpleOneWayPU<ToastTipOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: ToastTipOptions) {
        this.__options.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.options.orientation == Orientation.VERTICAL) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: this.options.margin ?? 10 });
                        Column.margin(12);
                        Column.padding(20);
                        Column.justifyContent(FlexAlign.Center);
                        Column.alignItems(HorizontalAlign.Center);
                        Column.align(Alignment.Center);
                        Column.alignSelf(ItemAlign.Center);
                        Column.constraintSize({ minWidth: 120 });
                        Column.backgroundColor(this.options.backgroundColor);
                        Column.borderRadius(this.options.borderRadius);
                        Column.shadow(ShadowStyle.OUTER_DEFAULT_SM);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.options.imageRes);
                        Image.size(this.options.imageSize);
                        Image.fillColor(this.options.fontColor);
                        Image.margin(2);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.options.message);
                        Text.fontColor(this.options.fontColor);
                        Text.fontSize(this.options.fontSize);
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: this.options.margin ?? 10 });
                        Row.margin(12);
                        Row.padding(20);
                        Row.justifyContent(FlexAlign.Center);
                        Row.alignItems(VerticalAlign.Center);
                        Row.align(Alignment.Center);
                        Row.alignSelf(ItemAlign.Center);
                        Row.constraintSize({ minWidth: 120 });
                        Row.backgroundColor(this.options.backgroundColor);
                        Row.borderRadius(this.options.borderRadius);
                        Row.shadow(ShadowStyle.OUTER_DEFAULT_SM);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.options.imageRes);
                        Image.size(this.options.imageSize);
                        Image.fillColor(this.options.fontColor);
                        Image.margin({ right: 2 });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.options.message);
                        Text.fontColor(this.options.fontColor);
                        Text.fontSize(this.options.fontSize);
                    }, Text);
                    Text.pop();
                    Row.pop();
                });
            }
        }, If);
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
