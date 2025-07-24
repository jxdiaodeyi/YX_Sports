if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TextInputDialogView_Params {
    controller?: TextInputController;
    options?: TextInputOptions;
    customOptions?: BaseContentOptions | undefined;
    modifier?: TextInputModifier;
    text?: string;
    showPassword?: boolean;
    cancelButton?: CancelButtonOptions;
    themeColorMode?: ThemeColorMode;
}
import type { TextInputOptions } from '../model/TextInputOptions';
import type { BaseContentOptions } from '../model/base/BaseContentOptions';
import { TextInputModifier } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/TextInputModifier&1.1.7";
import { CacheHelper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/CacheHelper&1.1.7";
import { DialogThemeColorMode } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/constraint&1.1.7";
import { CustomContentDialog } from "@ohos:arkui.advanced.Dialog";
export class TextInputDialogView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = new TextInputController();
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.__customOptions = new ObservedPropertyObjectPU(undefined, this, "customOptions");
        this.__modifier = new ObservedPropertyObjectPU(new TextInputModifier(), this, "modifier");
        this.__text = new ObservedPropertySimplePU('', this, "text");
        this.__showPassword = new ObservedPropertySimplePU(false, this, "showPassword");
        this.__cancelButton = new ObservedPropertyObjectPU({ style: CancelButtonStyle.INPUT, icon: { size: '16vp', color: '#99ffffff', src: '' } }, this, "cancelButton");
        this.__themeColorMode = this.createStorageProp(DialogThemeColorMode, this.options.themeColorMode ?? ThemeColorMode.SYSTEM, "themeColorMode");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TextInputDialogView_Params) {
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
        if (params.showPassword !== undefined) {
            this.showPassword = params.showPassword;
        }
        if (params.cancelButton !== undefined) {
            this.cancelButton = params.cancelButton;
        }
    }
    updateStateVars(params: TextInputDialogView_Params) {
        this.__options.reset(params.options);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__options.purgeDependencyOnElmtId(rmElmtId);
        this.__customOptions.purgeDependencyOnElmtId(rmElmtId);
        this.__modifier.purgeDependencyOnElmtId(rmElmtId);
        this.__text.purgeDependencyOnElmtId(rmElmtId);
        this.__showPassword.purgeDependencyOnElmtId(rmElmtId);
        this.__cancelButton.purgeDependencyOnElmtId(rmElmtId);
        this.__themeColorMode.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__options.aboutToBeDeleted();
        this.__customOptions.aboutToBeDeleted();
        this.__modifier.aboutToBeDeleted();
        this.__text.aboutToBeDeleted();
        this.__showPassword.aboutToBeDeleted();
        this.__cancelButton.aboutToBeDeleted();
        this.__themeColorMode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: TextInputController;
    private __options: SynchedPropertySimpleOneWayPU<TextInputOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: TextInputOptions) {
        this.__options.set(newValue);
    }
    private __customOptions: ObservedPropertyObjectPU<BaseContentOptions | undefined>;
    get customOptions() {
        return this.__customOptions.get();
    }
    set customOptions(newValue: BaseContentOptions | undefined) {
        this.__customOptions.set(newValue);
    }
    private __modifier: ObservedPropertyObjectPU<TextInputModifier>;
    get modifier() {
        return this.__modifier.get();
    }
    set modifier(newValue: TextInputModifier) {
        this.__modifier.set(newValue);
    }
    private __text: ObservedPropertySimplePU<string>;
    get text() {
        return this.__text.get();
    }
    set text(newValue: string) {
        this.__text.set(newValue);
    }
    private __showPassword: ObservedPropertySimplePU<boolean>; //是否显示密码
    get showPassword() {
        return this.__showPassword.get();
    }
    set showPassword(newValue: boolean) {
        this.__showPassword.set(newValue);
    }
    private __cancelButton: ObservedPropertyObjectPU<CancelButtonOptions>; //右侧清除按钮样式
    get cancelButton() {
        return this.__cancelButton.get();
    }
    set cancelButton(newValue: CancelButtonOptions) {
        this.__cancelButton.set(newValue);
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
        this.showPassword = this.options.showPassword ?? false;
        if (this.options.cancelButton) {
            this.cancelButton = this.options.cancelButton;
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
                                let componentCall = new CustomContentDialog(this, this.customOptions, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/component/TextInputDialogView.ets", line: 59, col: 9 });
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
                                let componentCall = new CustomContentDialog(this, this.customOptions, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/component/TextInputDialogView.ets", line: 73, col: 9 });
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
                                let componentCall = new CustomContentDialog(this, this.customOptions, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/component/TextInputDialogView.ets", line: 86, col: 7 });
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
            TextInput.create({
                controller: this.controller,
                text: { value: this.text, changeEvent: newValue => { this.text = newValue; } },
                placeholder: this.options.placeholder ?? '请输入'
            });
            TextInput.type(this.options.inputType ?? InputType.Normal);
            TextInput.showPassword(this.showPassword);
            TextInput.showPasswordIcon(this.options.showPasswordIcon);
            TextInput.passwordIcon(this.options.passwordIcon);
            TextInput.passwordRules(this.options.passwordRules);
            TextInput.cancelButton(ObservedObject.GetRawObject(this.cancelButton));
            TextInput.defaultFocus(this.options.defaultFocus);
            TextInput.fontColor(this.options.fontColor);
            TextInput.fontSize(this.options.fontSize);
            TextInput.placeholderColor(this.options.placeholderColor);
            TextInput.backgroundColor(this.options.inputBackgroundColor);
            TextInput.border(this.options.inputBorder);
            TextInput.maxLength(this.options.maxLength == 0 ? Infinity : this.options.maxLength);
            TextInput.height(this.options.inputHeight);
            TextInput.attributeModifier.bind(this)(ObservedObject.GetRawObject(this.modifier));
            TextInput.onChange((value: string, previewText?: PreviewText) => {
                CacheHelper.put(`${CacheHelper.CACHE_LABEL}${this.options.dialogId ?? ""}`, value ?? "");
                if (this.options.onChange) {
                    this.options.onChange(value);
                }
            });
            TextInput.onSecurityStateChange(show => {
                this.showPassword = show;
            });
        }, TextInput);
        WithTheme.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
