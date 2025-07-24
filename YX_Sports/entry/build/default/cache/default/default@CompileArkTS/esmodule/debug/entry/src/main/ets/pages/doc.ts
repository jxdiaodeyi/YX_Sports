if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Start_Params {
    index?: number;
}
import { doc1 } from "@normalized:N&&&entry/src/main/ets/pages/doc1&";
class Start extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__index = new ObservedPropertySimplePU(1
        // aboutToAppear(): void {
        //   let id=setInterval(()=>{
        //     this.time--
        //     if(this.time==0){
        //       clearInterval(id)
        //       router.pushUrl({url:'pages/index'})//保存原页面
        //       router.replace({url:'pages/index'})//不保存原页面
        //       router.back()
        //     }
        //   },1000)
        // }
        , this, "index");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Start_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params: Start_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__index.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __index: ObservedPropertySimplePU<number>;
    get index() {
        return this.__index.get();
    }
    set index(newValue: number) {
        this.__index.set(newValue);
    }
    // aboutToAppear(): void {
    //   let id=setInterval(()=>{
    //     this.time--
    //     if(this.time==0){
    //       clearInterval(id)
    //       router.pushUrl({url:'pages/index'})//保存原页面
    //       router.replace({url:'pages/index'})//不保存原页面
    //       router.back()
    //     }
    //   },1000)
    // }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new doc1(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/doc.ets", line: 25, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "doc1" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Start";
    }
}
registerNamedRoute(() => new Start(undefined, {}), "", { bundleName: "com.example.yxsport", moduleName: "entry", pagePath: "pages/doc", pageFullPath: "entry/src/main/ets/pages/doc", integratedHsp: "false", moduleType: "followWithHap" });
