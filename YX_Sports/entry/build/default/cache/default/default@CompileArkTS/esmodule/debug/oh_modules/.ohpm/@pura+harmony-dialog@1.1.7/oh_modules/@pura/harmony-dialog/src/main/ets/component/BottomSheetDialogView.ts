if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface BottomSheetDialogView_Params {
    options?: BottomSheetOptions;
    title?: string;
    fontSize?: number | string | Resource;
    statusBarHeight?: number;
    indicatorHeight?: number;
    isLargeScreen?: boolean;
    themeColorMode?: ThemeColorMode;
    foldStatusCallback?: Callback<display.FoldStatus>;
}
import { DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/dialog/DialogHelper&1.1.7";
import type { BottomSheetOptions } from '../model/BottomSheetOptions';
import type { ActionSheetOptions } from '../model/ActionSheetOptions';
import { DialogThemeColorMode } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/constraint&1.1.7";
import { Helper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/Helper&1.1.7";
import display from "@ohos:display";
export class BottomSheetDialogView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.__title = new ObservedPropertySimplePU("", this, "title");
        this.__fontSize = new ObservedPropertyObjectPU(16, this, "fontSize");
        this.__statusBarHeight = new ObservedPropertySimplePU(0, this, "statusBarHeight");
        this.__indicatorHeight = new ObservedPropertySimplePU(0, this, "indicatorHeight");
        this.__isLargeScreen = new ObservedPropertySimplePU(false, this, "isLargeScreen");
        this.__themeColorMode = this.createStorageProp(DialogThemeColorMode, this.options.themeColorMode ?? ThemeColorMode.SYSTEM, "themeColorMode");
        this.foldStatusCallback = (foldStatus: display.FoldStatus) => {
            this.isLargeScreen = Helper.isLargeScreen();
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BottomSheetDialogView_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.fontSize !== undefined) {
            this.fontSize = params.fontSize;
        }
        if (params.statusBarHeight !== undefined) {
            this.statusBarHeight = params.statusBarHeight;
        }
        if (params.indicatorHeight !== undefined) {
            this.indicatorHeight = params.indicatorHeight;
        }
        if (params.isLargeScreen !== undefined) {
            this.isLargeScreen = params.isLargeScreen;
        }
        if (params.foldStatusCallback !== undefined) {
            this.foldStatusCallback = params.foldStatusCallback;
        }
    }
    updateStateVars(params: BottomSheetDialogView_Params) {
        this.__options.reset(params.options);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__options.purgeDependencyOnElmtId(rmElmtId);
        this.__title.purgeDependencyOnElmtId(rmElmtId);
        this.__fontSize.purgeDependencyOnElmtId(rmElmtId);
        this.__statusBarHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__indicatorHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isLargeScreen.purgeDependencyOnElmtId(rmElmtId);
        this.__themeColorMode.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__options.aboutToBeDeleted();
        this.__title.aboutToBeDeleted();
        this.__fontSize.aboutToBeDeleted();
        this.__statusBarHeight.aboutToBeDeleted();
        this.__indicatorHeight.aboutToBeDeleted();
        this.__isLargeScreen.aboutToBeDeleted();
        this.__themeColorMode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __options: SynchedPropertySimpleOneWayPU<BottomSheetOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: BottomSheetOptions) {
        this.__options.set(newValue);
    }
    private __title: ObservedPropertySimplePU<string>; //标题
    get title() {
        return this.__title.get();
    }
    set title(newValue: string) {
        this.__title.set(newValue);
    }
    private __fontSize: ObservedPropertyObjectPU<number | string | Resource>; //按钮的文字大小，字体大小16。
    get fontSize() {
        return this.__fontSize.get();
    }
    set fontSize(newValue: number | string | Resource) {
        this.__fontSize.set(newValue);
    }
    private __statusBarHeight: ObservedPropertySimplePU<number>; //状态栏高度
    get statusBarHeight() {
        return this.__statusBarHeight.get();
    }
    set statusBarHeight(newValue: number) {
        this.__statusBarHeight.set(newValue);
    }
    private __indicatorHeight: ObservedPropertySimplePU<number>; //底部导航条的高度
    get indicatorHeight() {
        return this.__indicatorHeight.get();
    }
    set indicatorHeight(newValue: number) {
        this.__indicatorHeight.set(newValue);
    }
    private __isLargeScreen: ObservedPropertySimplePU<boolean>; //是否是大屏
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
        if (this.options.title) {
            this.title = Helper.getResourceStr(this.options.title) ?? "";
        }
        if (this.options.sheets && this.options.sheets.length >= 1) {
            let fontSize = (this.options.sheets[0] as ActionSheetOptions).fontSize;
            if (fontSize) {
                this.fontSize = fontSize;
            }
        }
        this.statusBarHeight = Helper.getStatusBarHeight();
        this.indicatorHeight = Helper.getIndicatorHeight();
        this.isLargeScreen = Helper.isLargeScreen();
        //开启折叠设备折叠状态变化的监听。
        display.on('foldStatusChange', this.foldStatusCallback);
    }
    aboutToDisappear(): void {
        //关闭折叠设备折叠状态变化的监听。
        display.off('foldStatusChange', this.foldStatusCallback);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            WithTheme.create({ colorMode: this.themeColorMode });
        }, WithTheme);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.sticky(StickyStyle.Header | StickyStyle.Footer);
            List.edgeEffect(EdgeEffect.None);
            List.width(this.options.width);
            List.height(this.options.height ?? "auto");
            List.constraintSize({ maxWidth: this.options.maxWidth, maxHeight: this.options.maxHeight });
            List.margin({ top: this.statusBarHeight, bottom: this.isLargeScreen ? this.indicatorHeight : 0 });
            List.backgroundColor(this.options.backgroundColor);
            List.backgroundBlurStyle(this.options.backgroundBlurStyle);
            List.borderRadius(this.options.cornerRadius);
            List.clip(true);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ListItemGroup.create({ header: this.headBuilder.bind(this), footer: this.footBuilder.bind(this) });
            ListItemGroup.divider({ strokeWidth: 1, color: { "id": 16777245, "type": 10001, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" } });
            ListItemGroup.backgroundColor(Color.Transparent);
        }, ListItemGroup);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const sheet = _item;
                this.itemBuilder.bind(this)(sheet.value, sheet.fontColor ?? { "id": 16777246, "type": 10001, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, sheet.fontSize ?? 16, index);
            };
            this.forEachUpdateFunction(elmtId, this.options.sheets, forEachItemGenFunction, (sheet: ActionSheetOptions, index: number) => `${index}-${sheet.value}`, true, true);
        }, ForEach);
        ForEach.pop();
        ListItemGroup.pop();
        List.pop();
        WithTheme.pop();
    }
    //列表Item
    itemBuilder(value: ResourceStr, fontColor: ResourceColor, fontSize: number | string | Resource, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(value);
            Text.fontSize(fontSize);
            Text.fontColor(fontColor);
            Text.align(Alignment.Center);
            Text.textAlign(TextAlign.Center);
            Text.padding({ top: 18, bottom: 18, left: 10, right: 10 });
            Text.width('100%');
            Text.backgroundColor(this.options.backgroundColor);
            Text.backgroundBlurStyle(this.options.backgroundBlurStyle);
            Text.onClick(() => {
                if (this.options.actionCancel) {
                    DialogHelper.closeDialog(this.options.dialogId ?? "");
                }
                if (this.options.onAction) {
                    this.options.onAction(index, this.options.dialogId ?? "");
                }
            });
        }, Text);
        Text.pop();
    }
    //标题
    headBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor(this.options.backgroundColor);
            Column.backgroundBlurStyle(this.options.backgroundBlurStyle);
            Column.visibility(this.title.length > 0 ? Visibility.Visible : Visibility.None);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.fontSize(14);
            Text.fontColor(this.options.titleFontColor ?? { "id": 16777248, "type": 10001, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Text.align(Alignment.Center);
            Text.textAlign(TextAlign.Center);
            Text.padding({ left: 10, right: 10, bottom: 15, top: 15 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.width('100%');
            Divider.strokeWidth(1);
            Divider.color({ "id": 16777245, "type": 10001, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
        }, Divider);
        Column.pop();
    }
    //底部按钮
    footBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 0 });
            Column.width('100%');
            Column.backgroundColor(this.options.backgroundColor);
            Column.backgroundBlurStyle(this.options.backgroundBlurStyle);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.width('100%');
            Divider.strokeWidth(10);
            Divider.color({ "id": 16777245, "type": 10001, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.options.cancelValue);
            Text.fontSize(ObservedObject.GetRawObject(this.fontSize));
            Text.fontColor(this.options.cancelFontColor ?? { "id": 125830283, "type": 10001, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Text.fontWeight(this.options.cancelFontWeight ?? FontWeight.Bold);
            Text.align(Alignment.Center);
            Text.textAlign(TextAlign.Center);
            Text.width('100%');
            Text.padding({ top: 18, bottom: this.isLargeScreen ? 18 : 10, left: 10, right: 10 });
            Text.margin({ bottom: this.isLargeScreen ? 0 : Helper.getIndicatorHeight() });
            Text.onClick(() => {
                DialogHelper.closeDialog(this.options.dialogId ?? "");
            });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
