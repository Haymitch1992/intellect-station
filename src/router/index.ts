import { createRouter, createWebHashHistory } from 'vue-router'
import layOut from "../components/layOut/index.vue"

const routes = [
  {
    path: '/',
    component: layOut,
    redirect:'/logicflow',
    children: [
      {
        path: '/logicflow',
        name: 'logicflow',
        component: () => import("@/pages/logicflow/index.vue"),
        meta: {
          title: '一键开关站配置',
          icon:''
        },
      },
      {
        path: '/home',
        name: 'home',
        component: () => import("@/pages/home/index.vue"),
        meta: {
          title: '个人中心',
          icon:''
        },
      },
      {
        path: '/camera',
        name: 'camera',
        component: () => import("@/pages/camera/index.vue"),
        meta: {
          title: '摄像头',
          icon:''
        },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router