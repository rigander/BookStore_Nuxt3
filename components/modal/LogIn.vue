<script setup>
// const csrfRequestUAD = async () => {
//     const { data: crfTok } = await useAsyncData(
//         'csrfTok', () => {
//             $fetch('http://api.book-store.loc/sanctum/csrf-cookie', {
//                 method: 'GET',
//                 headers: {
//                     'X-XSRF-TOKEN': 'token'
//                 },
//                 credentials: 'include'
//             })
//         }
//     )
// }
// const submitSignIn =  async () => {
//     await useFetch(
//         `${apiBaseUrl}/auth/login`,
//         {
//             method: 'post',
//             headers: {
//                 'X-XSRF-TOKEN': csrfToken,
//             },
//             body: {
//                 email: formData.value.email,
//                 password: formData.value.password,
//             },
//             credentials: 'include'
//         }
//     );
// }
//
//

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
const csrfRequest = async () => {
    if (csrfToken.value) {
        return console.log(csrfToken.value);
    } else {
        try {
            const {data, error} = await useFetch(
                `http://api.book-store.loc/sanctum/csrf-cookie`,
                {
                    method: 'get',
                    headers: {
                        'X-XSRF-TOKEN': 'token'
                    },
                    credentials: 'include'
                }
            );
        } catch (error) {
            console.error("Error fetching CSRF token:", error.value);
        }
    }
};
const submitSignInform = async () => {
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
                    },
                    credentials: 'include'
                }
            );
        if (!error.value) {
            handleSuccess(responseData);
        }
        if (error.value) {
            console.error(error.value.data.message);
    }
}
const handleSubmitSignInForm = async () => {
    await csrfRequest();
    await submitSignInform();
};
</script>


<template>
    <Modal>
        <VeeForm
            v-slot="{ meta }"
            :initial-values="initialValues"
            @submit="handleSubmitSignInForm"
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