<template>
    <div class="shop-cart">
        <div class="cart">回收站</div>
        <wl-balls ref="ball"></wl-balls>
    </div>
</template>

<script>
import wlBalls from './balls.vue'

export default {
    data() {
        return {

        }
    },
    methods: {
        drop(target) {
            this.$refs.ball.drop(target)
        }
    },
    components: { wlBalls }
}
</script>

