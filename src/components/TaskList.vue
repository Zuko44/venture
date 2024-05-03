<script setup lang="ts">
import TasksFilter from "../components/TasksFilter.vue";
import TaskItem from "./TaskItem.vue";
import { Task, FilterTasks } from "../types/index";
import { useTaskStore } from "../stores/tasks";
import { ref } from "vue";

// interface Props {
//   tasks: Task[];
// }

// const props = defineProps<Props>();
const activeFIlter = ref<FilterTasks>(FilterTasks.All);
const tasksStore = useTaskStore();

const toggleDoneHandler = (id: number) => {
  tasksStore.toggleDoneHandler(id);
};
const deleteTaskHandler = (id: number) => {
  tasksStore.deleteTaskHandler(id);
};

const switchTaskFilter = (currentFIlter: FilterTasks) => {
  activeFIlter.value = currentFIlter;
};

const switchTasksHandler = (activeFIlter: FilterTasks): Task[] => {
  let switchedTasks: Task[] = [];
  if (activeFIlter === FilterTasks.All) {
    switchedTasks = tasksStore.tasks;
  }
  if (activeFIlter === FilterTasks.InWork) {
    switchedTasks = tasksStore.tasks.filter((e) => e.done === false);
  }
  if (activeFIlter === FilterTasks.Done) {
    switchedTasks = tasksStore.tasks.filter((e) => e.done === true);
  }
  return switchedTasks;
};
const editTaskHandler = (id: number, body: string) => {
  tasksStore.editTaskHandler(id, body);
};
</script>

<template>
  <TasksFilter @switchTaskFilter="switchTaskFilter" />
  <div>
    <TaskItem
      v-for="task in switchTasksHandler(activeFIlter)"
      :key="task.id"
      :task="task"
      @deleteTask="deleteTaskHandler"
      @toggleDone="toggleDoneHandler"
      @editTask="editTaskHandler"
    />
  </div>
</template>

<style scoped>
h3 {
  margin-top: 15px;
}
</style>
