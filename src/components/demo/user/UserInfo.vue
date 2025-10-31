<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import UserInfo from "@/components/demo/user/UserInfo.vue";

interface UserInfo {
	id: number;
	username: string;
	password?: string;
}

const route = useRoute();
const userInfo = computed<UserInfo>((): UserInfo => {
	const { id, username } = route.params;
	const { password } = route.query;
	return {
		id: Math.max(0, Number(id ? id : 0)),
		username: username ? username.toString() : "",
		password: password ? password.toString() : "",
	};
});
</script>

<template>
	<div>
		<h2>用户信息</h2>
		<p>用户ID: {{ userInfo.id }}</p>
		<p>用户名: {{ userInfo.username }}</p>
		<p>密码: {{ userInfo.password }}</p>
	</div>
</template>
