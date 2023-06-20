<template>
    <div class="login-bg">
        <div class="login-box">
            <div class="login-img-box">
                <img src="../../assets/image/login-bg.png" alt="">
            </div>
            <div class="login-ipt-box">
                <el-select v-model="languageRes" class="m-2" placeholder="选择语言" size="large" @change="selectLanguage">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
                <el-input v-model="username" placeholder="账户名" size="large">
                    <template #prepend>
                        <el-button :icon="User" />
                    </template>
                </el-input>
                <el-input v-model="password" placeholder="密码"  size="large">
                    <template #prepend>
                        <el-button :icon="Lock" />
                    </template>
                </el-input>
                <el-input v-model="code" placeholder="验证码" size="large">
                    <template #prepend>
                        <el-button :icon="Bowl" />
                    </template>
                </el-input>
                <br/>
                <img :src="codeImg" alt="">
                <br/>
                <el-button type="primary" @click="submit" size='large' class="loginBtn">{{$t('meg.loginButton')}}</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getBanner, login } from '../../utils/api'
import {useRouter} from 'vue-router'
import { User, Lock, Bowl } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n';
const i18n = useI18n()
const router = useRouter()
let username = ref('admin')
let password = ref('123456')
let code = ref('')
let codeImg = ref('')
let codeKey = ref('')
let languageRes = ref('')
onMounted(() => { 
    if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == 'zh') {
        languageRes.value = '中文'
    } else {
        languageRes.value = '英文'
    }
})
let options = ref([
    {
        label: '中文',
        value:'zh'
    },
    {
        label: '英文',
        value:'en'
    }
])
getBanner().then(res => {
    codeKey.value = res.data.verifyCodeKey
    codeImg.value = res.data.verifyCodeBase64;
})

function selectLanguage(val) {
    i18n.locale.value = val
    localStorage.setItem('lang', val);
}
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
                path:'/home'
            })
        }
    })
}

</script>

<style scoped>
.login-bg{
    background:#F2F3F5;
    width:100%;
    height:100%;
}
.login-box{
    width:800px;
    display: flex;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    background:white;
    border-radius:15px;
}
.login-img-box{
    width:400px;
    height:400px;
}
.login-img-box img{
    width:100%;
    height:100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}
.el-input{
    width:250px;
    margin-bottom:20px;
}
.login-ipt-box{
    width:400px;
    text-align: center;
    padding:20px 0;
}
.loginBtn{
    width:250px;
}
.el-select{
    width:250px;
    margin-bottom:10px;
}
</style>