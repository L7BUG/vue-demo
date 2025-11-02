<script lang="ts" setup>
import router from "@/router";

const next = () => {
	router.push("/hello");
};
</script>

<template>
	<button @click="next()">登录</button>
</template>

<style scoped></style>
