// @keepTs
// @ts-nocheck
/**
 * AUTHOR:AbnerMing
 * DATE:2024/10/24
 * INTRODUCE:自定义车牌字母键盘
 * */
@Component
export declare struct LicensePlateLetterView {
    mNumberList: string[];
    mEnglishList: string[];
    rowsGap: Length;
    columnsGap: Length;
    columnSize: number;
    bgColor: ResourceColor;
    marginLeft: Length;
    marginRight: Length;
    onItemClick?: (item: string, index: number) => void;
    onDelete?: () => void;
    onComplete?: (item: string) => void;
    rectHeight: Length;
    titleHeight: Length;
    rootHeight: number;
    gridMarginTop: Length;
    gridMarginBottom: Length;
    layoutOptions: GridLayoutOptions;
    completeTextColor?: ResourceColor;
    completeFontSize?: number | string | Resource;
    isShowComplete?: boolean;
    @State
    itemSelectedArray: boolean[];
    rectBgColor: ResourceColor;
    rectSelectBgColor: ResourceColor;
    itemLastPosition: number;
    rectBorderWidth: Length;
    rectBorderRadius: Length;
    rectBorderColor: ResourceColor;
    rectBorderSelectColor: ResourceColor;
    rectTextSize: Length;
    rectTextColor: ResourceColor;
    rectSelectTextColor: ResourceColor;
    numProhibit: boolean;
    numProhibitColor: ResourceColor;
    deleteIconWidth: Length;
    deleteIconSrc: PixelMap | ResourceStr | DrawableDescriptor;
    aboutToAppear(): void;
    build(): void;
}
