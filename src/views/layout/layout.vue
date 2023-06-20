<template>
    <el-container>
        <el-header>
            <Header @selectTab="getTabs"></Header>
        </el-header>
        <el-container>
            <el-aside>
                <MenuTree 
                    :menu="menuList" 
                    :defaultActive="defaultActive"
                    @clickItem="handleMenuClick"
                    :update-click="handleMenuClick">
                </MenuTree>
            </el-aside>
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


const handleMenuClick = (item) => {
  console.log('父组件',item);
};

function getTabs(val) {
    console.log('???' + val)
    if(val == '1'){
        menuGetList().then(res => {
            menuList.value = res.data
            menuList.value.unshift({
                name: '首页',
                path:'/home'
            })      
        })
    } else if (val == '2') {
        menuList.value = [
            {
                name:'我的素材'
            }
        ]
    }else if (val == '3') {
        menuList.value = [
            {
                name:'系统管理'
            }
        ]
    }else if (val == '4') {
        menuList.value = [
            {
                name:'数据统计'
            }
        ]
    }
}
</script>

<style scoped>
.el-header{
    border-bottom: 1px solid #dcdfe6;
}
.el-container{
    height:100%;
}
.el-header{
    padding:0;
}
</style>