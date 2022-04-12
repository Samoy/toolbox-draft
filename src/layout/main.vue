<template>
  <a-layout class="site-layout">
    <a-layout-sider
      v-model:collapsed="state.collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo"></div>
      <a-menu
        :selectedKeys="state.selectedKeys"
        @select="selectedMenu"
        theme="dark"
        mode="inline"
        v-for="item in state.list"
      >
        <a-menu-item v-if="!item.children" :key="item.key">
          <span>{{ item.title }}</span>
        </a-menu-item>
        <a-sub-menu :title="item.title" v-else v-for="menu in item.children">
          <a-menu-item :key="menu.key">
            <span>{{ menu.title }}</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <menu-unfold-outlined
          v-if="state.collapsed"
          class="trigger"
          @click="toggleCollapsed"
        />
        <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
      </a-layout-header>
      <a-layout-content class="layout-content">Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { SelectInfo } from 'ant-design-vue/lib/menu/src/interface'
import { SELECTED_MENU, TOGGLE_COLLAPSED } from '../store/modules/menu/types'

const store = useStore<IRootState>()
const state = ref<IMenuState>(store.state.menu)

function toggleCollapsed() {
  store.commit(TOGGLE_COLLAPSED)
}

function selectedMenu({ key }: SelectInfo) {
  store.commit(SELECTED_MENU, key as string)
}
</script>
<style lang="less">
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
