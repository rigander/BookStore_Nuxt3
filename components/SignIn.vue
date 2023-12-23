<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:show'])
const hideDialog = () => {
    emit('update:show', false)
}

</script>


<template>
    <div
        @click.stop="hideDialog"
        class="dialog"
        v-if="show">
        <div
            @click.stop
            class="dialog__content">
            <form action="">
                <h1>Sign In</h1>
                <div class="sign-in__container">
                    <div class="sign-in__username">
                        <span class="invalidUserName validUserName"></span>
                        <label for="login">Username</label>
                        <input class="all-inputs username" minlength="2"
                               placeholder=""
                               id="username" name="username"
                               type="text">
                    </div>
                    <NuxtLink>
                        <div>Forgot password?</div>
                    </NuxtLink>
                    <div class="sign-in__password">
                        <span class="invalidPassword validPassword"></span>
                        <label for="login">Password</label>
                        <input class="all-inputs password" minlength="2"
                               placeholder=""
                               id="password" name="password"
                               type="text">
                    </div>
                    <div class="sign-in-button">
                        <input name="signInButton" id="sign-in-but" value="Sing In" type="submit">
                    </div>
                    <NuxtLink>
                        <div>Create Account</div>
                    </NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>


<style lang="scss" scoped>
form{
    padding: 20px;
}
.dialog{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  z-index: 3;
  display: flex;
}
.dialog__content{
    margin: auto;
    background: white;
    border-radius: 10px;
    height: 500px;
    width: 350px;
}
</style>