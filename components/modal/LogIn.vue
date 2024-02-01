<script setup>
const { closeModalAndNavigate } = useModalStore();
const { apiBaseUrl } = useApiFetch();
const{ state, setUserData, setToken, setErrorMessage } = useProfileStore();
import { configure } from "vee-validate";
configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: false,
});
const initialValues = { email:"", password: ""};

const formData =ref({
    email: '',
    password: ''
})

const handleSuccess = (responseData) => {
    formData.value = { ...initialValues };
    closeModalAndNavigate('/');
    const { id, name, email, phone, email_verified_at } = responseData.value.data;
    const token = responseData.value.token.value;
    const userData = {
        id,
        name,
        email,
        phone,
        email_verified_at
    };
    setToken(token);
    setUserData(userData);
}

const errorMessageServ = ref();
const csrfToken = useCookie( 'XSRF-TOKEN');
const handleError = (error) => {
    const serverErrors = error.value.data.errors;
    console.log(serverErrors);
};
const csrfRequest = async () => {
    await useFetch(
        `http://api.book-store.loc/sanctum/csrf-cookie`,
        {
            method: 'get',
            headers: {
                'X-XSRF-TOKEN': 'token'
            },
                credentials: 'include'
        }
    )
}
const submitSignInform = async () => {
    console.log(csrfToken.value);
    try {
        if (!csrfToken.value) {
            await csrfRequest();
        }
        console.log(csrfToken.value);
        const {data: responseData, error} = await useFetch(
                `${apiBaseUrl}/auth/login`,
                {
                    method: 'post',
                    headers: {
                        'X-XSRF-TOKEN': csrfToken,
                    },
                    body: {
                        email: formData.value.email,
                        password: formData.value.password,
                    }
                }
            );
        if (!error.value) {
            handleSuccess(responseData);
        }
    } catch (error) {
        handleError(error);
        console.error('An unexpected error occurred:', error);
    }
}
</script>


<template>
    <Modal>
        <VeeForm
            v-slot="{ meta }"
            :initial-values="initialValues"
            @submit="submitSignInform"
            class="dialog-form"
            action="">
            <h1>Sign In</h1>
            <hr>
            <div class="error_fill-up__serv">{{ errorMessageServ }}</div>
            <div class="sign-in__container">
                <div class="sign-in__username">
                    <label for="login">Email</label>
                    <VeeField
                           v-model="formData.email"
                           class="all-inputs username"
                           id="username"
                           name="email"
                           type="email">
                    </VeeField>
                </div>
                <NuxtLink>
                    <div class="forgot-pass">Forgot password?</div>
                </NuxtLink>
                <div class="sign-in__password">
                    <label for="login">Password</label>
                    <VeeField
                           v-model="formData.password"
                           class="all-inputs password"
                           id="password" name="password"
                           type="text">
                    </VeeField>
                </div>
                <div class="sign-in-button">
                    <input name="signInButton"
                           class="sign-in-but"
                           value="Log In"
                           type="submit"
                    >
                </div>
                <NuxtLink
                    class="create-account"
                    @click="closeModalAndNavigate('/signupform')"
                >
                    Create Account
                </NuxtLink>
            </div>
        </VeeForm>
    </Modal>
</template>


<style lang="scss" scoped>

</style>