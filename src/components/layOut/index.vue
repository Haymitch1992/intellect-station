<script setup lang="ts">
import { reactive, ref } from 'vue';
import PageHeader from './page-header.vue';
import PageMenu from './menu.vue';
</script>

<template>
  <div class="container">
    <PageHeader></PageHeader>
    <div class="pageBody">
      <PageMenu></PageMenu>
      <router-view></router-view>
    </div>
    <!-- 头部标题 -->
    <!-- 左侧菜单 -->
  </div>
</template>

<style lang="scss" scoped>
.pageBody {
  display: grid;
  grid-template-columns: 300px 1fr;
}
</style>
