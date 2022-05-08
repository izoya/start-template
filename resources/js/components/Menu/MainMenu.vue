<template>
    <el-menu
        v-bind="$attrs"
        :mode="mode"
        :default-active="$route.path"
        unique-opened
        router
        @select="handleSelect">
        <template v-for="item in routes" :key="item.path">
            <el-sub-menu v-if="item.children && item.children.length" :index="item.path">
                <template #title>{{ item.name }}</template>

                <el-menu-item v-for="subitem in item.children" :index="subitem.path">
                    {{ subitem.name }}
                </el-menu-item>
            </el-sub-menu>

            <el-menu-item v-else :index="item.path">{{ item.name }}</el-menu-item>
        </template>
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
    },
    computed: {
        routes() {
            return this.$router.options.routes;
        },
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style scoped lang="sass">

</style>
