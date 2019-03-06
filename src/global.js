/* eslint-disable */
import Vue from 'vue'
import store from '@/store'
import { cloneDeep, size } from 'lodash'

// 流加载
import './utils/ljs'
import tools from './utils/tools'

let global = new Vue({
    template: '<div></div>',
    data: {
        ENV: process.env.NODE_ENV,
        apihost: process.env.BASE_API,
        token: tools.getValue('token') || '',
        dh: document.body.clientHeight,
        dw: document.body.clientWidth,
        lang: localStorage.lang || 'zh-cn',
        ljs: window.ljs,
        data: {},
    },
    computed: {
        h5() {
            return this.dw < 800
        },
        getData() {
            return store.state.app.datas
        },
        setLang: {
            get() {
                return this.lang
            },
            set(val) {
                let value = val || 'zh-cn'
                this.$translate.setLang(value)
                this.lang = value
                localStorage.lang = value
            }
        },
    },
    methods: {
        //写入共享数据
        setData(key, val) {
            // 方法一
            let storeData = Object.assign({}, this.data);
            // 方法二
            // let storeData = cloneDeep(this.data);
            storeData[key] = val;
            this.data = storeData;
            store.dispatch('setData', storeData);
            return val
        },
        setApi(val) {
            let name = val && val.$options ? val.$options.name : '';
            if(!name) {
                console.warn('setApi error, 请定义 name ');
            }
            if(!global[`api_${name}`]) {
                global[`api_${name}`] = val;
            }
        },
        cloneDeep: cloneDeep,
        size: size,
        init(vm) {
            window.DevVue = vm;
            this.$translate.setLang(this.lang);
            // 动态获取视窗宽高
            window.onresize = () => {
                this.dw = document.body.clientWidth;
                this.dh = document.body.clientHeight;
            };
            if(!this.$t) {
                Vue.prototype.$t = vm.t;
            }
        },
    }
})

// Vue 原型链挂载
Vue.prototype.globalData = global

export default global
