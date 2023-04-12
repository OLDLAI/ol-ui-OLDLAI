# 按钮


用于操作
```javascript
import { olButton } from 'olui1'
```
## 普通按钮
<div>
    <ol-button ol-button style="margin: 12px;">默认按钮</ol-button>
    <ol-button type="primary" style="margin: 12px;">主要按钮</ol-button>
    <ol-button type="success" style="margin: 12px;">成功按钮</ol-button>
    <ol-button type="warning" style="margin: 12px;">警告按钮</ol-button>
    <ol-button type="danger" style="margin: 12px;">危险按钮</ol-button> 
</div>
  

::: details 显示代码

```html
<template>
  <div>
    <ol-button style="margin: 12px;">默认按钮</ol-button>
    <ol-button type="primary" style="margin: 12px;">主要按钮</ol-button>
    <ol-button type="success" style="margin: 12px;">成功按钮</ol-button>
    <ol-button type="warning" style="margin: 12px;">警告按钮</ol-button>
    <ol-button type="danger" style="margin: 12px;">危险按钮</ol-button> 
  </div>
</template> 
```
:::

## 带图标
  <ol-button icon="#icon-guanbi2" style="margin: 12px;"></ol-button>
  <ol-button type="primary" style="margin: 12px;">
    <ol-icon name="#icon-zhibo" />
    播放
  </ol-button>
  <ol-button type="success" style="margin: 12px;">
    <ol-icon color="#ffffff" name="#icon-xiazai" />
    下载
  </ol-button>
  <ol-button type="danger" style="margin: 12px;">
    <ol-icon color="#ffffff" name="#icon-guanbi2" />
    关闭
  </ol-button>
  

:::details 点击展开

```html
  <ol-button icon="add">按钮</ol-button>
  <ol-button>
    <ol-icon name="icon-guanbi4" />
    按钮
  </ol-button>
  <ol-button type="primary">
    <ol-icon color="#ffffff" name="icon-guanbi21" />
    按钮
  </ol-button>
  <ol-button type="danger">
    <ol-icon color="#ffffff" name="icon-guanbixiao" />
    按钮
  </ol-button>
```

:::