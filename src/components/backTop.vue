<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <i class="el-icon-arrow-up"></i>
            </div>
        </slot>
    </div>
</template>
<script>
/*
* @params
* height        页面滚动高度达到该值时才显示BackTop组件
* bottom        组件距离底部的距离
* right         组件距离右部的距离
* duration      滚动动画持续时间，单位：毫秒
*
* @callback
* onClick       触发点击的回调
* complete      滚动到达顶部的回调
*/
import { requestAnimationFrame } from '@/utils/RAFrame.js'
const prefixCls = 'backTop'
export default {
    props: {
        height: {
            type: Number,
            default: 150
        },
        bottom: {
            type: Number,
            default: 30
        },
        right: {
            type: Number,
            default: 30
        },
        duration: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            visible: false
        }
    },
    computed: {
        classes () {
            return [`${prefixCls}`, {[`${prefixCls}-show`]: this.visible}]
        },
        styles() {
            return {
                bottom: `${this.bottom}px`,
                right: `${this.right}px`
            }
        },
        innerClasses () {
            return `${prefixCls}-inner`
        }
    },
    methods: {
        // 滚动方法
        scrollTop(from = 0, to = 0, duration = 500) {
            // 距离
            const difference = Math.abs(from - to)
            // 速度
            const step = Math.ceil(difference / duration * 50)
            const scroll = (start, end, step) => {
                if (start === end) {
                    this.$emit('complete')
                    return
                }
                // 每经过requestAnimationFrame执行一次（16.666ms）剩下的距离
                let d = (start - step < end) ? end : start - step
                window.scrollTo(d, d)
                requestAnimationFrame(() => scroll(d, end, step))
            }
            scroll(from, to, step)
        },
        // 滚动回调方法
        handleScroll() {
            // 滚动的距离大于设置的高度时，则显示backTop组件
            this.visible = window.pageYOffset >= this.height
        },
        // 点击backTop组件触发的方法
        back() {
            const sTop = window.pageYOffset
            this.scrollTop(sTop, 0, this.duration)
            this.$emit('onClick')
        }
    },
    mounted() {      
        document.addEventListener('scroll', this.handleScroll, false)
        window.addEventListener('resize', this.handleScroll, false)
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.handleScroll, false)
        document.removeEventListener('resize', this.handleScroll, false)
    }
}
</script>
<style lang='less'>
.backTop{
    position: fixed;
    z-index: 999;
    cursor: pointer;
    display: none;
    &-show{
        display: block;
    }
    &-inner{
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 20px;
        transition: all .2s ease-in-out;
        box-shadow: 0 0 6px rgba(0,0,0,.12);
        cursor: pointer;
        z-index: 9;
        i{
            display: block;
            color: #409eff;
            text-align: center;
            font-size: 18px;
            line-height: 40px;
        }
    }
}  
</style>