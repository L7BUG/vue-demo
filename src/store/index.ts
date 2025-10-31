import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

const store = createPinia();
store.use(createPersistedState());

export * from "./modules/user";

export { store };

export default store;
