<template>
    <div id="customer">
        <!-- <el-alert
            title="客户信息管理"
            type="info"
            description="可下载客户信息模板按模板批量导入客户信息"
            :closable="false">
        </el-alert> -->
        <!-- 数据表格组件 -->
        <i-data-list></i-data-list>
    </div>
</template>
<script>
import iDataList from './table'

export default {
    name: 'customer',
    components: { iDataList }
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
