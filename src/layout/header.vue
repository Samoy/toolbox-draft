<template>
  <a-layout-header :theme="theme.type" class="layout-header">
    <menu-unfold-outlined
      v-if="menu.collapsed"
      class="trigger"
      @click="toggleCollapsed"
    />
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
    <span>
      <a-switch
        title="暗黑模式"
        @change="myToggleTheme"
        :checked="theme.type == 'dark'"
      >
        <template #checkedChildren>
          <icon-font type="icon-moon"></icon-font>
        </template>
        <template #unCheckedChildren>
          <icon-font type="icon-moon"></icon-font>
        </template>
      </a-switch>
    </span>
  </a-layout-header>
</template>

<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { TOGGLE_COLLAPSED } from '../store/modules/menu/types'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
import { TOGGLE_THEME } from '../store/modules/theme/types'
import { IconFont } from '../components/icon'

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
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
