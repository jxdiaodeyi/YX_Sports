if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SubscriptionPlan_Params {
    selectedPlanId?: string;
    plans?: PlanItem[];
    // 回调函数
    onPlanSelected?: (planId: string) => void;
    onUnlockClick?: (planId: string) => void;
}
import router from "@ohos:router";
interface PlanItem {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    selected: boolean;
    backgroundColor: string;
    isFree?: boolean;
}
export class SubscriptionPlan extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__selectedPlanId = new ObservedPropertySimplePU('basic', this, "selectedPlanId");
        this.__plans = new ObservedPropertyObjectPU([
            {
                id: 'basic',
                title: '基本的计划',
                subtitle: '07天免费试用',
                price: '',
                selected: true,
                backgroundColor: '#E8F4FD',
                isFree: false
            },
            {
                id: 'advanced',
                title: '进阶计划',
                subtitle: '1个月30元',
                price: '',
                selected: false,
                backgroundColor: '#F5E6D3'
            },
            {
                id: 'premium',
                title: '高级计划',
                subtitle: '1年188元',
                price: '',
                selected: false,
                backgroundColor: '#F0E6F0'
            }
        ], this, "plans");
        this.onPlanSelected = undefined;
        this.onUnlockClick = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SubscriptionPlan_Params) {
        if (params.selectedPlanId !== undefined) {
            this.selectedPlanId = params.selectedPlanId;
        }
        if (params.plans !== undefined) {
            this.plans = params.plans;
        }
        if (params.onPlanSelected !== undefined) {
            this.onPlanSelected = params.onPlanSelected;
        }
        if (params.onUnlockClick !== undefined) {
            this.onUnlockClick = params.onUnlockClick;
        }
    }
    updateStateVars(params: SubscriptionPlan_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectedPlanId.purgeDependencyOnElmtId(rmElmtId);
        this.__plans.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectedPlanId.aboutToBeDeleted();
        this.__plans.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __selectedPlanId: ObservedPropertySimplePU<string>;
    get selectedPlanId() {
        return this.__selectedPlanId.get();
    }
    set selectedPlanId(newValue: string) {
        this.__selectedPlanId.set(newValue);
    }
    private __plans: ObservedPropertyObjectPU<PlanItem[]>;
    get plans() {
        return this.__plans.get();
    }
    set plans(newValue: PlanItem[]) {
        this.__plans.set(newValue);
    }
    // 回调函数
    private onPlanSelected?: (planId: string) => void;
    private onUnlockClick?: (planId: string) => void;
    selectPlan(planId: string) {
        this.selectedPlanId = planId;
        this.plans = this.plans.map((plan) => {
            if (plan.id === planId) {
                return {
                    id: plan.id,
                    title: plan.title,
                    subtitle: plan.subtitle,
                    price: plan.price,
                    selected: !plan.selected,
                    backgroundColor: plan.backgroundColor,
                    isFree: plan.isFree
                };
            }
            else {
                return {
                    id: plan.id,
                    title: plan.title,
                    subtitle: plan.subtitle,
                    price: plan.price,
                    selected: false,
                    backgroundColor: plan.backgroundColor,
                    isFree: plan.isFree
                };
            }
            return plan;
        });
        // this.plans.forEach(plan => {
        //   plan.selected = plan.id === planId;
        // });
        if (this.onPlanSelected) {
            this.onPlanSelected(planId);
        }
    }
    handleUnlock() {
        if (this.onUnlockClick) {
            this.onUnlockClick(this.selectedPlanId);
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#FFFFFF');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 头部图片区域
            Stack.create({ alignContent: Alignment.BottomStart });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width('100%');
            Image.height(280);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius({ topLeft: 0, topRight: 0, bottomLeft: 20, bottomRight: 20 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 渐变遮罩
            Column.create();
            // 渐变遮罩
            Column.width('100%');
            // 渐变遮罩
            Column.height(280);
            // 渐变遮罩
            Column.linearGradient({
                direction: GradientDirection.Bottom,
                colors: [['rgba(0,0,0,0)', 0], ['rgba(0,0,0,0.6)', 1]]
            });
            // 渐变遮罩
            Column.borderRadius({ topLeft: 0, topRight: 0, bottomLeft: 20, bottomRight: 20 });
        }, Column);
        // 渐变遮罩
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.alignItems(HorizontalAlign.Start);
            Column.padding({ left: 24, bottom: 32 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('解锁你的个人专属计划');
            Text.fontSize(24);
            Text.fontColor('#FFFFFF');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('解锁所有功能和内容');
            Text.fontSize(16);
            Text.fontColor('#FFFFFF');
            Text.opacity(0.9);
        }, Text);
        Text.pop();
        Column.pop();
        // 头部图片区域
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 内容区域
            Column.create({ space: 24 });
            // 内容区域
            Column.padding({ left: 24, right: 24, top: 32 });
            // 内容区域
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题
            Column.create({ space: 8 });
            // 标题
            Column.alignItems(HorizontalAlign.Start);
            // 标题
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('30天免费试用');
            Text.fontSize(28);
            Text.fontColor('#333333');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('或者购买无限套餐');
            Text.fontSize(16);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        // 标题
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 计划选项
            Column.create({ space: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const plan = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width('100%');
                    Row.height(70);
                    Row.backgroundColor(plan.backgroundColor);
                    Row.borderRadius(12);
                    Row.padding({ left: 20, right: 20 });
                    Row.alignItems(VerticalAlign.Center);
                    Row.onClick(() => {
                        this.selectPlan(plan.id);
                    });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 4 });
                    Column.alignItems(HorizontalAlign.Start);
                    Column.layoutWeight(1);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(plan.title);
                    Text.fontSize(16);
                    Text.fontColor('#333333');
                    Text.fontWeight(FontWeight.Medium);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(plan.subtitle);
                    Text.fontSize(14);
                    Text.fontColor('#666666');
                }, Text);
                Text.pop();
                Column.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 选择圆圈
                    Stack.create();
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Circle.create();
                    Circle.width(24);
                    Circle.height(24);
                    Circle.fill(plan.selected ? '#6C5CE7' : '#FFFFFF');
                    Circle.strokeWidth(2);
                    Circle.stroke(plan.selected ? '#6C5CE7' : '#CCCCCC');
                }, Circle);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (plan.selected) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create('✓');
                                Text.fontSize(14);
                                Text.fontColor('#FFFFFF');
                                Text.fontWeight(FontWeight.Bold);
                            }, Text);
                            Text.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                // 选择圆圈
                Stack.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.plans, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        // 计划选项
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 解锁按钮
            Button.createWithLabel('立即解锁');
            // 解锁按钮
            Button.width('100%');
            // 解锁按钮
            Button.height(52);
            // 解锁按钮
            Button.backgroundColor('#6C5CE7');
            // 解锁按钮
            Button.fontColor('#FFFFFF');
            // 解锁按钮
            Button.fontSize(18);
            // 解锁按钮
            Button.fontWeight(FontWeight.Medium);
            // 解锁按钮
            Button.borderRadius(26);
            // 解锁按钮
            Button.margin({ top: 20 });
            // 解锁按钮
            Button.onClick(() => {
                router.replaceUrl({ url: "pages/vip" });
            });
        }, Button);
        // 解锁按钮
        Button.pop();
        // 内容区域
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
