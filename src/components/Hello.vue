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
	<el-button @click="home">返回主页</el-button>
	<el-select v-model="path" placeholder="Select" style="width: 240px">
		<el-option
			v-for="item in options"
			:key="item"
			:label="item"
			:value="item"
		/>
	</el-select>
	<el-button @click="push">跳转到[{{ path }}]</el-button>
</template>

<style scoped></style>
