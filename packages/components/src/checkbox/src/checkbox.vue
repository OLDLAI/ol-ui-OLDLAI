<script lang="ts" setup name="IkCheckbox">
import { computed, inject, getCurrentInstance, ref } from 'vue'
import type { Ref, ComponentInternalInstance, WritableComputedRef } from 'vue'

import { checkboxProps, checkboxEmits } from './checkbox'


const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)
// const slots = useSlots()
// const selfModel = ref(false)




const isChecked = computed((): boolean => {
  const val = modelValue.value
  if (Array.isArray(val)) {
    return val.includes(props.label)
  } else if (typeof val === 'boolean') {
    return val
  }
  return (val === props.label) as boolean
})

const classList = computed(() => {
  return [
    'ik-checkbox',
    `ik-checkbox__${checkboxGroupInjectData.value?.size}`,
    {
      'ik-checkbox--selected': isChecked.value,
      'ik-checkbox--bordered': checkboxGroupInjectData.value?.border,
      'ik-checkbox--disabled': props.disabled || checkboxGroupInjectData.value?.disabled,
    },
  ]
})
</script>

<template>
  <label :class="classList">
    <span class="ik-checkbox-inner">
      <input v-model="modelValue" type="checkbox" class="ik-checkbox-input" :value="label" />
      <span class="ik-checkbox-icon"></span>
      <span class="ik-checkbox-label">
        <slot />
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
    </span>
  </label>
</template>
