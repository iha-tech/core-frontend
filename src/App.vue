<script setup>
  import ViewLoading from './components/ViewLoading.vue'
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <suspense>
          <template #fallback>
            <view-loading />
          </template>

          <template #default>
            <component :is="Component"></component>
          </template>
        </suspense>
      </transition>
    </router-view>
  </main>
</template>
