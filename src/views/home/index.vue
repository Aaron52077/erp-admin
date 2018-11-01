<template>
    <div id="home">
        <!-- card -->
        <wl-card @setEchartData="echartData"></wl-card>
        <!-- echarts -->
        <el-row>
            <el-col :span="24">
                <wl-chart :chart-data="lineChartData"></wl-chart>
            </el-col>
        </el-row>
        <el-row :gutter="12">
            <!-- table -->
            <el-col :span="12"></el-col>
            <!-- todo -->
            <el-col :span="12"></el-col>
        </el-row>
    </div>
</template>
<script>
import wlCard from './components/card'
import wlChart from './components/chart'
const lineChartData = {
    newVisitis: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
        expectedData: [80, 100, 121, 104, 105, 90, 100],
        actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130]
    }
}
export default {
    name: 'home',  
    data() {
        return {
            lineChartData: lineChartData.newVisitis
        }
    },
    methods: {
        echartData(type) {
            this.lineChartData = lineChartData[type]
        }
    },
    components: { wlCard, wlChart }
}
</script>
<style lang='less'>
#home {
    padding-top: 10px;
    padding-bottom: 20px;
    padding-right: 30px;
    background-color: #fff;
    height: 1200px;
}
</style>
