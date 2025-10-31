<script lang="ts" setup>
import { computed, ref } from "vue";
import FileApi, { type FileInfoResponse } from "@/api/file-service/file.ts";
import { ElMessage } from "element-plus";

const fileApi = new FileApi();
const id = ref<string>("");
const fileInfo = ref<FileInfoResponse | null>(null);

function getFileInfo() {
	if (!id.value) {
		ElMessage.error("id为空");
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
	<el-input
		v-model="id"
		clearable
		placeholder="Please input"
		style="width: 240px"
	/>
	<el-button @click="getFileInfo">获取信息</el-button>
	<div v-if="fileInfo" style="margin: 20px">
		<el-text type="success">{{ fileInfo }}</el-text>
	</div>
	<a :href="path">{{ path }}</a>
</template>

<style scoped></style>
