<script lang="ts" setup>
import {ref} from 'vue'

interface Todo {
  id: number,
  text: string
}

let id: number = 0;
const newTodo = ref<string>('')
const todos = ref<Todo[]>([
  {id: id++, text: 'Learn HTML'},
  {id: id++, text: 'Learn JavaScript'},
  {id: id++, text: 'Learn Vue'}
])

function addTodo() {
  // ...
  todos.value.push({id: id++, text: newTodo.value});
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
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<style scoped>
</style>
