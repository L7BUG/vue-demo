<script lang="ts" setup>
import router from "@/router";
import { ref } from "vue";
import { demoPathList } from "@/router/modules/demo.ts";

const path = ref("/");
const home = () => {
	router.push("/");
};

const push = () => {
	router.push(path.value);
};

const options: string[] = ["/", "/file-info"];
demoPathList.forEach((item) => options.push(item));
</script>

<template>
	<h1>Hello App!!!!!=>{{ $route.fullPath }}</h1>
	<button @click="home">返回主页</button>
	<select v-model="path" style="width: 240px">
		<option
			v-for="item in options"
			:key="item"
			:label="item"
			:value="item"
		/>
	</select>
	<button @click="push">跳转到[{{ path }}]</button>
</template>

<style scoped></style>
