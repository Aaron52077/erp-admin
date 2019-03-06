<template>
    <div v-loadmore="loadMore">
        <div class="el-loadmore__wrapper">
            <div>滚动加载实例</div> 
            <el-button type="primary" @click.native="devVue">Vue原型挂载</el-button>
            <el-radio-group v-model="globalData.setLang">
                <el-radio-button label="zh-cn">中文</el-radio-button>
                <el-radio-button label="zh-tw">繁体</el-radio-button>
                <el-radio-button label="en">English</el-radio-button>
            </el-radio-group>
            <div>多语言用法：{{t('当前位置')}}</div>
            <div>{{t('最多输入{num}个字', {num:50})}}</div>
        </div>
    </div>
</template>

<script>
import loadmore from "@/directive/loadmore" // 滚动加载指令
import { locales } from '@/i18n'
export default {  
    data() {
        return {
            loadFalg: false // 是否分页
        }
    },
    methods: {
        loadMore() {
            if (this.loadFalg) {
                this.loadFalg = false
            }
            // 延迟开关
            setTimeout(() => {
                this.loadFalg = true
            }, 250)
        },
        devVue() {
            console.log(this.globalData)
        }
    },
    locales: locales,
    directives: { loadmore }
}
</script>

<style lang="less" scoped>
 
</style>
