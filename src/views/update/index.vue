<template>
    <div class="updata">
        <div>
             全局过滤器测试
        {{nowTime | formatTime('{y}-{m}-{d}')}} 
        距当前 {{timeStamp1 | getDiffTime}} {{timeStamp2 | getDiffTime}} 
        </div>
       
        <el-button type="info" @click="getData">点击请求</el-button>
        <el-button type="primary" @click="handleLoading(true)">loading 状态</el-button>
        <el-button type="warning" @click="handleLoading('nothing')">nothing 状态</el-button>
        <el-button type="danger" @click="handleLoading('error')">error 状态</el-button>
        <wl-loading :visible="loading" :reload="getData"></wl-loading>

        <div style="margin-top: 30px;">
            <wl-audio 
                :music="audioData"
                theme="#b7daff">
            </wl-audio>
        </div>
    </div>
</template>

<script>
import VueAplayer from 'vue-aplayer'

export default {
    data() {
        return {
            message: '待更新...',
            nowTime: Date.now(),
            numberText: 12000,
            timeStamp1: (new Date()).getTime() - 60 * 3 * 1000,
            timeStamp2: (new Date()).getTime() - 3600 * 24 * 2 * 3 * 1000,
            loading: false,
            audioData: {
                title: '标题',
                artist: '作者',
                src: 'http://www.noiseaddicts.com/samples_1w72b820/290.mp3'
            }
        }
    },
    methods: {
        getData() {
            this.loading = true;
            setTimeout(() => {
                this.loading = 'nothing'
            }, 2000);
        },
        handleLoading(type) {
            this.loading = type
        }
    },
    components: { 'wl-audio': VueAplayer }
}
</script>

<style lang="less">
.updata {
    padding: 50px;
    font-size: 24px;
    color: #000;
    background-color: #fff;
}
</style>

