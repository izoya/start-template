<template>
    <el-container class="container">
        <el-header class="header">
            <main-menu class="header__nav"></main-menu>
        </el-header>

        <el-main class="main">
            <router-view v-slot="{ Component, route }" :key="$route.fullPath">
                <transition name="fade" mode="out-in">
<!--                    <keep-alive>-->
<!--                        <suspense>-->
<!--                            <template #default>-->
                                <component :is="Component" :key="route.meta.routeKey ?? route.path"/>
<!--                            </template>-->
<!--                            <template #fallback>Loading...</template>-->
<!--                        </suspense>-->
<!--                    </keep-alive>-->
                </transition>
            </router-view>
        </el-main>

        <footer>Footer</footer>
    </el-container>
</template>

<script>
    import MainMenu from "~/components/Menu/MainMenu";
    import Footer from "~/components/Footer/Footer";

    export default {
        components: {
            MainMenu,
            Footer,
        },
    };
</script>

<style lang="sass" scoped>
    $footer-height: 60px

    .container
        height: 100vh
        display: flex
        flex-direction: column
        justify-content: space-between

    .header
        height: 60px
        padding: 0

    .main
        flex-grow: 1
</style>
