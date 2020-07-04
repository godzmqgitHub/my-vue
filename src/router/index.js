import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiddenFile from '@/components/HiddenFile'
import Foo from '@/components/Foo'
import Components from '@/components/Component'
import Computed from '@/components/Computed'
import AxiosExample from '@/components/axios-example'
import Login from '@/components/login'
import Splendid from '@/components/splendid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hiddenfile',
      name: 'HiddenFile',
      component: HiddenFile,
      children: [{
        path: 'foo',
        name: 'Foo',
        component: Foo
      }, {
        path: 'components',
        name: 'Components',
        component: Components
      }, {
          path: 'computed',
          name: 'Computed',
          component: Computed
      }, {
        path: 'axiosExample',
        name: 'AxiosExample',
        component: AxiosExample
      }]
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/3D',
      name: '3D',
      component: Splendid
    },{
      path: '/*',
      redirect: '/login'
    }
  ]
})
