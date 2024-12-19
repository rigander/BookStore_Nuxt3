<script setup>
const modalStore = useModalStore();
const formData = ref({ email: '', password: '' })
const errorMessageServ = ref('');
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
                aria-label="Close login form"
            >
            </button>
            <div class="white-rabbit__container">
                <img
                class="white-rabbit"
                src="/img/Chromatic-Floral-Rabbit.svg"
                alt="white-rabbit"/>
            </div>
            <VeeForm
                v-slot="{ meta }"
                @submit="handleLogIn"
                class="dialog-form"
                action="">
                <h1 id="dialog-title" >Sign In</h1>
                <hr>
                <p
                    id="dialog-description"
                    class="error_fill-up__serv"
                    v-if="errorMessageServ">{{ errorMessageServ }}
                </p>
                <div class="sign-in__container">
                    <div class="sign-in__email">
                        <label for="email">Email</label>
                        <VeeField
                            v-model="formData.email"
                            class="all-inputs email"
                            name="email"
                            type="email"
                            aria-required="true">
                        </VeeField>
                    </div>
                    <NuxtLink
                        to="/passwordreset" class="forgot-pass"
                        @click="modalStore.closeModal('login')"
                    >
                        Forgot password?
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
        </section>
</template>
