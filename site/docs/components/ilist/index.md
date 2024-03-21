# Infinite Scrolling 虚拟无限滚动

永远不会到底吗？确实

## 基本使用

`on-scroll-end` 滚动到底触发执行函数

<script lang="ts" setup>
  import { ref } from 'vue'
  const dataList = [
  { id: 1, name: 'John Doe', message: 'Hello world!' },
  { id: 2, name: 'Jane Smith', message: 'Vue is awesome!' },
  // ...更多数据
];
</script>

<ol-infinite1 :data="dataList" :height="500" :itemHeight="50">
    <template #default="{ item }">
      <!-- 这里定义了列表每一项的布局和内容 -->
      <div class="list-item">
        <h3>{{ item.name }}</h3>
        <p>{{ item.message }}</p>
      </div>
    </template>
</ol-infinite1>

<style scoped>
  .list-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
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

