<template>
  <div class="topBar">
    <a href="#" class="logo"></a>
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><a href="#">订单管理</a></el-menu-item>
        <el-menu-item index="2"><a href="#">订单管理</a></el-menu-item>
        <el-menu-item index="3"><a href="#">订单管理</a></el-menu-item>
        <el-menu-item index="4"><a href="#">订单管理</a></el-menu-item>
        <el-menu-item index="5"><a href="#">订单管理</a></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      console.log(1)
    }
  }
}
</script>
<style lang="less" scoped>
a {
  text-decoration: none;
}
.topBar {
  min-width: 1060px;
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: green;
  z-index: 20;
  > a {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 135px;
    height: 71px;
    background: url('../assets/images/logo.jpg') no-repeat top left;
    background-size: contain;
  }
  .nav {
    position: relative;
    width: 100%;
    max-width: 1260px;
    height: 100%;
    margin: 0 auto;
    .el-menu {
      position: absolute;
      right: 10px;
      bottom: 20px;
      height: 24px;
      border: 0;
      overflow: hidden;
      > .el-menu-item.is-active {
        border: 0;
        color: #409EFF;
      }
      .el-menu-item {
        padding: 0;
        width: 110px;
        height: 100%;
        border: 0;
        line-height: 27px;
        background: url('../assets/images/line.png') no-repeat center right;
        text-indent: -10px;
        &:last-of-type {
          background: none;
        }
        a {
          font-size: 16px;
          color: #000;
          text-align: center;
          vertical-align: baseline;
        }
      }
    }
  }
}
</style>
