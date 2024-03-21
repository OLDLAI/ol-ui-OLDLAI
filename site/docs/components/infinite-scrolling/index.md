
<ol-infinite1 :data="basicData" :item-height="50">
                <template #default="{ item }">
                    <div class="item" style="text-align: center; height: 50px">
                        {{ item }}
                    </div> 
                </template>
</ol-infinite1>
<div class="com-virtualscroll-container">
  <div class="flex-container">
      <div class="flex-item">
            <p>固定高度</p>
            <div class="hezi" >
            <ol-infinite1 :data="basicData" :item-height="50">
                <template #default="{ item }">
                    <div class="item" style="text-align: center; height: 50px">
                        {{ item }}
                    </div> 
                </template>
            </ol-infinite1>
            </div>
    </div>
    <div class="flex-item">
            <p>动态高度</p>
      <div class="hezi">
            <ol-infinite1 :data="data" :item-height="50" dynamic>
                <template #default="{ item }">
                    <div class="item">
                        {{ item }}
                    </div>
                </template>
            </ol-infinite1>
      </div>      
    </div>
  </div>
</div>

<script lang="ts" setup>
import { ref } from 'vue';
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

<style lang="less" scoped>
.item {
    line-height: 25px;
    text-align: left;
    box-sizing: border-box;
    padding: 10px 0;
}
.flex-container {
    display: flex;
}

.flex-item {
    flex: 1; /* 每个 flex-item 占用等宽度 */
    padding: 10px; /* 如果需要的话，可以调整间距 */
}
.hezi {
    height: 500px; /* 这是容器的高度，您可以根据需要进行调整 */
    overflow-y: auto; /* 这将确保当内容超出这个高度时会显示滚动条 */
}

</style>