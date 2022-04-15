<template>
  <a-layout-header :theme="theme.type" class="layout-header">
    <menu-unfold-outlined
      v-if="menu.collapsed"
      class="trigger"
      @click="toggleCollapsed"
    />
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
    <a-switch @change="myToggleTheme" :checked="theme.type == 'dark'"></a-switch
    >暗黑模式
  </a-layout-header>
</template>

<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { TOGGLE_COLLAPSED } from '../store/modules/menu/types'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
import { TOGGLE_THEME } from '../store/modules/theme/types'

const store = useStore<IRootState>()
const { menu, theme } = store.state

function toggleCollapsed() {
  store.commit(TOGGLE_COLLAPSED)
}

/**
 * 切换主题
 */
function myToggleTheme() {
  const themeType = theme.type == 'dark' ? 'light' : 'dark'
  toggleTheme({ scopeName: `theme-${themeType}` })
  store.commit(TOGGLE_THEME, themeType)
}
</script>

<style lang="less" scoped>
.layout-header {
  padding: 0;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
