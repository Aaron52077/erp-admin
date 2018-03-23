<template>
	<el-main id="page">
        <!-- 面包屑组件 -->
        <i-breadcrumb class="breadcrumb" separator="/"></i-breadcrumb>
        <div class="page-panel">
            <transition name="el-fade-in-linear" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <!-- top -->
        <i-back-top></i-back-top> 
    </el-main>
</template>
<script>
export default {
    name: 'page'
}
</script>
<style lang='less'>
#page {
    position: relative;
    height: fit-content;
    min-height: 100%;
    padding: 0;
}
</style>
