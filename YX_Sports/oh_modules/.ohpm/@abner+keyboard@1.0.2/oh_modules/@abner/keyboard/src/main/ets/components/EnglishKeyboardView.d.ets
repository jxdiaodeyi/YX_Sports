// @keepTs
// @ts-nocheck
/**
 * AUTHOR:AbnerMing
 * DATE:2024/10/30
 * INTRODUCE:英文键盘
 * */
@Component
export declare struct EnglishKeyboardView {
    bgColor: ResourceColor;
    englishBgColor: ResourceColor;
    otherBgColor: ResourceColor;
    rectBorderWidth: Length;
    rectBorderRadius: Length;
    rectTextSize: Length;
    rectTextColor: ResourceColor;
    deleteIconWidth: Length;
    deleteIconSrc: PixelMap | ResourceStr | DrawableDescriptor;
    rectHeight: Length;
    marginTop: Length;
    marginBottom: Length;
    onItemClick?: (item: string) => void;
    onDelete?: () => void;
    onComplete?: () => void;
    onChinese?: () => void;
    onSpace?: () => void;
    onNumber?: () => void;
    build(): void;
}
