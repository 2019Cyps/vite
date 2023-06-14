
<template>
  <el-button type="success"><i-ep-SuccessFilled />{{counterStore.count}}</el-button>
</template>

<script setup lang="ts">
import { useCounterStore } from "./store/index";
const counterStore = useCounterStore();
import { getBanner } from './utils/api'
console.log(import.meta.env.VITE_APP_BASE_API)

let params = {
    username: 'admin',
    password: '123456',
    verifyCodeKey: '226e4723559d42738a6fb1a9056383a1',
    verifyCode: 0
}
getBanner().then(res => {
    
})
</script>

<style scoped>
</style>
