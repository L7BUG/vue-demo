import { defineStore } from "pinia";

interface UserState {
	name: string;
}

export const useUserStore = defineStore("user", {
	state: (): UserState => ({
		name: "main_token", // 默认token不走权限
	}),
	getters: {},
	actions: {},
	persist: {
		storage: localStorage,
	},
});
