if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TextPickerDialogView_Params {
    selectValue?: string | string[];
    options?: TextPickerOptions;
    title?: string;
    primaryButton?: ButtonOptions;
    secondaryButton?: ButtonOptions;
    value?: string | string[];
    range?: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[];
    isLargeScreen?: boolean;
    themeColorMode?: ThemeColorMode;
    foldStatusCallback?: Callback<display.FoldStatus>;
}
import type { TextPickerOptions } from '../model/TextPickerOptions';
import type { ButtonOptions } from '../model/ButtonOptions';
import { Helper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/Helper&1.1.7";
import { DialogAction, DialogThemeColorMode } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/constraint&1.1.7";
import { DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/dialog/DialogHelper&1.1.7";
import display from "@ohos:display";
export class TextPickerDialogView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__selectValue = new ObservedPropertyObjectPU('', this, "selectValue");
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.__title = new ObservedPropertySimplePU("", this, "title");
        this.__primaryButton = new ObservedPropertyObjectPU(undefined, this, "primaryButton");
        this.__secondaryButton = new ObservedPropertyObjectPU(undefined, this, "secondaryButton");
        this.__value = new ObservedPropertyObjectPU('', this, "value");
        this.__range = new ObservedPropertyObjectPU([], this, "range");
        this.__isLargeScreen = new ObservedPropertySimplePU(false, this, "isLargeScreen");
        this.__themeColorMode = this.createStorageProp(DialogThemeColorMode, this.options.themeColorMode ?? ThemeColorMode.SYSTEM, "themeColorMode");
        this.foldStatusCallback = (foldStatus: display.FoldStatus) => {
            this.isLargeScreen = Helper.isLargeScreen();
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TextPickerDialogView_Params) {
        if (params.selectValue !== undefined) {
            this.selectValue = params.selectValue;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.primaryButton !== undefined) {
            this.primaryButton = params.primaryButton;
        }
        if (params.secondaryButton !== undefined) {
            this.secondaryButton = params.secondaryButton;
        }
        if (params.value !== undefined) {
            this.value = params.value;
        }
        if (params.range !== undefined) {
            this.range = params.range;
        }
        if (params.isLargeScreen !== undefined) {
            this.isLargeScreen = params.isLargeScreen;
        }
        if (params.foldStatusCallback !== undefined) {
            this.foldStatusCallback = params.foldStatusCallback;
        }
    }
    updateStateVars(params: TextPickerDialogView_Params) {
        this.__options.reset(params.options);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectValue.purgeDependencyOnElmtId(rmElmtId);
        this.__options.purgeDependencyOnElmtId(rmElmtId);
        this.__title.purgeDependencyOnElmtId(rmElmtId);
        this.__primaryButton.purgeDependencyOnElmtId(rmElmtId);
        this.__secondaryButton.purgeDependencyOnElmtId(rmElmtId);
        this.__value.purgeDependencyOnElmtId(rmElmtId);
        this.__range.purgeDependencyOnElmtId(rmElmtId);
        this.__isLargeScreen.purgeDependencyOnElmtId(rmElmtId);
        this.__themeColorMode.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectValue.aboutToBeDeleted();
        this.__options.aboutToBeDeleted();
        this.__title.aboutToBeDeleted();
        this.__primaryButton.aboutToBeDeleted();
        this.__secondaryButton.aboutToBeDeleted();
        this.__value.aboutToBeDeleted();
        this.__range.aboutToBeDeleted();
        this.__isLargeScreen.aboutToBeDeleted();
        this.__themeColorMode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __selectValue: ObservedPropertyObjectPU<string | string[]>;
    get selectValue() {
        return this.__selectValue.get();
    }
    set selectValue(newValue: string | string[]) {
        this.__selectValue.set(newValue);
    }
    private __options: SynchedPropertySimpleOneWayPU<TextPickerOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: TextPickerOptions) {
        this.__options.set(newValue);
    }
    private __title: ObservedPropertySimplePU<string>; //标题
    get title() {
        return this.__title.get();
    }
    set title(newValue: string) {
        this.__title.set(newValue);
    }
    private __primaryButton?: ObservedPropertyObjectPU<ButtonOptions>; //弹框左侧按钮。
    get primaryButton() {
        return this.__primaryButton.get();
    }
    set primaryButton(newValue: ButtonOptions) {
        this.__primaryButton.set(newValue);
    }
    private __secondaryButton?: ObservedPropertyObjectPU<ButtonOptions>; //弹框右侧按钮。
    get secondaryButton() {
        return this.__secondaryButton.get();
    }
    set secondaryButton(newValue: ButtonOptions) {
        this.__secondaryButton.set(newValue);
    }
    private __value: ObservedPropertyObjectPU<string | string[]>;
    get value() {
        return this.__value.get();
    }
    set value(newValue: string | string[]) {
        this.__value.set(newValue);
    }
    private __range: ObservedPropertyObjectPU<string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]>;
    get range() {
        return this.__range.get();
    }
    set range(newValue: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]) {
        this.__range.set(newValue);
    }
    private __isLargeScreen: ObservedPropertySimplePU<boolean>; //是否是大屏手机，例如Pad和展开的折叠屏；默认正常手机
    get isLargeScreen() {
        return this.__isLargeScreen.get();
    }
    set isLargeScreen(newValue: boolean) {
        this.__isLargeScreen.set(newValue);
    }
    private __themeColorMode: ObservedPropertyAbstractPU<ThemeColorMode>; //设置深色浅色，默认跟随系统。
    get themeColorMode() {
        return this.__themeColorMode.get();
    }
    set themeColorMode(newValue: ThemeColorMode) {
        this.__themeColorMode.set(newValue);
    }
    private foldStatusCallback: Callback<display.FoldStatus>;
    aboutToAppear(): void {
        if (this.options.value) {
            this.value = this.options.value;
        }
        else {
            if (this.options.range instanceof Array) {
                let pickerItem = this.options.range[0];
                if (typeof pickerItem == 'string') { ///string[]
                    this.value = pickerItem;
                }
                else if (pickerItem instanceof Array) { //string[][]
                    let selected: string[] = [];
                    let range = this.options.range as string[][];
                    for (let index = 0; index < range.length; index++) {
                        selected.push(range[index][0]);
                    }
                    this.value = selected;
                }
                else if ((pickerItem as TextPickerRangeContent).icon) { //TextPickerRangeContent
                    this.value = Helper.getResourceStr(pickerItem.text ?? "") ?? "";
                }
                else {
                    this.value = [];
                    this.recursionPickerRange(this.options.range as TextCascadePickerRangeContent[]);
                }
            }
            else { //Resource
                let array = getContext().resourceManager.getStringArrayValueSync(this.options.range);
                if (array && array.length > 0) {
                    this.value = array[0];
                }
            }
        }
        this.selectValue = this.value;
        if (this.options.title) {
            this.title = Helper.getResourceStr(this.options.title) ?? "";
        }
        this.primaryButton = this.options.primaryButton as ButtonOptions;
        this.secondaryButton = this.options.secondaryButton as ButtonOptions;
        this.isLargeScreen = Helper.isLargeScreen();
        //开启折叠设备折叠状态变化的监听。
        display.on('foldStatusChange', this.foldStatusCallback);
    }
    aboutToDisappear(): void {
        //关闭折叠设备折叠状态变化的监听。
        display.off('foldStatusChange', this.foldStatusCallback);
    }
    /**
     * 递归获取默认值
     */
    recursionPickerRange(pickerRange: TextCascadePickerRangeContent[]) {
        if (pickerRange && pickerRange.length > 0) {
            let range = pickerRange[0];
            (this.value as string[]).push(Helper.getResourceStr(range.text ?? "") ?? "");
            this.recursionPickerRange(range.children ?? []);
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            WithTheme.create({ colorMode: this.themeColorMode });
        }, WithTheme);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(this.options.backgroundColor);
            Column.backgroundBlurStyle(this.options.backgroundBlurStyle);
            Column.borderRadius(this.options.cornerRadius);
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
            Column.width(this.options.width);
            Column.constraintSize({ maxWidth: this.options.maxWidth });
            Column.padding({ bottom: this.isLargeScreen ? 0 : 25 });
            Column.margin({ bottom: this.isLargeScreen ? 30 : 0 });
            Column.clip(true);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.backgroundColor(this.options.titleBackground);
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.primaryButton?.value);
            Button.buttonStyle(this.primaryButton?.buttonStyle ?? ButtonStyleMode.TEXTUAL);
            Button.role(this.primaryButton?.role ?? ButtonRole.NORMAL);
            Button.type(ButtonType.Capsule);
            Button.fontColor(this.primaryButton?.fontColor);
            Button.backgroundColor(this.primaryButton?.background ?? Color.Transparent);
            Button.margin({ top: 10, bottom: 10, left: 10 });
            Button.alignSelf(ItemAlign.Center);
            Button.align(Alignment.Center);
            Button.onClick(() => {
                if (this.options.actionCancel) {
                    DialogHelper.closeDialog(this.options.dialogId ?? "");
                }
                if (this.options.onAction) {
                    this.options.onAction(DialogAction.ONE, this.options.dialogId ?? "", ObservedObject.GetRawObject(this.selectValue));
                }
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.fontWeight(FontWeight.Bold);
            Text.textAlign(TextAlign.Center);
            Text.fontColor(this.options.titleFontColor);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.ellipsisMode(EllipsisMode.END);
            Text.maxLines(1);
            Text.layoutWeight(1);
            Text.margin(5);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.secondaryButton?.value);
            Button.buttonStyle(this.secondaryButton?.buttonStyle ?? ButtonStyleMode.TEXTUAL);
            Button.role(this.secondaryButton?.role ?? ButtonRole.NORMAL);
            Button.fontColor(this.secondaryButton?.fontColor);
            Button.backgroundColor(this.secondaryButton?.background ?? Color.Transparent);
            Button.type(ButtonType.Capsule);
            Button.margin({ top: 10, bottom: 10, right: 10 });
            Button.alignSelf(ItemAlign.Center);
            Button.align(Alignment.Center);
            Button.onClick(() => {
                if (this.options.actionCancel) {
                    DialogHelper.closeDialog(this.options.dialogId ?? "");
                }
                if (this.options.onAction) {
                    this.options.onAction(DialogAction.TWO, this.options.dialogId ?? "", ObservedObject.GetRawObject(this.selectValue));
                }
            });
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextPicker.create({ range: this.options.range, value: this.value });
            TextPicker.textStyle(this.options.textStyle);
            TextPicker.selectedTextStyle(this.options.selectedTextStyle);
            TextPicker.disappearTextStyle(this.options.disappearTextStyle);
            TextPicker.divider(this.options.divider);
            TextPicker.canLoop(this.options.canLoop);
            TextPicker.margin({ top: 20, bottom: 20 });
            TextPicker.width('100%');
            TextPicker.onChange((value: string | string[], index: number | number[]) => {
                this.selectValue = value;
                if (this.options.onChange) {
                    this.options.onChange(value, index);
                }
            });
        }, TextPicker);
        TextPicker.pop();
        Column.pop();
        WithTheme.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
