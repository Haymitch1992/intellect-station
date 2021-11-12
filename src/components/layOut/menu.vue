<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons';
import { reactive, ref } from 'vue';
const handleOpen = () => {
  // console.log(123);
};
const handleClose = () => {
  // console.log(123);
};
const router = useRouter();
const hangleSelect = (index: string, indexPath: object) => {
  console.log(index, indexPath);
  // 1 2 3
  switch (index) {
    case '1':
      router.push({ path: '/logicflow' });
      break;
    case '2':
      router.push({ path: '/camera' });
      break;
    case '3':
      router.push({ path: '/home' });
      break;
  }
};
</script>

<template>
  <div class="container">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @select="hangleSelect"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>一键开关站</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>摄像头</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span>系统设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  height: calc(100vh - 60px);
}
</style>
