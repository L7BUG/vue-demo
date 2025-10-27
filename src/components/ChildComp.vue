<script lang="ts" setup>
defineProps({
  msg: String,
});
const emit = defineEmits(['response'])
emit("response", "hello from child")
</script>

<template>
  <h1>{{ msg || "no msg" }}</h1>
</template>

<style scoped>

</style>