<script lang="ts" setup name="olInput">
import { computed, ref, WritableComputedRef } from 'vue'
import { InputProps, Emits } from './input'
import './style/index.less'
const props = defineProps(InputProps)
const emit = defineEmits(Emits)
const inputRef = ref()
const isFocus = ref<boolean>(false)

const onInput = (e: Event): void => {
  const tar = e.target as HTMLInputElement
  emit('change', tar.value)
}

const model: WritableComputedRef<unknown> = computed({
  //双向绑定
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
const computedCls = computed(() => {
  return [
    'ol-input-wrapper',
    {
      'ol-input__focus': isFocus.value,
      'ol-input__hasClear': props.hasClear,
    },
  ]
})
const onClear = () => {
  console.log('clear')
  emit('update:modelValue', '')
  inputRef.value.focus()
  inputRef.value.value = ''
}
const onFocus = () => {
  isFocus.value = true
}
const onBlur = () => {
  isFocus.value = false
}
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ol-input"
});
</script>

<template>
    <div :class="computedCls">
      <div v-if="false">前缀</div>
      <div class="ol-input__inner" tabindex="1">
        <input
          v-model="model"
          @focus="onFocus"
          @blur="onBlur"
          @input="onInput"
          class="ol-input"
          :placeholder="placeholder"
          type="text"
          ref="inputRef"
        />
      </div>
      <div v-if="hasClear && model" class="after-inner">
        <ol-icon :size="18" name="icon-guanbi" @click="onClear" />
        <ol-icon/>
        <!-- <ol-button @click="onClear" type="primary">清除</ol-button> -->
      </div>
      <div v-if="hasClear && model" class="after-inner">
        <ol-icon :size="18" name="delete-filling" @click="onClear" />
        <ol-icon :size="18" name="bofang1" @click="onClear" />
      </div>
    </div>
</template>