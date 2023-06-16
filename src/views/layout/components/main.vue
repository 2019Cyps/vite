<template>
    <router-view :key="key"></router-view>
</template>

<script setup>
import { useRoute } from 'vue-router'
let route = useRoute()
let key = ref(route.path)
</script>