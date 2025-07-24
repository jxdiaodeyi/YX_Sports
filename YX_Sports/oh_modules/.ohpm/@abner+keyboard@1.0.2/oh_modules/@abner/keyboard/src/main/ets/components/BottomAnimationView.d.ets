// @keepTs
// @ts-nocheck
@Component
export declare struct BottomAnimationView {
    @BuilderParam
    layout?: () => void;
    @State
    private _privateTransitionY;
    @State
    private _privateIsVisibility;
    @State
    bottomNavigationHeight: number;
    build(): void;
    private hideDialog;
}
