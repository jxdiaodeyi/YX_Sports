// @keepTs
// @ts-nocheck
/**
 * AUTHOR:AbnerMing
 * DATE:2024/10/24
 * INTRODUCE:股票代码键盘
 * */
@Component
export declare struct StockCodeView {
    private mCodeList;
    bgColor: ResourceColor;
    codeBgColor: ResourceColor;
    numberColor: ResourceColor;
    notNumberColor: ResourceColor;
    rootHeight: number;
    rectHeight: Length;
    rowsGap: Length;
    columnsGap: Length;
    gridMarginTop: Length;
    gridMarginBottom: Length;
    rectBorderRadius: Length;
    onItemClick?: (item: string, index: number) => void;
    onDelete?: () => void;
    onHide?: () => void;
    onClear?: () => void;
    onConfirm?: () => void;
    columnSize: number;
    marginLeft: Length;
    marginRight: Length;
    deleteIconWidth: Length;
    deleteIconSrc: PixelMap | ResourceStr | DrawableDescriptor;
    rectTextSize: Length;
    rectTextColor: ResourceColor;
    aboutToAppear(): void;
    build(): void;
}
