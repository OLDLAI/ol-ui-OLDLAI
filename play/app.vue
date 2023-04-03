<template>

  <ol-button type="primary" >主要按钮</ol-button>
  <ol-button color="blue">蓝色按钮</ol-button>
  <ol-button color="green">绿色按钮</ol-button>
  <ol-button color="gray">灰色按钮</ol-button>
  <ol-button color="yellow">黄色按钮</ol-button>
  <ol-button color="red">红色按钮</ol-button>
  <ol-icon name="guanbi" />
  <ol-icon name="bofang3" />
  <ol-input v-model="inputValue2" hasClear placeholder="请输入" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
  const inputValue1 = ref('')
  const inputValue2 = ref('这里可直接清除')
</script>