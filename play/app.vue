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
  <ol-button>
    <ol-icon name="guanbi2" />
    按钮
  </ol-button>
  <ol-button type="primary">
    <ol-icon color="#ffffff" name="guanbi4" />
    按钮
  </ol-button>


<ol-infinite1 :data="basicData" :item-height="50">
                <template #default="{ item }">
                    <div class="item" style="text-align: center; height: 50px">
                        {{ item }}
                    </div> 
                </template>
</ol-infinite1>



</template>

<script lang="ts" setup>
import { ref } from 'vue'
  const inputValue1 = ref('')
  const inputValue2 = ref('这里可直接清除')
  
  const dataList = [
  { id: 1, name: 'John Doe', message: 'Hello world!' },
  { id: 2, name: 'Jane Smith', message: 'Vue is awesome!' },
  ];

const basicData = ref<number[]>([]);
const data = ref<any[]>([]);

for (let i = 0; i < 100000; i++) {
    basicData.value.push(i);

    // 用随机文本生成器替代 Random.cparagraph
    data.value.push(i + 1 + ". " + generateRandomText());
}

// 这个函数将生成一个简单的随机文本段落
function generateRandomText() {
    const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
    let result = "";
    for (let i = 0; i < 40; i++) {
        result += words[Math.floor(Math.random() * words.length)] + " ";
    }
    return result.trim();
}
</script>