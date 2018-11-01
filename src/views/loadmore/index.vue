<template>
    <div v-loadmore="loadMore">
        <div class="el-loadmore__wrapper">
           滚动加载实例
        </div>
    </div>
</template>

<script>
import loadmore from "@/directive/loadmore" // 滚动加载指令

export default {  
    data() {
        return {
            loadFalg: false // 是否分页
        }
    },
    methods: {
        loadMore() {
            if (this.loadFalg) {
                this.loadFalg = false
            }
            // 延迟开关
            setTimeout(() => {
                this.loadFalg = true
            }, 250)
        }
    },
    directives: { loadmore }
}
</script>

<style lang="less" scoped>
 
</style>
