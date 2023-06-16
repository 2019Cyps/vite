<template>
    <el-menu>
        <el-sub-menu index="1">
            <template #title>
                <span>菜单1</span>
            </template>
            <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-3">
                <template #title>item four</template>
                <el-menu-item index="1-2-1">？？？</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <span>菜单2</span>
            </template>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <span>菜单3</span>
            </template>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { menuList } from "../../../utils/api";
menuList().then(res => {
    
})
</script>