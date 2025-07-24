if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Keyboard_Params {
    onTapClose?: () => void;
    onTapKey?: (type: KeyType, value?: string) => Promise<void>;
    keyboardType?: KeyboardType;
    enableClose?: boolean;
    titleLabel?: ResourceStr;
    numberList?: string[];
}
export class Keyboard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.onTapClose = () => { };
        this.onTapKey = async () => { };
        this.__keyboardType = new SynchedPropertySimpleOneWayPU(params.keyboardType, this, "keyboardType");
        this.__enableClose = new SynchedPropertySimpleOneWayPU(params.enableClose, this, "enableClose");
        this.__titleLabel = new SynchedPropertyObjectOneWayPU(params.titleLabel, this, "titleLabel");
        this.__numberList = new ObservedPropertyObjectPU(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], this, "numberList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Keyboard_Params) {
        if (params.onTapClose !== undefined) {
            this.onTapClose = params.onTapClose;
        }
        if (params.onTapKey !== undefined) {
            this.onTapKey = params.onTapKey;
        }
        if (params.keyboardType === undefined) {
            this.__keyboardType.set(KeyboardType.NUMBER);
        }
        if (params.enableClose === undefined) {
            this.__enableClose.set(undefined);
        }
        if (params.titleLabel === undefined) {
            this.__titleLabel.set(undefined);
        }
        if (params.numberList !== undefined) {
            this.numberList = params.numberList;
        }
    }
    updateStateVars(params: Keyboard_Params) {
        this.__keyboardType.reset(params.keyboardType);
        this.__enableClose.reset(params.enableClose);
        this.__titleLabel.reset(params.titleLabel);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__keyboardType.purgeDependencyOnElmtId(rmElmtId);
        this.__enableClose.purgeDependencyOnElmtId(rmElmtId);
        this.__titleLabel.purgeDependencyOnElmtId(rmElmtId);
        this.__numberList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__keyboardType.aboutToBeDeleted();
        this.__enableClose.aboutToBeDeleted();
        this.__titleLabel.aboutToBeDeleted();
        this.__numberList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    public onTapClose: () => void;
    public onTapKey: (type: KeyType, value?: string) => Promise<void>;
    public __keyboardType: SynchedPropertySimpleOneWayPU<KeyboardType>;
    get keyboardType() {
        return this.__keyboardType.get();
    }
    set keyboardType(newValue: KeyboardType) {
        this.__keyboardType.set(newValue);
    }
    public __enableClose?: SynchedPropertySimpleOneWayPU<boolean>;
    get enableClose() {
        return this.__enableClose.get();
    }
    set enableClose(newValue: boolean) {
        this.__enableClose.set(newValue);
    }
    public __titleLabel?: SynchedPropertySimpleOneWayPU<ResourceStr>;
    get titleLabel() {
        return this.__titleLabel.get();
    }
    set titleLabel(newValue: ResourceStr) {
        this.__titleLabel.set(newValue);
    }
    private __numberList: ObservedPropertyObjectPU<string[]>;
    get numberList() {
        return this.__numberList.get();
    }
    set numberList(newValue: string[]) {
        this.__numberList.set(newValue);
    }
    aboutToAppear(): void {
    }
    proxyValue(index: number): string {
        return this.numberList[index];
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: FlexDirection.Row,
                justifyContent: FlexAlign.SpaceBetween,
                alignItems: ItemAlign.Center
            });
            Flex.padding({ left: 16, right: 16 });
            Flex.height(26);
            Flex.onClick(() => {
                if (this.enableClose) {
                    this.onTapClose?.();
                }
            });
            Flex.backgroundColor(Color.White);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(20);
            Row.height(20);
        }, Row);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.titleLabel);
            Text.fontSize(12);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777313, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
            Image.opacity(this.enableClose ? 1 : 0);
        }, Image);
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            __Row__keyRowStyle();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[0]);
            __Button__keyColumnStyle();
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(0)));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[1]);
            __Button__keyColumnStyle();
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(1)));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[2]);
            __Button__keyColumnStyle(true);
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(2)));
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            __Row__keyRowStyle();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[3]);
            __Button__keyColumnStyle();
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(3)));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[4]);
            __Button__keyColumnStyle();
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(4)));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[5]);
            __Button__keyColumnStyle(true);
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(5)));
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            __Row__keyRowStyle();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[6]);
            __Button__keyColumnStyle();
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(6)));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[7]);
            __Button__keyColumnStyle();
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(7)));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[8]);
            __Button__keyColumnStyle(true);
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(8)));
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            __Row__keyRowStyle();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.keyboardType == KeyboardType.ID_NUMBER ? 'X' : '');
            __Button__keyColumnStyle();
            Button.enabled(this.keyboardType == KeyboardType.ID_NUMBER);
            Button.backgroundColor(this.keyboardType == KeyboardType.ID_NUMBER ? Color.White : '#F0F0F0');
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, 'X'));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.numberList[9]);
            __Button__keyColumnStyle();
            Button.onClick(() => this.onTapKey?.(KeyType.VALUE, this.proxyValue(9)));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.width('33.333%');
            Button.height('100%');
            Button.padding(0);
            Button.backgroundColor(Color.White);
            Button.onClick(() => this.onTapKey?.(KeyType.DEL));
            Button.type(ButtonType.Normal);
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777314, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.width(30);
        }, Image);
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Button__keyColumnStyle(last?: boolean): void {
    Button.width('33.333%');
    Button.fontSize(30);
    Button.padding(0);
    Button.type(ButtonType.Normal);
    Button.height('100%');
    Button.fontColor('#666666');
    Button.border({
        width: {
            right: last ? 0 : 1,
        },
        color: '#30333333'
    });
    Button.backgroundColor(Color.White);
}
function __Row__keyRowStyle(): void {
    Row.width('100%');
    Row.height('calc((100% - 26vp) / 4)');
    Row.border({
        width: {
            top: 1,
        },
        color: '#30333333'
    });
}
export enum KeyboardType {
    NUMBER = 0,
    ID_NUMBER = 1,
    PASSWORD = 2,
    RANDOM_PASSWORD = 3
}
export enum KeyType {
    VALUE = 0,
    DEL = 1
}
