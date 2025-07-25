import promptAction from "@ohos:promptAction";
import { ToastConfig } from "@normalized:N&&&@pura/harmony-utils/src/main/ets/entity/ToastConfig&1.3.6";
import { ToastOptions } from "@normalized:N&&&@pura/harmony-utils/src/main/ets/entity/ToastOptions&1.3.6";
/**
 * TODO 土司工具类
 * author: 桃花镇童长老ᥫ᭡
 * since: 2024/05/01
 */
export class ToastUtil {
    private static defaultConfig: ToastConfig = new ToastConfig(); //默认样式
    /**
     * 设置默认统一样式
     * @param configs
     */
    static setDefaultConfig(configs: (config: ToastConfig) => void): void {
        configs(ToastUtil.defaultConfig);
    }
    /**
     * 弹出土司,默认时长为2s,距离底部默认为80vp
     * @param message 提示消息
     * @param options (显示时长、距离屏幕底部的位置、是否显示在应用之上)
     */
    static showToast(message: string | Resource, options: ToastOptions = new ToastOptions()) {
        if (message || (typeof message === 'string' && message.length > 0)) {
            options = ToastUtil.initToastDefault(options, 0);
            let toastOptions = options as promptAction.ShowToastOptions;
            toastOptions.message = message;
            promptAction.showToast(toastOptions);
        }
    }
    /**
     * 弹出土司,时长为:1.5s,距离底部默认为80vp
     * @param message 提示消息
     * @param options (距离屏幕底部的位置、是否显示在应用之上)
     */
    static showShort(message: string | Resource, options: ToastOptions = new ToastOptions()) {
        if (message || (typeof message === 'string' && message.length > 0)) {
            options = ToastUtil.initToastDefault(options, 1);
            let toastOptions = options as promptAction.ShowToastOptions;
            toastOptions.message = message;
            promptAction.showToast(toastOptions);
        }
    }
    /**
     * 弹出土司,时长为:10s,距离底部默认为80vp
     * @param message 提示消息
     * @param options (距离屏幕底部的位置、是否显示在应用之上)
     */
    static showLong(message: string | Resource, options: ToastOptions = new ToastOptions()) {
        if (message || (typeof message === 'string' && message.length > 0)) {
            options = ToastUtil.initToastDefault(options, 2);
            let toastOptions = options as promptAction.ShowToastOptions;
            toastOptions.message = message;
            promptAction.showToast(toastOptions);
        }
    }
    /**
     * 初始化DialogOptions参数
     */
    private static initToastDefault(options: ToastOptions, type: number): ToastOptions {
        if (type == 1) {
            options.duration = options.duration ?? ToastUtil.defaultConfig.duration_short;
        }
        else if (type == 2) {
            options.duration = options.duration ?? ToastUtil.defaultConfig.duration_long;
        }
        else {
            options.duration = options.duration ?? ToastUtil.defaultConfig.duration;
        }
        options.alignment = options.alignment ?? ToastUtil.defaultConfig.alignment;
        options.bottom = options.bottom ?? ToastUtil.defaultConfig.bottom;
        options.offset = options.offset ?? ToastUtil.defaultConfig.offset;
        options.textColor = options.textColor ?? ToastUtil.defaultConfig.textColor;
        options.backgroundColor = options.backgroundColor ?? ToastUtil.defaultConfig.backgroundColor;
        options.backgroundBlurStyle = options.backgroundBlurStyle ?? ToastUtil.defaultConfig.backgroundBlurStyle;
        options.shadow = options.shadow ?? ToastUtil.defaultConfig.shadow;
        options.showMode = options.showMode ?? ToastUtil.defaultConfig.showMode;
        options.enableHoverMode = options.enableHoverMode ?? ToastUtil.defaultConfig.enableHoverMode;
        options.hoverModeArea = options.hoverModeArea ?? ToastUtil.defaultConfig.hoverModeArea;
        return options;
    }
}
