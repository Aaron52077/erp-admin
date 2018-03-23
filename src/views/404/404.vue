<template>
  <div class="error">
    <img src="~@/assets/img/404.png" alt="">
    {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    }
  },
  computed: {
    message() {
      return '超哥说这个页面你不能进......'
    }
  }
}
</script>
<style lang="less" scoped>
.error {
  padding: 50px 0;
  text-align: center;
  img {
    width: 60%;
    height: 60%;
  }
}
</style>

