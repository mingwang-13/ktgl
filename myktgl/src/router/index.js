import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import home from '@/components/home/home'
import organizationView from '@/components/organization management/organizationView/organizationView'
import applyjoin from '@/components/organization management/applyjoin/applyjoin'
import audit from '@/components/organization management/organizationAudit/audit'
import activityShow from '@/components/activity/activityShow'
import publish from '@/components/activity/publish'
import activitySearch from '@/components/activity/activitySearch'
import newLogin from '@/components/login/newLogin'
import clubOut from '@/components/organization management/clubOut/clubOut'
import self from '@/components/self/self'
import err from '@/components/common/err'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/organizationView',
      name: 'organizationView',
      component: organizationView
    },
    {
      path: '/applyjoin',
      name: 'applyjoin',
      component: applyjoin
    },
    {
      path: '/audit',
      name: 'audit',
      component: audit
    },
    {
      path: '/activityShow',
      name: 'activityShow',
      component: activityShow
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/activitySearch',
      name: 'activitySearch',
      component: activitySearch
    },
    {
      path: '/newLogin',
      name: 'newLogin',
      component: newLogin
    },
    {
      path: '/clubOut',
      name: 'clubOut',
      component: clubOut
    },
    {
      path: '/self',
      name: 'self',
      component: self
    },
    {
      path: '/err',
      name: 'err',
      component: err
    }
  ]
})
