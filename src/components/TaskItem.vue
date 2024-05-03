<script setup lang="ts">
import { Task } from "../types/index";
import { ref } from "vue";

interface Props {
  task: Task;
}

const props = defineProps<Props>();

const editTodo = ref<string>("");
const isEditTodo = ref<boolean>(false);

interface Emits {
  (e: "toggleDone", value: number): void;
  (e: "deleteTask", value: number): void;
  (e: "editTask", id: number, body: string): void;
}

const emit = defineEmits<Emits>();

const toggleDoneHandler = (id: number) => {
  emit("toggleDone", id);
};
const deleteTaskHandler = (id: number) => {
  emit("deleteTask", id);
};

const editTaskHandler = () => {
  isEditTodo.value = true;
  editTodo.value = props.task.body;
};

const saveEditedTaskHandler = (id: number, body: string) => {
  emit("editTask", id, body);
  isEditTodo.value = false;
};
</script>

<template>
  <div class="task">
    <div class="subtask">
      <div>
        <label class="container">
          <input
            type="checkbox"
            :checked="props.task.done"
            @click="toggleDoneHandler(props.task.id)"
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <div>
        <div class="inWork" v-if="!isEditTodo && props.task.done === false">
          {{ props.task.body }}
        </div>
        <div class="isDone" v-if="!isEditTodo && props.task.done === true">
          {{ props.task.body }}
        </div>
        <div v-if="isEditTodo">
          <textarea
            class="input"
            v-model="editTodo"
            placeholeder="введите данные"
            @keyup.enter="saveEditedTaskHandler(props.task.id, editTodo)"
          >
          </textarea>
        </div>
      </div>
    </div>
    <div class="task_btns">
      <div class="edit" @click="editTaskHandler"></div>
      <div class="delete" @click="deleteTaskHandler(props.task.id)"></div>
    </div>
  </div>
</template>

<style scoped>
.task {
  padding: 15px;
  border-radius: 10px;
  text-align: left;
  width: 95%;
  margin: 15px auto 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: RGB(255, 255, 255);
}

.subtask {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
}

.input {
  width: 300px;
  height: 100px;
}

.isDone {
  text-decoration: line-through;
  color: RGB(144, 145, 146);
}

.inWork {
  color: RGB(41, 39, 37);
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.task_btns {
  display: flex;
  flex-direction: row;
}

.task_btns :first-child {
  margin-right: 15px;
}

.task_btns div:hover {
  cursor: pointer;
}

.edit {
  width: 40px;
  height: 40px;
  background-image: url(../assets/images/edit.png);
}

.delete {
  width: 40px;
  height: 40px;
  background-image: url(../assets/images/delete.jpeg);
  border-radius: 7px;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;

  border-radius: 15px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 6px;
  width: 8px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
