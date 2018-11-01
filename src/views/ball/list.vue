<template>
    <div class="item">
        <div v-for="item in list" :key="item.id">
            <div @click="ballsHandle($event, item)">点击前往回收站</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: 0,
                    name: '购物1'
                },
                {
                    id: 2,
                    name: '购物2'
                }
            ]
        }
    },
    methods: {
        ballsHandle(event, item) {
            this.$emit('callback', event.target)
        }
    }
}
</script>

