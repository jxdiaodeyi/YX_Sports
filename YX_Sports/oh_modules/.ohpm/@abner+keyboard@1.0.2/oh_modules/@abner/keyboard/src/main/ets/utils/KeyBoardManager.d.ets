// @keepTs
// @ts-nocheck
/**
 * AUTHOR:AbnerMing
 * DATE:2024/10/18
 * INTRODUCE:键盘管理器
 * */
export declare class KeyBoardManager {
    private static keyBoardManager;
    private mComponentContentArray;
    private constructor();
    static getInstance(): KeyBoardManager;
    openLicensePlate(): void;
    private openDialog;
    hideDialog(): void;
}
