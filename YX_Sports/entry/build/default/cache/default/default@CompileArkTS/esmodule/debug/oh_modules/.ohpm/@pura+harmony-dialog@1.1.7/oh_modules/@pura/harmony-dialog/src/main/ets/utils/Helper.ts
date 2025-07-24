import type common from "@ohos:app.ability.common";
import display from "@ohos:display";
import window from "@ohos:window";
import type resourceManager from "@ohos:resourceManager";
import type { BusinessError as BusinessError } from "@ohos:base";
import deviceInfo from "@ohos:deviceInfo";
import { DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/dialog/DialogHelper&1.1.7";
import type { Any } from './constraint';
/**
 * TODO 工具类
 * author: 桃花镇童长老ᥫ᭡
 * since: 2024/08/18
 */
export class Helper {
    /**
     * 检查API版本是否安全
     * @param apiVersion API方法支持的最低版本
     */
    static isApiSupported(apiVersion: number): boolean {
        return deviceInfo.sdkApiVersion >= apiVersion;
    }
    /**
     * 判断字符串是否为空(undefined、null)
     * @param str 被检测的字符串
     * @returns 是否为空
     */
    static isNull(str: string | number | undefined | null): boolean {
        return str === undefined || str === null;
    }
    /**
     * 判断字符串是否为非空。true为非空空，否则false
     * @param str
     * @returns
     */
    static isNotNull(str: string | number | undefined | null): boolean {
        return false === Helper.isNull(str);
    }
    /**
     * 判断是否是String类型
     */
    static isString(value: Any): boolean {
        return typeof value === 'string';
    }
    /**
     * 判断是否是Object类型
     */
    static isObject(value: Any): boolean {
        return typeof value === 'object';
    }
    /**
     * 判断是否是数组类型
     */
    static isArray(value: Any): boolean {
        return Array.isArray(value);
    }
    /**
     * 判断是否是Resource类型
     */
    static isResource(value: Any) {
        if (value) {
            const res = value as Resource;
            return Helper.isNotNull(res?.id) && Helper.isNotNull(res?.bundleName) && Helper.isNotNull(res?.moduleName);
        }
        return false;
    }
    /**
     * 判断是否是ResourceStr类型
     */
    static isResourceStr(value: Any) {
        return Helper.isString(value) || Helper.isResource(value);
    }
    /**
     * 获取提供访问应用资源的能力
     * @returns
     */
    static getResourceManager(): resourceManager.ResourceManager {
        return getContext().resourceManager;
    }
    /**
     * 获取指定资源对应的integer数值或者float数值
     * @param res
     * @returns
     */
    static getNumber(res: Resource): number {
        return Helper.getResourceManager().getNumber(res);
    }
    /**
     * 获取指定资源对应的字符串
     * @param res
     */
    static getString(res: Resource): string {
        return Helper.getResourceManager().getStringSync(res);
    }
    /**
     * 获取按钮的字符串
     * @param resource
     * @returns
     */
    static getResourceStr(resource: ResourceStr | ButtonOptions | SheetInfo): string | null {
        try {
            if (typeof resource === 'string') {
                return resource;
            }
            else {
                return Helper.getString(resource as Resource);
            }
        }
        catch (e) {
            return null;
        }
    }
    /**
     * 获取状态栏的高度，单位为px。
     * @returns
     */
    static getStatusBarHeight(uiContext?: common.UIAbilityContext): number {
        try {
            if (!uiContext) {
                uiContext = DialogHelper.getUIAbilityContext();
            }
            let height = uiContext.windowStage.getMainWindowSync()
                .getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM)
                .topRect.height;
            if (height > 0) {
                return px2vp(height);
            }
            return 32;
        }
        catch (err) {
            return 32;
        }
    }
    /**
     * 获取底部导航条的高度，单位为vp。
     * @returns
     */
    static getIndicatorHeight(uiContext?: common.UIAbilityContext): number {
        try {
            if (!uiContext) {
                uiContext = DialogHelper.getUIAbilityContext();
            }
            let height = uiContext.windowStage.getMainWindowSync()
                .getWindowAvoidArea(window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR)
                .topRect.height;
            if (height > 0) {
                return px2vp(height);
            }
            return 28;
        }
        catch (err) {
            return 28;
        }
    }
    /**
     * 获取设备的屏幕宽度，单位为VP。
     * @returns
     */
    static getDisplayWidth(): number {
        return px2vp(display.getDefaultDisplaySync().width);
    }
    /**
     * 是否是大屏，大于手机屏幕宽度500vp
     */
    static isLargeScreen(): boolean {
        return Helper.getDisplayWidth() > 500;
    }
    /**
     * 获取底部类弹框的最大宽度
     * @param maxWidth 默认360vp
     * @returns 单位vp
     */
    static getMaxWidth(maxWidth: Length = 360): number {
        if (Helper.isLargeScreen()) {
            let oldWidth = 360;
            try {
                if (typeof maxWidth === 'number') { //number
                    oldWidth = maxWidth;
                }
                else if (typeof maxWidth === 'string') { //string
                    oldWidth = Helper.getVpByStr(maxWidth);
                }
                else {
                    try { //number资源
                        oldWidth = Helper.getNumber(maxWidth);
                    }
                    catch (e) { //string资源
                        let strWidth = Helper.getString(maxWidth);
                        oldWidth = Helper.getVpByStr(strWidth);
                    }
                }
            }
            catch (e) {
                let error = e as BusinessError;
                console.log(`getMaxWidth-Error ~ code: ${error.code} -·- message: ${error.message}`);
            }
            const width = Helper.getDisplayWidth();
            if (width < oldWidth + 40) { //当宽度大于屏幕宽度，默认为宽度。
                return width;
            }
            return oldWidth + 40;
        }
        else { //小屏幕直接获取屏幕宽度。
            return Helper.getDisplayWidth();
        }
    }
    /**
     * 获取vp数据
     * @param str
     * @returns
     */
    static getVpByStr(str: string): number {
        if (str.toLowerCase().endsWith('vp')) {
            str = str.replaceAll('vp', '');
            return parseInt(str);
        }
        else if (str.toLowerCase().endsWith('px')) {
            str = str.replaceAll('px', '');
            return px2vp(parseInt(str));
        }
        else if (str.toLowerCase().endsWith('lpx')) {
            str = str.replaceAll('lpx', '');
            return lpx2px(px2vp(parseInt(str)));
        }
        else if (str.toLowerCase().endsWith('fp')) {
            str = str.replaceAll('fp', '');
            return fp2px(px2vp(parseInt(str)));
        }
        else {
            return parseInt(str);
        }
    }
    /**
     * 将DialogAlignment值转化为Alignment值
     */
    static getAlignment(dialogAlignment: DialogAlignment): Alignment | undefined {
        switch (dialogAlignment) {
            case DialogAlignment.Top:
                return Alignment.Top;
            case DialogAlignment.Center:
                return Alignment.Center;
            case DialogAlignment.Bottom:
                return Alignment.Bottom;
            case DialogAlignment.TopStart:
                return Alignment.TopStart;
            case DialogAlignment.TopEnd:
                return Alignment.TopEnd;
            case DialogAlignment.CenterStart:
                return Alignment.Start;
            case DialogAlignment.CenterEnd:
                return Alignment.End;
            case DialogAlignment.BottomStart:
                return Alignment.BottomStart;
            case DialogAlignment.BottomEnd:
                return Alignment.BottomEnd;
            case DialogAlignment.Default:
                return undefined;
        }
        return undefined;
    }
}
