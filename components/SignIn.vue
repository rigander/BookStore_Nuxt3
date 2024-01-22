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
    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify(userData));
}

const errorMessageServ = ref();
const handleError = (error) => {
    const serverErrors = error.value.data.errors;
    if (serverErrors.email) {

         errorMessageServ.value = serverErrors.email[0];
    }
};
const submitSignInform = async () => {
    try {
        const {data: responseData, error} = await useFetch(
            `${apiBaseUrl}/auth/login`,
            {
                method: 'post',
                body: {
                    email: formData.value.email,
                    password: formData.value.password,
                }
            }
        );
        if (!error.value) {
            handleSuccess(responseData);
        } else {
            handleError(error);
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
}
</script>


<template>
    <BaseModal>
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
                           value="Sing In"
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
    </BaseModal>
</template>


<style lang="scss" scoped>

</style>