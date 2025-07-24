if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { SpinType } from "@normalized:N&&&@pura/spinkit/src/main/ets/SpinType&1.0.5";
import { SpinA } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinA&1.0.5";
import { SpinB } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinB&1.0.5";
import { SpinC } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinC&1.0.5";
import { SpinD } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinD&1.0.5";
import { SpinE } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinE&1.0.5";
import { SpinF } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinF&1.0.5";
import { SpinG } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinG&1.0.5";
import { SpinH } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinH&1.0.5";
import { SpinI } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinI&1.0.5";
import { SpinJ } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinJ&1.0.5";
import { SpinK } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinK&1.0.5";
import { SpinL } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinL&1.0.5";
import { SpinM } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinM&1.0.5";
import { SpinN } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinN&1.0.5";
import { SpinO } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinO&1.0.5";
import { SpinQ } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinQ&1.0.5";
import { SpinP } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinP&1.0.5";
import { SpinR } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinR&1.0.5";
import { SpinS } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinS&1.0.5";
import { SpinT } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinT&1.0.5";
import { SpinU } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinU&1.0.5";
import { SpinV } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinV&1.0.5";
import { SpinW } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinW&1.0.5";
import { SpinX } from "@normalized:N&&&@pura/spinkit/src/main/ets/components/SpinX&1.0.5";
export class SpinKit extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.initParam("spinColor", (params && "spinColor" in params) ? params.spinColor : Color.White);
        this.initParam("spinType", (params && "spinType" in params) ? params.spinType : SpinType.spinA);
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("spinSize", (params && "spinSize" in params) ? params.spinSize : 36);
        this.resetParam("spinColor", (params && "spinColor" in params) ? params.spinColor : Color.White);
        this.resetParam("spinType", (params && "spinType" in params) ? params.spinType : SpinType.spinA);
    }
    @Param
    readonly spinSize: number;
    @Param
    readonly spinColor: ResourceColor;
    @Param
    readonly spinType: SpinType;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.spinType == SpinType.spinA) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinA(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 60, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinA" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinB) {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinB(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 62, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinB" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinC) {
                this.ifElseBranchUpdateFunction(2, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinC(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 64, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinC" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinD) {
                this.ifElseBranchUpdateFunction(3, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinD(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 66, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinD" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinE) {
                this.ifElseBranchUpdateFunction(4, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinE(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 68, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinE" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinF) {
                this.ifElseBranchUpdateFunction(5, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinF(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 70, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinF" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinG) {
                this.ifElseBranchUpdateFunction(6, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinG(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 72, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinG" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinH) {
                this.ifElseBranchUpdateFunction(7, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinH(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 74, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinH" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinI) {
                this.ifElseBranchUpdateFunction(8, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinI(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 76, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinI" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinJ) {
                this.ifElseBranchUpdateFunction(9, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinJ(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 78, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinJ" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinK) {
                this.ifElseBranchUpdateFunction(10, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinK(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 80, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinK" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinL) {
                this.ifElseBranchUpdateFunction(11, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinL(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 82, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinL" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinM) {
                this.ifElseBranchUpdateFunction(12, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinM(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 84, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinM" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinN) {
                this.ifElseBranchUpdateFunction(13, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinN(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 86, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinN" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinO) {
                this.ifElseBranchUpdateFunction(14, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinO(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 88, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinO" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinP) {
                this.ifElseBranchUpdateFunction(15, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinP(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 90, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinP" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinQ) {
                this.ifElseBranchUpdateFunction(16, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinQ(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 92, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinQ" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinR) {
                this.ifElseBranchUpdateFunction(17, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinR(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 94, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinR" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinS) {
                this.ifElseBranchUpdateFunction(18, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinS(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 96, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinS" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinT) {
                this.ifElseBranchUpdateFunction(19, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinT(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 98, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinT" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinU) {
                this.ifElseBranchUpdateFunction(20, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinU(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 100, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinU" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinV) {
                this.ifElseBranchUpdateFunction(21, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinV(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 102, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinV" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinW) {
                this.ifElseBranchUpdateFunction(22, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinW(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 104, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinW" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinX) {
                this.ifElseBranchUpdateFunction(23, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SpinX(this, { spinSize: this.spinSize, spinColor: this.spinColor }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@pura+spinkit@1.0.5/oh_modules/@pura/spinkit/src/main/ets/components/SpinKit.ets", line: 106, col: 7 });
                                ViewV2.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        spinSize: this.spinSize,
                                        spinColor: this.spinColor
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    spinSize: this.spinSize, spinColor: this.spinColor
                                });
                            }
                        }, { name: "SpinX" });
                    }
                });
            }
            else if (this.spinType == SpinType.spinY) {
                this.ifElseBranchUpdateFunction(24, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Progress.create({ value: 0, total: 100, type: ProgressType.Ring });
                        Progress.height(this.spinSize);
                        Progress.width(this.spinSize);
                        Progress.color(this.spinColor);
                        Progress.style({ strokeWidth: this.spinSize * 0.12, status: ProgressStatus.LOADING });
                    }, Progress);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(25, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        LoadingProgress.create();
                        LoadingProgress.height(this.spinSize);
                        LoadingProgress.width(this.spinSize);
                        LoadingProgress.color(this.spinColor);
                    }, LoadingProgress);
                });
            }
        }, If);
        If.pop();
    }
    public updateStateVars(params) {
        if (params === undefined) {
            return;
        }
        if ("spinSize" in params) {
            this.updateParam("spinSize", params.spinSize);
        }
        if ("spinColor" in params) {
            this.updateParam("spinColor", params.spinColor);
        }
        if ("spinType" in params) {
            this.updateParam("spinType", params.spinType);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
