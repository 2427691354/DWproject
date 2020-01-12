import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import p1 from '@/views/p1'
import p2 from '@/views/p2'
import index from '@/components/index'
import sensor from '@/components/sensor'
import sensorHistorical from '@/components/sensorHistorical'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //主页
      path: '/',
      name: 'index',
      component: index,
    },
    {
      //1号线
      path: '/p1',
      name: 'p1',
      component: p1,
    },
    {
      path: '/p2',
      name: 'p2',
      component: p2,

    },
    {
      path: '/sensor',
      name: 'sensor',
      component: sensor,
      children: [
        {
          path: '/sensorHistorical',
          name: 'sensorHistorical',
          component: sensorHistorical
        }
      ]

    },
    {
      //主页
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      
      path: '/register',
      name: 'register',
      component: register,
    }

  ]
})
