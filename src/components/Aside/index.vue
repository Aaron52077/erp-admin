<template>
    <div class="wuli-aside" @after-leave="afterLeave">
        <!-- 对transition不了接的可以查看vue2.0官方文档的“过渡 & 动画” 链接：https://cn.vuejs.org/v2/guide/transitions.html-->
        <transition name="fade" @touchmove.stop.prevent>
            <div class="menu-mask" v-show="closed && modal"></div>
        </transition>
        <!-- 这里才是侧栏代码部分 -->
        <transition name="slide-fade">
            <div class="side-content" :style="{ 'width': width + '%' }" v-if="closed">
                <el-button icon="el-icon-back" type="primary" class="side-content__btn" @click.stop="handleWrapperClick" round>返回</el-button>
                <slot></slot>
            </div>    
        </transition>
    </div>
</template>

<script>
/*  props 说明 
 *  closed 关闭
 *  modal 遮罩层
 *  width 顶部距离
 */
export default {
    props: {
        closed: {
            type: Boolean,
            default: false
        },
        modal: {
            type: Boolean,
            default: true
        },
        width: {
            type: [Number, String],
            default: 1000
        }
    },
    methods: {
        afterLeave() {
            this.$emit('closed');
        },
        handleWrapperClick() {
            this.$emit('update:closed', false);
            this.$emit('closed');
            this.closed = true;
        },
    }
};
</script>

<style lang="less" scoped>
.menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
}
.side-content {
    position: fixed;
    width: 1000px;
    background: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 11;
    &__btn {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 7px 12px;
        z-index: 99;
    }
}
.fade-enter-to,
.fade-leave-to {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-to {
    transition: transform 0.5s;
    transform: translate(0, 0);
}
.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    -webkit-transform: translate(-286px, 0px);
    transform: translate(-286px, 0px);
    -webkit-transition: opacity 0.3s ease-in-out 0.3s,
        -webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
}

</style>

