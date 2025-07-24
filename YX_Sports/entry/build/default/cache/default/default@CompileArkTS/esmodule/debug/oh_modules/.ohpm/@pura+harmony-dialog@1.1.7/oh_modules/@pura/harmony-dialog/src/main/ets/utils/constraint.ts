//系统深浅色模式切换监听
export const DialogThemeColorMode: string = "harmony-dialog_ThemeColorMode";
export type Any = number | string | boolean | object | undefined | null;
//number类型Callback
export declare type NumberCalBack = (index: number) => void;
//string类型Callback
export declare type StringCalBack = (content: string) => void;
/**
 * 弹框操作按钮Callback
 * action：
 * 1、当action小于0时，对应弹框操作按钮的Action，类型为DialogAction。
 * 2、当action大于等于0时，对选的是选项索引值。
 * dialogId: 对应弹框的id。
 * value: string 弹框内容回调，如输入框的输入内容。
 * value: string | string[] picker选中值
 * date: Date 选中日期
 */
export declare type ActionCallBack = (action: number, dialogId: string) => void;
export declare type ActionStrCallBack = (action: number, dialogId: string, value: string) => void;
export declare type ActionValueCallBack = (action: number, dialogId: string, value: string | string[]) => void;
export declare type ActionDateCallBack = (action: number, dialogId: string, date: Date) => void;
//多行文本输入弹框Align
export enum TextAlignment {
    Top = 0,
    Center = 1,
    Bottom = 2
}
//弹框按钮的Action类型（从左往右，最多四个按钮）
export enum DialogAction {
    ONE = -1,
    TWO = -2,
    THREE = -3,
    FOUR = -4,
    FIVE = -5,
    SIX = -6,
    CANCEL = -1,
    SURE = -2
}
//选择日期类型
export enum DateType {
    YmdHms = //年月日时分秒
     0,
    YmdHm = //年月日时分
     1,
    YmdH = //年月日时
     2,
    Ymd = //年月日
     3,
    Ym = //年月
     4,
    Y = //年
     5,
    Hms = //时分秒
     6,
    Hm = //时分
     7,
    Ms = 8 //分秒
}
export enum Orientation {
    VERTICAL = //垂直
     0,
    HORIZONTAL = 1 //水平
}
