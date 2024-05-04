<template>
  <div v-cloak class="warapper">
    <div>
      <slot name="sidebar"></slot>
    </div>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
[v-cloak] {
  display: none;
}

.warapper {
  display: flex;
}
</style>
