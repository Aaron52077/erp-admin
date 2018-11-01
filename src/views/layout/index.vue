<template>
<div class="app-wrapper" :class="{'hideSidebar': !hasSidebar.opened}">
    <el-container direction="horizontal">
        <!-- 菜单栏 -->
        <wl-menu></wl-menu>
        <!-- 容器 -->
        <el-container direction="vertical">
            <!-- 页面 -->
            <wl-page></wl-page>  
        </el-container>
    </el-container>
</div>
</template>
<script>
import wlMenu from './menu'
import wlPage from './page'
export default {
    name: 'index',
    components: { wlMenu, wlPage },
    computed: {
        hasSidebar() {
            return this.$store.state.sidebar
        }
    }
};
</script>

