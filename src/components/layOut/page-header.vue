<script setup lang="ts">
import { reactive, ref } from 'vue';
import dayjs from 'dayjs';
const systemTime = ref<string>('');
const timer = setInterval(() => {
  systemTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
}, 1000);
</script>

<template>
  <div class="container">
    <!-- <span>Intellect operation System</span> -->
    <h3>
      <span class="system-title" title="Intellect Station Operation System"
        >ISOS</span
      >
      <span>智慧车站运营系统</span>
      <span class="system-time">{{ systemTime }}</span>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.container {
  color: #fff;
  font-size: 14px;
  background-color: $background-color-primary;
  font-weight: normal;
  line-height: 60px;
  padding: 0 20px;
  .system-title {
    margin-right: 10px;
  }
  .system-time {
    float: right;
  }
}
</style>
