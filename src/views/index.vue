<template>
    <div id="index">
        <el-container id="verContainer">
            <!-- 菜单栏 -->
            <i-menu></i-menu>
            <!-- 容器 -->
            <el-container id="horContainer" direction="vertical">
                <!-- 页面 -->
                <i-page></i-page>     
            </el-container>
        </el-container>
    </div>
</template>
<script>
import iMenu from '@/layout/menu'
import iPage from '@/layout/page'
export default {
    name: 'index',
    components: { iMenu, iPage }
};
</script>
<style lang='less'>
#index {
    width: 100%;
    height: 100%;
    #verContainer{
        height: 100%;
        #horContainer{
            height: 100%;
            box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
        }
    }
}
</style>
