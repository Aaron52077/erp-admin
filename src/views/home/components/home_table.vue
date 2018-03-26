<template>
    <div id="homeTable">
        <el-table
            :data="tableData" style="width: 100%" border fit :header-cell-style="{'text-align': 'center'}">
            <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180"
                :filters="[{text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}]"
                :filter-method="filterHandler">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                :formatter="formatter">
            </el-table-column>
            <el-table-column
                prop="tag"
                label="标签"
                width="100"
                :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end">
            <template slot-scope="scope">
                <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                close-transition>{{scope.row.tag}}</el-tag>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'homeTable',
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小二',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
        };
        return {
            tableJson: [],
            tableData1: Array(10).fill(item),
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小二',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tag: '家'
                },
                {
                    date: '2016-05-03',
                    name: '李四',
                    address: '成都是 1518 弄',
                    tag: '公司'
                }
            ]
        }
    },
    methods: {
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        }
    }
}
</script>
<style lang='less'>
#homeTable {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
