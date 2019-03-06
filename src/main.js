import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import cache from '@/utils/cache'
import globalData from './global.js'

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
import './permission.js'
import './errorLog.js'
import './packages/global.js'
// mock数据 伪数据
import './mock'

// 自定义公共组件
import menuItem from '@/views/layout/menuItem'

// 自定义组件
Vue.component('wl-menu-item', menuItem)

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

import VueTranslate from './utils/lang.js'
Vue.use(VueTranslate)
const lang = (localStorage.lang || 'zh-cn')
Vue.lang(lang)

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
    created(){
        globalData.init(this)
    },
    render: h => h(App)
})

