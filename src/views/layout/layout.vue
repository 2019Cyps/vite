<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-aside>
            <Menu></Menu>
        </el-aside>
        <el-main>
            <Main></Main>
        </el-main>
    </el-container>
</template>

<script setup>
import Header from './components/header.vue'
import Menu from './components/slidebar.vue'
import Main from './components/main.vue'
</script>