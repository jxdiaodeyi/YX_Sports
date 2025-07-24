import { AlertDialog, ConfirmDialog, CustomContentDialog, SelectDialog, TipsDialog } from "@ohos:arkui.advanced.Dialog";
import { TextInputDialogView } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/component/TextInputDialogView&1.1.7";
import { TextAreaDialogView } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/component/TextAreaDialogView&1.1.7";
import { BottomSheetDialogView } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/component/BottomSheetDialogView&1.1.7";
import { ActionSheetDialogView } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/component/ActionSheetDialogView&1.1.7";
import { TextPickerDialogView } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/component/TextPickerDialogView&1.1.7";
import { DatePickerDialogView } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/component/DatePickerDialogView&1.1.7";
import { LoadingProgressView } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/component/LoadingProgressView&1.1.7";
import { LoadingView } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/component/LoadingView&1.1.7";
import { ToastTipView } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/component/ToastTipView&1.1.7";
import type { BaseContentOptions } from '../model/base/BaseContentOptions';
import type { DialogOptions } from '../model/base/DialogOptions';
import type { TextInputOptions } from '../model/TextInputOptions';
import type { TextAreaOptions } from '../model/TextAreaOptions';
import type { BottomSheetOptions } from '../model/BottomSheetOptions';
import type { TextPickerOptions } from '../model/TextPickerOptions';
import type { DateTimePickerOptions } from '../model/DateTimePickerOptions';
import type { LoadingOptions } from '../model/LoadingOptions';
import type { LoadingProgressOptions } from '../model/LoadingProgressOptions';
import type { ToastTipOptions } from '../model/ToastTipOptions';
/**
 * AlertDialog
 */
export function AlertDialogBuilder(options: DialogOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        __Common__.create();
        __Common__.height(options.height);
        __Common__.width(options.width);
        __Common__.constraintSize({ maxWidth: options.maxWidth, maxHeight: options.maxHeight });
        __Common__.backgroundColor(options.backgroundColor);
        __Common__.backgroundBlurStyle(options.backgroundBlurStyle);
        __Common__.borderRadius(options.cornerRadius);
        __Common__.borderWidth(options.borderWidth);
        __Common__.borderColor(options.borderColor);
        __Common__.borderStyle(options.borderStyle);
        __Common__.clip(true);
    }, __Common__);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new AlertDialog(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 43, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "AlertDialog" });
    }
    __Common__.pop();
}
/**
 * ConfirmDialog
 */
export function ConfirmDialogBuilder(options: DialogOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        __Common__.create();
        __Common__.height(options.height);
        __Common__.width(options.width);
        __Common__.constraintSize({ maxWidth: options.maxWidth, maxHeight: options.maxHeight });
        __Common__.backgroundColor(options.backgroundColor);
        __Common__.backgroundBlurStyle(options.backgroundBlurStyle);
        __Common__.borderRadius(options.cornerRadius);
        __Common__.borderWidth(options.borderWidth);
        __Common__.borderColor(options.borderColor);
        __Common__.borderStyle(options.borderStyle);
        __Common__.clip(true);
    }, __Common__);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new ConfirmDialog(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 62, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "ConfirmDialog" });
    }
    __Common__.pop();
}
/**
 * TipsDialog
 */
export function TipsDialogBuilder(options: DialogOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        __Common__.create();
        __Common__.height(options.height);
        __Common__.width(options.width);
        __Common__.constraintSize({ maxWidth: options.maxWidth, maxHeight: options.maxHeight });
        __Common__.backgroundColor(options.backgroundColor);
        __Common__.backgroundBlurStyle(options.backgroundBlurStyle);
        __Common__.borderRadius(options.cornerRadius);
        __Common__.borderWidth(options.borderWidth);
        __Common__.borderColor(options.borderColor);
        __Common__.borderStyle(options.borderStyle);
        __Common__.clip(true);
    }, __Common__);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new TipsDialog(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 81, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "TipsDialog" });
    }
    __Common__.pop();
}
/**
 * SelectDialog
 */
export function SelectDialogBuilder(options: DialogOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        __Common__.create();
        __Common__.height(options.height);
        __Common__.width(options.width);
        __Common__.constraintSize({ maxWidth: options.maxWidth, maxHeight: options.maxHeight });
        __Common__.backgroundColor(options.backgroundColor);
        __Common__.backgroundBlurStyle(options.backgroundBlurStyle);
        __Common__.borderRadius(options.cornerRadius);
        __Common__.borderWidth(options.borderWidth);
        __Common__.borderColor(options.borderColor);
        __Common__.borderStyle(options.borderStyle);
        __Common__.clip(true);
    }, __Common__);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new SelectDialog(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 100, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "SelectDialog" });
    }
    __Common__.pop();
}
/**
 * CustomContentDialog
 */
export function CustomContentDialogBuilder(options: BaseContentOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        __Common__.create();
        __Common__.height(options.height);
        __Common__.width(options.width);
        __Common__.constraintSize({ maxWidth: options.maxWidth, maxHeight: options.maxHeight });
        __Common__.backgroundColor(options.backgroundColor);
        __Common__.backgroundBlurStyle(options.backgroundBlurStyle);
        __Common__.borderRadius(options.cornerRadius);
        __Common__.borderWidth(options.borderWidth);
        __Common__.borderColor(options.borderColor);
        __Common__.borderStyle(options.borderStyle);
        __Common__.clip(true);
    }, __Common__);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new CustomContentDialog(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 119, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "CustomContentDialog" });
    }
    __Common__.pop();
}
/**
 * TextInputDialog
 * @param options
 */
export function TextInputDialogBuilder(options: TextInputOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new TextInputDialogView(parent ? parent : this, { options: options }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 139, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        options: options
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    options: options
                });
            }
        }, { name: "TextInputDialogView" });
    }
}
/**
 * TextAreaDialog
 * @param options
 */
export function TextAreaDialogBuilder(options: TextAreaOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new TextAreaDialogView(parent ? parent : this, { options: options }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 149, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        options: options
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    options: options
                });
            }
        }, { name: "TextAreaDialogView" });
    }
}
/**
 * BottomSheetDialog
 * @param options
 */
export function BottomSheetDialogBuilder(options: BottomSheetOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new BottomSheetDialogView(parent ? parent : this, { options: options }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 159, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        options: options
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    options: options
                });
            }
        }, { name: "BottomSheetDialogView" });
    }
}
/**
 * ActionSheetDialog
 * @param options
 */
export function ActionSheetDialogBuilder(options: BottomSheetOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new ActionSheetDialogView(parent ? parent : this, { options: options }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 169, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        options: options
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    options: options
                });
            }
        }, { name: "ActionSheetDialogView" });
    }
}
/**
 * TextPickerDialog
 * @param options
 */
export function TextPickerDialogBuilder(options: TextPickerOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new TextPickerDialogView(parent ? parent : this, { options: options }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 179, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        options: options
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    options: options
                });
            }
        }, { name: "TextPickerDialogView" });
    }
}
/**
 * DatePickerDialog
 * @param options
 */
export function DatePickerDialogBuilder(options: DateTimePickerOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new DatePickerDialogView(parent ? parent : this, { options: options }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 189, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        options: options
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    options: options
                });
            }
        }, { name: "DatePickerDialogView" });
    }
}
/**
 * LoadingDialog
 */
export function LoadingBuilder(options: LoadingOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new LoadingView(parent ? parent : this, { options: options }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 198, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        options: options
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    options: options
                });
            }
        }, { name: "LoadingView" });
    }
}
/**
 * LoadingProgress
 */
export function LoadingProgressBuilder(options: LoadingProgressOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new LoadingProgressView(parent ? parent : this, { options: options }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 207, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        options: options
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    options: options
                });
            }
        }, { name: "LoadingProgressView" });
    }
}
/**
 * ToastTip
 */
export function ToastTipBuilder(options: ToastTipOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new ToastTipView(parent ? parent : this, { options: options }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+harmony-dialog@1.1.7/oh_modules/@pura/harmony-dialog/src/main/ets/dialog/DialogBuilder.ets", line: 216, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        options: options
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    options: options
                });
            }
        }, { name: "ToastTipView" });
    }
}
