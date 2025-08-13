if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface NormalQuestionPage_Params {
    expandedIndex?: number;
    dropdowns?: Array<GeneratedTypeLiteralInterface_1>;
}
import router from "@ohos:router";
interface GeneratedTypeLiteralInterface_1 {
    title: string;
    options: Array<string>;
}
interface GeneratedTypeLiteralInterface_2 {
    title: string;
    options: string[];
}
class NormalQuestionPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__expandedIndex = new ObservedPropertySimplePU(-1, this, "expandedIndex");
        this.dropdowns = [
            {
                title: '为什么视频加载不出来',
                options: ['这是一段描述1', '这是一段描述2', '这是一段描述3'] as string[]
            },
            {
                title: '如何找回密码',
                options: ['通过手机号找回', '通过邮箱找回', '联系客服'] as string[]
            },
            {
                title: '账号无法登录',
                options: ['检查网络连接', '更新应用版本', '清除缓存'] as string[]
            }
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: NormalQuestionPage_Params) {
        if (params.expandedIndex !== undefined) {
            this.expandedIndex = params.expandedIndex;
        }
        if (params.dropdowns !== undefined) {
            this.dropdowns = params.dropdowns;
        }
    }
    updateStateVars(params: NormalQuestionPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__expandedIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__expandedIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 当前展开的下拉菜单索引，-1表示都不展开
    private __expandedIndex: ObservedPropertySimplePU<number>;
    get expandedIndex() {
        return this.__expandedIndex.get();
    }
    set expandedIndex(newValue: number) {
        this.__expandedIndex.set(newValue);
    }
    // 下拉数据源
    private dropdowns: Array<GeneratedTypeLiteralInterface_1>;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(40);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题栏
            Row.create();
            // 标题栏
            Row.justifyContent(FlexAlign.SpaceBetween);
            // 标题栏
            Row.width('100%');
            // 标题栏
            Row.height(30);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
            Image.margin({ left: 5 });
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('常见问题');
            Text.fontColor('#333333');
            Text.fontSize(20);
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(' ');
        }, Text);
        Text.pop();
        // 标题栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 多个下拉框列表
            Column.create({ space: 3 });
            // 多个下拉框列表
            Column.width('100%');
            // 多个下拉框列表
            Column.backgroundColor('#F2F2F2');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.renderDropdown.bind(this)(item.title, item.options, index);
            };
            this.forEachUpdateFunction(elmtId, this.dropdowns, forEachItemGenFunction, (item: GeneratedTypeLiteralInterface_2) => item.title, true, false);
        }, ForEach);
        ForEach.pop();
        // 多个下拉框列表
        Column.pop();
        Column.pop();
    }
    // 渲染单个下拉框组件
    renderDropdown(title: string, options: Array<string>, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 3 });
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.backgroundColor('#FEFEFE');
            Row.height(60);
            Row.width('100%');
            Row.onClick(() => {
                // 点击切换展开/收起状态
                Context.animateTo({
                    duration: 200, // 动画持续时间
                }, () => {
                    if (this.expandedIndex === index) {
                        this.expandedIndex = -1; // 收起自己
                    }
                    else {
                        this.expandedIndex = index; // 展开自己，其他自动关闭
                    }
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(16);
            Text.padding(12);
            Text.height(40);
            Text.borderRadius(8);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.expandedIndex === index ? { "id": 16777326, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" } : { "id": 16777325, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(16);
            Image.height(16);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 显示选项列表
            if (this.expandedIndex === index) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create();
                        List.width('100%');
                        List.height(120);
                        List.backgroundColor('#EEF7FE');
                        List.borderRadius(8);
                        List.margin({ top: 4 });
                        List.shadow({ radius: 4 });
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const option = _item;
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
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(option);
                                        Text.fontSize(16);
                                        Text.padding(12);
                                        Text.width('100%');
                                        Text.onClick(() => {
                                            // 可以在这里设置选中值等操作
                                            console.info(`选择了：${option}`);
                                            this.expandedIndex = -1; // 选择后关闭
                                        });
                                    }, Text);
                                    Text.pop();
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, options, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "NormalQuestionPage";
    }
}
registerNamedRoute(() => new NormalQuestionPage(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/NormalQuestionPage", pageFullPath: "entry/src/main/ets/pages/NormalQuestionPage", integratedHsp: "false", moduleType: "followWithHap" });
