<script setup lang="ts">
import TaskButton from "./UI/TaskButton.vue";
import { Task } from "../types/index";
import { useTaskStore } from "../stores/tasks";
import { ref } from "vue";

const body = ref<string>("");
const tasksStore = useTaskStore();

const createTaskHandler = (e: Task) => {
  const task: Task = {
    id: Math.floor(Math.random() * 1000000),
    body: body.value,
    done: false,
  };
  tasksStore.createTaskHandler(task);
  body.value = "";
};
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent>
      <input
        v-model="body"
        class="input"
        type="text"
        placeholder="Task To Be Done..."
      />
      <TaskButton @click="createTaskHandler" class="btn"> Add </TaskButton>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 15px;
  width: 100%;
  margin: 0px auto;
}

form {
  display: flex;
  flex-direction: row;
}

.input {
  width: 92%;
  border: 0px;
  padding: 10px 15px;
  margin-top: 15px;
  border-bottom: 1px solid RGB(144, 145, 146);
  background-color: transparent;
  color: inherit;
  outline: none;
}

.btn {
  width: 100px;
  margin-top: 15px;
  display: inline-block;
  margin-left: 10px;
  padding: 10px 15px;
  background: RGB(82, 147, 255);
  color: white;
  border: 1px solid teal;
  border-radius: 7px;
  cursor: pointer;
}
</style>
