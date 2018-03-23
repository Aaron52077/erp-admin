<template>
  <div class="hamburger">
    <i @click="toggleClick" class="i-icon-menu" :class="{'is-active':isActive}"></i>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
.hamburger {
    display: inline-block;
    cursor: pointer;
    i {
      font-size: 24px;
    }
    &.is-active {
      transform: rotate(90deg);
    }
}
</style>
