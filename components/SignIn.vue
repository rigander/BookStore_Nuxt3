<script setup>
const {show} = useModalStore();
const apiBaseUrl = useRuntimeConfig().public.apiBase;

const emit = defineEmits(['update:show'])
const hideDialog = () => {
    emit('update:show', false)
}
const signup = '/signupform';

const closeModalAndNavigate = (path) => {
    hideDialog();
    const router = useRouter();
    router.push(path);
}

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
    <BaseModal>
        <form
            class="dialog-form"
            action="">
            <h1>Sign In</h1>
            <hr>
            <div class="sign-in__container">
                <div class="sign-in__username">
                    <span class="invalidUserName validUserName"></span>
                    <label for="login">Username</label>
                    <input class="all-inputs username" minlength="2"
                           placeholder=""
                           id="username" name="username"
                           type="text">
                </div>
                <NuxtLink>
                    <div class="forgot-pass">Forgot password?</div>
                </NuxtLink>
                <div class="sign-in__password">
                    <span class="invalidPassword validPassword"></span>
                    <label for="login">Password</label>
                    <input class="all-inputs password" minlength="2"
                           placeholder=""
                           id="password" name="password"
                           type="text">
                </div>
                <div class="sign-in-button">
                    <input name="signInButton" class="sign-in-but" value="Sing In" type="submit">
                </div>
                <NuxtLink
                    class="create-account"
                    @click="closeModalAndNavigate(signup)"
                >
                    Create Account
                </NuxtLink>
            </div>
        </form>
    </BaseModal>
</template>


<style lang="scss" scoped>

</style>