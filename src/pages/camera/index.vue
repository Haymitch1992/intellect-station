<script setup lang="ts">
import { reactive, ref } from 'vue';

const tableData = reactive({
  cameraData: [
    {
      deviceStatus: '在线',
      date: '2016-05-03',
      name: 'XL001',
      ipAddress: '192.123.11.1',
      address: '新大楼2层站台',
      agreement: 'RTSP',
      startOrDisabled: true,
      tags: ['可疑物', '乘客聚集'],
      deviceId: 'abc123',
    },
    {
      deviceStatus: '在线',
      date: '2016-05-03',
      name: 'XL001',
      ipAddress: '192.123.11.1',
      address: '新大楼2层站台',
      agreement: 'RTSP',
      startOrDisabled: true,
      tags: ['可疑物', '乘客聚集'],
      deviceId: 'abc123',
    },
    {
      deviceStatus: '在线',
      date: '2016-05-03',
      name: 'XL001',
      ipAddress: '192.123.11.1',
      address: '新大楼2层站台',
      agreement: 'RTSP',
      startOrDisabled: true,
      tags: ['可疑物', '乘客聚集'],
      deviceId: 'abc123',
    },
    {
      deviceStatus: '在线',
      date: '2016-05-03',
      name: 'XL001',
      ipAddress: '192.123.11.1',
      address: '新大楼2层站台',
      agreement: 'RTSP',
      startOrDisabled: true,
      tags: ['可疑物', '乘客聚集'],
      deviceId: 'abc123',
    },
    {
      deviceStatus: '离线',
      date: '2016-05-02',
      name: 'XL002',
      ipAddress: '192.123.11.1',
      address: '新大楼2层进站口',
      agreement: 'RTSP',
      startOrDisabled: false,
      tags: ['乘客招援'],
      deviceId: 'abc456',
    },
    {
      deviceStatus: '离线',
      date: '2016-05-02',
      name: 'XL002',
      ipAddress: '192.123.11.1',
      address: '新大楼2层进站口',
      agreement: 'RTSP',
      startOrDisabled: false,
      tags: ['乘客招援'],
      deviceId: 'abc456',
    },
    {
      deviceStatus: '离线',
      date: '2016-05-02',
      name: 'XL002',
      ipAddress: '192.123.11.1',
      address: '新大楼2层进站口',
      agreement: 'RTSP',
      startOrDisabled: false,
      tags: ['乘客招援'],
      deviceId: 'abc456',
    },
  ],
});
</script>

<template>
  <div class="container">
    <!-- 批量操作 -->
    <div class="btn-line">
      <el-button type="primary" size="small">添加</el-button>
      <el-button type="primary" size="small">全部禁用</el-button>
      <el-button type="primary" size="small">全部启用</el-button>
    </div>

    <!-- 摄像头列表 -->
    <el-table :data="tableData.cameraData" style="width: 100%" border>
      <el-table-column prop="deviceStatus" label="状态" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="ipAddress" label="IP地址" />
      <el-table-column prop="agreement" label="协议" />
      <el-table-column prop="address" label="安装位置" />
      <el-table-column prop="startOrDisabled" label="启用/禁用">
        <template #default="scope">
          <el-switch v-model="scope.row.startOrDisabled" />
        </template>
      </el-table-column>
      <el-table-column prop="address" label="识别目标">
        <template #default="scope">
          <el-tag
            style="margin-right: 8px"
            size="small"
            v-for="item in scope.row.tags"
            >{{ item }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template #default>
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 16px;
  background: #fff;
  padding: 16px;

  .btn-line {
    margin-bottom: 12px;
  }
}
</style>
