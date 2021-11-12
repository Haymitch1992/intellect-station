<script setup lang="ts">
import { reactive, ref } from 'vue';
</script>

<template>
  <div class="container">
    <div class="item-container">
      <div class="run-status-container">
        <el-row :gutter="16">
          <el-col :span="12">
            <span class="device-title">当前系统</span>
            <span class="device-status"
              >运行 <i class="strong-text">10</i>天
              <i class="strong-text">10</i>小时
              <i class="strong-text">10</i>分钟 <i class="strong-text">10</i>秒
            </span>
          </el-col>
          <el-col :span="12">
            <span class="device-icon">
              <a-icon type="cluster" />
            </span>
            <span class="device-title">设备概况</span>
            <span class="device-status"
              >一共 <i class="strong-text">10</i>台设备，其中<i
                class="strong-text"
                >8</i
              >台在线</span
            >
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="item-container">
      <div class="base-container">
        <el-row :gutter="16">
          <el-col :span="6">
            <p class="strong-device">ZHIHUI_STATION_SYSTEM</p>
            <p>设备型号</p>
          </el-col>
          <el-col :span="6">
            <p class="strong-device">ZHIHUI_STATION_SYSTEM</p>
            <p>系统版本</p>
          </el-col>
          <el-col :span="6">
            <p class="strong-device">V1.10.1</p>
            <p>固件版本</p>
          </el-col>
          <el-col :span="6">
            <p class="strong-device">FFFBBB0011</p>
            <p>序列号</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-row :gutter="16">
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 16px;
  padding: 16px;
}
.grid-content {
  background-color: #fff;
  height: 300px;
  margin-bottom: 16px;
}

.item-container {
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  .run-status-container {
    background: linear-gradient(to right, #6a85e4, #857bf0);
    height: 100px;
    color: #fff;
    padding: 20px;
    font-size: 16px;
    padding-top: 30px;
    .device-title {
      margin-right: 10px;
    }
    .device-status {
      background-color: rgba(0, 0, 0, 0.2);
      margin-left: 20px;
      padding: 6px 10px;
    }
  }
}
.device-icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  vertical-align: middle;
  color: #fff;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  margin: 0 20px 0 60px;
}
.strong-text {
  color: #f69d6a;
  font-style: normal;
  margin: 0 4px;
}
.base-container {
  background-color: #eff2fb;
  padding: 20px 80px;
  p {
    text-align: center;
    padding: 0;
    line-height: 30px;
    margin: 0;
    color: #999;
  }
  .strong-device {
    color: #333;
    font-weight: bold;
  }
}
.echarts-container {
  background-color: #fff;
  height: 440px;
  width: 100%;
}
</style>
