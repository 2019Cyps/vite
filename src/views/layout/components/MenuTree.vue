<template>
    <el-menu router>
        <template v-for="(item,index) in menu">
            <template v-if="item.children && item.children.length>0">
                <el-sub-menu :index="item.path">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>{{item.name}}</span>
                    </template>
                    <MenuTree :menu="item.children" :defaultActive="defaultActive" @clickItem="clickItemHandle(item)">
                    </MenuTree>
                </el-sub-menu>
            </template>
            <template v-else>
                <el-menu-item :index="item.path">
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script setup name="MenuTree">
import {
  Location,
} from '@element-plus/icons-vue'
defineProps({
    menu: {
        required: true,
        default:()=>[]
    },
    defaultActive: {
        required: true,
        default:[]
    }
})

const emit = defineEmits(["update-active-path", "clickItem"])
const clickItemHandle = (item) => {
  emit("clickItem", item);
};
</script>

<style scoped>
.el-menu{
    height:100%;
}
</style>