<template>
    <div class="wuli-aside">
         <el-button type="primary" @click.native="toggleAside">侧边栏</el-button>
        <!-- 侧边栏 -->
        <wl-aside :closed.sync="flag" width="50">
            <div class="wuli-aside__bd">
                <el-row class="wuli-aside__item">
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                </el-row>

                <el-row class="wuli-aside__item">
                    <el-button plain>朴素按钮</el-button>
                    <el-button type="primary" plain>主要按钮</el-button>
                    <el-button type="success" plain>成功按钮</el-button>
                    <el-button type="info" plain>信息按钮</el-button>
                    <el-button type="warning" plain>警告按钮</el-button>
                    <el-button type="danger" plain>危险按钮</el-button>
                </el-row>

                <el-row class="wuli-aside__item">
                    <el-button round>圆角按钮</el-button>
                    <el-button type="primary" round>主要按钮</el-button>
                    <el-button type="success" round>成功按钮</el-button>
                    <el-button type="info" round>信息按钮</el-button>
                    <el-button type="warning" round>警告按钮</el-button>
                    <el-button type="danger" round>危险按钮</el-button>
                </el-row>

                <el-row class="wuli-aside__item">
                    <el-button icon="el-icon-search" circle></el-button>
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="success" icon="el-icon-check" circle></el-button>
                    <el-button type="info" icon="el-icon-message" circle></el-button>
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </el-row>
            </div>
        </wl-aside>
    </div>
</template>

<script>
import wlAside from '@/components/Aside'

export default {
    data() {
        return {
            flag: false
        };
    },
    methods: {
        toggleAside() {
            this.flag = !this.flag
        }
    },
    components: {
        wlAside
    }
}
</script>

<style lang="less">
.wuli-aside {
    padding: 20px;
    background-color: #fff;
    &__bd {
        margin-top: 60px; 
        padding: 20px;
    }
    &__item {
        margin-bottom: 20px;
    }
}
</style>
