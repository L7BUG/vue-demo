// 对于 vite-svg-loader
declare module "*.svg?component" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent;
	export default component;
}
