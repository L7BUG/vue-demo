<script lang="ts" setup>


import router from "@/router";

const next = () => {
	router.push("/hello");
}
</script>

<template>
	<el-button @click="next()">登录</el-button>
</template>

<style scoped>

</style>