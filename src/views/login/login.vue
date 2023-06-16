<template>
    <el-input v-model="username" placeholder="账户名" />
    <el-input v-model="password" placeholder="密码" />
    <el-input v-model="code" placeholder="验证码" />
    <img :src="codeImg" alt="">
    <el-button @click="submit">登录</el-button>
</template>

<script setup lang="ts">
import { useCounterStore } from "../../store/index";
const counterStore = useCounterStore();
import { getBanner, login } from '../../utils/api'
import {useRouter} from 'vue-router'

const router = useRouter()
let username = ref('admin')
let password = ref('123456')
let code = ref('')
let codeImg = ref('')
let codeKey = ref('')
getBanner().then(res => {
    codeKey.value = res.data.verifyCodeKey
    codeImg.value = res.data.verifyCodeBase64;
})

function submit() {
    let params = {
        username: username.value,
        password: password.value,
        verifyCodeKey: codeKey.value,
        verifyCode:Number(code.value)
    }
    login(params).then(res => {
        if (res.data) {
            localStorage.setItem('token', res.data.accessToken)
            router.push({
                path:'/'
            })
        }
    })
}

</script>