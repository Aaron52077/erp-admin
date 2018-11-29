import Vue from 'vue'

// 自定义公共组件global加载register组件 (可按需)
const components = {
    'wl-breadcrumb': 'Breadcrumb',
    'wl-sticky': 'Sticky',
    'wl-back-top': 'BackToTop',
    'wl-count-to': 'CountTo',
    'wl-loading': 'Loading'
};

Object.keys(components).forEach(key => {
    Vue.component(key, () => import(/* webpackChunkName: "g-[request]" */ `../components/${components[key]}`));
});

