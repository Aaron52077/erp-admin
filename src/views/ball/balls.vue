<template>
    <div class="ball-container">
        <transition-group tag="div" name="drop" @before-enter="beforeEnter" @enter="dropEnter" @after-enter="afterEnter">
            <div class="ball" v-for="(ball, index) in balls" :key="index" v-show="ball.show">
                <div class="inner inner-hook"></div>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            balls: [
                { show: false },
                { show: false },
                { show: false }
            ],
            dropBalls:[]
        }
    },
    methods: {
        drop(el) { 
            let balls = this.balls
            for(const i in balls) {
                let ball = balls[i]
                if(!ball.show) { 
                    ball.show = true
                    ball.el = el 
                    this.dropBalls.push(ball)
                    return
                }
            }
            
        },
        beforeEnter(el) { 
            let count = this.balls.length
            while (count--) {
                let ball = this.balls[count]
                if (ball.show) {
                    let rect = ball.el.getBoundingClientRect() 
                    // let x = -(window.innerWidth - rect.left - 126)
                    // let y = rect.top - 90 // 负数是从左上角往下的的方向, 正数是往上
                    let x = rect.left - 32;
                    let y = -(window.innerHeight - rect.top - 22); //负数,因为是从左上角往下的的方向
                    el.style.display = '' //清空display
                    el.style.webkitTransform = `translate3d(0,${y}px,0)`
                    el.style.transform = `translate3d(0,${y}px,0)`
                    //处理内层动画
                    let inner = el.getElementsByClassName('inner-hook')[0] 
                    inner.style.webkitTransform = `translate3d(${x}px,0,0)`
                    inner.style.transform = `translate3d(${x}px,0,0)`
                }
            }
        },
        dropEnter(el, done) { 
            let rf = el.offsetHeight
            //让动画效果异步执行,提高性能
            this.$nextTick(() => { 
                el.style.webkitTransform = 'translate3d(0,0,0)'
                el.style.transform = 'translate3d(0,0,0)'
                let inner = el.getElementsByClassName('inner-hook')[0]
                inner.style.webkitTransform = 'translate3d(0,0,0)'
                inner.style.transform = 'translate3d(0,0,0)'
                el.addEventListener('transitionend', done) 
            });
        },
        afterEnter(el) { 
            let ball = this.dropBalls.shift(); 
            if (ball) {
                ball.show = false
                el.style.display = 'none' 
            }
        }
    }
}
</script>

<style lang="less" scoped>
.ball-container {
    position: fixed;
    left: 332px;
    bottom: 22px;
    z-index: 200;
    .ball {
        &.drop-enter-active {
            transition: all .8s cubic-bezier(0.49, -0.29, 0.75, 0.41);
        }
    }
    .inner {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgb(0,160,220);
        transition: all .8s linear;
    }     
}   
</style>
