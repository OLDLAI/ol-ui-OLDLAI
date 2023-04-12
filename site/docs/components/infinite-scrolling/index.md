# Infinite Scrolling 无限滚动

永远不会到底吗？确实

## 基本使用

`on-scroll-end` 滚动到底触发执行函数

<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(20)

  const onScrollEnd = (): void => {
    length.value += 10
  }
</script>

<ol-infinite :on-scroll-end="onScrollEnd">
    <div v-for="item in length" :key="item" class="item" style="">{{ item }}</div>
</ol-infinite>

<style scoped>
  .item {
    width: 100%;
    height: 40px;
    background: #96acf8;
    color: #fff;
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
  }
</style>



```html
<template>
  <f-infinite-scrolling :on-scroll-end="onScrollEnd">
    <div v-for="item in length" :key="item" class="item" style="">{{ item }}</div>
  </f-infinite-scrolling>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(20)

  const onScrollEnd = (): void => {
    length.value += 10
  }
</script>

<style scoped>
  .item {
    width: 100%;
    height: 40px;
    background-color: #96acf8;
    color: #fff;
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
  }
</style>
```





## Attributes

| 参数             | 说明               | 类型                                                                       | 可选值 | 默认值 |
| ---------------- | ------------------ | -------------------------------------------------------------------------- | ------ | ------ |
| `distance`       | 触发距离           | number                                                                     | ——     | 0      |
| `loading`        | 开启加载           | boolean                                                                    | ——     | false  |
| `styles`         | 滚动组件样式       | [CSSProperties](https://cn.vuejs.org/api/utility-types.html#cssproperties) | ——     | ——     |
| `on-scroll-end`  | 滚动到底触发的回调 | <a href="#scrollcallback">ScrollCallback</a>                               | ——     | ——     |
| `on-scroll-when` | 滚动时触发的回调   | <a href="#scrollcallback">ScrollCallback</a>                               | ——     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type {
  InfiniteScrollingInstance,
  InfiniteScrollingProps,
  ScrollCallback
} from 'fighting-design'
```

### ScrollCallback

```ts
type ScrollCallback = (distance: number) => void
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/HoldingTheGhostAtTheGrave" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/76578532?v=4" />
</a>


