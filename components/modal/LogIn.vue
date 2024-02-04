<script setup>
const { apiBaseUrl } = useApiFetch();
const { closeModalAndNavigate } = useModalStore();
const{ state, setUserData, setToken, setErrorMessage } = useProfileStore();
import { configure } from "vee-validate";
configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: false,
});
const errorMessageServ = ref();
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

const csrfToken = useCookie( 'XSRF-TOKEN').value;
const csrfRequest = async () => {
    if (!csrfToken) {
        const { data, error } = await useFetch(
            `${apiBaseUrl}/sanctum/csrf-cookie`,
            {
                credentials: 'include',
                cache: false
            }
        );
        if (error.value) {
            console.error("Error fetching CSRF token:", error.value);
        }
    }
};
const submitSignInform = async () => {
    const XSRFToken = useCookie( 'XSRF-TOKEN').value;
    const {data: responseData, error} = await useFetch(
                `${apiBaseUrl}/api/auth/login`,
                {
                    method: 'post',
                    headers: {
                        'X-XSRF-TOKEN': XSRFToken,
                    },
                    body: {
                        email: formData.value.email,
                        password: formData.value.password,
                    },
                    credentials: 'include',
                    cache: false
                }
            );
        if (!error.value) {
            handleSuccess(responseData);
        }
        if (error.value) {
            console.error(error.value.data.message);
    }
}
const handleSubmitSignIn = async () => {
      await csrfRequest()
      await submitSignInform();
};
</script>


<template>
    <Modal>
        <VeeForm
            v-slot="{ meta }"
            :initial-values="initialValues"
            @submit="handleSubmitSignIn"
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