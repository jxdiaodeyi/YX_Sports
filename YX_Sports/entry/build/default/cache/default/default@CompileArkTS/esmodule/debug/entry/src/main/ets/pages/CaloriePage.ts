if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TrainTimePage_Params {
    message?: string;
    Month?: number;
    Years?: number;
    Day?: number;
    months?: string[];
    //模拟数据
    datas?: weekWork[];
}
import router from "@ohos:router";
import { DateType, DialogAction, DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
//import { DateUtil, DisplayUtil, LogUtil, ToastUtil } from '@pura/harmony-utils';
interface weekWork {
    weekid: number;
    weekCarolie: number;
    weekCaroliePic: Resource;
}
class TrainTimePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__Month = new ObservedPropertySimplePU(new Date().getMonth() + 1, this, "Month");
        this.__Years = new ObservedPropertySimplePU(new Date().getFullYear(), this, "Years");
        this.__Day = new ObservedPropertySimplePU(new Date().getDate(), this, "Day");
        this.months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        this.datas = [
            {
                weekid: 0,
                weekCarolie: 0,
                weekCaroliePic: { "id": 16777274, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }
            },
            {
                weekid: 1,
                weekCarolie: 20,
                weekCaroliePic: { "id": 16777273, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }
            },
            {
                weekid: 2,
                weekCarolie: 102,
                weekCaroliePic: { "id": 16777272, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }
            }
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TrainTimePage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.Month !== undefined) {
            this.Month = params.Month;
        }
        if (params.Years !== undefined) {
            this.Years = params.Years;
        }
        if (params.Day !== undefined) {
            this.Day = params.Day;
        }
        if (params.months !== undefined) {
            this.months = params.months;
        }
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
    }
    updateStateVars(params: TrainTimePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__Month.purgeDependencyOnElmtId(rmElmtId);
        this.__Years.purgeDependencyOnElmtId(rmElmtId);
        this.__Day.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__Month.aboutToBeDeleted();
        this.__Years.aboutToBeDeleted();
        this.__Day.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    private __Month: ObservedPropertySimplePU<number>; //当前月份
    get Month() {
        return this.__Month.get();
    }
    set Month(newValue: number) {
        this.__Month.set(newValue);
    }
    private __Years: ObservedPropertySimplePU<number>; //当前年份
    get Years() {
        return this.__Years.get();
    }
    set Years(newValue: number) {
        this.__Years.set(newValue);
    }
    private __Day: ObservedPropertySimplePU<number>; //当前日期
    get Day() {
        return this.__Day.get();
    }
    set Day(newValue: number) {
        this.__Day.set(newValue);
    }
    private months: string[];
    //模拟数据
    private datas: weekWork[];
    OneWeekTrainTime(item: weekWork, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height(350);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(40);
            Row.padding(15);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.Month.toString() + '月' + (1 + 7 * item.weekid).toString() + '日-' + this.Month.toString() + '月' + (7 + 7 * item.weekid).toString() + '日');
            Text.fontSize(20);
            Text.fontColor('#222B45');
            Text.fontWeight('500');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('30%');
            Row.justifyContent(FlexAlign.End);
            Row.margin({ right: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.weekCarolie.toString());
            Text.fontSize(26);
            Text.fontWeight(600);
            Text.fontColor('#6249E3');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('分钟');
            Text.fontSize(20);
            Text.fontColor('#8F9BB3');
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(item.weekCaroliePic);
            Image.width('100%');
            Image.margin({ top: 15 });
            Image.margin({ bottom: 25 });
        }, Image);
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(40);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width('100%');
            Row.height(30);
            Row.padding(5);
            Row.border({
                width: { bottom: 1 },
                color: { bottom: '#F2F2F2' }, // 底部颜色
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('训练时长');
            Text.fontColor('#333333');
            Text.fontSize(24);
            Text.fontWeight(700);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('     ');
            Text.fontSize(24);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height('30');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding(15);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.months[this.Month - 1] + this.Years.toString());
            Text.fontSize(24);
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777285, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(24);
            Image.height(24);
            Image.margin({ top: 15 });
            Image.onClick(() => {
                DialogHelper.showDatePickerDialog({
                    dateType: DateType.Ymd,
                    onAction: (action: number, dialogId: string, date: Date): void => {
                        if (action == DialogAction.SURE) {
                            this.Years = date.getFullYear(); // 获取年份（四位数）
                            this.Month = date.getMonth() + 1; // getMonth()返回0-11，需要+1转为实际月份
                            this.Day = date.getDate(); // 获取日期（1-31）
                        }
                    }
                });
            });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.scrollBar(BarState.Off);
            List.margin({ top: 30 });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.OneWeekTrainTime.bind(this)(item);
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TrainTimePage";
    }
}
registerNamedRoute(() => new TrainTimePage(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/CaloriePage", pageFullPath: "entry/src/main/ets/pages/CaloriePage", integratedHsp: "false", moduleType: "followWithHap" });
