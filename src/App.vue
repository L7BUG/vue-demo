<script lang="ts" setup>
import {ref, watch} from 'vue'

interface ResponseTodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

const todoId = ref(1)
const todoData = ref<string>("")
const responseTodo = ref<ResponseTodo | null>(null);

async function fetchData() {
  todoData.value = ""
  const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  const data = await res.json()
  console.log(data)
  todoData.value = JSON.stringify(data)
  responseTodo.value = data;
}

watch(todoId, fetchData)
fetchData()
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button :disabled="!todoData" @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ JSON.stringify(responseTodo) }}</pre>
</template>