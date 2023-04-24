import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../components/login/login.vue'
//import HomeView from '../views/HomeView.vue'
import registerPage from '../components/login/register.vue'
import incidentPage from '../components/login/incident.vue'
import queuePage from '../components/login/queue.vue'
import problemPage from '../components/login/problem.vue'
import servicePage from '../components/login/service.vue'
import changePage from '../components/login/changes.vue'
import customerPage from '../components/login/customer.vue'
import submitPage from '../components/login/submit.vue'
import blogPage from '../components/login/blog.vue'
import ticketsTable from '../components/login/tickets/ticketstable/ticketsTable.vue'
import BarChart from "../components/bargraph/dashboard.vue"
import ticketPage from '../components/login/tickets/ticket.vue'
import articlePage from '../components/articles/knowledge.vue'
import updatePage from '../components/articles/update.vue'
import newPage from '../components/login/tickets/newticket.vue'
import addUserPage from '../components/users/createusers.vue'
import viewUsers from '../components/users/viewusers.vue'
import deleteUsers from '../components/users/deleteusers.vue'
import editUsers from'../components/users/editusers.vue'
import seePage from'../components/users/viewuser.vue'
import viewCalls from '../components/calls/viewCalls.vue'
import assignedTable from '../components/login/tickets/assignedTable/assigned.vue'
import confirmEmail from '../components/users/confirmemail.vue'
import forgotPassword from '../components/users/forgotpassword.vue'
import changePassword from '../components/users/changePassword.vue'

import HomePage from "../components/HomePage.vue"
import escalatePage from '../components/calls/escalate.vue'
import addClientPage from '../components/clients/clients.vue'
import resolvePage from '../components/calls/resolve.vue'
import closePage from '../components/calls/close.vue'
import serviceIssuePage from '../components/services/serviceIssue.vue'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/',
    name: 'login',
 
    component: loginPage
  },
  {
    path: '/register',
    name: 'registerPage',
 
    component: registerPage
  },
  {
    path: '/escalate/:ticketid',
    name: 'escalatePage',
 
    component: escalatePage
  },
  {
    path: '/resolve/:ticketid',
    name: 'resolvePage',
    component: resolvePage
  },
 
  {
    path: '/incident',
    name: 'incidentPage',
 
    component: incidentPage
  },
  {
    path: '/confirmemail',
    name: 'confirmEmail',
 
    component: confirmEmail
  },
  {
    path: '/viewusers',
    name: 'viewUsers',
 
    component: viewUsers
  },
  {
    path: '/forgotpassword',
    name: 'forgotPassword',
 
    component: forgotPassword
  },
  {
    path: '/deleteusers',
    name: 'deleteUsers',
 
    component: deleteUsers
  },
  {
    path: '/changepassword',
    name: 'changePassword',
 
    component: changePassword
  },


  {
    path:'/tickets',
    name:"tickettable",
    component:ticketsTable
  },
  {
    path:'/asignticket/:ticketid',
    name:"assignedTable",
    component:assignedTable

  },
  {
    path:'/confirmemail',
    name:"confirmEmail",
    component:confirmEmail

  },
  {
    path:'/serviceIssue',
    name:"serviceIssuePage",
    component:serviceIssuePage

  },
  {
    path: '/editusers/:useremail',
    name: 'editUsers',
 
    component: editUsers
  },
  {
  path:'/bargraphPage',
  name:'BarChart',
  component:BarChart


  },
  {
    path:'/close/:ticketid',
    name:'closePage',
    component:closePage
  
  
    },
 
  {
    path:'/viewUser/:useremail',
    name:'seePage',
    component:seePage
  
  
    },
    
  {
    path:'/viewcalls',
    name:'viewCalls',
    component:viewCalls
  
  
    },
  {
    path:'/newticket',
    name:'newPage',
    component:newPage
  
  
    },
    {
      path:'/addusers',
      name:'addUserPage',
      component:addUserPage
    
    
      },
      {
        path:'/viewclients',
        name:'addClientPage',
        component:addClientPage
      
      
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
  path:'/article',
  name:'article',
  component:articlePage
},
{
path:'/customer',
name:'customerPage',
component:customerPage
},
{
  path:'/submit',
  name:'submitPage',
  component:submitPage
},

{
  path:'/blog',
  name:'blogPage',
  component:blogPage
},
{
  path:'/update',
  name:'updatePage',
  component:updatePage
},
{
  path:'/ticket',
  name:'ticketPage',
  component:ticketPage
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
