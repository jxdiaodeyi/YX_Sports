if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LoadingView_Params {
    options?: LoadingOptions;
    content?: string;
}
import { SpinKit } from "@normalized:N&&&@pura/spinkit/Index&1.0.5";
import type { LoadingOptions } from '../model/LoadingOptions';
import { Helper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/Helper&1.1.7";
export class LoadingView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.__content = new ObservedPropertySimplePU('', this, "content");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LoadingView_Params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
    }
    updateStateVars(params: LoadingView_Params) {
        this.__options.reset(params.options);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__options.purgeDependencyOnElmtId(rmElmtId);
        this.__content.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__options.aboutToBeDeleted();
        this.__content.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __options: SynchedPropertySimpleOneWayPU<LoadingOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: LoadingOptions) {
        this.__options.set(newValue);
    }
    private __content: ObservedPropertySimplePU<string>;
    get content() {
        return this.__content.get();
    }
    set content(newValue: string) {
        this.__content.set(newValue);
    }
    aboutToAppear(): void {
        if (this.options.content) {
            this.content = Helper.getResourceStr(this.options.content) ?? "";
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
            Column.margin(5);
            Column.padding(this.options.padding);
            Column.backgroundColor(this.options.backgroundColor);
            Column.borderRadius(this.options.borderRadius);
            Column.shadow(this.options.shadow);
            Column.constraintSize({
                minWidth: (this.content.length > 0 ? 116 : 96),
                minHeight: (this.content.length > 0 ? 116 : 96)
            });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SpinKit(this, {
                        spinType: this.options.loadType,
                        spinSize: this.options.loadSize,
                        spinColor: this.options.loadColor
                    }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/component/LoadingView.ets", line: 38, col: 7 });
                    ViewV2.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            spinType: this.options.loadType,
                            spinSize: this.options.loadSize,
                            spinColor: this.options.loadColor
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        spinType: this.options.loadType,
                        spinSize: this.options.loadSize,
                        spinColor: this.options.loadColor
                    });
                }
            }, { name: "SpinKit" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.options.content);
            Text.textAlign(TextAlign.Center);
            Text.margin({ top: this.options.marginTop });
            Text.fontSize(this.options.fontSize);
            Text.fontColor(this.options.fontColor);
            Text.visibility(this.content.length > 0 ? Visibility.Visible : Visibility.None);
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
