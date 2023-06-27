<template>
    <button :class="computedCls" @click="onClick" :disabled="props.disabled">
        <span class="ol-button_inner">
          <ol-icon v-if="icon" :name="props.icon" :color="iconColor"></ol-icon>
          <slot></slot>
        </span>
    </button>
</template>
  
  
<script lang="ts" setup name="olButton">
  import { computed } from 'vue'
  import { buttonProps } from './button'
  import './style/index.less'
  const props = defineProps(buttonProps)
  const emits = defineEmits(['click'])
  //通过props中的 type, disabled 计算出类名进行添加
  const computedCls = computed(() => { 
    const { type, disabled } = props
    return [
      'ol-button',
      `ol-button-${type}`,
      {
        'ol-button-disabled': disabled,
      },
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
  
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({  
  name: "ol-button"
});
</script>
  
  