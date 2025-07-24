if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TextAreaDialogView_Params {
    controller?: TextInputController;
    options?: TextAreaOptions;
    customOptions?: BaseContentOptions | undefined;
    modifier?: TextAreaModifier;
    text?: string;
    textAlignment?: Alignment;
    themeColorMode?: ThemeColorMode;
}
import { CustomContentDialog } from "@ohos:arkui.advanced.Dialog";
import type { BaseContentOptions } from '../model/base/BaseContentOptions';
import type { TextAreaOptions } from '../model/TextAreaOptions';
import { DialogThemeColorMode, TextAlignment } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/constraint&1.1.7";
import { TextAreaModifier } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/TextAreaModifier&1.1.7";
import { CacheHelper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/CacheHelper&1.1.7";
export class TextAreaDialogView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = new TextInputController();
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.__customOptions = new ObservedPropertyObjectPU(undefined, this, "customOptions");
        this.__modifier = new ObservedPropertyObjectPU(new TextAreaModifier(), this, "modifier");
        this.__text = new ObservedPropertySimplePU('', this, "text");
        this.__textAlignment = new ObservedPropertySimplePU(Alignment.Top, this, "textAlignment");
        this.__themeColorMode = this.createStorageProp(DialogThemeColorMode, this.options.themeColorMode ?? ThemeColorMode.SYSTEM, "themeColorMode");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TextAreaDialogView_Params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.customOptions !== undefined) {
            this.customOptions = params.customOptions;
        }
        if (params.modifier !== undefined) {
            this.modifier = params.modifier;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.textAlignment !== undefined) {
            this.textAlignment = params.textAlignment;
        }
    }
    updateStateVars(params: TextAreaDialogView_Params) {
        this.__options.reset(params.options);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__options.purgeDependencyOnElmtId(rmElmtId);
        this.__customOptions.purgeDependencyOnElmtId(rmElmtId);
        this.__modifier.purgeDependencyOnElmtId(rmElmtId);
        this.__text.purgeDependencyOnElmtId(rmElmtId);
        this.__textAlignment.purgeDependencyOnElmtId(rmElmtId);
        this.__themeColorMode.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__options.aboutToBeDeleted();
        this.__customOptions.aboutToBeDeleted();
        this.__modifier.aboutToBeDeleted();
        this.__text.aboutToBeDeleted();
        this.__textAlignment.aboutToBeDeleted();
        this.__themeColorMode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: TextInputController;
    private __options: SynchedPropertySimpleOneWayPU<TextAreaOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: TextAreaOptions) {
        this.__options.set(newValue);
    }
    private __customOptions: ObservedPropertyObjectPU<BaseContentOptions | undefined>;
    get customOptions() {
        return this.__customOptions.get();
    }
    set customOptions(newValue: BaseContentOptions | undefined) {
        this.__customOptions.set(newValue);
    }
    private __modifier: ObservedPropertyObjectPU<TextAreaModifier>;
    get modifier() {
        return this.__modifier.get();
    }
    set modifier(newValue: TextAreaModifier) {
        this.__modifier.set(newValue);
    }
    private __text: ObservedPropertySimplePU<string>;
    get text() {
        return this.__text.get();
    }
    set text(newValue: string) {
        this.__text.set(newValue);
    }
    private __textAlignment: ObservedPropertySimplePU<Alignment>;
    get textAlignment() {
        return this.__textAlignment.get();
    }
    set textAlignment(newValue: Alignment) {
        this.__textAlignment.set(newValue);
    }
    private __themeColorMode: ObservedPropertyAbstractPU<ThemeColorMode>; //设置深色浅色，默认跟随系统。
    get themeColorMode() {
        return this.__themeColorMode.get();
    }
    set themeColorMode(newValue: ThemeColorMode) {
        this.__themeColorMode.set(newValue);
    }
    aboutToAppear(): void {
        this.text = this.options.text ?? "";
        this.modifier.inputFilter = this.options.inputFilter;
        if (this.options.align == TextAlignment.Bottom) {
            this.textAlignment = Alignment.Bottom;
        }
        else if (this.options.align == TextAlignment.Center) {
            this.textAlignment = Alignment.Center;
        }
        else {
            this.textAlignment = Alignment.Top;
        }
        this.customOptions = (this.options as BaseContentOptions);
        this.customOptions.contentBuilder = () => {
            this.InputBuilder();
        };
        CacheHelper.put(`${CacheHelper.CACHE_LABEL}${this.options.dialogId ?? ""}`, this.text);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.themeColorMode === ThemeColorMode.LIGHT) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        WithTheme.create({ colorMode: ThemeColorMode.LIGHT });
                    }, WithTheme);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.height(this.options.height);
                        __Common__.width(this.options.width);
                        __Common__.constraintSize({ maxWidth: this.options.maxWidth, maxHeight: this.options.maxHeight });
                        __Common__.backgroundColor(this.options.backgroundColor);
                        __Common__.backgroundBlurStyle(this.options.backgroundBlurStyle);
                        __Common__.borderRadius(this.options.cornerRadius);
                        __Common__.borderWidth(this.options.borderWidth);
                        __Common__.borderColor(this.options.borderColor);
                        __Common__.borderStyle(this.options.borderStyle);
                        __Common__.clip(true);
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new CustomContentDialog(this, this.customOptions, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/component/TextAreaDialogView.ets", line: 61, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return this.customOptions;
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "CustomContentDialog" });
                    }
                    __Common__.pop();
                    WithTheme.pop();
                });
            }
            else if (this.themeColorMode === ThemeColorMode.DARK) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        WithTheme.create({ colorMode: ThemeColorMode.DARK });
                    }, WithTheme);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.height(this.options.height);
                        __Common__.width(this.options.width);
                        __Common__.constraintSize({ maxWidth: this.options.maxWidth, maxHeight: this.options.maxHeight });
                        __Common__.backgroundColor(this.options.backgroundColor);
                        __Common__.backgroundBlurStyle(this.options.backgroundBlurStyle);
                        __Common__.borderRadius(this.options.cornerRadius);
                        __Common__.borderWidth(this.options.borderWidth);
                        __Common__.borderColor(this.options.borderColor);
                        __Common__.borderStyle(this.options.borderStyle);
                        __Common__.clip(true);
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new CustomContentDialog(this, this.customOptions, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/component/TextAreaDialogView.ets", line: 75, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return this.customOptions;
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "CustomContentDialog" });
                    }
                    __Common__.pop();
                    WithTheme.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.height(this.options.height);
                        __Common__.width(this.options.width);
                        __Common__.constraintSize({ maxWidth: this.options.maxWidth, maxHeight: this.options.maxHeight });
                        __Common__.backgroundColor(this.options.backgroundColor);
                        __Common__.backgroundBlurStyle(this.options.backgroundBlurStyle);
                        __Common__.borderRadius(this.options.cornerRadius);
                        __Common__.borderWidth(this.options.borderWidth);
                        __Common__.borderColor(this.options.borderColor);
                        __Common__.borderStyle(this.options.borderStyle);
                        __Common__.clip(true);
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new CustomContentDialog(this, this.customOptions, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/component/TextAreaDialogView.ets", line: 88, col: 7 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return this.customOptions;
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "CustomContentDialog" });
                    }
                    __Common__.pop();
                });
            }
        }, If);
        If.pop();
    }
    InputBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            WithTheme.create({ colorMode: this.themeColorMode });
        }, WithTheme);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({
                controller: this.controller,
                text: { value: this.text, changeEvent: newValue => { this.text = newValue; } },
                placeholder: this.options.placeholder ?? '请输入'
            });
            TextArea.type(this.options.inputType ?? TextAreaType.NORMAL);
            TextArea.defaultFocus(this.options.defaultFocus);
            TextArea.fontSize(this.options.fontSize);
            TextArea.fontColor(this.options.fontColor);
            TextArea.fontSize(this.options.fontSize);
            TextArea.placeholderColor(this.options.placeholderColor);
            TextArea.textAlign(this.options.textAlign);
            TextArea.align(this.textAlignment);
            TextArea.lineHeight(this.options.inputLineHeight);
            TextArea.backgroundColor(this.options.inputBackgroundColor);
            TextArea.border(this.options.inputBorder ?? { radius: 8 });
            TextArea.maxLength(this.options.maxLength == 0 ? Infinity : this.options.maxLength);
            TextArea.attributeModifier.bind(this)(ObservedObject.GetRawObject(this.modifier));
            TextArea.width('100%');
            TextArea.height(this.options.inputHeight ?? 155);
            TextArea.padding({ top: 12, bottom: 12 });
            TextArea.onChange((value: string, previewText?: PreviewText) => {
                CacheHelper.put(`${CacheHelper.CACHE_LABEL}${this.options.dialogId ?? ""}`, value ?? "");
                if (this.options.onChange) {
                    this.options.onChange(value);
                }
            });
        }, TextArea);
        WithTheme.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
