<template>
    <button :class="computedCls" @click="onClick" :disabled="props.disabled">
        <slot></slot>
    </button>
</template>
  
  
<script lang="ts" setup name="olButton">
  import { computed } from 'vue'
  import { buttonProps } from './button'
/*   import "uno.css"; */
  import './index.less'
  const props = defineProps(buttonProps)
  const emits = defineEmits(['click'])
  //通过props中的type, disabled计算出类名进行添加
  const computedCls = computed(() => { 
    const { type, disabled } = props
    return [
      'ol-button',
      `ol-button-${type}`,
      {
        'ol-button-disabled': disabled,
      },
      /* `
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
      border-none 
      cursor-pointer 
      ` */
    ]
  })
  
  //动态计算图标颜色
  const iconColor = computed(() => {
    if (!props.type || props.type === 'default') return ''
    return '#ffffff'
  })
  
  //
  const onClick = () => {
    emits('click')
  }
  
  defineExpose({
    /** @description button type */
    type: props.type,
  })  
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ol-button"
});
</script>
  
  