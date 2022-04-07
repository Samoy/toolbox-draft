<template>
  <a-layout class="site-layout">
    <a-layout-sider
      v-model:collapsed="state.collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="state.selectedKeys"
        theme="dark"
        mode="inline"
      >
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <menu-unfold-outlined
          v-if="state.collapsed"
          class="trigger"
          @click="() => (state.collapsed = !state.collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (state.collapsed = !state.collapsed)"
        />
      </a-layout-header>
      <a-layout-content class="layout-content" :style="{}">
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import { ref } from 'vue'

const state = ref<INavState>({
  selectedKeys: ['1'],
  collapsed: false,
})
</script>
<style lang="scss">
.site-layout {
  height: 100vh;
  .layout-header {
    background: #fff;
    padding: 0;
  }
  .site-layout-background {
    background: #fff;
  }
  .layout-content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
}
#app .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#app .trigger:hover {
  color: #1890ff;
}

#app .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
