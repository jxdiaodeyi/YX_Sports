import type { InputFilter } from '../model/InputFilter';
/**
 * 给TextInput 设置过滤器
 */
export class TextInputModifier implements AttributeModifier<TextInputAttribute> {
    inputFilter?: InputFilter; //通过正则表达式设置输入过滤器。
    applyNormalAttribute(instance: TextInputAttribute): void {
        if (this.inputFilter) {
            instance.inputFilter(this.inputFilter.value, this.inputFilter.error);
        }
    }
}
