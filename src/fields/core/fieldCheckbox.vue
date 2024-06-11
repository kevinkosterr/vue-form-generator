<template lang="pug">
//	@Update:modelValue is added as a hack for the Vue-compat build to prevent `el[assignKey] is undefined`.
input(:id="getFieldID(schema)", @Update:modelValue="" type="checkbox", v-model="value", :autocomplete="schema.autocomplete", :disabled="disabled", :name="schema.inputName", :class="schema.fieldClasses", :required="schema.required", v-attributes="'input'")
</template>

<script>
import abstractField from "../abstractField";

export default {
	mixins: [abstractField]
};
</script>

<style lang="scss">
.vue-form-generator .field-checkbox input {
	margin-left: 12px;
}
</style>
