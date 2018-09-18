import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiddenFile from '@/components/HiddenFile'
import Foo from '@/components/foo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hiddenfile',
      name: 'HiddenFile',
      component: HiddenFile,
      children: [{
          path: '',
          redirect: 'foo'
      }, {
        path: 'foo',
        name: 'Foo',
        component: Foo
      }, {
        path: 'bar',
        name: 'Bar',
        component: Foo
      }
      ]
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/*',
      redirect: '/HelloWorld'
    }
  ]
})
