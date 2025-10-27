<script lang="ts" setup>
import ChildComp from "./components/ChildComp.vue";
import {ref} from "vue";

const msg = ref<string>("");
</script>

<template>
  <ChildComp :msg="msg"/>
</template>