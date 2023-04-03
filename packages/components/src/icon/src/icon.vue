<script lang="ts" name="olIcon" setup>
import { iconProps } from './icon'
import { computed, onMounted } from 'vue'
import './style/index.less'
import 'https:////at.alicdn.com/t/font_3439532_mj2vbrlosb.js'

const props = defineProps(iconProps)
onMounted(() => {
  import('https:////at.alicdn.com/t/c/font_3653999_v9boqzux0j.js')
  //at.alicdn.com/t/font_3439532_mj2vbrlosb.js
})
const style = computed(() => {
  const size = typeof props.size === 'string' ? props.size : `${props.size}px`
  return {
    fill: props.color,
    width: size,
    height: size,
  }
})
const classes = computed(() => {
  return ['ol-icon', props.class]
})
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ol-icon"
});
</script>

<template>
  <svg :class="classes" :style="style" aria-hidden="true">
    <use :xlink:href="`#icon-${props.name}`" />
  </svg>
</template>
