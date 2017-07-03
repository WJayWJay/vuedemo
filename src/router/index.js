import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyHello from '@/components/myHello'

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
      component: MyHello
    }
  ]
})
