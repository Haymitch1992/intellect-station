<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/style/index.css';
const drag = ref(null);
console.log(drag);
const data = {
  // 节点
  nodes: [
    {
      id: 50,
      type: 'rect',
      x: 100,
      y: 150,
      text: '你好',
    },
    {
      id: 21,
      type: 'circle',
      x: 300,
      y: 150,
    },
  ],
  // 边
  edges: [
    {
      type: 'polyline',
      sourceNodeId: 50,
      targetNodeId: 21,
    },
  ],
};

onMounted(() => {
  const lf = new LogicFlow({
    // container: drag.value as any,
    container: document.getElementById('drag') as HTMLElement,
    stopScrollGraph: true,
    stopZoomGraph: true,
    width: 500,
    height: 500,
    grid: {
      type: 'dot',
      size: 20,
    },
  });
  lf.render(data);
});
</script>

<template>
  <div class="container">
    <div ref="drag" class="darg-box" id="drag"></div>
  </div>
</template>

<style lang="scss" scoped>
.darg-box {
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
}
</style>
