<template>
    <div>
        <wl-list @callback="ballHandle"></wl-list>
        <div class="shopcart">
            <wl-cart ref="cart"></wl-cart>
        </div>
    </div>
</template>

<script>
import wlList from './list.vue'
import wlCart from './cart.vue'

export default {
    data() {
        return {

        }
    },
    methods: {
        ballHandle(target) {
            this.$refs.cart.drop(target)
        }
    },
    components: {
        wlList,
        wlCart
    }
}
</script>

<style lang="less" scoped>
.shopcart {
    position: fixed;
    left: 332px;
    bottom: 22px;
    z-index: 1;     
}   
</style>

