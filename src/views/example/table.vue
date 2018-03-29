<template>
    <div class="table-container">
        <!-- 搜索相关 -->
        <div class="filter-container">
            <div class="filter-flex">
                <el-select style="width: 110px" clearable v-model="formJsonQuery.entry" placeholder="客户来源">
                    <el-option v-for="(item,index) in entry" :key="index" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-select @change='handleFilter' style="width: 140px" v-model="formJsonQuery.sort" placeholder="客户级别">
                    <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"></el-option>
                </el-select>
                <!-- <el-input @keyup.enter.native="handleFilter" clearable 
                        style="width: 330px;"
                        placeholder="客户姓名/电话/楼盘/区域位置/销售/客户需求/标签" 
                        v-model="formJsonQuery.title"></el-input> -->
                <el-select clearable style="width: 130px" v-model="formJsonQuery.type" placeholder="类型">
                    <el-option v-for="item in typeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key"></el-option>
                </el-select>
                <!-- <el-date-picker
                    v-model="formJsonQuery.time"
                    type="daterange"
                   
                    unlink-panels
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions">
                </el-date-picker> -->
                <el-button type="primary" style='margin-left:15px;' v-waves icon="el-icon-search" @click="handleFilter">搜索</el-button>
                <!-- <el-checkbox style='margin-left:15px;' @change='tableKey=tableKey+1' v-model="showReviewer">设计师</el-checkbox> -->
            </div>
            <el-button type="primary" style='margin-right:10px;' v-waves icon="el-icon-plus" @click.native="handleCreate">添加新客户</el-button>
            <el-dropdown :hide-on-click="false">
                <el-button type="primary">
                    更多<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-waves>添加新客户</el-dropdown-item>
                    <el-dropdown-item v-waves @click.native="handleDownload">导出客户数据</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <!-- 表格 v-loading="loading" element-loading-text="给我一点时间"  -->
        <el-table :key='tableKey' 
                :data="formJson"
                :height="height"
                border fit highlight-current-row>
            <el-table-column align="center" label="客户来源" width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.type}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="客户级别" width="80">
                <template slot-scope="scope">
                    <span>{{scope.row.rank}}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="180" label="客户需求">
                <template slot-scope="scope">
                    <el-popover trigger="hover" popper-class="i-popover" placement="top">
                        <template v-if="scope.row.title">
                            <p v-if="scope.row.name">市场接待: {{ scope.row.name}}</p>
                            <p v-if="scope.row.names">设计师: {{ scope.row.names}}</p>
                            <p v-if="scope.row.moblie">联系电话: {{ scope.row.moblie}}</p>
                        </template>
                        <div slot="reference">
                            <span class="link-type" @click="handleUpdate(scope.row)">{{scope.row.title}}</span>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column align="center" label="楼盘信息" width="220">
                <template slot-scope="scope">
                    <span>{{scope.row.addr}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="联系电话" prop="status" width="120">
                <template slot-scope="scope">
                    <span>{{scope.row.moblie}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="市场接待" prop="status" width="95">
                <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column v-if='showReviewer' align="center" label="设计师" width="140">
                <template slot-scope="scope">
                    <span style='color:red;'>{{scope.row.names}}</span>
                </template>
            </el-table-column>
            <el-table-column label="状态" prop="status" width="100" sortable>
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column width="150" align="center" prop="timestamp"  label="时间" sortable>
                <template slot-scope="scope">
                    <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" fixed="right" width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="mini" class="form-edit-btn" icon="el-icon-edit" @click="handleUpdate(scope.row)">编辑</el-button>
                    <el-dropdown trigger="click">
                        <el-button type="primary" size="mini">
                            更多<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-waves>跟单</el-dropdown-item>
                            <el-dropdown-item v-waves>见面信息</el-dropdown-item>
                            <el-dropdown-item v-waves>定金管理</el-dropdown-item>
                            <el-dropdown-item v-waves>生存首签合同</el-dropdown-item>
                            <el-dropdown-item v-waves @click.native="handleDelete(scope.row)">删除</el-dropdown-item>
                            <!-- <el-dropdown-item v-if="scope.row.status!='合同客户'" v-waves @click.native="handleModifyStatus(scope.row,'合同客户')">合同客户</el-dropdown-item>
                            <el-dropdown-item v-if="scope.row.status!='见面客户'" v-waves @click.native="handleModifyStatus(scope.row,'见面客户')">见面客户</el-dropdown-item>
                            <el-dropdown-item v-if="scope.row.status!='意向客户'" v-waves @click.native="handleModifyStatus(scope.row,'意向客户')">意向客户</el-dropdown-item> -->
                        </el-dropdown-menu>
                    </el-dropdown>      
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pagination-container">
            <el-pagination background @size-change="handleSizeChange" 
                @current-change="handleCurrentChange" 
                :current-page="formJsonQuery.page" 
                :page-sizes="[10,20,30,50]" 
                :page-size="formJsonQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
        <!-- 编辑 -->
        <el-dialog :title="textMap[dialogStatus]" :visible.sync="editFormVisible" append-to-body>
            <el-form :rules="rules" ref="dataForm" :model="temp" label-position="right" label-width="80px" style='width:400px;margin-left:50px;'>
                <el-form-item label="姓名" prop="name">
                     <el-input v-model="temp.name" class="i-input" suffix-icon="i-icon-people"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="moblie">
                     <el-input v-model="temp.moblie" class="i-input" suffix-icon="i-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="type">
                    <el-select v-model="temp.type" placeholder="请选择类型">
                        <el-option v-for="item in entry" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="日期" prop="timestamp">
                    <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="请填写日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="客户需求" prop="title">
                    <el-input v-model="temp.title" class="i-input" suffix-icon="i-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="temp.status" size="mini">
                        <el-radio v-for="item in statusOptions" :key="item" :label="item" :value="item" border></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="重要性">
                    <el-rate style="margin-top:8px;" v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max='3'></el-rate>
                </el-form-item>
                <el-form-item label="描述说明">
                    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请填写相关的描述说明" v-model="temp.remark"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editFormVisible = false">取消</el-button>
                <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">创建</el-button>
                <el-button v-else type="primary" @click="updateData">保存</el-button>
            </div>
        </el-dialog>
        <!-- 阅读量 -->
        <el-dialog title="阅读量" :visible.sync="dialogPvVisible" append-to-body>
            <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
                <el-table-column prop="key" label="完成"></el-table-column>
                <el-table-column prop="pv" label="端口"></el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogPvVisible = false">完成</el-button>
            </span>
        </el-dialog>
    </div> 
</template>
<script>
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/table'
import waves from '@/directive/waves' // 水波纹指令
import { parseTime } from '@/utils'

const typeOptions = [
  { key: '1', display_name: '意向客户' },
  { key: '2', display_name: '见面客户' },
  { key: '3', display_name: '合同客户' }
]

const typeKeyValue = typeOptions.reduce((acc, cur) => {
    acc[cur.key] = cur.display_name
    return acc
}, {})

export default {
    name: 'customer',
    directives: { // 自定义指令注册
        waves
    },
    data() {
        return {
            tableKey: 0,
            formJson: null,     // 数据源
            total: null,        
            loading: true,
            height:0,
            formJsonQuery: {
                page: 1,
                limit: 20,
                importance: undefined,
                title: undefined,
                type: undefined,
                sort: ''
            },
            entry: [            // 客户来源（入口）
                { label: '自主开发', value: '1' },
                { label: '自然到店', value: '2' }, 
                { label: '工地回单', value: '3' },
                { label: '广告推广', value: '4' },
                { label: '其它来源', value: '5' }, 
                { label: '蜂巢网', value: '6' },
                { label: '网销部转入', value: '7' },
                { label: '其它来源', value: '8' }, 
                { label: '朋友介绍', value: '9' },
                { label: '电话营销', value: '10' },
                { label: '电话来源', value: '11' }, 
                { label: '电视广告', value: '12' },
                { label: '网络推广', value: '13' }
            ],                                                                          
            importanceOptions: ['中意向', '高意向'],
            typeOptions,
            sortOptions: [{ label: '中意向', key: '+id' }, { label: '高意向', key: '-id' }],
            statusOptions: ['意向客户', '见面客户', '合同客户'],
            showReviewer: false,
            temp: {
                id: undefined,
                name: '',
                importance: 1,
                moblie: '',
                remark: '',
                timestamp: new Date(),
                title: '',
                type: '',
                status: '意向客户'
            },
            editFormVisible: false,
            dialogStatus: '',
            textMap: {
                update: '编辑',
                create: '创建'
            },
            dialogPvVisible: false,
            pvData: [],
            rules: {
                type: [{ required: true, message: '类型为必填项', trigger: 'change' }],
                timestamp: [{ type: 'date', required: true, message: '时间为必填项', trigger: 'change' }],
                title: [{ required: true, message: '标题为必填项', trigger: 'blur' }]
            },
            downloadLoading: false,
            currentRow: null,
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            }
        }
    },
    filters: {
        statusFilter(status) {
            const statusMap = {
                published: 'success',
                draft: 'info',
                deleted: 'danger'
            }
            return statusMap[status]
        },
        typeFilter(type) {
            return typeKeyValue[type]
        }
    },
    mounted() {
        this.getformJson()
        this.$nextTick(() => {
            this.height = window.innerHeight - 230
        }) 
    },
    methods: {
        getformJson() {
            this.loading = true
            fetchList(this.formJsonQuery).then(response => {
                this.formJson = response.items
                this.total = response.total
                this.loading = false
            })
        },
        handleFilter() {
            this.formJsonQuery.page = 1
            this.getformJson()
        },
        handleSizeChange(val) {
            this.formJsonQuery.limit = val
            this.getformJson()
        },
        handleCurrentChange(val) {
            console.log(val)
            this.formJsonQuery.page = val
            this.getformJson()
        },
        handleModifyStatus(row, status) {
            this.$message({
                message: '操作成功',
                type: 'success',
                showClose: true
            })
            row.status = status
        },
        resetTemp() {
            this.temp = {
                id: undefined,
                importance: 1,
                remark: '',
                timestamp: new Date(),
                title: '',
                status: '意向客户',
                type: ''
            }
        },
        handleCreate() {
            this.resetTemp()
            this.dialogStatus = 'create'
            this.editFormVisible = true
            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },
        createData() {
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
                createArticle(this.temp).then(() => {
                        this.formJson.unshift(this.temp)
                        this.editFormVisible = false
                        this.$notify({
                            title: '成功',
                            message: '创建成功',
                            type: 'success',
                            duration: 2000
                        })
                    })
                }
            })
        },
        handleUpdate(row) {
            this.temp = Object.assign({}, row) // copy obj
            this.temp.timestamp = new Date(this.temp.timestamp)
            this.dialogStatus = 'update'
            this.editFormVisible = true
            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },
        updateData() {
        this.$refs['dataForm'].validate((valid) => {
            if (valid) {
                const tempData = Object.assign({}, this.temp)
                tempData.timestamp = +new Date(tempData.timestamp) 
                updateArticle(tempData).then(() => {
                        for (const v of this.formJson) {
                            if (v.id === this.temp.id) {
                                const index = this.formJson.indexOf(v)
                                this.formJson.splice(index, 1, this.temp)
                                break
                            }
                        }
                    this.editFormVisible = false
                    this.$notify({
                        title: '成功',
                        message: '更新成功',
                        type: 'success',
                        duration: 2000
                    })
                })
            }
        })
        },
        handleDelete(row) {
            this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success',
                duration: 2000
            })
            const index = this.formJson.indexOf(row)
            this.formJson.splice(index, 1)
        },
        handleFetchPv(pv) {
            fetchPv(pv).then(response => {
                this.pvData = response.pvData
                this.dialogPvVisible = true
            })
        },
        handleDownload() {
            this.downloadLoading = true
            import('@/components/ExportExcel/Export2Excel').then(excel => {
                const tHeader = ['客户来源', '客户级别', '客户需求', '楼盘信息', '联系电话', '市场接待', '时间']
                const filterVal = ['type', 'status', 'title', 'addr', 'moblie', 'name', 'timestamp']
                const data = this.formatJson(filterVal, this.formJson)
                excel.export_json_to_excel(tHeader, data, 'table-list')
                this.downloadLoading = false
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => {
                if (j === 'timestamp') {
                    return parseTime(v[j])
                } else {
                    return v[j]
                }
            }))
        }
    }
};
</script>
<style lang='less'>
@import '~@/assets/css/mixins.less';
.table-container {
    .filter-flex {
        .box-flex(1);
    }
}
.filter-container {
    .display-flex();
    align-items: center;
    padding: 15px 0;
    background-color: #fff;
}

.pagination-container {
    margin-top: 30px;
}
</style>
