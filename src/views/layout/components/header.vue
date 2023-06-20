<template>
    <div class="header">
        <p class="website-title">AI智能媒资管理平台</p>
        <div class="top-menu-box">
            <el-menu
                :default-active="activeIndex2"
                class="top-menu"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="handleSelect"
            >
                <el-menu-item index="1">内容检索</el-menu-item>
                <el-menu-item index="2">我的素材</el-menu-item>
                <el-menu-item index="3">系统管理</el-menu-item>
                <el-menu-item index="4">数据统计</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script setup>
let activeIndex2 = ref('1')

const emit = defineEmits(['selectTab'])
emit('selectTab','1')
function handleSelect(val) {
    emit('selectTab',val)
}
</script>
<style scoped>
.header{
    display:flex;
    align-items: center;
    justify-content: center;
    height:100%;
    background:#545c64;
    color:white;
}
.top-menu-box{
    flex:1
}
.website-title{
    margin:0 30px;
}
.top-menu{
   
}
</style>