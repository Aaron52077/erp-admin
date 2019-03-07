/* eslint-disable */
import Vue from 'vue'
import store from '@/store'
import cache from '@/utils/cache'
import { cloneDeep, size } from 'lodash'

// 流加载
import './utils/ljs'

let global = new Vue({
    template: '<div></div>',
    data: {
        ENV: process.env.NODE_ENV,
        apihost: process.env.BASE_API,
        debug: (process.env.NODE_ENV || '').indexOf('development') > -1 || window.localStorage && window.localStorage.devOnline == 1,
        token: cache.getLocal('token') || cache.getCookie('Authorization') || '',
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
            return store.state.datas
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
        setToken: {
            get() {
                return this.token;
            },
            set(val) {
                this.token = val;
                cache.setLocal('token', val);
                if(val == '') cache.delCookie('Authorization');
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
        log(...arg){
            this.debug && console.log(...arg);
        },
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
        load(...arr){
            var plugins = [];
            const config = {
                'viewer':['/static/plugins/viewer/viewer.min.css','/static/plugins/viewer/viewer.min.js'],
                'jquery':['/static/plugins/jquery.js'],
                'moment':['/static/plugins/moment.min.js']
            }
            arr.map(item => {
                let pluginName = (typeof item == 'string') ? item.toLocaleLowerCase() : item;
                if(config[pluginName]){
                    plugins.push(...config[pluginName]);
                }else{
                    plugins.push(pluginName);
                }
            });
            this.ljs.load(...plugins);
        },
        print(obj) {
            // 针对打印有特殊样式需要自定义时，请使用@media print并加上合理限定。 参考资料 http://www.daqianduan.com/6370.html
            global.load('jquery', '/static/plugins/printArea.js', () => {
                if($(obj) && $(obj).length) $(obj).printArea();
            });
        },
    }
})

// Vue 原型链挂载
Vue.prototype.gModule = global

export default global
