<script lang="ts" setup name="FInfiniteScrolling">
  import { Props } from './props'
  import { ref } from 'vue'
  import './style/index.less'
/*   import { useRun } from '../../_hooks' */
  const prop = defineProps(Props)

/**
 * useRun 返回值类型接口
 *
 * @param { Function } run 执行方法
 */
 interface UseRunReturn {
  run: <T extends Function>(callback: T | null | undefined, ...params: unknown[]) => void
}

/**
 * 执行方法
 */
 const useRun = (): UseRunReturn => {
  /**
   * 执行方法函数
   *
   * @param { Function } callback 回调函数
   * @param { string } params 回调参数
   */
  const run = <T extends Function>(
    callback: T | null | undefined,
    ...params: unknown[]
  ): void => {
    (callback) && callback(...params)
  }
  return { run }
}

  const { run } = useRun()

  /** 是否到达底部 */
  const target = ref(false)

  /** 元素节点 */
  const scrollEl = ref<HTMLDivElement>()

  /** 滚动触发 监听滚动事件的函数 */
  const scroll = (): void => {
    if (prop.loading) return

    /** 获取到元素节点 */
    const view: HTMLDivElement | undefined = scrollEl.value

    /** 如果没找到则直接拦截 */
    if (!view) return

    /**
     * 获取到滚动的距离 当前滚动距离
     */
    const viewScrollingDistance: number = Math.ceil(
      view.scrollTop + view.clientHeight + prop.distance
    )

    /** 滚动时回调 */
    run(prop.onScrollWhen, Math.ceil(view.scrollTop))

    /** 如果滚动的距离大于容器高度执行 */
    if (viewScrollingDistance >= view.scrollHeight && !target.value) {
      /* 批处理 触底时回调 */
      target.value = true
      run((distance: number): void => {
        prop.onScrollEnd(distance)
        target.value = false
      }, viewScrollingDistance)
    }
  }
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ol-infinite"
});
</script>
<template>
  <div ref="scrollEl" class="f-infinite-scrolling" :style="styles" @scroll="scroll">
    <slot />
    <div v-if="loading" class="f-infinite-scrolling__loading">加载中...</div>
  </div>
</template>
