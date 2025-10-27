<script lang="ts" setup>
import {computed, ref} from 'vue'

interface Todo {
  id: number,
  text: string,
  done: boolean,
}

const hideCompleted = ref<boolean>(true)

let id: number = 0;
const newTodo = ref<string>('')
const todos = ref<Todo[]>([
  {id: id++, text: 'Learn HTML', done: true},
  {id: id++, text: 'Learn JavaScript', done: true},
  {id: id++, text: 'Learn Vue', done: false}
])

const filteredTodos = computed<Todo[]>(() => {
  if (hideCompleted.value) {
    return todos.value;
  } else {
    return todos.value.filter(item => !item.done);
  }
})

function addTodo() {
  todos.value.push({id: id++, text: newTodo.value, done: false});
}

function removeTodo(todo: Todo) {
  // ...
  todos.value = todos.value.filter(item => item.id !== todo.id)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" placeholder="new todo" required>
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input v-model="todo.done" type="checkbox">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style scoped>
</style>
