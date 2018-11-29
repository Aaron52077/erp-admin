<template>
    <div class="updata">
        全局过滤器测试
        {{nowTime | formatTime('{y}-{m}-{d}')}} 
        距当前 {{timeStamp | getDiffTime}} 
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '待更新...',
            nowTime: Date.now(),
            numberText: 12000,
            timeStamp: 1543471177,
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
}
</style>

