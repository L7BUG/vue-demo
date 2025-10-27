<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">

    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox name="type" value="Online activities">
          Online activities
        </el-checkbox>
        <el-checkbox name="type" value="Promotion activities">
          Promotion activities
        </el-checkbox>
        <el-checkbox name="type" value="Offline activities">
          Offline activities
        </el-checkbox>
        <el-checkbox name="type" value="Simple brand exposure">
          Simple brand exposure
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="test">
      <el-select v-model="form.select">
        <el-option v-for="item in 5" :label="item" :value="item"/>
      </el-select>
    </el-form-item>
    <el-button @click="onSubmit">submit</el-button>
  </el-form>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'

interface FormData {
  type?: number[],
  select?: string,
}

// do not use same name with ref
const form = reactive<FormData>({})

const onSubmit = () => {
  console.log(form)
}
</script>