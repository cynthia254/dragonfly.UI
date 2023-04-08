import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../components/login/login.vue'
import HomeView from '../views/HomeView.vue'
import registerPage from '../components/login/register.vue'
import incidentPage from '../components/login/incident.vue'
import queuePage from '../components/login/queue.vue'
import problemPage from '../components/login/problem.vue'
import servicePage from '../components/login/service.vue'
import changePage from '../components/login/changes.vue'
import customerPage from '../components/login/customer.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
 
    component: loginPage
  },
  {
    path: '/register',
    name: 'registerPage',
 
    component: registerPage
  },
  {
    path: '/incident',
    name: 'incidentPage',
 
    component: incidentPage
  },
  {
  path:'/queue',
  name:'queuePage',
  component:queuePage
},
{
  path:'/problem',
  name:'problemPage',
  component:problemPage

},
{
  path:'/service',
  name:'servicePage',
  component:servicePage
},
{
  path:'/changes',
  name:'changePage',
  component:changePage
},
{
path:'/customer',
name:'customerPage',
component:customerPage
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
