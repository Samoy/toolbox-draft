<template>
  <a-layout class="site-layout">
    <Sider></Sider>
    <a-layout>
      <Header></Header>
      <a-layout-content class="layout-content">Content</a-layout-content>
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
    margin: 24px 16px;
    padding: 24px;
    min-height: 280px;
  }
}
</style>
