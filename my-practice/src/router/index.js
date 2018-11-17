import Vue from 'vue'
import Router from 'vue-router'

import hello from '../components/HelloWorld.vue'
import todo from '../components/todo.vue'
import bitcoin from '../components/bitcoin.vue'
import tempDirective from '../components/directive.vue'
import compvs from '../components/compvs.vue'
import watchvs from '../components/watchvs.vue'
import deep from '../components/deep.vue'
import reals from '../components/realsearch.vue'
import classes from '../components/classes.vue'
import vifvon from '../components/vifvon.vue'
import evhandle from '../components/evhandle.vue'
import fromprop from '../components/fromprop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: hello,
      props: { msg: '404なのでリダイレクトしました' }
    },
    {
      path: '/',
      component: hello,
      props: { msg: 'Emacs' }
    },
    {
      path: '/todo',
      component: todo
    },
    {
      path: '/bitcoin',
      component: bitcoin
    },
    {
      path: '/directive',
      component: tempDirective
    },
    {
      path: '/comp',
      component: compvs
    },
    {
      path: '/watchvs',
      component: watchvs
    },
    {
      path: '/deep',
      component: deep
    },
    {
      path: '/reals',
      component: reals
    },
    {
      path: '/classes',
      component: classes
    },
    {
      path: '/vifvon',
      component: vifvon
    },
    {
      path: '/evhandle',
      component: evhandle
    },
    {
      path: '/formprop',
      component: fromprop
    }
  ]
})

