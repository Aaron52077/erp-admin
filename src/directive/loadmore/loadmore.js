// v-loadmore: 用于在element-ui的select下拉框加上滚动到底事件监听
export default {
    bind(el, binding) {
        var p = 0;
        var t = 0;
        var down = true;
        // 获取element-ui定义好的scroll盒子
        const LOADMOREWRAP_DOM = el.querySelector('.el-loadmore__wrapper');
        LOADMOREWRAP_DOM.addEventListener('scroll', function () {
            /*
             * scrollHeight 获取元素内容高度(只读)
             * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
             * clientHeight 读取元素的可见高度(只读)
             * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
             * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
             */
            //判断是否向下滚动
            p = this.scrollTop;
            
            if (t < p) {
                down = true;
            } else {
                down = false;
            }
            
            //判断是否到底
            const DEFAULT = 0;
            // 滚动距离 方法1
            const CONDITION = this.scrollHeight - this.scrollTop - this.clientHeight;
            if (CONDITION <= DEFAULT && down) {
                binding.value();
            }

            // 滚动距离 方法2
            // const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight;
            // if (CONDITION) {
            //     binding.value();
            // }
        });
    }
}