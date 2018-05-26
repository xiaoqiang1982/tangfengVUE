import Vue from 'vue'
import Router from 'vue-router'

const tfBindMobile = () => import('../components/tfBindMobile.vue')
const tfMemberCardList = () => import('../components/tfMemberCardList.vue')
const tfMemberCardDetail = () => import('../components/tfMemberCardDetail.vue')
const tfMyCenter = () => import('../components/tfMyCenter.vue')
//  const tfChangePassword = () => import('../components/tfChangePassword.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tfMemberCardList',
      component: tfMemberCardList,
      meta: {
        reqireLogin: true
      }
    }, {
      path: '/tfBindMobile',
      name: 'tfBindMobile',
      component: tfBindMobile
    }, {
      path: '/tfMemberCardList',
      name: 'tfMemberCardList',
      component: tfMemberCardList,
      meta: {
        reqireLogin: true
      }
    }, {
      path: '/tfMemberCardDetail',
      name: 'tfMemberCardDetail',
      component: tfMemberCardDetail,
      meta: {
        reqireLogin: true
      }
    }, {
      path: '/tfMyCenter',
      name: 'tfMyCenter',
      component: tfMyCenter,
      meta: {
        reqireLogin: true
      }
    }]
})
