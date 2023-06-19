<template>
    <el-container>
        <el-aside>
                <MenuTree 
                    :menu="menuList" 
                    :defaultActive="defaultActive"
                    @clickItem="handleMenuClick"
                    :update-click="handleMenuClick">
                </MenuTree>
            </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <Main></Main>
            </el-main>
        </el-container>
    </el-container> 
</template>

<script setup>
import Header from './components/header.vue'
import MenuTree from './components/MenuTree.vue'
import Main from './components/main.vue'
import { menuGetList } from "../../utils/api";
let menuList = ref('')
let defaultActive = ref('')
menuGetList().then(res => {
    menuList.value = res.data
    menuList.value.unshift({
        name: '首页',
        path:'/home'
    })
})

const handleMenuClick = (item) => {
  console.log('父组件',item);
};
</script>

<style scoped>
.el-container{
    height:100%;
}
.el-header{
    padding:0;
}
</style>