<script setup>
  import ViewLoading from './components/ViewLoading.vue'
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <suspense>
        <template #fallback>
          <view-loading />
        </template>

        <template #default>
          <h1>This is Iha Tech! A representation of my own personal world in a digital form!</h1>
  
          <component :is="Component"></component>
        </template>
      </suspense>
    </router-view>
  </main>
</template>
