<script setup>
const { csrfRequest, useFetchPost } = useApiFetch();
const { closeModalAndNavigate } = useModalStore();
const modalStore = useModalStore();
const{ setUserData, setToken } = useProfileStore();
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

const submitLogIn = async () => {
    const { data, error } = await useFetchPost(
        `/api/auth/login`,
          {
            email: formData.value.email,
            password: formData.value.password,
                }
    )
    if (!error.value) {
        handleSuccess(data);
    }
    if (error.value) {
        console.error(error.value.data.message);
    }
}
const handleLogIn = async () => {
      await csrfRequest();
      await submitLogIn();
};
</script>


<template>
        <div
            @click.stop
            class="dialog__content">
            <a
                @click="modalStore.closeModal('login')"
                href="#" class="close-modal close-login"/>
            <div class="white-rabbit__container"><img
                class="white-rabbit"
                src="/img/Chromatic-Floral-Rabbit.svg" alt="white-rabbit"></div>
            <VeeForm
                v-slot="{ meta }"
                :initial-values="initialValues"
                @submit="handleLogIn"
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
                        @click="closeModalAndNavigate('/signupform', 'login')"
                    >
                        Create Account
                    </NuxtLink>
                </div>
            </VeeForm>
        </div>
</template>
