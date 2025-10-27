<script lang="ts" setup>
import {onMounted, ref} from 'vue'

const pElementRef = ref<HTMLElement | null>(null)
onMounted(() => {
  if (pElementRef.value !== null) {
    pElementRef.value.textContent = 'mounted!';
  }
})
</script>

<template>
  <p ref="pElementRef">Hello</p>
</template>