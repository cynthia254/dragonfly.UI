import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../components/login/login.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
 
    component: loginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
