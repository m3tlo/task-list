import { createRouter, createWebHistory } from "vue-router";
import '@/assets/global.css'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
     {
      name:'main',
      path: "/",
      component: () => import('@/views/MainView.vue')
    }, 
    {
      name:'task-list',
      path: "/task-list",
      component: () => import('@/views/TaskListView.vue')
    },

    {
      name: 'not-found',
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})
export default router