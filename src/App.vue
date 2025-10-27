<script lang="ts" setup>
import {reactive, ref} from "vue";

const count = ref(1);
const h1Class = reactive({
  red: count.value % 1 == 0,
  green: count.value % 2 == 0,
});
const countAndDate = ref([
  {count: count.value, date: Date.now()},
])
const temp = () => {
  count.value++;
  h1Class.red = count.value % 1 == 0;
  h1Class.green = count.value % 2 == 0;
  countAndDate.value.push({count: count.value, date: Date.now()});
}
</script>
<template>
  <h1 :class="h1Class">App.vue</h1>
  <button @click="temp">switch</button>
  <h2>{{ count }}</h2>

  <div v-for="item in countAndDate">
    <h1>
      count:{{ item.count }},添加时间:{{ item.date }}
    </h1>
  </div>
</template>

<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}
</style>