<script setup>
  import ViewLoading from '@/components/ViewLoading.vue'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <suspense>
        <template #fallback>
          <view-loading />
        </template>

        <template #default>
          <component
            :is="Component"
            :key="route.path"
          />
        </template>
      </suspense>
    </transition>
  </router-view>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
