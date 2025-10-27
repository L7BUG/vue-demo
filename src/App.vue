<template>
  <h1>Hello App!</h1>
  <el-button @click="home">返回主页</el-button>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/hello">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView/>
  </main>
</template>

<script lang="ts" setup>
import router from "./router";

const home = () => {
  router.push("/");
}
</script>