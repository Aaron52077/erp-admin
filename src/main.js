import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import cache from '@/utils/cache'

// 第三方
import axios from 'axios'
import ElementUI from 'element-ui'
import VueProgressBar from 'vue-progressbar'
import vueClipboard from 'vue-clipboard-pack'
// css
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.less'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'

// mock数据 伪数据
import './mock'

// 自定义公共组件
import breadcrumb from '@/components/Breadcrumb'
import sticky from '@/components/Sticky'
import backTop from '@/components/BackToTop'
import countTo from '@/components/CountTo'
import loading from '@/components/Loading'
import menuItem from '@/views/layout/menuItem'

// 自定义组件
Vue.component('i-breadcrumb', breadcrumb)
Vue.component('i-sticky', sticky)
Vue.component('i-back-top', backTop)
Vue.component('i-countTo', countTo)
Vue.component('i-loading', loading)
Vue.component('i-menuitem', menuItem)

Vue.config.productionTip = false
// 第三方
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(VueProgressBar, {
    color: '#29F',
    failedColor: 'red',
    thickness: '2px'
})
Vue.use(vueClipboard)

// 自定义过滤
import * as filters from './filters' // global filters

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
// 全局路由登录验证，权限验证
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) { // 是否需要登录
      if (cache.getToken()) {
          if (to.path === '/login') {
              next('/')   
          } else {
              if (store.state.user) {
                  assessPermission(store.state.user.role, to.meta.role)
              } else {
                  store.dispatch('get_user_data').then(res => {
                      assessPermission(res.role, to.meta.role)
                  })
                  .catch(err => {
                      console.log(err)
                      // 可根据错误信息，做相应需求，这里默认token值失效
                      // window.alert('登录已失效，请重新登录')
                      this.$message.error('登录已失效，请重新登录');
                      goLoginPage()
                  })
              }
          }
      } else {
          goLoginPage()
      }
  } else {
      next()
 }
  function goLoginPage() {
      next({ path: '/login', query: { redirect: to.fullPath } })
  }
  function assessPermission(userRole, pageRole) {
      let pass = false
      // 页面无需权限 || 用户是管理员
      if (!pageRole || userRole.indexOf('admin') > -1) pass = true
      // 符合页面的其中一种权限（支持String和Array写法）
      if (typeof pageRole === 'string') {
          if (userRole.indexOf(pageRole) > -1) pass = true
      } else if (Array.isArray(pageRole)) {
          if (pageRole.some(role => userRole.indexOf(role) > -1)) pass = true
      }
      pass ? next() : next('/401')
  }
})
// 全局错误处理
// you can set only in production env show the error-log
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = function (error, vm, info) {
      store.commit('set_logs', {
          error,
          vm,
          info,
          url: window.location.href,
          time: new Date()
      })
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
