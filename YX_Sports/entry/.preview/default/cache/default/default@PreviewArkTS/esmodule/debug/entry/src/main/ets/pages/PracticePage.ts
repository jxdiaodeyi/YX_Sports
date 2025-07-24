if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Practice_Params {
}
export class Practice extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Practice_Params) {
    }
    updateStateVars(params: Practice_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(4:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.padding({ left: 10, right: 10 });
            Column.backgroundImage({ "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" });
            Column.backgroundImageSize({ width: '100%', height: '100%' });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //标题
            Row.create({ space: 15 });
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(6:7)", "entry");
            //标题
            Row.padding(15);
            //标题
            Row.width('100%');
            //标题
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('训练');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(7:9)", "entry");
            Text.fontSize(24);
            Text.fontWeight(600);
            Text.fontColor('#FFFFFF');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/PracticePage.ets(11:9)", "entry");
            Image.width(24);
            Image.height(24);
        }, Image);
        //标题
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/PracticePage.ets(20:7)", "entry");
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(21:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //训练时长+卡路里
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(23:11)", "entry");
            //训练时长+卡路里
            Row.width('100%');
            //训练时长+卡路里
            Row.height(120);
            //训练时长+卡路里
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 左侧卡片：今日训练时长
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(25:13)", "entry");
            // 左侧卡片：今日训练时长
            Column.width('48%');
            // 左侧卡片：今日训练时长
            Column.height(100);
            // 左侧卡片：今日训练时长
            Column.backgroundColor('#FFFFFF');
            // 左侧卡片：今日训练时长
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(26:15)", "entry");
            Row.width('100%');
            Row.height(30);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('今日训练时长');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(27:17)", "entry");
            Text.fontSize(20);
            Text.fontWeight(400);
            Text.fontColor('#333333');
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('>');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(32:17)", "entry");
            Text.fontColor('#333333');
            Text.margin({ right: 10 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(40:15)", "entry");
            Row.alignItems(VerticalAlign.Bottom);
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('12');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(41:17)", "entry");
            Text.fontSize(35);
            Text.fontWeight(600);
            Text.fontColor('#6C55E4');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('分钟');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(45:17)", "entry");
            Text.fontSize(20);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        Row.pop();
        // 左侧卡片：今日训练时长
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(63:13)", "entry");
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.width('48%');
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.height(100);
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.backgroundColor('#FFFFFF');
            //.border({
            //  width: 1,
            //  color: '#6C55E4', // 边框颜色为紫色
            //})
            // 右侧卡片：燃烧卡路里
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(64:15)", "entry");
            Row.width('100%');
            Row.height(30);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('燃烧卡路里');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(65:17)", "entry");
            Text.fontSize(20);
            Text.fontWeight(400);
            Text.fontColor('#333333');
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('>');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(70:17)", "entry");
            Text.fontColor('#333333');
            Text.margin({ right: 10 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(79:15)", "entry");
            Row.alignItems(VerticalAlign.Bottom);
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('190');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(80:17)", "entry");
            Text.fontSize(35);
            Text.fontWeight(600);
            Text.fontColor('#6C55E4');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('千卡');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(84:17)", "entry");
            Text.fontSize(20);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        Row.pop();
        //.border({
        //  width: 1,
        //  color: '#6C55E4', // 边框颜色为紫色
        //})
        // 右侧卡片：燃烧卡路里
        Column.pop();
        //训练时长+卡路里
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //体重记录
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(107:11)", "entry");
            //体重记录
            Column.backgroundColor('#FFFFFF');
            //体重记录
            Column.padding({ top: 30, bottom: 30 });
            //体重记录
            Column.width('100%');
            //体重记录
            Column.height(200);
            //体重记录
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题行
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(109:13)", "entry");
            // 标题行
            Row.width('100%');
            // 标题行
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('体重记录');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(110:15)", "entry");
            Text.fontSize(24);
            Text.fontColor('#333333');
            Text.fontWeight(500);
            Text.margin({ left: 15 });
        }, Text);
        Text.pop();
        // 标题行
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 体重数据行
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(121:13)", "entry");
            // 体重数据行
            Row.width('100%');
            // 体重数据行
            Row.justifyContent(FlexAlign.Start);
            // 体重数据行
            Row.margin({ top: 20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('55.5kg');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(122:15)", "entry");
            Text.fontSize(35);
            Text.fontColor('#6C55E4');
            Text.fontWeight(700);
            Text.margin({ left: 15 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('已减12kg');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(128:15)", "entry");
            Text.fontSize(16);
            Text.fontColor('#999999');
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        // 体重数据行
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 按钮
            Button.createWithLabel('记录体重');
            Button.debugLine("entry/src/main/ets/pages/PracticePage.ets(138:13)", "entry");
            // 按钮
            Button.width('40%');
            // 按钮
            Button.height(48);
            // 按钮
            Button.backgroundColor('#666EE8');
            // 按钮
            Button.fontColor('#FFFFFF');
            // 按钮
            Button.fontSize(18);
            // 按钮
            Button.borderRadius(24);
            // 按钮
            Button.margin({ top: 20 });
            // 按钮
            Button.onClick(() => {
                // 点击事件处理逻辑
                console.log('点击了记录体重按钮');
            });
        }, Button);
        // 按钮
        Button.pop();
        //体重记录
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //锻炼时长竖状图
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(159:11)", "entry");
            //锻炼时长竖状图
            Column.width('100%');
            //锻炼时长竖状图
            Column.height(200);
            //锻炼时长竖状图
            Column.backgroundColor('#FFFFFF');
            //锻炼时长竖状图
            Column.borderRadius(8);
            //锻炼时长竖状图
            Column.margin({ top: 15 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题行
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(161:13)", "entry");
            // 标题行
            Row.margin({ top: 15 });
            // 标题行
            Row.width('100%');
            // 标题行
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //左边标题
            Text.create('锻炼时长');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(163:15)", "entry");
            //左边标题
            Text.fontSize(24);
            //左边标题
            Text.fontColor('#333333');
            //左边标题
            Text.fontWeight(500);
            //左边标题
            Text.margin({ left: 15 });
        }, Text);
        //左边标题
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //右边数据
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(170:15)", "entry");
            //右边数据
            Row.margin({ right: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('102');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(171:17)", "entry");
            Text.fontSize(34);
            Text.fontColor('#6249E3');
            Text.fontWeight(500);
            Text.margin({ right: 5 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('分钟');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(177:17)", "entry");
            Text.fontSize(22);
            Text.fontColor('#939EB5');
        }, Text);
        Text.pop();
        //右边数据
        Row.pop();
        // 标题行
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //图表                                       //暂时贴图
            Image.create({ "id": 16777226, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/PracticePage.ets(188:13)", "entry");
            //图表                                       //暂时贴图
            Image.margin({ top: 15 });
            //图表                                       //暂时贴图
            Image.width('100%');
            //图表                                       //暂时贴图
            Image.height(120);
        }, Image);
        //锻炼时长竖状图
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //卡路里竖状图
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/PracticePage.ets(201:11)", "entry");
            //卡路里竖状图
            Column.width('100%');
            //卡路里竖状图
            Column.height(200);
            //卡路里竖状图
            Column.backgroundColor('#FFFFFF');
            //卡路里竖状图
            Column.borderRadius(8);
            //卡路里竖状图
            Column.margin({ top: 15 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题行
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(203:13)", "entry");
            // 标题行
            Row.margin({ top: 15 });
            // 标题行
            Row.width('100%');
            // 标题行
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //左边标题
            Text.create('卡路里');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(205:15)", "entry");
            //左边标题
            Text.fontSize(24);
            //左边标题
            Text.fontColor('#333333');
            //左边标题
            Text.fontWeight(500);
            //左边标题
            Text.margin({ left: 15 });
        }, Text);
        //左边标题
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //右边数据
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/PracticePage.ets(212:15)", "entry");
            //右边数据
            Row.margin({ right: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('112');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(213:17)", "entry");
            Text.fontSize(34);
            Text.fontColor('#6249E3');
            Text.fontWeight(500);
            Text.margin({ right: 5 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('千卡');
            Text.debugLine("entry/src/main/ets/pages/PracticePage.ets(219:17)", "entry");
            Text.fontSize(22);
            Text.fontColor('#939EB5');
        }, Text);
        Text.pop();
        //右边数据
        Row.pop();
        // 标题行
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //图表                                       //暂时贴图
            Image.create({ "id": 16777221, "type": 20000, params: [], "bundleName": "com.example.watermalon_sport", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/PracticePage.ets(230:13)", "entry");
            //图表                                       //暂时贴图
            Image.margin({ top: 15 });
            //图表                                       //暂时贴图
            Image.width('100%');
            //图表                                       //暂时贴图
            Image.height(120);
        }, Image);
        //卡路里竖状图
        Column.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
