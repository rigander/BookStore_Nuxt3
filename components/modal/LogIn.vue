<script setup>
const modalStore = useModalStore();
const { login, errorMessageServ } = useAuth();

const formData = ref({ email: '', password: '' })
const handleLogIn = async () => {
    const { email, password } = formData.value;
    const result = await login(email, password);
    if (!result.success) {
        console.log('Failed to log in:', result.error);
    }
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
                        @click="modalStore.closeModalAndNavigate('/signupform', 'login')"
                    >
                        Create Account
                    </NuxtLink>
                </div>
            </VeeForm>
        </div>
</template>
