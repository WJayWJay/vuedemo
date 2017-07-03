import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyHello from '@/components/myHello'
import MyOne from '@/components/One'
import MyOneDefault from '@/components/defaultOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello',
      name: 'Myhello',
      component: MyHello,
      children: [
        {
          path: '',
          component: MyOneDefault
        },
        {
          path: 'one',
          component: MyOne
        }
      ]
    }
  ]
})
