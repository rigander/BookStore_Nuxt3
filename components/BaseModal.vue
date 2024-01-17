<script setup>
const {show} = useModalStore();

const apiBaseUrl = useRuntimeConfig().public.apiBase;

const signup = '/signupform';

const signin = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const {data: {access_token}} = await useFetch(
        `${apiBaseUrl}/auth/login`,
        {
            method: 'post',
            body: {
                username,
                password
            }
        });

    const { data: userData, error } = await useFetch(
        'http://api.book-store.loc/api/user',
        {
            method: 'get',
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }
    );
}
</script>


<template>
    <div
        @click.stop="hideDialog"
        class="dialog"
        v-if="show">
        <div
            @click.stop
            class="dialog__content">
            <div class="white-rabbit__container"><img
                class="white-rabbit"
                src="/img/Chromatic-Floral-Rabbit.svg" alt="white-rabbit"></div>
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>