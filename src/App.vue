<script setup lang="ts">
import { RouterView } from "vue-router";
import MainContainer from "./components/MainContainer.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <MainContainer>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <main>
      <RouterView />
    </main>
  </MainContainer>
</template>

<style scoped></style>
