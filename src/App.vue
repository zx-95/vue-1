<template>
  <div id="app">
    <el-container>
      <el-header>
        <topBar></topBar>
      </el-header>
      <el-main>
        <div class="block">
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import TopBar from './components/TopBar.vue'
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    topBar: TopBar
  }
}
</script>
<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  height: 1000px;
}

</style>
