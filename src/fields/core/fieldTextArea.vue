<template lang="pug">
	textarea.form-control(
		v-model="value",
		:id="getFieldID(schema)",
		:class="schema.fieldClasses",
		:disabled="disabled",
		@Update:modelValue="value = $event"
		@ModelCompat:input="value = $event"
		@blur="onBlur",
		:maxlength="schema.max",
		:minlength="schema.min",
		:placeholder="schema.placeholder",
		:readonly="schema.readonly",
		:required="schema.required",
		:rows="schema.rows || 2",
		:name="schema.inputName",
		v-attributes="'input'")
</template>

<script>
import abstractField from "../abstractField";

export default {
	mixins: [abstractField],
	methods: {
		onBlur($event) {
			this.$emit("blur", $event.target.value, this.schema.model);
		}
	}
};
</script>


<style lang="scss">

</style>
