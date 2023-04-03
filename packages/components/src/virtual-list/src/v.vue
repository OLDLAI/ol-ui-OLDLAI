<script lang="ts">
import { defineComponent } from "vue";
import './style/index.less'
export default defineComponent({
  name: "ol-V"
});
</script>  

<template>
    <div class="hub-virtual-list">
      <!-- 显示高度 -->
      <div ref="virtualList" class="hub-virtual-list-show-height" @scroll="scrollEvent($event)">
        <!-- 全部高度，撑出滚动条 -->
        <div class="hub-virtual-list-all-height" :style="{height: allHeight + 'px'}"/>
        <!-- 存放显示数据 -->
        <div class="virtual-list" :style="{ transform: getTransform }"/>
      </div>
    </div>
</template>
  
  
