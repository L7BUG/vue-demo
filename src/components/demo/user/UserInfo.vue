<script lang="ts" setup>
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

interface UserInfo {
  id: number; // 推荐使用 number 而不是 bigint
}

const route = useRoute();
const userInfo = ref<UserInfo>({
  id: 0, // 初始化为默认值
});

// 安全获取参数并转换为数字
const getUserId = () => {
  const idParam = route.params.id;

  // 处理参数未定义的情况
  if (!idParam) {
    console.warn("路由参数 id 未定义");
    return 0;
  }

  // 处理参数是数组的情况
  if (Array.isArray(idParam)) {
    return idParam.length > 0 ? Number(idParam[0]) : 0;
  }

  // 转换为数字
  const id = Number(idParam);
  return isNaN(id) ? 0 : id;
};

// 初始化时设置值
userInfo.value.id = getUserId();

// 监听路由变化
watch(
    () => route.params.id,
    () => {
      userInfo.value.id = getUserId();
    }
);
</script>

<template>
  <div>
    <h2>用户信息</h2>
    <p>用户ID: {{ userInfo.id }}</p>
  </div>
</template>