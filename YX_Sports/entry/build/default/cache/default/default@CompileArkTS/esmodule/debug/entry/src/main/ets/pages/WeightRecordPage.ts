if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface NumberKeyboardPage_Params {
    inputValue?: string;
    WeightInit?: number;
    WeightTarget?: number;
    Month?: number;
    Day?: number;
    editingType?: 'init' | 'target';
    numberKeyboardDialog?: CustomDialogController;
}
import router from "@ohos:router";
class NumberKeyboardPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__inputValue = new ObservedPropertySimplePU('', this, "inputValue");
        this.__WeightInit = new ObservedPropertySimplePU(40, this, "WeightInit");
        this.__WeightTarget = new ObservedPropertySimplePU(40, this, "WeightTarget");
        this.__Month = new ObservedPropertySimplePU(new Date().getMonth() + 1, this, "Month");
        this.__Day = new ObservedPropertySimplePU(new Date().getDate(), this, "Day");
        this.__editingType = new ObservedPropertySimplePU('init', this, "editingType");
        this.numberKeyboardDialog = new CustomDialogController({
            builder: this.MyDialog.bind(this),
            alignment: DialogAlignment.Bottom
        }, this);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: NumberKeyboardPage_Params) {
        if (params.inputValue !== undefined) {
            this.inputValue = params.inputValue;
        }
        if (params.WeightInit !== undefined) {
            this.WeightInit = params.WeightInit;
        }
        if (params.WeightTarget !== undefined) {
            this.WeightTarget = params.WeightTarget;
        }
        if (params.Month !== undefined) {
            this.Month = params.Month;
        }
        if (params.Day !== undefined) {
            this.Day = params.Day;
        }
        if (params.editingType !== undefined) {
            this.editingType = params.editingType;
        }
        if (params.numberKeyboardDialog !== undefined) {
            this.numberKeyboardDialog = params.numberKeyboardDialog;
        }
    }
    updateStateVars(params: NumberKeyboardPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__inputValue.purgeDependencyOnElmtId(rmElmtId);
        this.__WeightInit.purgeDependencyOnElmtId(rmElmtId);
        this.__WeightTarget.purgeDependencyOnElmtId(rmElmtId);
        this.__Month.purgeDependencyOnElmtId(rmElmtId);
        this.__Day.purgeDependencyOnElmtId(rmElmtId);
        this.__editingType.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__inputValue.aboutToBeDeleted();
        this.__WeightInit.aboutToBeDeleted();
        this.__WeightTarget.aboutToBeDeleted();
        this.__Month.aboutToBeDeleted();
        this.__Day.aboutToBeDeleted();
        this.__editingType.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __inputValue: ObservedPropertySimplePU<string>; // 存储输入的值
    get inputValue() {
        return this.__inputValue.get();
    }
    set inputValue(newValue: string) {
        this.__inputValue.set(newValue);
    }
    private __WeightInit: ObservedPropertySimplePU<number>;
    get WeightInit() {
        return this.__WeightInit.get();
    }
    set WeightInit(newValue: number) {
        this.__WeightInit.set(newValue);
    }
    private __WeightTarget: ObservedPropertySimplePU<number>;
    get WeightTarget() {
        return this.__WeightTarget.get();
    }
    set WeightTarget(newValue: number) {
        this.__WeightTarget.set(newValue);
    }
    private __Month: ObservedPropertySimplePU<number>; //当前月份
    get Month() {
        return this.__Month.get();
    }
    set Month(newValue: number) {
        this.__Month.set(newValue);
    }
    //@State Years: number = new Date().getFullYear();//当前年份
    private __Day: ObservedPropertySimplePU<number>; //当前日期
    get Day() {
        return this.__Day.get();
    }
    set Day(newValue: number) {
        this.__Day.set(newValue);
    }
    private __editingType: ObservedPropertySimplePU<'init' | 'target'>; // 限制只能为'init'或'target'
    get editingType() {
        return this.__editingType.get();
    }
    set editingType(newValue: 'init' | 'target') {
        this.__editingType.set(newValue);
    }
    // 处理数字输入
    handleNumberInput(num: string) {
        // 限制输入长度
        if (this.inputValue.length >= 10)
            return;
        // 处理小数点逻辑
        if (num === '.' && this.inputValue.includes('.'))
            return;
        // 处理前导零
        if (this.inputValue === '0' && num !== '.') {
            this.inputValue = num;
        }
        else {
            this.inputValue += num;
        }
    }
    // 删除最后一个字符
    clearLastChar() {
        if (this.inputValue.length > 0) {
            this.inputValue = this.inputValue.substring(0, this.inputValue.length - 1);
        }
    }
    MyDialog(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.backgroundColor('#F2F3F5');
            Column.width('100%');
            Column.height('60%');
            Column.padding(0);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //标题
            Row.create();
            //标题
            Row.width('100%');
            //标题
            Row.height('15%');
            //标题
            Row.backgroundColor('#FFFFFF');
            //标题
            Row.padding(15);
            //标题
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 叉图标：点击关闭弹窗，不修改数据
            Image.create({ "id": 16777280, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            // 叉图标：点击关闭弹窗，不修改数据
            Image.width(24);
            // 叉图标：点击关闭弹窗，不修改数据
            Image.height(24);
            // 叉图标：点击关闭弹窗，不修改数据
            Image.onClick(() => {
                // 直接关闭弹窗，不修改WeightInit
                this.numberKeyboardDialog.close();
                // 清空输入框（可选，避免下次打开时显示上次输入）
                this.inputValue = '';
            });
            // 叉图标：点击关闭弹窗，不修改数据
            Image.padding(5);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 日期文本
            Text.create(`${this.Month}月${this.Day}日`);
            // 日期文本
            Text.fontSize(24);
        }, Text);
        // 日期文本
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 勾图标：点击关闭弹窗，并修改WeightInit
            Image.create({ "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            // 勾图标：点击关闭弹窗，并修改WeightInit
            Image.height(35);
            // 勾图标：点击关闭弹窗，并修改WeightInit
            Image.width(35);
            // 勾图标：点击关闭弹窗，并修改WeightInit
            Image.onClick(() => {
                // 验证输入合法性：非空、不是纯小数点
                if (this.inputValue && this.inputValue !== '.') {
                    // 将输入的字符串转换为数字，更新到WeightInit
                    if (this.editingType === 'init') {
                        this.WeightInit = parseFloat(this.inputValue); // 更新初始体重
                    }
                    else {
                        this.WeightTarget = parseFloat(this.inputValue); // 更新目标体重
                    }
                }
                // 关闭弹窗
                this.numberKeyboardDialog.close();
                // 清空输入框，避免下次打开时显示残留值
                this.inputValue = '';
            });
            // 勾图标：点击关闭弹窗，并修改WeightInit
            Image.padding(5);
        }, Image);
        //标题
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //输入框
            Row.create();
            //输入框
            Row.width('100%');
            //输入框
            Row.height('25%');
            //输入框
            Row.backgroundColor('#FFFFFF');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.inputValue || '公斤');
            Text.fontSize(30);
            Text.width('100%');
            Text.textAlign(TextAlign.Center);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        //输入框
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 数字键盘按键布局
            Column.create();
            // 数字键盘按键布局
            Column.width('100%');
            // 数字键盘按键布局
            Column.height('60%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //123
            Row.create({ space: 8 });
            //123
            Row.width('100%');
            //123
            Row.height('22%');
            //123
            Row.padding(5);
            //123
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('1');
            Button.onClick(() => {
                /* 处理数字1的输入逻辑 */
                this.handleNumberInput('1');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('2');
            Button.onClick(() => {
                /* 处理数字2的输入逻辑 */
                this.handleNumberInput('1');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('3');
            Button.onClick(() => {
                /* 处理数字3的输入逻辑 */
                this.handleNumberInput('1');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        //123
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //456
            Row.create({ space: 8 });
            //456
            Row.width('100%');
            //456
            Row.height('22%');
            //456
            Row.padding(5);
            //456
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('4');
            Button.onClick(() => {
                /* 处理数字4的输入逻辑 */
                this.handleNumberInput('4');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('5');
            Button.onClick(() => {
                /* 处理数字5的输入逻辑 */
                this.handleNumberInput('5');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('6');
            Button.onClick(() => {
                /* 处理数字6的输入逻辑 */
                this.handleNumberInput('1');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        //456
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //789
            Row.create({ space: 8 });
            //789
            Row.width('100%');
            //789
            Row.height('22%');
            //789
            Row.padding(5);
            //789
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('7');
            Button.onClick(() => {
                /* 处理数字7的输入逻辑 */
                this.handleNumberInput('7');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('8');
            Button.onClick(() => {
                /* 处理数字8的输入逻辑 */
                this.handleNumberInput('8');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('9');
            Button.onClick(() => {
                /* 处理数字9的输入逻辑 */
                this.handleNumberInput('9');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        //789
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //.0X
            Row.create({ space: 8 });
            //.0X
            Row.width('100%');
            //.0X
            Row.height('22%');
            //.0X
            Row.padding(5);
            //.0X
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('.');
            Button.onClick(() => {
                /* 处理.的输入逻辑 */
                this.handleNumberInput('.');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('0');
            Button.onClick(() => {
                /* 处理数字0的输入逻辑 */
                this.handleNumberInput('0');
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.onClick(() => {
                /* 处理删除的输入逻辑 */
                this.clearLastChar();
            });
            Button.height('100%');
            Button.width('30%');
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#403E33');
            Button.fontSize(30);
            Button.fontWeight(300);
            Button.borderRadius(5);
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777271, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(24);
            Image.height(24);
        }, Image);
        Button.pop();
        //.0X
        Row.pop();
        // 数字键盘按键布局
        Column.pop();
        Column.pop();
    }
    private numberKeyboardDialog: CustomDialogController;
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
            //标题部分
            Row.create();
            //标题部分
            Row.justifyContent(FlexAlign.SpaceBetween);
            //标题部分
            Row.width('100%');
            //标题部分
            Row.height(30);
            //标题部分
            Row.padding(5);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('体重记录');
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
        //标题部分
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //记录部分
            Column.create({ space: 5 });
            //记录部分
            Column.height('100%');
            //记录部分
            Column.width('100%');
            //记录部分
            Column.backgroundColor('#F9F9F9');
            //记录部分
            Column.margin({ top: 15 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.backgroundColor('#FFFFFF');
            Row.padding(5);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.margin({ top: 5 });
            Row.onClick(() => {
                this.editingType = 'init'; // 标记为编辑初始体重
                this.numberKeyboardDialog.open();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //初始体重
            Text.create('初始体重');
            //初始体重
            Text.fontSize(22);
            //初始体重
            Text.fontColor('#333333');
        }, Text);
        //初始体重
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.WeightInit.toString() + '公斤');
            Text.fontColor('#999999');
            Text.fontSize(18);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(22);
            Image.height(22);
        }, Image);
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //目标体重
            Row.create();
            //目标体重
            Row.width('100%');
            //目标体重
            Row.backgroundColor('#FFFFFF');
            //目标体重
            Row.padding(5);
            //目标体重
            Row.justifyContent(FlexAlign.SpaceBetween);
            //目标体重
            Row.onClick(() => {
                this.editingType = 'target'; // 标记为编辑目标体重
                this.numberKeyboardDialog.open();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('目标体重');
            Text.fontSize(22);
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.WeightTarget.toString() + '公斤');
            Text.fontColor('#999999');
            Text.fontSize(18);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(22);
            Image.height(22);
        }, Image);
        Row.pop();
        //目标体重
        Row.pop();
        //记录部分
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "NumberKeyboardPage";
    }
}
registerNamedRoute(() => new NumberKeyboardPage(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/WeightRecordPage", pageFullPath: "entry/src/main/ets/pages/WeightRecordPage", integratedHsp: "false", moduleType: "followWithHap" });
