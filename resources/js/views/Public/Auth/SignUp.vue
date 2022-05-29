<template>
    <section>
        <el-form ref="form" :model="form" :rules="rules">
            <el-form-item label="Name" prop="name">
                <el-input v-model="form.name" placeholder="Name" />
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-input v-model="form.email" placeholder="Email" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-form-item label="Confirm password" prop="confirm_password">
                <el-input v-model="form.password_confirm" type="password" />
            </el-form-item>
            <el-button @click="submit">
                Sign up
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
        name: [{required: true, fullField: 'Name', trigger: 'blur'}],
        email: [{required: true, type: 'email', fullField: 'E-mail', trigger: 'blur'}],
        password: [{required: true, fullField: 'Password', trigger: 'blur'}],
        password_confirm: [{required: true, fullField: 'Password', trigger: 'blur'}],
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
        methods: {
            ...mapActions('auth', ['signUp']),
            async submit() {
                try {
                    await this.$refs.form?.validate();

                    this.signUp(this.form);
                } catch (e) {
                    console.log(e);
                }
            },
        },
    };
</script>

<style scoped lang="scss">

</style>
