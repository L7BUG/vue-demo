<script lang="ts" setup>
import { computed, ref } from "vue";
import FileApi, { type FileInfoResponse } from "@/api/file-service/file.ts";

const fileApi = new FileApi();
const id = ref<string>("");
const fileInfo = ref<FileInfoResponse | null>(null);

function getFileInfo() {
	if (!id.value) {
		return;
	}
	fileApi.getFileInfo(id.value).then((res) => {
		if (res.data) {
			fileInfo.value = res.data;
		}
	});
}

const path = computed<string>(
	() => `api/file-service/download/${fileInfo.value?.id}`,
);
</script>

<template>
	<input v-model="id" placeholder="Please input" style="width: 240px" />
	<button @click="getFileInfo">获取信息</button>
	<div v-if="fileInfo" style="margin: 20px">
		{{ fileInfo }}
	</div>
	<a :href="path">{{ path }}</a>
</template>

<style scoped></style>
