import type { InputFilter } from '../model/InputFilter';
/**
 * 给TextArea 设置过滤器
 */
export class TextAreaModifier implements AttributeModifier<TextAreaAttribute> {
    inputFilter?: InputFilter; //通过正则表达式设置输入过滤器。
    applyNormalAttribute(instance: TextAreaAttribute): void {
        if (this.inputFilter) {
            instance.inputFilter(this.inputFilter.value, this.inputFilter.error);
        }
    }
}
