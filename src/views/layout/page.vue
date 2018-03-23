<template>
	<el-main class="main-container">
        <!-- 面包屑组件 -->
        <i-breadcrumb class="breadcrumb" separator="/"></i-breadcrumb>
        <section class="page-panel" style="min-height: 100%">
            <transition name="el-fade-in-linear" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </section>
        <!-- top -->
        <i-back-top></i-back-top> 
    </el-main>
</template>
<script>
export default {
    name: 'page'
}
</script>

