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
// js
import './permission'
import './errorLog'
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
Vue.use(ElementUI, { size: 'small' })
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
