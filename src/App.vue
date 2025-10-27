<script lang="ts" setup>
import ChildComp from "./components/ChildComp.vue";
import {ref} from "vue";

const childMsg = ref("App.vue:[aaaaaaaaaaaaaaaaaaaaaaa]");
</script>
<template>
  <ChildComp>
    message:{{ childMsg }}
  </ChildComp>
</template>