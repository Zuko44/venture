<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <div class="main">
    <SideBar />
    <div><slot></slot>></div>
  </div>
</template>

<style scoped>
.main {
  background: white;
  border-radius: 20px;
  display: flex;
  /* flex-direction: column; */
}
</style>
