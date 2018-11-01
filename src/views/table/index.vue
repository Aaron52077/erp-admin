<template>
    <div id="customer">
        <!-- 数据表格组件 -->
        <wl-data-list></wl-data-list>
    </div>
</template>
<script>
import wlDataList from './table'

export default {
    name: 'customer',
    components: { wlDataList }
};
</script>
<style lang='less' scoped>
#customer {
    padding: 10px 15px 15px 10px;
    background: #fff;
    .el-alert {
        border-left: 5px solid #c9e2b3;
    }
}
</style>
