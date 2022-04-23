<template>
    <section>
        <div>Home</div>
        <router-view :key="$route.fullPath"></router-view>
    </section>

</template>

<script>
    export default {
        //
    };
</script>
