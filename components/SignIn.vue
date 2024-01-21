<script setup>
const {closeModalAndNavigate} = useModalStore();
const {apiBaseUrl} = useApiFetch();
import { configure } from "vee-validate";
configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: false,
});
const initialValues = { username:"", password: ""};

const formData =ref({
    username: '',
    password: ''
})
const handleSuccess = () => {
    formData.value = { ...initialValues };
    const router = useRouter();
    router.push('/');
}
const handleError = (error) => {
    const serverErrors = error.value.data.errors;
    console.log(serverErrors);
};
const submitSignInform = async () => {
    try {
        const {data: responseData, error} = await useFetch(
            `${apiBaseUrl}/auth/login`,
            {
                method: 'post',
                body: {
                    username: formData.value.username,
                    password: formData.value.password,
                }
            }
        );
        if (!error.value) {
            handleSuccess();
        } else {
            handleError(error);
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
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
    const Username = document.getElementById('username').value;
    console.log(Username);

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
        <VeeForm
            class="dialog-form"
            action="">
            <h1>Sign In</h1>
            <hr>
            <div class="sign-in__container">
                <div class="sign-in__username">
                    <VeeErrorMessage name="username" class="error_fill-up"/>
                    <label for="login">Username</label>
                    <VeeField
                           v-model="formData.username"
                           class="all-inputs username"
                           id="username"
                           name="username"
                           type="text">
                    </VeeField>
                </div>
                <NuxtLink>
                    <div class="forgot-pass">Forgot password?</div>
                </NuxtLink>
                <div class="sign-in__password">
                    <VeeErrorMessage name="password" class="error_fill-up"/>
                    <label for="login">Password</label>
                    <VeeField
                           v-model="formData.password"
                           class="all-inputs password"
                           id="password" name="password"
                           type="text">
                    </VeeField>
                </div>
                <div class="sign-in-button">
                    <input name="signInButton" class="sign-in-but" value="Sing In" type="submit">
                </div>
                <NuxtLink
                    class="create-account"
                    @click="closeModalAndNavigate('/signupform')"
                >
                    Create Account
                </NuxtLink>
            </div>
        </VeeForm>
    </BaseModal>
</template>


<style lang="scss" scoped>

</style>