# 输入框

## 基本使用

通常可以直接使用内置指令`v-model`实现双向绑定
<ol-input v-model="inputValue1" placeholder="请输入" />
{{ inputValue1 }}
:::details 点击展开
```vue
<template>
  <ol-input v-model="inputValue1" placeholder="请输入" />
</template>
```
:::

## 清除图标

直接添加`hasClear`属性可使输入框带有清除图标
<ol-input v-model="inputValue2" hasClear placeholder="请输入" />

:::details 点击展开

```vue
<script setup lang="ts">
import { ref } from 'vue'
const inputValue2 = ref('这里可直接清除')
</script>
<template>
  <ol-input v-model="inputValue2" placeholder="请输入" />
</template>
```

:::

<script setup lang="ts">
  import { ref } from 'vue'
  const inputValue1 = ref('')
  const inputValue2 = ref('这里可直接清除')
</script>
