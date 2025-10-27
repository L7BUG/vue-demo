<script lang="ts" setup>
import {ref} from "vue";

const count = ref(1);
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="count ++">count</button>
</template>

<style scoped>

</style>