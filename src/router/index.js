import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Output from '@/components/Output' 
import Skills from '@/components/Skills' 
import Profile from '@/components/Profile' 

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
   {
      path: '/outputs',
      name: 'Output',
      component: Output
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },  
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },  
  ]
})