<template>
    <div id="card">
        <el-row  :gutter="32" class="count">
            <el-col class="count-item" :xs="24" :sm="12" :lg="6" v-for="(item,index) in list" :key="index">
                <div class="item-container" :class="`item-container-${index + 1}`" @click="setEchartData(item.type)">
                    <div class="icon">
                        <i :class="item.icon" ></i>
                    </div>
                    <div class="text">
                        <div class="title">{{item.title}}</div>
                        <i-countTo class="number" :startVal="0" :endVal="item.endVal" :duration="5000"></i-countTo>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'card',
    data() {
        return {
           list: [
                {
                    icon: 'el-icon-date',
                    title: 'Page View',
                    endVal: 1827,
                    type: 'newVisitis'
                },
                {
                    icon: 'el-icon-date',
                    title: 'Unique Visitor',
                    endVal: 7428,
                    type: 'messages'
                },
                {
                    icon: 'el-icon-date',
                    title: '11111',
                    endVal: 2839,
                    type: 'purchases'
                },
                {
                    icon: 'el-icon-date',
                    title: '111',
                    endVal: 111,
                    type: 'shoppings'
                }
            ]
        }
    },
    methods: {
        setEchartData(type) {
            this.$emit('setEchartData', type)
        }
    }
}
</script>

<style lang='less'>
@color1:#55c8ca;
@color2:#f7b87f;
@color3:#36a3f7;
@color4:#34bfa3;
#card {
    .count{
        padding: 20px;
        .count-item{
            user-select: none;
            margin-bottom: 32px;
            .item-container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                background-color: #f3f4f5;
                border-radius: 6px;
                cursor: pointer;
                &:hover{
                    opacity: 0.8;
                }
                &.item-container-1{
                    background: @color1;
                }
                &.item-container-2{
                    background: @color2;
                }
                &.item-container-3{
                    background: @color3;
                }
                &.item-container-4{
                    background: @color4;
                }
                .icon{
                    padding: 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s ease-out;
                    i{
                        font-size: 48px;
                        color: #fff;
                    }
                }
                .text{
                    text-align: right;
                    color: #fff;
                    .title{
                        font-size: 16px;
                        margin-bottom: 12px;
                    }
                    .number{
                        font-size: 20px;
                    }
                }
            }
        }
    }
}
</style>