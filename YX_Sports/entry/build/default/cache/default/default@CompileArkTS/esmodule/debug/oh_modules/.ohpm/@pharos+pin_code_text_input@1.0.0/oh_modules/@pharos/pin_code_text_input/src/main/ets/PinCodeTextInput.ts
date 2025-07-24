if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ProxyPinCodeTextInput_Params {
    textValueArray?: string[];
    keyboardHeight?: Length;
    keyboardSupportAvoidance?: boolean;
    enable?: boolean;
    keyboardType?: KeyboardType;
    boxCount?: number;
    enableClose?: boolean;
    isPassword?: boolean;
    keyboardTitleLabel?: ResourceStr;
    proxyTextValue?: string;
    proxyTextCaretPosition?: number;
    isRequestFocus?: boolean;
    mSafeAreaPadding?: Padding | Length | LocalizedPadding;
    controller?: TextInputController;
    onInputCompleted?: (array: Array<string>) => Promise<void>;
    onInputIntercept?: () => Promise<boolean>;
    viewId?: string;
    timeoutId?: number;
    enableKeyboardOnFocus?: boolean;
}
interface PinCodeTextInput_Params {
    onInputCompleted?: (array: Array<string>) => Promise<void>;
    onInputIntercept?: () => Promise<boolean>;
    widgetWidth?: Length;
    boxCount?: number;
    isPassword?: boolean;
    isRequestFocus?: boolean;
    enable?: boolean;
    enableClose?: boolean;
    enableKeyboardOnFocus?: boolean;
    mSafeAreaPadding?: Padding | Length | LocalizedPadding;
    keyboardHeight?: Length;
    keyboardSupportAvoidance?: boolean;
    keyboardTitleLabel?: ResourceStr;
    textValueArray?: string[];
    caretIndex?: number;
    isCaretOpacity?: boolean;
    timeoutId?: number;
}
import { Keyboard, KeyboardType, KeyType } from "@normalized:N&&&@pharos/pin_code_text_input/src/main/ets/Keyboard&1.0.0";
import systemDateTime from "@ohos:systemDateTime";
import curves from "@native:ohos.curves";
export class PinCodeTextInput extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.onInputCompleted = async () => {
        };
        this.onInputIntercept = async () => {
            return false;
        };
        this.__widgetWidth = new SynchedPropertyObjectOneWayPU(params.widgetWidth, this, "widgetWidth");
        this.__boxCount = new SynchedPropertySimpleOneWayPU(params.boxCount, this, "boxCount");
        this.__isPassword = new SynchedPropertySimpleOneWayPU(params.isPassword, this, "isPassword");
        this.__isRequestFocus = new SynchedPropertySimpleOneWayPU(params.isRequestFocus, this, "isRequestFocus");
        this.__enable = new SynchedPropertySimpleOneWayPU(params.enable, this, "enable");
        this.__enableClose = new SynchedPropertySimpleOneWayPU(params.enableClose, this, "enableClose");
        this.__enableKeyboardOnFocus = new SynchedPropertySimpleOneWayPU(params.enableKeyboardOnFocus, this, "enableKeyboardOnFocus");
        this.__mSafeAreaPadding = new SynchedPropertyObjectOneWayPU(params.mSafeAreaPadding, this, "mSafeAreaPadding");
        this.__keyboardHeight = new SynchedPropertyObjectOneWayPU(params.keyboardHeight, this, "keyboardHeight");
        this.__keyboardSupportAvoidance = new SynchedPropertySimpleOneWayPU(params.keyboardSupportAvoidance, this, "keyboardSupportAvoidance");
        this.__keyboardTitleLabel = new SynchedPropertyObjectOneWayPU(params.keyboardTitleLabel, this, "keyboardTitleLabel");
        this.__textValueArray = new SynchedPropertyObjectTwoWayPU(params.textValueArray, this, "textValueArray");
        this.__caretIndex = new ObservedPropertySimplePU(0, this, "caretIndex");
        this.__isCaretOpacity = new ObservedPropertySimplePU(true, this, "isCaretOpacity");
        this.timeoutId = undefined;
        this.setInitiallyProvidedValue(params);
        this.declareWatch("textValueArray", this.onChangeTextValueArray);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PinCodeTextInput_Params) {
        if (params.onInputCompleted !== undefined) {
            this.onInputCompleted = params.onInputCompleted;
        }
        if (params.onInputIntercept !== undefined) {
            this.onInputIntercept = params.onInputIntercept;
        }
        if (params.boxCount === undefined) {
            this.__boxCount.set(6);
        }
        if (params.isPassword === undefined) {
            this.__isPassword.set(false);
        }
        if (params.isRequestFocus === undefined) {
            this.__isRequestFocus.set(true);
        }
        if (params.enable === undefined) {
            this.__enable.set(true);
        }
        if (params.enableClose === undefined) {
            this.__enableClose.set(false);
        }
        if (params.enableKeyboardOnFocus === undefined) {
            this.__enableKeyboardOnFocus.set(true);
        }
        if (params.mSafeAreaPadding === undefined) {
            this.__mSafeAreaPadding.set(undefined);
        }
        if (params.keyboardHeight === undefined) {
            this.__keyboardHeight.set(270);
        }
        if (params.keyboardSupportAvoidance === undefined) {
            this.__keyboardSupportAvoidance.set(true);
        }
        if (params.keyboardTitleLabel === undefined) {
            this.__keyboardTitleLabel.set('');
        }
        if (params.caretIndex !== undefined) {
            this.caretIndex = params.caretIndex;
        }
        if (params.isCaretOpacity !== undefined) {
            this.isCaretOpacity = params.isCaretOpacity;
        }
        if (params.timeoutId !== undefined) {
            this.timeoutId = params.timeoutId;
        }
    }
    updateStateVars(params: PinCodeTextInput_Params) {
        this.__widgetWidth.reset(params.widgetWidth);
        this.__boxCount.reset(params.boxCount);
        this.__isPassword.reset(params.isPassword);
        this.__isRequestFocus.reset(params.isRequestFocus);
        this.__enable.reset(params.enable);
        this.__enableClose.reset(params.enableClose);
        this.__enableKeyboardOnFocus.reset(params.enableKeyboardOnFocus);
        this.__mSafeAreaPadding.reset(params.mSafeAreaPadding);
        this.__keyboardHeight.reset(params.keyboardHeight);
        this.__keyboardSupportAvoidance.reset(params.keyboardSupportAvoidance);
        this.__keyboardTitleLabel.reset(params.keyboardTitleLabel);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__widgetWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__boxCount.purgeDependencyOnElmtId(rmElmtId);
        this.__isPassword.purgeDependencyOnElmtId(rmElmtId);
        this.__isRequestFocus.purgeDependencyOnElmtId(rmElmtId);
        this.__enable.purgeDependencyOnElmtId(rmElmtId);
        this.__enableClose.purgeDependencyOnElmtId(rmElmtId);
        this.__enableKeyboardOnFocus.purgeDependencyOnElmtId(rmElmtId);
        this.__mSafeAreaPadding.purgeDependencyOnElmtId(rmElmtId);
        this.__keyboardHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__keyboardSupportAvoidance.purgeDependencyOnElmtId(rmElmtId);
        this.__keyboardTitleLabel.purgeDependencyOnElmtId(rmElmtId);
        this.__textValueArray.purgeDependencyOnElmtId(rmElmtId);
        this.__caretIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isCaretOpacity.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__widgetWidth.aboutToBeDeleted();
        this.__boxCount.aboutToBeDeleted();
        this.__isPassword.aboutToBeDeleted();
        this.__isRequestFocus.aboutToBeDeleted();
        this.__enable.aboutToBeDeleted();
        this.__enableClose.aboutToBeDeleted();
        this.__enableKeyboardOnFocus.aboutToBeDeleted();
        this.__mSafeAreaPadding.aboutToBeDeleted();
        this.__keyboardHeight.aboutToBeDeleted();
        this.__keyboardSupportAvoidance.aboutToBeDeleted();
        this.__keyboardTitleLabel.aboutToBeDeleted();
        this.__textValueArray.aboutToBeDeleted();
        this.__caretIndex.aboutToBeDeleted();
        this.__isCaretOpacity.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    public onInputCompleted: (array: Array<string>) => Promise<void>;
    public onInputIntercept: () => Promise<boolean>;
    public __widgetWidth: SynchedPropertySimpleOneWayPU<Length>;
    get widgetWidth() {
        return this.__widgetWidth.get();
    }
    set widgetWidth(newValue: Length) {
        this.__widgetWidth.set(newValue);
    }
    public __boxCount: SynchedPropertySimpleOneWayPU<number>;
    get boxCount() {
        return this.__boxCount.get();
    }
    set boxCount(newValue: number) {
        this.__boxCount.set(newValue);
    }
    public __isPassword: SynchedPropertySimpleOneWayPU<boolean>;
    get isPassword() {
        return this.__isPassword.get();
    }
    set isPassword(newValue: boolean) {
        this.__isPassword.set(newValue);
    }
    public __isRequestFocus: SynchedPropertySimpleOneWayPU<boolean>;
    get isRequestFocus() {
        return this.__isRequestFocus.get();
    }
    set isRequestFocus(newValue: boolean) {
        this.__isRequestFocus.set(newValue);
    }
    public __enable: SynchedPropertySimpleOneWayPU<boolean>;
    get enable() {
        return this.__enable.get();
    }
    set enable(newValue: boolean) {
        this.__enable.set(newValue);
    }
    public __enableClose: SynchedPropertySimpleOneWayPU<boolean>;
    get enableClose() {
        return this.__enableClose.get();
    }
    set enableClose(newValue: boolean) {
        this.__enableClose.set(newValue);
    }
    public __enableKeyboardOnFocus: SynchedPropertySimpleOneWayPU<boolean>;
    get enableKeyboardOnFocus() {
        return this.__enableKeyboardOnFocus.get();
    }
    set enableKeyboardOnFocus(newValue: boolean) {
        this.__enableKeyboardOnFocus.set(newValue);
    }
    public __mSafeAreaPadding?: SynchedPropertySimpleOneWayPU<Padding | Length | LocalizedPadding>;
    get mSafeAreaPadding() {
        return this.__mSafeAreaPadding.get();
    }
    set mSafeAreaPadding(newValue: Padding | Length | LocalizedPadding) {
        this.__mSafeAreaPadding.set(newValue);
    }
    public __keyboardHeight: SynchedPropertySimpleOneWayPU<Length>;
    get keyboardHeight() {
        return this.__keyboardHeight.get();
    }
    set keyboardHeight(newValue: Length) {
        this.__keyboardHeight.set(newValue);
    }
    public __keyboardSupportAvoidance: SynchedPropertySimpleOneWayPU<boolean>;
    get keyboardSupportAvoidance() {
        return this.__keyboardSupportAvoidance.get();
    }
    set keyboardSupportAvoidance(newValue: boolean) {
        this.__keyboardSupportAvoidance.set(newValue);
    }
    public __keyboardTitleLabel: SynchedPropertySimpleOneWayPU<ResourceStr>;
    get keyboardTitleLabel() {
        return this.__keyboardTitleLabel.get();
    }
    set keyboardTitleLabel(newValue: ResourceStr) {
        this.__keyboardTitleLabel.set(newValue);
    }
    public __textValueArray: SynchedPropertySimpleOneWayPU<string[]>;
    get textValueArray() {
        return this.__textValueArray.get();
    }
    set textValueArray(newValue: string[]) {
        this.__textValueArray.set(newValue);
    }
    private __caretIndex: ObservedPropertySimplePU<number>;
    get caretIndex() {
        return this.__caretIndex.get();
    }
    set caretIndex(newValue: number) {
        this.__caretIndex.set(newValue);
    }
    private __isCaretOpacity: ObservedPropertySimplePU<boolean>;
    get isCaretOpacity() {
        return this.__isCaretOpacity.get();
    }
    set isCaretOpacity(newValue: boolean) {
        this.__isCaretOpacity.set(newValue);
    }
    private timeoutId?: number;
    onChangeTextValueArray() {
        this.caretIndex = this.textValueArray.length;
    }
    getValue(index: number): string {
        if (this.textValueArray.length > index) {
            return this.isPassword === true ? '*' : this.textValueArray[index];
        }
        return '';
    }
    aboutToAppear(): void {
        setTimeout(() => {
            this.setCaretOpacity();
        }, 1);
    }
    aboutToDisappear(): void {
        clearTimeout(this.timeoutId);
    }
    setCaretOpacity() {
        this.isCaretOpacity = !this.isCaretOpacity;
        this.timeoutId = setTimeout(() => {
            this.setCaretOpacity();
        }, 600);
    }
    buildBox(index: number, first?: boolean, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.height('100%');
            Stack.width(`calc(100% / ${this.boxCount})`);
            Stack.border({
                width: {
                    top: 1,
                    left: first ? 1 : 0,
                    bottom: 1,
                    right: 1
                },
                color: '#46333333'
            });
            Stack.flexGrow(1);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Context.animation({
                curve: curves.springMotion(),
                duration: 300,
            });
            Column.opacity(this.isCaretOpacity ? 1 : 0);
            Context.animation(null);
            Column.visibility(this.caretIndex === index ? Visibility.Visible : Visibility.None);
            Column.width(1);
            Column.height(20);
            Column.backgroundColor('#60999999');
        }, Column);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isPassword) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create({
                            justifyContent: FlexAlign.Center,
                            alignItems: ItemAlign.Center,
                        });
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.onAppear(() => {
                            this.isCaretOpacity = !this.isCaretOpacity;
                        });
                        Column.borderRadius(45 / 2);
                        Column.width(45 / 2);
                        Column.height(45 / 2);
                        Column.backgroundColor('#333');
                        Column.visibility(this.getValue(index) === '*' ? Visibility.Visible : Visibility.Hidden);
                    }, Column);
                    Column.pop();
                    Flex.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.getValue(index));
                        Text.fontSize(24);
                        Text.lineHeight('100%');
                        Text.textAlign(TextAlign.Center);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        Stack.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.height(45);
            Stack.width(ObservedObject.GetRawObject(this.widgetWidth));
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: FlexDirection.Row,
                justifyContent: FlexAlign.SpaceEvenly,
                alignItems: ItemAlign.Center
            });
            Flex.width('100%');
            Flex.height('100%');
            Flex.width('100%');
            Flex.backgroundColor(Color.White);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const _ = _item;
                this.buildBox.bind(this)(index, index == 0);
            };
            this.forEachUpdateFunction(elmtId, Array(this.boxCount).fill(0), forEachItemGenFunction, (_: Object, index) => `${index}`, true, true);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.width('100%');
            __Common__.height('100%');
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ProxyPinCodeTextInput(this, {
                        boxCount: this.boxCount,
                        keyboardTitleLabel: this.keyboardTitleLabel,
                        isPassword: this.isPassword,
                        mSafeAreaPadding: this.mSafeAreaPadding,
                        textValueArray: this.__textValueArray,
                        enable: this.enable,
                        enableClose: this.enableClose,
                        onInputCompleted: this.onInputCompleted,
                        keyboardHeight: this.keyboardHeight,
                        keyboardSupportAvoidance: this.keyboardSupportAvoidance,
                        isRequestFocus: this.isRequestFocus,
                        onInputIntercept: this.onInputIntercept,
                        enableKeyboardOnFocus: this.enableKeyboardOnFocus,
                    }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pharos+pin_code_text_input@1.0.0/oh_modules/@pharos/pin_code_text_input/src/main/ets/PinCodeTextInput.ets", line: 113, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            boxCount: this.boxCount,
                            keyboardTitleLabel: this.keyboardTitleLabel,
                            isPassword: this.isPassword,
                            mSafeAreaPadding: this.mSafeAreaPadding,
                            textValueArray: this.textValueArray,
                            enable: this.enable,
                            enableClose: this.enableClose,
                            onInputCompleted: this.onInputCompleted,
                            keyboardHeight: this.keyboardHeight,
                            keyboardSupportAvoidance: this.keyboardSupportAvoidance,
                            isRequestFocus: this.isRequestFocus,
                            onInputIntercept: this.onInputIntercept,
                            enableKeyboardOnFocus: this.enableKeyboardOnFocus
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        boxCount: this.boxCount,
                        keyboardTitleLabel: this.keyboardTitleLabel,
                        isPassword: this.isPassword,
                        mSafeAreaPadding: this.mSafeAreaPadding,
                        enable: this.enable,
                        enableClose: this.enableClose,
                        keyboardHeight: this.keyboardHeight,
                        keyboardSupportAvoidance: this.keyboardSupportAvoidance,
                        isRequestFocus: this.isRequestFocus,
                        enableKeyboardOnFocus: this.enableKeyboardOnFocus
                    });
                }
            }, { name: "ProxyPinCodeTextInput" });
        }
        __Common__.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ProxyPinCodeTextInput extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__textValueArray = new SynchedPropertyObjectTwoWayPU(params.textValueArray, this, "textValueArray");
        this.__keyboardHeight = new SynchedPropertyObjectOneWayPU(params.keyboardHeight, this, "keyboardHeight");
        this.__keyboardSupportAvoidance = new SynchedPropertySimpleOneWayPU(params.keyboardSupportAvoidance, this, "keyboardSupportAvoidance");
        this.__enable = new SynchedPropertySimpleOneWayPU(params.enable, this, "enable");
        this.__keyboardType = new SynchedPropertySimpleOneWayPU(params.keyboardType, this, "keyboardType");
        this.__boxCount = new SynchedPropertySimpleOneWayPU(params.boxCount, this, "boxCount");
        this.__enableClose = new SynchedPropertySimpleOneWayPU(params.enableClose, this, "enableClose");
        this.__isPassword = new SynchedPropertySimpleOneWayPU(params.isPassword, this, "isPassword");
        this.__keyboardTitleLabel = new SynchedPropertyObjectOneWayPU(params.keyboardTitleLabel, this, "keyboardTitleLabel");
        this.__proxyTextValue = new ObservedPropertySimplePU('', this, "proxyTextValue");
        this.__proxyTextCaretPosition = new ObservedPropertySimplePU(0, this, "proxyTextCaretPosition");
        this.__isRequestFocus = new SynchedPropertySimpleOneWayPU(params.isRequestFocus, this, "isRequestFocus");
        this.__mSafeAreaPadding = new SynchedPropertyObjectOneWayPU(params.mSafeAreaPadding, this, "mSafeAreaPadding");
        this.controller = new TextInputController();
        this.onInputCompleted = async () => {
        };
        this.onInputIntercept = async () => {
            return false;
        };
        this.__viewId = new ObservedPropertySimplePU('', this, "viewId");
        this.timeoutId = undefined;
        this.__enableKeyboardOnFocus = new SynchedPropertySimpleOneWayPU(params.enableKeyboardOnFocus, this, "enableKeyboardOnFocus");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("isRequestFocus", this.onChangeRequestFocus);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProxyPinCodeTextInput_Params) {
        if (params.enable === undefined) {
            this.__enable.set(true);
        }
        if (params.keyboardType === undefined) {
            this.__keyboardType.set(KeyboardType.NUMBER);
        }
        if (params.enableClose === undefined) {
            this.__enableClose.set(false);
        }
        if (params.isPassword === undefined) {
            this.__isPassword.set(false);
        }
        if (params.keyboardTitleLabel === undefined) {
            this.__keyboardTitleLabel.set('');
        }
        if (params.proxyTextValue !== undefined) {
            this.proxyTextValue = params.proxyTextValue;
        }
        if (params.proxyTextCaretPosition !== undefined) {
            this.proxyTextCaretPosition = params.proxyTextCaretPosition;
        }
        if (params.isRequestFocus === undefined) {
            this.__isRequestFocus.set(true);
        }
        if (params.mSafeAreaPadding === undefined) {
            this.__mSafeAreaPadding.set(undefined);
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.onInputCompleted !== undefined) {
            this.onInputCompleted = params.onInputCompleted;
        }
        if (params.onInputIntercept !== undefined) {
            this.onInputIntercept = params.onInputIntercept;
        }
        if (params.viewId !== undefined) {
            this.viewId = params.viewId;
        }
        if (params.timeoutId !== undefined) {
            this.timeoutId = params.timeoutId;
        }
        if (params.enableKeyboardOnFocus === undefined) {
            this.__enableKeyboardOnFocus.set(true);
        }
    }
    updateStateVars(params: ProxyPinCodeTextInput_Params) {
        this.__keyboardHeight.reset(params.keyboardHeight);
        this.__keyboardSupportAvoidance.reset(params.keyboardSupportAvoidance);
        this.__enable.reset(params.enable);
        this.__keyboardType.reset(params.keyboardType);
        this.__boxCount.reset(params.boxCount);
        this.__enableClose.reset(params.enableClose);
        this.__isPassword.reset(params.isPassword);
        this.__keyboardTitleLabel.reset(params.keyboardTitleLabel);
        this.__isRequestFocus.reset(params.isRequestFocus);
        this.__mSafeAreaPadding.reset(params.mSafeAreaPadding);
        this.__enableKeyboardOnFocus.reset(params.enableKeyboardOnFocus);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__textValueArray.purgeDependencyOnElmtId(rmElmtId);
        this.__keyboardHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__keyboardSupportAvoidance.purgeDependencyOnElmtId(rmElmtId);
        this.__enable.purgeDependencyOnElmtId(rmElmtId);
        this.__keyboardType.purgeDependencyOnElmtId(rmElmtId);
        this.__boxCount.purgeDependencyOnElmtId(rmElmtId);
        this.__enableClose.purgeDependencyOnElmtId(rmElmtId);
        this.__isPassword.purgeDependencyOnElmtId(rmElmtId);
        this.__keyboardTitleLabel.purgeDependencyOnElmtId(rmElmtId);
        this.__proxyTextValue.purgeDependencyOnElmtId(rmElmtId);
        this.__proxyTextCaretPosition.purgeDependencyOnElmtId(rmElmtId);
        this.__isRequestFocus.purgeDependencyOnElmtId(rmElmtId);
        this.__mSafeAreaPadding.purgeDependencyOnElmtId(rmElmtId);
        this.__viewId.purgeDependencyOnElmtId(rmElmtId);
        this.__enableKeyboardOnFocus.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__textValueArray.aboutToBeDeleted();
        this.__keyboardHeight.aboutToBeDeleted();
        this.__keyboardSupportAvoidance.aboutToBeDeleted();
        this.__enable.aboutToBeDeleted();
        this.__keyboardType.aboutToBeDeleted();
        this.__boxCount.aboutToBeDeleted();
        this.__enableClose.aboutToBeDeleted();
        this.__isPassword.aboutToBeDeleted();
        this.__keyboardTitleLabel.aboutToBeDeleted();
        this.__proxyTextValue.aboutToBeDeleted();
        this.__proxyTextCaretPosition.aboutToBeDeleted();
        this.__isRequestFocus.aboutToBeDeleted();
        this.__mSafeAreaPadding.aboutToBeDeleted();
        this.__viewId.aboutToBeDeleted();
        this.__enableKeyboardOnFocus.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __textValueArray: SynchedPropertySimpleOneWayPU<string[]>;
    get textValueArray() {
        return this.__textValueArray.get();
    }
    set textValueArray(newValue: string[]) {
        this.__textValueArray.set(newValue);
    }
    private __keyboardHeight: SynchedPropertySimpleOneWayPU<Length>;
    get keyboardHeight() {
        return this.__keyboardHeight.get();
    }
    set keyboardHeight(newValue: Length) {
        this.__keyboardHeight.set(newValue);
    }
    private __keyboardSupportAvoidance: SynchedPropertySimpleOneWayPU<boolean>;
    get keyboardSupportAvoidance() {
        return this.__keyboardSupportAvoidance.get();
    }
    set keyboardSupportAvoidance(newValue: boolean) {
        this.__keyboardSupportAvoidance.set(newValue);
    }
    private __enable: SynchedPropertySimpleOneWayPU<boolean>;
    get enable() {
        return this.__enable.get();
    }
    set enable(newValue: boolean) {
        this.__enable.set(newValue);
    }
    private __keyboardType: SynchedPropertySimpleOneWayPU<KeyboardType>;
    get keyboardType() {
        return this.__keyboardType.get();
    }
    set keyboardType(newValue: KeyboardType) {
        this.__keyboardType.set(newValue);
    }
    private __boxCount: SynchedPropertySimpleOneWayPU<number>;
    get boxCount() {
        return this.__boxCount.get();
    }
    set boxCount(newValue: number) {
        this.__boxCount.set(newValue);
    }
    private __enableClose: SynchedPropertySimpleOneWayPU<boolean>;
    get enableClose() {
        return this.__enableClose.get();
    }
    set enableClose(newValue: boolean) {
        this.__enableClose.set(newValue);
    }
    private __isPassword: SynchedPropertySimpleOneWayPU<boolean>;
    get isPassword() {
        return this.__isPassword.get();
    }
    set isPassword(newValue: boolean) {
        this.__isPassword.set(newValue);
    }
    private __keyboardTitleLabel: SynchedPropertySimpleOneWayPU<ResourceStr>;
    get keyboardTitleLabel() {
        return this.__keyboardTitleLabel.get();
    }
    set keyboardTitleLabel(newValue: ResourceStr) {
        this.__keyboardTitleLabel.set(newValue);
    }
    private __proxyTextValue: ObservedPropertySimplePU<string>;
    get proxyTextValue() {
        return this.__proxyTextValue.get();
    }
    set proxyTextValue(newValue: string) {
        this.__proxyTextValue.set(newValue);
    }
    private __proxyTextCaretPosition: ObservedPropertySimplePU<number>;
    get proxyTextCaretPosition() {
        return this.__proxyTextCaretPosition.get();
    }
    set proxyTextCaretPosition(newValue: number) {
        this.__proxyTextCaretPosition.set(newValue);
    }
    private __isRequestFocus: SynchedPropertySimpleOneWayPU<boolean>;
    get isRequestFocus() {
        return this.__isRequestFocus.get();
    }
    set isRequestFocus(newValue: boolean) {
        this.__isRequestFocus.set(newValue);
    }
    private __mSafeAreaPadding?: SynchedPropertySimpleOneWayPU<Padding | Length | LocalizedPadding>;
    get mSafeAreaPadding() {
        return this.__mSafeAreaPadding.get();
    }
    set mSafeAreaPadding(newValue: Padding | Length | LocalizedPadding) {
        this.__mSafeAreaPadding.set(newValue);
    }
    private controller: TextInputController;
    public onInputCompleted: (array: Array<string>) => Promise<void>;
    public onInputIntercept: () => Promise<boolean>;
    private __viewId: ObservedPropertySimplePU<string>;
    get viewId() {
        return this.__viewId.get();
    }
    set viewId(newValue: string) {
        this.__viewId.set(newValue);
    }
    private timeoutId?: number;
    private __enableKeyboardOnFocus: SynchedPropertySimpleOneWayPU<boolean>;
    get enableKeyboardOnFocus() {
        return this.__enableKeyboardOnFocus.get();
    }
    set enableKeyboardOnFocus(newValue: boolean) {
        this.__enableKeyboardOnFocus.set(newValue);
    }
    onChangeRequestFocus() {
        if (this.isRequestFocus) {
            focusControl.requestFocus(this.viewId);
        }
        else {
            this.controller.stopEditing();
        }
    }
    KeyboardBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.height(ObservedObject.GetRawObject(this.keyboardHeight));
            __Common__.padding(this.mSafeAreaPadding || {
                bottom: 20
            });
            __Common__.backgroundColor('#FFF0F0F0');
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Keyboard(this, {
                        titleLabel: this.keyboardTitleLabel,
                        keyboardType: this.keyboardType,
                        enableClose: this.enableClose,
                        onTapClose: () => {
                            this.controller.stopEditing();
                        },
                        onTapKey: async (type, value) => {
                            const block = await this.onInputIntercept().catch(() => false);
                            if (block === true) {
                                if (this.textValueArray.length == this.boxCount) {
                                    this.textValueArray = [];
                                }
                                return;
                            }
                            if (type === KeyType.DEL && this.textValueArray.length > 0) {
                                this.textValueArray.pop();
                                this.textValueArray = [...this.textValueArray];
                            }
                            else if (type === KeyType.VALUE && value && this.textValueArray.length < this.boxCount) {
                                this.textValueArray.push(value);
                                if (this.textValueArray.length == this.boxCount) {
                                    await this.onInputCompleted([...this.textValueArray]).catch(() => {
                                    });
                                }
                            }
                        },
                    }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pharos+pin_code_text_input@1.0.0/oh_modules/@pharos/pin_code_text_input/src/main/ets/PinCodeTextInput.ets", line: 169, col: 5 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            titleLabel: this.keyboardTitleLabel,
                            keyboardType: this.keyboardType,
                            enableClose: this.enableClose,
                            onTapClose: () => {
                                this.controller.stopEditing();
                            },
                            onTapKey: async (type, value) => {
                                const block = await this.onInputIntercept().catch(() => false);
                                if (block === true) {
                                    if (this.textValueArray.length == this.boxCount) {
                                        this.textValueArray = [];
                                    }
                                    return;
                                }
                                if (type === KeyType.DEL && this.textValueArray.length > 0) {
                                    this.textValueArray.pop();
                                    this.textValueArray = [...this.textValueArray];
                                }
                                else if (type === KeyType.VALUE && value && this.textValueArray.length < this.boxCount) {
                                    this.textValueArray.push(value);
                                    if (this.textValueArray.length == this.boxCount) {
                                        await this.onInputCompleted([...this.textValueArray]).catch(() => {
                                        });
                                    }
                                }
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        titleLabel: this.keyboardTitleLabel,
                        keyboardType: this.keyboardType,
                        enableClose: this.enableClose
                    });
                }
            }, { name: "Keyboard" });
        }
        __Common__.pop();
    }
    aboutToDisappear(): void {
        clearTimeout(this.timeoutId);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({
                text: this.proxyTextValue,
                controller: this.controller
            });
            TextInput.enableKeyboardOnFocus(this.enableKeyboardOnFocus);
            TextInput.caretPosition(this.proxyTextCaretPosition);
            TextInput.copyOption(CopyOptions.None);
            TextInput.customKeyboard({ builder: () => {
                    this.KeyboardBuilder.call(this);
                } }, {
                supportAvoidance: this.keyboardSupportAvoidance
            });
            TextInput.onPaste(async (res) => {
                if (this.isPassword !== true) {
                    this.textValueArray = (res || '').replace(/\D/g, '').split('');
                    if (this.textValueArray.length == this.boxCount) {
                        await this.onInputCompleted([...this.textValueArray]).catch(() => {
                        });
                    }
                }
            });
            TextInput.fontColor(Color.Transparent);
            TextInput.backgroundColor(Color.Transparent);
            TextInput.caretColor(Color.Transparent);
            TextInput.maxLength(this.boxCount);
            TextInput.enabled(this.enable);
            TextInput.hitTestBehavior(HitTestMode.Block);
            TextInput.width('100%');
            TextInput.id(this.viewId);
            TextInput.height('100%');
            TextInput.onAppear(() => {
                this.viewId = `${systemDateTime.getTime()}`;
                this.timeoutId = setTimeout(() => {
                    focusControl.requestFocus(this.viewId);
                }, 50);
            });
        }, TextInput);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
