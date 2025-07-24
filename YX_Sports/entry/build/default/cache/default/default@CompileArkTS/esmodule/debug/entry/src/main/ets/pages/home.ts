if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Home_Params {
    datas?: Type1[];
    data2?: Type2[];
    data3?: Type3[];
    colors?: string[];
    isloading?: boolean;
}
import router from "@ohos:router";
interface Type1 {
    img: Resource;
    name: string;
    time: number;
    num: number;
}
interface Type2 {
    img2: Resource;
}
interface Type3 {
    img3: Resource;
    name3: string;
    time3: number;
    num3: number;
}
export class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.datas = [
            { img: { "id": 16777255, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: "帕梅拉15分钟快乐舞蹈", time: 3, num: 70 },
            { img: { "id": 16777255, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: "帕梅拉15分钟快乐舞蹈", time: 3, num: 70 },
            { img: { "id": 16777255, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name: "帕梅拉15分钟快乐舞蹈", time: 3, num: 70 }
        ];
        this.data2 = [
            { img2: { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" } },
            { img2: { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" } },
            { img2: { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" } }
        ];
        this.data3 = [
            { img3: { "id": 16777258, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name3: '15分钟迷人肩颈背全套打造改善圆肩驼背', time3: 3, num3: 70 },
            { img3: { "id": 16777258, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name3: '15分钟迷人肩颈背全套打造改善圆肩驼背', time3: 3, num3: 70 },
            { img3: { "id": 16777258, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name3: '15分钟迷人肩颈背全套打造改善圆肩驼背', time3: 3, num3: 70 },
            { img3: { "id": 16777258, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name3: '15分钟迷人肩颈背全套打造改善圆肩驼背', time3: 3, num3: 70 },
            { img3: { "id": 16777258, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name3: '15分钟迷人肩颈背全套打造改善圆肩驼背', time3: 3, num3: 70 },
            { img3: { "id": 16777258, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" }, name3: '15分钟迷人肩颈背全套打造改善圆肩驼背', time3: 3, num3: 70 }
        ];
        this.colors = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];
        this.__isloading = new ObservedPropertySimplePU(false, this, "isloading");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Home_Params) {
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
        if (params.data2 !== undefined) {
            this.data2 = params.data2;
        }
        if (params.data3 !== undefined) {
            this.data3 = params.data3;
        }
        if (params.colors !== undefined) {
            this.colors = params.colors;
        }
        if (params.isloading !== undefined) {
            this.isloading = params.isloading;
        }
    }
    updateStateVars(params: Home_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isloading.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isloading.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private datas: Type1[];
    private data2: Type2[];
    private data3: Type3[];
    pameila(data: Type1, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding(5);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(data.img);
            Image.width(200);
            Image.height(150);
            Image.borderRadius(12);
            Image.onClick(() => {
                router.pushUrl({ url: "pages/class" });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.name);
            Text.fontSize(15);
            Text.fontWeight(5);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('k1初学.' + data.time + '分钟.' + data.num + '千卡');
            Text.fontSize(10);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    majiax(data: Type2, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(data.img2);
            Image.width(200);
            Image.height(200);
            Image.borderRadius(12);
            Image.onClick(() => {
                router.pushUrl({ url: "pages/class" });
            });
        }, Image);
    }
    quanbu(data: Type3, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.backgroundColor(this.colors[Math.floor(Math.random() * 3)]);
            Row.padding(5);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(data.img3);
            Image.width(100);
            Image.height(100);
            Image.borderRadius(12);
            Image.onClick(() => {
                router.pushUrl({ url: "pages/class" });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(data.name3);
            Text.fontSize(15);
            Text.fontWeight(5);
            Text.width(200);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.width('22%');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('k1初学.' + data.time3 + '分钟.' + data.num3 + '千卡');
            Text.fontSize(10);
            Text.width(300);
            Text.fontSize(12);
            Text.padding(10);
            Text.lineHeight(20);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
    }
    private colors: string[];
    private __isloading: ObservedPropertySimplePU<boolean>;
    get isloading() {
        return this.__isloading.get();
    }
    set isloading(newValue: boolean) {
        this.__isloading.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.padding('10');
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.height(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('课程');
            Text.fontSize(30);
            Text.width('90%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Search.create();
            Search.backgroundColor('#FFFFFF');
            Search.height(40);
            Search.width(40);
            Search.onClick(() => {
                // 点击跳转到搜索页面
                router.pushUrl({ url: 'pages/sousuo' }); // 目标页面路径
            });
        }, Search);
        Search.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.scrollBar(BarState.Off);
            Scroll.height('90%');
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 15 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.width(300);
            Swiper.height(300);
            Swiper.autoPlay(true);
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.onClick(() => {
                router.pushUrl({ url: "pages/class" });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.yxsport", "moduleName": "entry" });
            Image.onClick(() => {
                router.pushUrl({ url: "pages/class" });
            });
        }, Image);
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.width('100%');
            Scroll.scrollBar(BarState.Off);
            Scroll.scrollable(ScrollDirection.Horizontal);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.pameila.bind(this)(item);
            };
            this.forEachUpdateFunction(elmtId, this.datas, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('为你推荐');
            Text.fontSize(20);
            Text.width('70%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('查看更多');
            Button.height(20);
            Button.backgroundColor('#FFFFFF');
            Button.fontColor('#2B2B2B');
            Button.borderColor('#2B2B2B');
            Button.border({ width: 1 });
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.width('100%');
            Scroll.scrollBar(BarState.Off);
            Scroll.scrollable(ScrollDirection.Horizontal);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 15 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item2 = _item;
                this.majiax.bind(this)(item2);
            };
            this.forEachUpdateFunction(elmtId, this.data2, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('全部课程');
            Text.fontSize(30);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.width('80%');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.height('80%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.scrollBar(BarState.Off);
            List.onScrollIndex((start: number, end: number) => {
                if (end == this.data3.length - 1) {
                    this.isloading = true;
                    setTimeout(() => {
                        this.isloading = false;
                    }, 2000);
                }
            });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item3 = _item;
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
                        this.quanbu.bind(this)(item3);
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.data3, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isloading) {
                this.ifElseBranchUpdateFunction(0, () => {
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
                                Row.create({ space: 10 });
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create();
                                Text.width('30%');
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create('加载中');
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                LoadingProgress.create();
                                LoadingProgress.width(50);
                                LoadingProgress.height(50);
                            }, LoadingProgress);
                            Row.pop();
                            ListItem.pop();
                        };
                        this.observeComponentCreation2(itemCreation2, ListItem);
                        ListItem.pop();
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        List.pop();
        Column.pop();
        Column.pop();
        Column.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
