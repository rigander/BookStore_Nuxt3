<script setup>
const dialogVisible = ref(false);
const ShowSignIn = () => {
    dialogVisible.value = true;
}
</script>

<template>
    <div class="reg-suc__main-container">
        <SignIn v-model:show="dialogVisible"/>
        <div class="reg-suc__wrapper">
            <h1 class="reg-suc_title">
                Registration Successful
            </h1>
            <div class="reg-suc_links">
                <button
                    @click="ShowSignIn"
                    class="reg-suc_my-account">
                    Sign In to My Account
                </button>
                <NuxtLink
                    to="/"
                    class="reg-suc_home-page">
                    Return to Home Page
                </NuxtLink>
            </div>
        </div>
    </div>
</template>