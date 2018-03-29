<template>
<div class="app-wrapper" :class="{'hideSidebar': !hasSidebar.opened}">
    <el-container direction="horizontal">
        <!-- 菜单栏 -->
       <i-menu></i-menu>
        <!-- 容器 -->
        <el-container direction="vertical">
            <!-- 页面 -->
            <i-page></i-page>  
        </el-container>
    </el-container>
</div>
</template>
<script>
import iMenu from './menu'
import iPage from './page'
export default {
    name: 'index',
    components: { iMenu, iPage },
    computed: {
        hasSidebar() {
            return this.$store.state.sidebar
        }
    }
};
</script>

