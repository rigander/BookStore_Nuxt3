<script setup>
import {object, string, ref as yupRef, number, boolean} from "yup";
import { configure } from "vee-validate";
const modalStore = useModalStore();
const formData = ref({ email: '', password: '' })
const errorMessageServ = ref('');
configure({
    validateOnBlur: true,
    validateOnChange: false,
    validateOnInput: false,
    validateOnModelUpdate: false,
});
const schema = object({
    email:
        string()
            .required("fill in your email")
            .email("enter valid email"),
    password:
        string()
            .required("fill in password")
});

const handleLogIn = async () => {
    const { email, password } = formData.value;
    const result = await login(email, password);
    if (!result.success) {
        errorMessageServ.value = result.error;
        console.log('Failed to log in:', result.error);
    } else {
        errorMessageServ.value = '';
    }
};
</script>


<template>
        <section
            @click.stop
            class="dialog__content"
            role="dialog"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description">
            <button
                @click="modalStore.closeModal('login')"
                class="close-login"
                aria-label="Close login form">
            </button>
            <div class="white-rabbit__container">
                <img
                class="white-rabbit"
                src="/img/Chromatic-Floral-Rabbit.svg"
                alt="white-rabbit"/>
            </div>
            <VeeForm
                :validation-schema="schema"
                v-slot="{ meta }"
                @submit="handleLogIn"
                name="login"
                class="dialog-form">
                <h1 id="dialog-title" >Sign In</h1>
                <hr>
                <p
                    id="dialog-description"
                    class="error_fill-up__serv"
                    v-if="errorMessageServ">{{ errorMessageServ }}
                </p>
                <div class="sign-in__container">
                    <VeeErrorMessage name="email" class="error_fill-up"/>
                    <label for="email">Email</label>
                    <VeeField
                        v-model="formData.email"
                        class="all-inputs"
                        name="email"
                        type="email"
                        aria-required="true">
                    </VeeField>
                    <NuxtLink
                        to="/passwordreset" class="forgot-pass"
                        @click="modalStore.closeModal('login')"
                        >Forgot password?
                    </NuxtLink>
                    <label for="password">Password</label>
                    <VeeField
                        v-model="formData.password"
                        class="all-inputs"
                        name="password"
                        type="text">
                    </VeeField>
                    <button
                        :disabled="!meta.valid"
                        name="signInButton"
                        class="sign-in-but"
                        type="submit">Log In
                    </button>
                    <NuxtLink
                        to="/signupform"
                        class="create-account"
                        @click="modalStore.closeModal('login')"
                        >Create Account
                    </NuxtLink>
                </div>
            </VeeForm>
        </section>
</template>
