<script setup lang="ts">
import TaskList from "../components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";
import { ref, onMounted, watch } from "vue";

const title = ref<string>("paper");
const isTitle = ref<boolean>(false);

const initTitle = () => {
  const localStorageValue = localStorage.getItem("title");
  if (localStorageValue) {
    title.value = localStorageValue;
  }
};

watch(title, (newTitle) => {
  document.title = newTitle;
  localStorage.setItem("title", newTitle);
});

onMounted(() => {
  initTitle();
});
</script>

<template v-cloak>
  <div class="main">
    <div class="top">
      <div v-if="!isTitle">
        <h1 @click="isTitle = true">{{ title }}</h1>
      </div>
      <div v-if="isTitle">
        <input
          v-model="title"
          placeholder="новое название"
          @keyup.enter="isTitle = false"
        />
      </div>
    </div>
    <TaskForm />
    <TaskList />
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  background: RGB(241, 245, 249);
}

.main {
  text-align: center;
}

.top {
  margin: 15px 0px;
}

h3 {
  margin-top: 15px;
}

[v-cloak] {
  display: block;
  padding: 50px 0;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #333;
    animation: spinner 0.6s linear infinite;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  & > div {
    display: none;
  }
}
</style>
