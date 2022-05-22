<template>
    <section>
        <el-form ref="form" :model="form" :rules="rules">
            <el-form-item label="Email" prop="email">
                <el-input v-model="form.email" placeholder="email" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-button @click="submit">
                Sign in
            </el-button>
        </el-form>
    </section>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    const form = {
        email: null,
        password: null,
    };

    const rules = {
        email: [{required: true, type: 'email', fullField: 'E-mail', trigger: 'blur'}],
        password: [{required: true, fullField: 'Password', trigger: 'blur'}],
    };

    export default {
        data: () => ({
            form,
            rules,
        }),
        computed: {
            ...mapState('auth', ['user']),
        },
        mounted() {
            //
        },
        updated() {
            console.log('Updated', this.user);
        },
        methods: {
            ...mapActions('auth', ['signIn']),
            async submit() {
                try {
                    await this.$refs.form?.validate();

                    this.signIn(this.form);
                } catch (e) {
                    console.log(e);
                }
            },
        },
    };
</script>

<style scoped lang="scss">

</style>
