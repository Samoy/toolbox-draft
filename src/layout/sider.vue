<template>
  <a-layout-sider
    v-model:collapsed="menu.collapsed"
    :trigger="null"
    collapsible
  >
    <div class="logo">
      <transition name="fade">
        <span v-show="!menu.collapsed">协力开发工具平台</span>
      </transition>
    </div>
    <a-menu
      :selectedKeys="menu.selectedKeys"
      @select="selectedMenu"
      mode="inline"
      v-for="item in menu.list"
    >
      <a-menu-item v-if="!item.children" :key="item.key">
        <router-link :to="item.url">
          <component :is="item.icon"></component>
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu :title="item.title" v-else v-for="menu in item.children">
        <a-menu-item :key="menu.key">
          <router-link :to="menu.url">
            <span>{{ menu.title }}</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { SelectInfo } from 'ant-design-vue/lib/menu/src/interface'
import { SELECTED_MENU } from '../store/modules/menu/types'

const store = useStore<IRootState>()
const { menu } = store.state

function selectedMenu({ key }: SelectInfo) {
  store.commit(SELECTED_MENU, key as string)
}
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  line-height: 32px;
  background: url('../assets/logo.svg') no-repeat;
  margin: 14px 20px;
  padding-left: 40px;
  font-weight: bold;
  font-size: 15px;
  background-position-y: center;
}
.fade-enter-active {
  transition: opacity 0.8s ease-in;
}
.fade-enter-from {
  opacity: 0;
}
</style>
