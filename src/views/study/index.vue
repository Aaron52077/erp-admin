<template>
    <div class="updata">
        <div class="updata-inline">原数组：{{arr}}，{{arrObj}}</div>
        <div class="updata-inline">去重方式数组1：{{arr | unique}}</div>
        <div class="updata-inline">去重方式数组2：{{uniqueArray}}</div>
        <div class="updata-inline">解析url参数：{{queryObject}}</div>
        <div class="updata-inline">引入JQ： <el-button type="primary" size="small" @click.native="pullJq">加载</el-button></div>
        <div class="updata-inline">金额大小写转换：{{money}} {{money | moneyFormat}}</div>
        <!-- <div class="updata-inline">打印当前页面：<el-button type="primary" size="small" @click.native="printPage">打印</el-button></div> -->
        <div class="updata-inline">数据共享：{{gModule.getData['test'] || ''}} <el-button type="primary" size="small" @click.native="changeData">改变</el-button></div>
        
    </div>
</template>

<script>
import { deepClone, uniqueArr, uniqueObj1, uniqueObj2, getQueryObject } from '@/utils'
export default {
    data() {
        return {
            arr: [0, 1, 1, 2, 5, 0],
            arrObj: [
                {
                    id: 10,
                    pid: 15
                },
                {
                    id: 10,
                    pid: 15
                },
                {
                    id: 11,
                    pid: 15
                }
            ],
            url: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E6%B7%98%E5%AE%9D&oq=encodeuricomponent%2520%25E8%25A7%25A3%25E5%25AF%2586&rsv_pq=ed99b73b00004852&rsv_t=0c97vnUhyvkcUhAroMs0b7sRwklLFcH3oCvnjwTmLHfBeyA7jDmc8EL%2BrwM&rqlang=cn&rsv_enter=1&inputT=1537&rsv_sug3=28&rsv_sug1=32&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1538',
            money: 155000,
        }
    },
    methods: {
        pullJq() {
            this.gModule.load('jquery', () => {
                this.$message({
                    message: '引入jquery成功',
                    type: 'success'
                });
            })
        },
        printPage() {
            // 传入需要打印的DOM节点 id或class
            this.gModule.print('.updata');
        },
        changeData() {
            this.gModule.setData('test', '测试数据')
        }
    },
    computed: {
        uniqueArray() {
            const arr = deepClone(this.arrObj)
            // return uniqueObj1(arr, 'id')
            return uniqueObj2(arr)
        },
        queryObject() {
            return getQueryObject(this.url)
        }
    },
    filters: {
        unique(val) {
            return uniqueArr(val)
        }
    }
}
</script>

<style lang="less">
.updata {
    padding: 50px;
    font-size: 24px;
    color: #000;
    background-color: #fff;
    &-inline {
        font-size: 14px;
        padding: 5px 0;
    }
}
</style>

