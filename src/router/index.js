import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiddenFile from '@/components/HiddenFile'
import Foo from '@/components/Foo'
import Components from '@/components/Component'
import Computed from '@/components/Computed'

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
        path: 'components',
        name: 'Components',
        component: Components
      }, {
          path: 'computed',
          name: 'Computed',
          component: Computed
      }]
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
