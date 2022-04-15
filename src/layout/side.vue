<template>
  <a-layout-sider
    v-model:collapsed="state.collapsed"
    :trigger="null"
    collapsible
  >
    <div class="logo">
      <transition name="fade">
        <span v-show="!state.collapsed">协力开发工具平台</span>
      </transition>
    </div>
    <a-menu
      :selectedKeys="state.selectedKeys"
      @select="selectedMenu"
      :theme="theme.type"
      mode="inline"
      v-for="item in state.list"
    >
      <a-menu-item v-if="!item.children" :key="item.key">
        <component :is="item.icon"></component>
        <span>{{ item.title }}</span>
      </a-menu-item>
      <a-sub-menu :title="item.title" v-else v-for="menu in item.children">
        <a-menu-item :key="menu.key">
          <span>{{ menu.title }}</span>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { SelectInfo } from 'ant-design-vue/lib/menu/src/interface'
import { SELECTED_MENU } from '../store/modules/menu/types'

const store = useStore<IRootState>()
const state = ref<IMenuState>(store.state.menu)
const theme = ref<IThemeState>(store.state.theme)

function selectedMenu({ key }: SelectInfo) {
  store.commit(SELECTED_MENU, key as string)
}
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  line-height: 32px;
  background: url('../assets/logo.svg') no-repeat;
  margin: 16px 20px;
  color: #fff;
  padding-left: 40px;
  background-position-y: center;
}
.fade-enter-active {
  transition: opacity .6s ease-in;
}
.fade-enter-from {
  opacity: 0;
}
</style>
