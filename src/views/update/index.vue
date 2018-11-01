<template>
    <div class="updata">
        {{message}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '待更新...'
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

