if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DatePickerDialogView_Params {
    options?: DateTimePickerOptions;
    dateType?: DateType;
    startDate?: Date;
    endDate?: Date;
    selectDate?: Date;
    containYear?: boolean;
    containMonth?: boolean;
    containDay?: boolean;
    containHour?: boolean;
    containMinute?: boolean;
    containSecond?: boolean;
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    years?: string[];
    months?: string[];
    days?: string[];
    hours?: string[];
    minutes?: string[];
    seconds?: string[];
    title?: string;
    primaryButton?: ButtonOptions;
    secondaryButton?: ButtonOptions;
    isLargeScreen?: boolean;
    themeColorMode?: ThemeColorMode;
    foldStatusCallback?: Callback<display.FoldStatus>;
}
import type { DateTimePickerOptions } from '../model/DateTimePickerOptions';
import type { ButtonOptions } from '../model/ButtonOptions';
import { DateType, DialogAction, DialogHelper, DialogThemeColorMode } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import { DateHelper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/DateHelper&1.1.7";
import { Helper } from "@normalized:N&&&@pura/harmony-dialog/src/main/ets/utils/Helper&1.1.7";
import display from "@ohos:display";
export class DatePickerDialogView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.__dateType = new ObservedPropertySimplePU(DateType.YmdHm, this, "dateType");
        this.__startDate = new ObservedPropertyObjectPU(new Date("1900-01-01 00:00:00"), this, "startDate");
        this.__endDate = new ObservedPropertyObjectPU(new Date("2199-12-31 23:59:59"), this, "endDate");
        this.__selectDate = new ObservedPropertyObjectPU(new Date(), this, "selectDate");
        this.__containYear = new ObservedPropertySimplePU(true, this, "containYear");
        this.__containMonth = new ObservedPropertySimplePU(true, this, "containMonth");
        this.__containDay = new ObservedPropertySimplePU(true, this, "containDay");
        this.__containHour = new ObservedPropertySimplePU(true, this, "containHour");
        this.__containMinute = new ObservedPropertySimplePU(true, this, "containMinute");
        this.__containSecond = new ObservedPropertySimplePU(true, this, "containSecond");
        this.__year = new ObservedPropertySimplePU("", this, "year");
        this.__month = new ObservedPropertySimplePU("", this, "month");
        this.__day = new ObservedPropertySimplePU("", this, "day");
        this.__hour = new ObservedPropertySimplePU("", this, "hour");
        this.__minute = new ObservedPropertySimplePU("", this, "minute");
        this.__second = new ObservedPropertySimplePU("", this, "second");
        this.__years = new ObservedPropertyObjectPU([], this, "years");
        this.__months = new ObservedPropertyObjectPU([], this, "months");
        this.__days = new ObservedPropertyObjectPU([], this, "days");
        this.__hours = new ObservedPropertyObjectPU([], this, "hours");
        this.__minutes = new ObservedPropertyObjectPU([], this, "minutes");
        this.__seconds = new ObservedPropertyObjectPU([], this, "seconds");
        this.__title = new ObservedPropertySimplePU("", this, "title");
        this.__primaryButton = new ObservedPropertyObjectPU(undefined, this, "primaryButton");
        this.__secondaryButton = new ObservedPropertyObjectPU(undefined, this, "secondaryButton");
        this.__isLargeScreen = new ObservedPropertySimplePU(false, this, "isLargeScreen");
        this.__themeColorMode = this.createStorageProp(DialogThemeColorMode, this.options.themeColorMode ?? ThemeColorMode.SYSTEM, "themeColorMode");
        this.foldStatusCallback = (foldStatus: display.FoldStatus) => {
            this.isLargeScreen = Helper.isLargeScreen();
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DatePickerDialogView_Params) {
        if (params.dateType !== undefined) {
            this.dateType = params.dateType;
        }
        if (params.startDate !== undefined) {
            this.startDate = params.startDate;
        }
        if (params.endDate !== undefined) {
            this.endDate = params.endDate;
        }
        if (params.selectDate !== undefined) {
            this.selectDate = params.selectDate;
        }
        if (params.containYear !== undefined) {
            this.containYear = params.containYear;
        }
        if (params.containMonth !== undefined) {
            this.containMonth = params.containMonth;
        }
        if (params.containDay !== undefined) {
            this.containDay = params.containDay;
        }
        if (params.containHour !== undefined) {
            this.containHour = params.containHour;
        }
        if (params.containMinute !== undefined) {
            this.containMinute = params.containMinute;
        }
        if (params.containSecond !== undefined) {
            this.containSecond = params.containSecond;
        }
        if (params.year !== undefined) {
            this.year = params.year;
        }
        if (params.month !== undefined) {
            this.month = params.month;
        }
        if (params.day !== undefined) {
            this.day = params.day;
        }
        if (params.hour !== undefined) {
            this.hour = params.hour;
        }
        if (params.minute !== undefined) {
            this.minute = params.minute;
        }
        if (params.second !== undefined) {
            this.second = params.second;
        }
        if (params.years !== undefined) {
            this.years = params.years;
        }
        if (params.months !== undefined) {
            this.months = params.months;
        }
        if (params.days !== undefined) {
            this.days = params.days;
        }
        if (params.hours !== undefined) {
            this.hours = params.hours;
        }
        if (params.minutes !== undefined) {
            this.minutes = params.minutes;
        }
        if (params.seconds !== undefined) {
            this.seconds = params.seconds;
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
        if (params.isLargeScreen !== undefined) {
            this.isLargeScreen = params.isLargeScreen;
        }
        if (params.foldStatusCallback !== undefined) {
            this.foldStatusCallback = params.foldStatusCallback;
        }
    }
    updateStateVars(params: DatePickerDialogView_Params) {
        this.__options.reset(params.options);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__options.purgeDependencyOnElmtId(rmElmtId);
        this.__dateType.purgeDependencyOnElmtId(rmElmtId);
        this.__startDate.purgeDependencyOnElmtId(rmElmtId);
        this.__endDate.purgeDependencyOnElmtId(rmElmtId);
        this.__selectDate.purgeDependencyOnElmtId(rmElmtId);
        this.__containYear.purgeDependencyOnElmtId(rmElmtId);
        this.__containMonth.purgeDependencyOnElmtId(rmElmtId);
        this.__containDay.purgeDependencyOnElmtId(rmElmtId);
        this.__containHour.purgeDependencyOnElmtId(rmElmtId);
        this.__containMinute.purgeDependencyOnElmtId(rmElmtId);
        this.__containSecond.purgeDependencyOnElmtId(rmElmtId);
        this.__year.purgeDependencyOnElmtId(rmElmtId);
        this.__month.purgeDependencyOnElmtId(rmElmtId);
        this.__day.purgeDependencyOnElmtId(rmElmtId);
        this.__hour.purgeDependencyOnElmtId(rmElmtId);
        this.__minute.purgeDependencyOnElmtId(rmElmtId);
        this.__second.purgeDependencyOnElmtId(rmElmtId);
        this.__years.purgeDependencyOnElmtId(rmElmtId);
        this.__months.purgeDependencyOnElmtId(rmElmtId);
        this.__days.purgeDependencyOnElmtId(rmElmtId);
        this.__hours.purgeDependencyOnElmtId(rmElmtId);
        this.__minutes.purgeDependencyOnElmtId(rmElmtId);
        this.__seconds.purgeDependencyOnElmtId(rmElmtId);
        this.__title.purgeDependencyOnElmtId(rmElmtId);
        this.__primaryButton.purgeDependencyOnElmtId(rmElmtId);
        this.__secondaryButton.purgeDependencyOnElmtId(rmElmtId);
        this.__isLargeScreen.purgeDependencyOnElmtId(rmElmtId);
        this.__themeColorMode.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__options.aboutToBeDeleted();
        this.__dateType.aboutToBeDeleted();
        this.__startDate.aboutToBeDeleted();
        this.__endDate.aboutToBeDeleted();
        this.__selectDate.aboutToBeDeleted();
        this.__containYear.aboutToBeDeleted();
        this.__containMonth.aboutToBeDeleted();
        this.__containDay.aboutToBeDeleted();
        this.__containHour.aboutToBeDeleted();
        this.__containMinute.aboutToBeDeleted();
        this.__containSecond.aboutToBeDeleted();
        this.__year.aboutToBeDeleted();
        this.__month.aboutToBeDeleted();
        this.__day.aboutToBeDeleted();
        this.__hour.aboutToBeDeleted();
        this.__minute.aboutToBeDeleted();
        this.__second.aboutToBeDeleted();
        this.__years.aboutToBeDeleted();
        this.__months.aboutToBeDeleted();
        this.__days.aboutToBeDeleted();
        this.__hours.aboutToBeDeleted();
        this.__minutes.aboutToBeDeleted();
        this.__seconds.aboutToBeDeleted();
        this.__title.aboutToBeDeleted();
        this.__primaryButton.aboutToBeDeleted();
        this.__secondaryButton.aboutToBeDeleted();
        this.__isLargeScreen.aboutToBeDeleted();
        this.__themeColorMode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __options: SynchedPropertySimpleOneWayPU<DateTimePickerOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: DateTimePickerOptions) {
        this.__options.set(newValue);
    }
    private __dateType: ObservedPropertySimplePU<DateType>; //选择的日期类型
    get dateType() {
        return this.__dateType.get();
    }
    set dateType(newValue: DateType) {
        this.__dateType.set(newValue);
    }
    private __startDate: ObservedPropertyObjectPU<Date>; //开始日期（1900-01-01 00:00:00）
    get startDate() {
        return this.__startDate.get();
    }
    set startDate(newValue: Date) {
        this.__startDate.set(newValue);
    }
    private __endDate: ObservedPropertyObjectPU<Date>; //结束日期（2199-12-31 23:59:59）
    get endDate() {
        return this.__endDate.get();
    }
    set endDate(newValue: Date) {
        this.__endDate.set(newValue);
    }
    private __selectDate: ObservedPropertyObjectPU<Date>; // 选中日期
    get selectDate() {
        return this.__selectDate.get();
    }
    set selectDate(newValue: Date) {
        this.__selectDate.set(newValue);
    }
    private __containYear: ObservedPropertySimplePU<boolean>; //是否包含年
    get containYear() {
        return this.__containYear.get();
    }
    set containYear(newValue: boolean) {
        this.__containYear.set(newValue);
    }
    private __containMonth: ObservedPropertySimplePU<boolean>; //是否包含月
    get containMonth() {
        return this.__containMonth.get();
    }
    set containMonth(newValue: boolean) {
        this.__containMonth.set(newValue);
    }
    private __containDay: ObservedPropertySimplePU<boolean>; //是否包含日
    get containDay() {
        return this.__containDay.get();
    }
    set containDay(newValue: boolean) {
        this.__containDay.set(newValue);
    }
    private __containHour: ObservedPropertySimplePU<boolean>; //是否包含时
    get containHour() {
        return this.__containHour.get();
    }
    set containHour(newValue: boolean) {
        this.__containHour.set(newValue);
    }
    private __containMinute: ObservedPropertySimplePU<boolean>; //是否包含秒
    get containMinute() {
        return this.__containMinute.get();
    }
    set containMinute(newValue: boolean) {
        this.__containMinute.set(newValue);
    }
    private __containSecond: ObservedPropertySimplePU<boolean>; //是否包含年
    get containSecond() {
        return this.__containSecond.get();
    }
    set containSecond(newValue: boolean) {
        this.__containSecond.set(newValue);
    }
    private __year: ObservedPropertySimplePU<string>; //选中日期的年
    get year() {
        return this.__year.get();
    }
    set year(newValue: string) {
        this.__year.set(newValue);
    }
    private __month: ObservedPropertySimplePU<string>; //选中日期的月
    get month() {
        return this.__month.get();
    }
    set month(newValue: string) {
        this.__month.set(newValue);
    }
    private __day: ObservedPropertySimplePU<string>; //选中日期的日
    get day() {
        return this.__day.get();
    }
    set day(newValue: string) {
        this.__day.set(newValue);
    }
    private __hour: ObservedPropertySimplePU<string>; //选中日期的时
    get hour() {
        return this.__hour.get();
    }
    set hour(newValue: string) {
        this.__hour.set(newValue);
    }
    private __minute: ObservedPropertySimplePU<string>; //选中日期的分
    get minute() {
        return this.__minute.get();
    }
    set minute(newValue: string) {
        this.__minute.set(newValue);
    }
    private __second: ObservedPropertySimplePU<string>; //选中日期的秒
    get second() {
        return this.__second.get();
    }
    set second(newValue: string) {
        this.__second.set(newValue);
    }
    private __years: ObservedPropertyObjectPU<string[]>; //年的可选范围
    get years() {
        return this.__years.get();
    }
    set years(newValue: string[]) {
        this.__years.set(newValue);
    }
    private __months: ObservedPropertyObjectPU<string[]>; //月的可选范围
    get months() {
        return this.__months.get();
    }
    set months(newValue: string[]) {
        this.__months.set(newValue);
    }
    private __days: ObservedPropertyObjectPU<string[]>; //日的可选范围
    get days() {
        return this.__days.get();
    }
    set days(newValue: string[]) {
        this.__days.set(newValue);
    }
    private __hours: ObservedPropertyObjectPU<string[]>; //时的可选范围
    get hours() {
        return this.__hours.get();
    }
    set hours(newValue: string[]) {
        this.__hours.set(newValue);
    }
    private __minutes: ObservedPropertyObjectPU<string[]>; //分的可选范围
    get minutes() {
        return this.__minutes.get();
    }
    set minutes(newValue: string[]) {
        this.__minutes.set(newValue);
    }
    private __seconds: ObservedPropertyObjectPU<string[]>; //秒的可选范围
    get seconds() {
        return this.__seconds.get();
    }
    set seconds(newValue: string[]) {
        this.__seconds.set(newValue);
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
        if (this.options.title) {
            this.title = Helper.getResourceStr(this.options.title) ?? "";
        }
        this.primaryButton = this.options.primaryButton as ButtonOptions;
        this.secondaryButton = this.options.secondaryButton as ButtonOptions;
        this.initPickerData();
        this.isLargeScreen = Helper.isLargeScreen();
        //开启折叠设备折叠状态变化的监听。
        display.on('foldStatusChange', this.foldStatusCallback);
    }
    aboutToDisappear(): void {
        //关闭折叠设备折叠状态变化的监听。
        display.off('foldStatusChange', this.foldStatusCallback);
    }
    /**
     * 初始化选择器参数
     */
    initPickerData() {
        this.dateType = this.options.dateType;
        this.selectDate = this.options.selected ?? new Date();
        this.startDate = this.options.start ?? new Date('1900-01-01 00:00:00');
        this.endDate = this.options.end ?? new Date('2199-12-31 23:59:59');
        if (this.startDate.getTime() > this.endDate.getTime()) {
            throw new Error('end 必须是 start 之后的日期！');
        }
        if (this.startDate.getTime() > this.selectDate.getTime()) {
            this.selectDate = this.startDate; //选中日期小于开始日期时，选中日期为开始日期。
        }
        if (this.endDate.getTime() < this.selectDate.getTime()) {
            this.selectDate = this.endDate; //选中日期大于结束日期时，选中日期为结束日期。
        }
        this.containYear = DateHelper.containsYear(this.dateType);
        this.containMonth = DateHelper.containsMonth(this.dateType);
        this.containDay = DateHelper.containsDay(this.dateType);
        this.containHour = DateHelper.containsHour(this.dateType);
        this.containMinute = DateHelper.containsMinute(this.dateType);
        this.containSecond = DateHelper.containsSecond(this.dateType);
        this.years = DateHelper.getRanges(this.containYear, 1, this.startDate, this.endDate, this.selectDate);
        this.months = DateHelper.getRanges(this.containMonth, 2, this.startDate, this.endDate, this.selectDate);
        this.days = DateHelper.getRanges(this.containDay, 3, this.startDate, this.endDate, this.selectDate);
        this.hours = DateHelper.getRanges(this.containHour, 4, this.startDate, this.endDate, this.selectDate);
        this.minutes = DateHelper.getRanges(this.containMinute, 5, this.startDate, this.endDate, this.selectDate);
        this.seconds = DateHelper.getRanges(this.containSecond, 6, this.startDate, this.endDate, this.selectDate);
        this.year = DateHelper.getSelectStr(this.containYear, 1, this.selectDate);
        this.month = DateHelper.getSelectStr(this.containMonth, 2, this.selectDate);
        this.day = DateHelper.getSelectStr(this.containDay, 3, this.selectDate);
        this.hour = DateHelper.getSelectStr(this.containHour, 4, this.selectDate);
        this.minute = DateHelper.getSelectStr(this.containMinute, 5, this.selectDate);
        this.second = DateHelper.getSelectStr(this.containSecond, 6, this.selectDate);
    }
    /**
     * 更新数据源
     * @param type 1-年、2-月、3-日、4-时、5-分、6-秒
     */
    onChangeData(type: number) {
        if (type <= 2 && this.containMonth) {
            this.day = DateHelper.getResetDay(this.year, this.month, this.day);
        }
        this.selectDate = DateHelper.getDateByStr(this.containYear, this.containMonth, this.containDay, this.containHour, this.containMinute, this.containSecond, this.year, this.month, this.day, this.hour, this.minute, this.second);
        if (type <= 1 && this.containYear) {
            let temp1 = DateHelper.getRanges(this.containMonth, 2, this.startDate, this.endDate, this.selectDate);
            if (temp1.toString() !== this.months.toString()) {
                this.months = temp1;
            }
            this.month = DateHelper.getSelectValue(this.months, this.month);
        }
        if (type <= 2 && this.containMonth) {
            let temp2 = DateHelper.getRanges(this.containDay, 3, this.startDate, this.endDate, this.selectDate);
            if (temp2.toString() !== this.days.toString()) {
                this.days = temp2;
            }
            this.day = DateHelper.getSelectValue(this.days, this.day);
        }
        if (type <= 3 && this.containDay) {
            let temp3 = DateHelper.getRanges(this.containHour, 4, this.startDate, this.endDate, this.selectDate);
            if (temp3.toString() !== this.hours.toString()) {
                this.hours = temp3;
            }
            this.hour = DateHelper.getSelectValue(this.hours, this.hour);
        }
        if (type <= 4 && this.containHour) {
            let temp4 = DateHelper.getRanges(this.containMinute, 5, this.startDate, this.endDate, this.selectDate);
            if (temp4.toString() !== this.minutes.toString()) {
                this.minutes = temp4;
            }
            this.minute = DateHelper.getSelectValue(this.minutes, this.minute);
        }
        if (type <= 5 && this.containMinute) {
            let temp5 = DateHelper.getRanges(this.containSecond, 6, this.startDate, this.endDate, this.selectDate);
            if (temp5.toString() !== this.seconds.toString()) {
                this.seconds = temp5;
            }
            this.second = DateHelper.getSelectValue(this.seconds, this.second);
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
            Column.clip(true);
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
            Column.width(this.options.width);
            Column.constraintSize({ maxWidth: this.options.maxWidth });
            Column.padding({ bottom: this.isLargeScreen ? 0 : 25 });
            Column.margin({ bottom: this.isLargeScreen ? 30 : 0 });
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
                    this.selectDate = DateHelper.getDateByStr(this.containYear, this.containMonth, this.containDay, this.containHour, this.containMinute, this.containSecond, this.year, this.month, this.day, this.hour, this.minute, this.second);
                    this.options.onAction(DialogAction.ONE, this.options.dialogId ?? "", ObservedObject.GetRawObject(this.selectDate));
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
                    this.selectDate = DateHelper.getDateByStr(this.containYear, this.containMonth, this.containDay, this.containHour, this.containMinute, this.containSecond, this.year, this.month, this.day, this.hour, this.minute, this.second);
                    this.options.onAction(DialogAction.TWO, this.options.dialogId ?? "", ObservedObject.GetRawObject(this.selectDate));
                }
            });
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.Center);
            Row.margin({ top: 20, bottom: 20 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextPicker.create({ range: this.years, value: { value: this.year, changeEvent: newValue => { this.year = newValue; } } });
            __TextPicker__TextPickerStyle(ObservedObject.GetRawObject(this.options), this.containYear, 10);
            TextPicker.onChange(() => {
                this.onChangeData(1);
            });
        }, TextPicker);
        TextPicker.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextPicker.create({ range: this.months, value: { value: this.month, changeEvent: newValue => { this.month = newValue; } } });
            __TextPicker__TextPickerStyle(ObservedObject.GetRawObject(this.options), this.containMonth, 9);
            TextPicker.onChange(() => {
                this.onChangeData(2);
            });
        }, TextPicker);
        TextPicker.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextPicker.create({ range: this.days, value: { value: this.day, changeEvent: newValue => { this.day = newValue; } } });
            __TextPicker__TextPickerStyle(ObservedObject.GetRawObject(this.options), this.containDay, 9);
            TextPicker.onChange(() => {
                this.onChangeData(3);
            });
        }, TextPicker);
        TextPicker.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextPicker.create({ range: this.hours, value: { value: this.hour, changeEvent: newValue => { this.hour = newValue; } } });
            __TextPicker__TextPickerStyle(ObservedObject.GetRawObject(this.options), this.containHour, 9);
            TextPicker.onChange(() => {
                this.onChangeData(4);
            });
        }, TextPicker);
        TextPicker.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextPicker.create({ range: this.minutes, value: { value: this.minute, changeEvent: newValue => { this.minute = newValue; } } });
            __TextPicker__TextPickerStyle(ObservedObject.GetRawObject(this.options), this.containMinute, 9);
            TextPicker.onChange(() => {
                this.onChangeData(5);
            });
        }, TextPicker);
        TextPicker.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextPicker.create({ range: this.seconds, value: { value: this.second, changeEvent: newValue => { this.second = newValue; } } });
            __TextPicker__TextPickerStyle(ObservedObject.GetRawObject(this.options), this.containSecond, 9);
            TextPicker.onChange(() => {
                this.onChangeData(6);
            });
        }, TextPicker);
        TextPicker.pop();
        Row.pop();
        Column.pop();
        WithTheme.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//TextPicker统一样式
function __TextPicker__TextPickerStyle(options: DateTimePickerOptions, contain: boolean, layoutWeight: number): void {
    TextPicker.visibility(contain ? Visibility.Visible : Visibility.None);
    TextPicker.layoutWeight(layoutWeight);
    TextPicker.textStyle(options.textStyle);
    TextPicker.selectedTextStyle(options.selectedTextStyle);
    TextPicker.disappearTextStyle(options.disappearTextStyle);
    TextPicker.divider(options.divider);
    TextPicker.canLoop(options.canLoop);
}
