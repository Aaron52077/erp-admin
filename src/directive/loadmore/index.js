import loadmore from './loadmore';

const install = function(Vue) {
    Vue.directive('loadmore', loadmore)
}

if (window.Vue) {
    window.loadmore = loadmore
    Vue.use(install); // eslint-disable-line
}

loadmore.install = install
export default loadmore
