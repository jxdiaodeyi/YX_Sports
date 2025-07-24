if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface EditInfoPage_Params {
    inputValue?: string;
    WeightInit?: number;
    Month?: number;
    Day?: number;
    HeightRecord?: number;
    Sexual?: string;
    NickName?: string;
    isShowKeyboard?: boolean;
    numberKeyboardDialog?: CustomDialogController;
    keyboardDialog?: CustomDialogController;
    photoDialog?: CustomDialogController;
}
import router from "@ohos:router";
import { DialogAction, DialogHelper } from "@normalized:N&&&@pura/harmony-dialog/Index&1.1.7";
import { EnglishKeyboardView } from "@normalized:N&&&@abner/keyboard/Index&1.0.2";
class EditInfoPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__inputValue = new ObservedPropertySimplePU('', this, "inputValue");
        this.__WeightInit = new ObservedPropertySimplePU(40, this, "WeightInit");
        this.__Month = new ObservedPropertySimplePU(new Date().getMonth() + 1, this, "Month");
        this.__Day = new ObservedPropertySimplePU(new Date().getDate(), this, "Day");
        this.__HeightRecord = new ObservedPropertySimplePU(165, this, "HeightRecord");
        this.__Sexual = new ObservedPropertySimplePU('女', this, "Sexual");
        this.__NickName = new ObservedPropertySimplePU('瘦到90斤', this, "NickName");
        this.__isShowKeyboard = new ObservedPropertySimplePU(false, this, "isShowKeyboard");
        this.numberKeyboardDialog = new CustomDialogController({
            builder: this.MyDialog.bind(this),
            alignment: DialogAlignment.Bottom
        }, this);
        this.keyboardDialog = new CustomDialogController({
            builder: this.KeyboardDialogBuilder.bind(this),
            alignment: DialogAlignment.Bottom,
            autoCancel: true,
            maskColor: 'rgba(0, 0, 0, 0.3)' // 弹窗背景遮罩（可选）
        }, this);
        this.photoDialog = new CustomDialogController({
            builder: this.PhotoDialogBuilder.bind(this),
            alignment: DialogAlignment.Bottom,
            maskColor: 'rgba(0, 0, 0, 0.3)',
            autoCancel: true // 点击遮罩关闭弹窗
        }, this);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EditInfoPage_Params) {
        if (params.inputValue !== undefined) {
            this.inputValue = params.inputValue;
        }
        if (params.WeightInit !== undefined) {
            this.WeightInit = params.WeightInit;
        }
        if (params.Month !== undefined) {
            this.Month = params.Month;
        }
        if (params.Day !== undefined) {
            this.Day = params.Day;
        }
        if (params.HeightRecord !== undefined) {
            this.HeightRecord = params.HeightRecord;
        }
        if (params.Sexual !== undefined) {
            this.Sexual = params.Sexual;
        }
        if (params.NickName !== undefined) {
            this.NickName = params.NickName;
        }
        if (params.isShowKeyboard !== undefined) {
            this.isShowKeyboard = params.isShowKeyboard;
        }
        if (params.numberKeyboardDialog !== undefined) {
            this.numberKeyboardDialog = params.numberKeyboardDialog;
        }
        if (params.keyboardDialog !== undefined) {
            this.keyboardDialog = params.keyboardDialog;
        }
        if (params.photoDialog !== undefined) {
            this.photoDialog = params.photoDialog;
        }
    }
    updateStateVars(params: EditInfoPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__inputValue.purgeDependencyOnElmtId(rmElmtId);
        this.__WeightInit.purgeDependencyOnElmtId(rmElmtId);
        this.__Month.purgeDependencyOnElmtId(rmElmtId);
        this.__Day.purgeDependencyOnElmtId(rmElmtId);
        this.__HeightRecord.purgeDependencyOnElmtId(rmElmtId);
        this.__Sexual.purgeDependencyOnElmtId(rmElmtId);
        this.__NickName.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowKeyboard.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__inputValue.aboutToBeDeleted();
        this.__WeightInit.aboutToBeDeleted();
        this.__Month.aboutToBeDeleted();
        this.__Day.aboutToBeDeleted();
        this.__HeightRecord.aboutToBeDeleted();
        this.__Sexual.aboutToBeDeleted();
        this.__NickName.aboutToBeDeleted();
        this.__isShowKeyboard.aboutToBeDeleted();
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
    private __HeightRecord: ObservedPropertySimplePU<number>;
    get HeightRecord() {
        return this.__HeightRecord.get();
    }
    set HeightRecord(newValue: number) {
        this.__HeightRecord.set(newValue);
    }
    private __Sexual: ObservedPropertySimplePU<string>;
    get Sexual() {
        return this.__Sexual.get();
    }
    set Sexual(newValue: string) {
        this.__Sexual.set(newValue);
    }
    private __NickName: ObservedPropertySimplePU<string>;
    get NickName() {
        return this.__NickName.get();
    }
    set NickName(newValue: string) {
        this.__NickName.set(newValue);
    }
    private __isShowKeyboard: ObservedPropertySimplePU<boolean>; // 标记昵称键盘是否显示
    get isShowKeyboard() {
        return this.__isShowKeyboard.get();
    }
    set isShowKeyboard(newValue: boolean) {
        this.__isShowKeyboard.set(newValue);
    }
    //体重处理--------------------------------------------------
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
                    this.WeightInit = parseFloat(this.inputValue); // 更新体重
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
    //-----------------------------------------------------------------
    //--------------------------昵称键盘构建----------------------------------------------
    // 定义键盘弹窗控制器
    private keyboardDialog: CustomDialogController;
    // 弹窗布局构建器
    KeyboardDialogBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor('#F0F0F0');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 显示输入的文本（可选，用于预览输入内容）
            Row.create();
            // 显示输入的文本（可选，用于预览输入内容）
            Row.padding(10);
            // 显示输入的文本（可选，用于预览输入内容）
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.NickName || '请输入...');
            Text.fontSize(18);
            Text.padding(10);
            Text.width('100%');
            Text.backgroundColor('#FFFFFF');
            Text.borderRadius(5);
        }, Text);
        Text.pop();
        // 显示输入的文本（可选，用于预览输入内容）
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.width('100%');
            __Common__.height(300);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 英文键盘组件
                    EnglishKeyboardView(this, {
                        // 点击字符按键（如a、b、1、2等）
                        onItemClick: (item: string) => {
                            this.NickName += item; // 将输入的字符追加到文本中
                        },
                        // 点击删除键
                        onDelete: () => {
                            if (this.NickName.length > 0) {
                                this.NickName = this.NickName.substring(0, this.NickName.length - 1); // 删除最后一个字符
                            }
                            ;
                        },
                        // 点击完成键
                        onComplete: () => {
                            this.keyboardDialog.close(); // 关闭弹窗
                        },
                        // 点击中文切换键（如果需要切换到中文键盘，可在此处处理）
                        onChinese: () => {
                            // 例如：可以切换到其他中文键盘组件
                        },
                        // 点击空格键
                        onSpace: () => {
                            this.NickName += ' '; // 追加空格
                        },
                        // 点击数字键（切换到数字输入模式，可在此处处理）
                        onNumber: () => {
                            // 例如：切换到数字键盘布局
                        },
                        // 以下是可选的样式配置（根据需要调整）
                        bgColor: '#F5F5F5',
                        englishBgColor: '#FFFFFF',
                        otherBgColor: '#E8E8E8',
                        rectBorderWidth: 1,
                        rectBorderRadius: 8,
                        rectTextSize: 18,
                        rectTextColor: '#333333',
                        deleteIconWidth: 24,
                        //deleteIconSrc: $r('app.media.delete_icon'), // 自定义删除图标（可选）
                        rectHeight: 50,
                        marginTop: 5,
                        marginBottom: 5 // 键盘底部边距
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/EditInfoPage.ets", line: 336, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            // 点击字符按键（如a、b、1、2等）
                            onItemClick: (item: string) => {
                                this.NickName += item; // 将输入的字符追加到文本中
                            },
                            // 点击删除键
                            onDelete: () => {
                                if (this.NickName.length > 0) {
                                    this.NickName = this.NickName.substring(0, this.NickName.length - 1); // 删除最后一个字符
                                }
                                ;
                            },
                            // 点击完成键
                            onComplete: () => {
                                this.keyboardDialog.close(); // 关闭弹窗
                            },
                            // 点击中文切换键（如果需要切换到中文键盘，可在此处处理）
                            onChinese: () => {
                                // 例如：可以切换到其他中文键盘组件
                            },
                            // 点击空格键
                            onSpace: () => {
                                this.NickName += ' '; // 追加空格
                            },
                            // 点击数字键（切换到数字输入模式，可在此处处理）
                            onNumber: () => {
                                // 例如：切换到数字键盘布局
                            },
                            // 以下是可选的样式配置（根据需要调整）
                            bgColor: '#F5F5F5',
                            englishBgColor: '#FFFFFF',
                            otherBgColor: '#E8E8E8',
                            rectBorderWidth: 1,
                            rectBorderRadius: 8,
                            rectTextSize: 18,
                            rectTextColor: '#333333',
                            deleteIconWidth: 24,
                            //deleteIconSrc: $r('app.media.delete_icon'), // 自定义删除图标（可选）
                            rectHeight: 50,
                            marginTop: 5,
                            marginBottom: 5 // 键盘底部边距
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "EnglishKeyboardView" });
        }
        __Common__.pop();
        Column.pop();
    }
    //-------------------------------------------------------------------------------------------
    //----------------------------选择头像-----------------------------------------------
    // 定义弹窗控制器
    private photoDialog: CustomDialogController;
    // 弹窗内容构建器
    PhotoDialogBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor('#F2F2F2');
            Column.borderRadius({ topLeft: 15, topRight: 15 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1. 拍照选项
            Button.createWithLabel('拍照');
            // 1. 拍照选项
            Button.width('100%');
            // 1. 拍照选项
            Button.height(55);
            // 1. 拍照选项
            Button.fontSize(18);
            // 1. 拍照选项
            Button.fontColor('#333333');
            // 1. 拍照选项
            Button.backgroundColor('#FFFFFF');
            // 1. 拍照选项
            Button.borderRadius(0);
            // 1. 拍照选项
            Button.onClick(() => {
                this.photoDialog.close(); // 选择后关闭弹窗
                // 可添加拍照逻辑（如调用相机）
            });
        }, Button);
        // 1. 拍照选项
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 2. 从相册选择选项
            Button.createWithLabel('从相册选择');
            // 2. 从相册选择选项
            Button.width('100%');
            // 2. 从相册选择选项
            Button.height(55);
            // 2. 从相册选择选项
            Button.fontSize(18);
            // 2. 从相册选择选项
            Button.fontColor('#333333');
            // 2. 从相册选择选项
            Button.backgroundColor('#FFFFFF');
            // 2. 从相册选择选项
            Button.borderRadius(0);
            // 2. 从相册选择选项
            Button.onClick(() => {
                this.photoDialog.close(); // 关闭弹窗
                //router.pushUrl({ url: 'pages/AlbumPage' }); // 跳转到相册页面（后面加）
            });
        }, Button);
        // 2. 从相册选择选项
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 3. 取消选项
            Button.createWithLabel('取消');
            // 3. 取消选项
            Button.width('100%');
            // 3. 取消选项
            Button.margin({ top: 5 });
            // 3. 取消选项
            Button.height(55);
            // 3. 取消选项
            Button.fontSize(18);
            // 3. 取消选项
            Button.fontColor('#666666');
            // 3. 取消选项
            Button.backgroundColor('#FFFFFF');
            // 3. 取消选项
            Button.borderRadius(0);
            // 3. 取消选项
            Button.onClick(() => {
                this.photoDialog.close(); // 关闭弹窗
            });
        }, Button);
        // 3. 取消选项
        Button.pop();
        Column.pop();
    }
    //----------------------------------------------------------------------------------------
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor('#F5F5F5');
            Column.height('100%');
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(40);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //标题
            Row.create();
            //标题
            Row.justifyContent(FlexAlign.SpaceBetween);
            //标题
            Row.width('100%');
            //标题
            Row.height(30);
            //标题
            Row.backgroundColor('#FFFFFF');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
            Image.margin(({ left: 5 }));
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('编辑资料');
            Text.fontColor('#333333');
            Text.fontSize(20);
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('保存');
            Text.fontSize(18);
            Text.fontColor('#999999');
            Text.margin({ right: 5 });
            Text.onClick(() => {
                router.back();
            });
        }, Text);
        Text.pop();
        //标题
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 2 });
            Column.width('100%');
            Column.height('100%');
            Column.margin({ top: 10 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //头像
            Row.create();
            //头像
            Row.padding(5);
            //头像
            Row.backgroundColor('#FFFFFF');
            //头像
            Row.width('100%');
            //头像
            Row.height(60);
            //头像
            Row.justifyContent(FlexAlign.SpaceBetween);
            //头像
            Row.onClick(() => {
                this.photoDialog.open(); // 打开弹窗
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('头像');
            Text.fontSize(18);
            Text.fontColor('#353535');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777284, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(40);
            Image.height(40);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(18);
            Image.height(18);
        }, Image);
        Row.pop();
        //头像
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //昵称
            Row.create();
            //昵称
            Row.padding(5);
            //昵称
            Row.backgroundColor('#FFFFFF');
            //昵称
            Row.width('100%');
            //昵称
            Row.height(60);
            //昵称
            Row.justifyContent(FlexAlign.SpaceBetween);
            //昵称
            Row.onClick(() => { this.keyboardDialog.open(); });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('昵称');
            Text.fontSize(18);
            Text.fontColor('#353535');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.NickName);
            Text.fontSize(18);
            Text.fontColor('#BAB9BA');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(18);
            Image.height(18);
        }, Image);
        Row.pop();
        //昵称
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //性别
            Row.create();
            //性别
            Row.padding(5);
            //性别
            Row.backgroundColor('#FFFFFF');
            //性别
            Row.width('100%');
            //性别
            Row.height(60);
            //性别
            Row.justifyContent(FlexAlign.SpaceBetween);
            //性别
            Row.onClick(() => {
                // 定义性别选项范围（男/女）
                const genders: string[] = ['男', '女'];
                DialogHelper.showTextPickerDialog({
                    title: "设置性别",
                    range: genders,
                    onAction: (action: number, dialogId: string, value: string | string[]) => {
                        if (action === DialogAction.SURE) {
                            const selectedGender = value as string;
                            this.Sexual = selectedGender; // 更新性别记录
                        }
                    }
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('性别');
            Text.fontSize(18);
            Text.fontColor('#353535');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.Sexual);
            Text.fontSize(18);
            Text.fontColor('#BAB9BA');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(18);
            Image.height(18);
        }, Image);
        Row.pop();
        //性别
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //身高
            Row.create();
            //身高
            Row.padding(5);
            //身高
            Row.backgroundColor('#FFFFFF');
            //身高
            Row.width('100%');
            //身高
            Row.height(60);
            //身高
            Row.justifyContent(FlexAlign.SpaceBetween);
            //身高
            Row.onClick(() => {
                let numbers: string[] = [];
                for (let i = 120; i <= 200; i += 1) {
                    numbers.push(i.toString() + ' cm');
                }
                DialogHelper.showTextPickerDialog({
                    title: "设置身高",
                    range: numbers.map(String),
                    onAction: (action: number, dialogId: string, value: string | string[]) => {
                        if (action == DialogAction.SURE) {
                            const heightStr = (value as string).replace(' cm', '');
                            const heightNum = parseFloat(heightStr);
                            this.HeightRecord = heightNum;
                        }
                    }
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('身高');
            Text.fontSize(18);
            Text.fontColor('#353535');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.HeightRecord.toString() + 'cm');
            Text.fontSize(18);
            Text.fontColor('#BAB9BA');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(18);
            Image.height(18);
        }, Image);
        Row.pop();
        //身高
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //体重
            Row.create();
            //体重
            Row.padding(5);
            //体重
            Row.backgroundColor('#FFFFFF');
            //体重
            Row.width('100%');
            //体重
            Row.height(60);
            //体重
            Row.justifyContent(FlexAlign.SpaceBetween);
            //体重
            Row.onClick(() => {
                this.numberKeyboardDialog.open();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('体重');
            Text.fontSize(18);
            Text.fontColor('#353535');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.WeightInit.toString() + '公斤');
            Text.fontSize(18);
            Text.fontColor('#BAB9BA');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(18);
            Image.height(18);
        }, Image);
        Row.pop();
        //体重
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //ID号
            Row.create();
            //ID号
            Row.padding(5);
            //ID号
            Row.backgroundColor('#FFFFFF');
            //ID号
            Row.width('100%');
            //ID号
            Row.height(60);
            //ID号
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('ID号');
            Text.fontSize(18);
            Text.fontColor('#353535');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('345674583');
            Text.fontSize(18);
            Text.fontColor('#BAB9BA');
        }, Text);
        Text.pop();
        Row.pop();
        //ID号
        Row.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "EditInfoPage";
    }
}
registerNamedRoute(() => new EditInfoPage(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/EditInfoPage", pageFullPath: "entry/src/main/ets/pages/EditInfoPage", integratedHsp: "false", moduleType: "followWithHap" });
