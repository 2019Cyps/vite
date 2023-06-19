<template>
    <el-menu>
        <el-sub-menu v-for="(item,index) in menuListObj" :index="index">
            <template #title>
                <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-if="item.children">
                <el-menu-item index='1-1' v-for="(i,index) in item.children">{{i.name}}</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-3">
                <template #title>item four</template>
                <el-menu-item index="1-2-1">？？？</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <!-- <el-sub-menu index="2">
            <template #title>
                <span>菜单2</span>
            </template>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <span>菜单3</span>
            </template>
        </el-sub-menu> -->
    </el-menu>
</template>

<script setup>
import { menuList } from "../../../utils/api";
let menuListObj = ref('')
menuList().then(res => {
    menuListObj.value = res.data
})
</script>