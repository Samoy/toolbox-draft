<template>
  <a-layout class="site-layout">
    <Sider></Sider>
    <a-layout>
      <Header></Header>
      <a-layout-content class="layout-content">
        <router-view></router-view>
      </a-layout-content>
      <Footer></Footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Sider from './sider.vue'
import Header from './header.vue'
import Footer from './footer.vue'
</script>
<style lang="less" scoped>
.site-layout {
  height: 100vh;
  .layout-content {
    margin: 16px;
    flex: 1;
    min-height: 280px;
    display: flex;
    background: @component-background;
  }
}
</style>
