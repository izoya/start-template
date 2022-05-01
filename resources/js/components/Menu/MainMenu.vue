<template>
    <el-menu
        v-bind="$attrs"
        mode="horizontal"
        :default-active="$route.name"
        unique-opened
        router
        :class="menuClass"
        @select="handleSelect">
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one2</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            default: 'horizontal',
            validator: mode => _.includes(['horizontal', 'vertical'], mode)
        },
        customClass: {
            type: String,
            default: '',
        },
    },
    computed: {
        menuClass() {
            return this.customClass + 'el-menu--' + this.mode;
        },
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style scoped lang="scss">

</style>
