<script setup>
  import ViewLoading from './components/ViewLoading.vue'
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <suspense>
          <template #fallback>
            <view-loading />
          </template>

          <template #default>
            <component :is="Component" />
          </template>
        </suspense>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
  @use '@/styles/partials/animations';
</style>
