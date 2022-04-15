<template>
  <a-layout-header class="layout-header">
    <menu-unfold-outlined
      v-if="state.collapsed"
      class="trigger"
      @click="toggleCollapsed"
    />
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
  </a-layout-header>
</template>

<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { TOGGLE_COLLAPSED } from '../store/modules/menu/types'

const store = useStore<IRootState>()
const state = ref<IMenuState>(store.state.menu)

function toggleCollapsed() {
  store.commit(TOGGLE_COLLAPSED)
}
</script>

<style lang="less" scoped>
.layout-header {
  background: #fff;
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
