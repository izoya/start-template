<template>
    <div class="common-layout">
        <el-container class="container">
            <el-header class="header">
                <main-menu class="header__nav el-menu--horizontal"></main-menu>
            </el-header>
            <el-main class="main">
                <router-view v-slot="{ Component, route }" :key="$route.fullPath">
<!--                    <transition :name="route.meta.transition || 'fade'" mode="out-in">-->
<!--                        <keep-alive>-->
<!--                            <suspense>-->
<!--                                <template #default>-->
                                    <component :is="Component" :key="route.meta.routeKey ?? route.path"/>
<!--                                </template>-->
<!--                                <template #fallback>Loading...</template>-->
<!--                            </suspense>-->
<!--                        </keep-alive>-->
<!--                    </transition>-->
                </router-view></el-main>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import MainMenu from "~/components/Menu/MainMenu";

    export default {
        components: {
            MainMenu,
        },
    };
</script>

<style lang="sass" scoped>
    .container
        height: 100vh
        display: flex
        flex-direction: column
        justify-content: space-between

    .header
        //height: 60px
        &__nav
            color: #00bdf4

    .main
        //flex-grow: 1

    .footer
        min-height: 60px
        background-color: #4a5568
</style>
