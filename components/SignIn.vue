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
const signup = '/signup'

const signin = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const {data: {access_token}} = await useFetch(
        'http://api.book-store.loc/api/auth/login',
        {
            method: 'post',
            body: {
                username,
                password
            }
        });

    const { data: userData, error } = await useFetch(
        'http://api.book-store.loc/api/user',
        {
            method: 'get',
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }
    );
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
            <div class="white-rabbit__container"><img
                class="white-rabbit"
                src="/img/Chromatic-Floral-Rabbit.svg" alt="white-rabbit"></div>
            <form action="">
                <h1>Sign In</h1>
                <hr>
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
                        <div class="forgot-pass">Forgot password?</div>
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
                        <input name="signInButton" class="sign-in-but" value="Sing In" type="submit">
                    </div>
                    <NuxtLink
                        class="create-account"
                        :to="signup"
                    >
                        Create Account
                    </NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>


<style lang="scss" scoped>
form{
    padding: 15px;

}
h1{
    font-weight: bold;
    font-size: 18px;
}
hr{
    margin: 10px 0 20px 0;
}
.white-rabbit__container{
    height: 250px;
    width: 200px;
}
.white-rabbit{
    margin-top: 10px;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
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
  user-select: none;
}
.dialog__content{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #bfbfc1;
    margin: auto;
    background: rgb(63, 63, 64);
    border-radius: 10px;
    height: 500px;
    width: 350px;
}
.sign-in__container{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    width: 300px;
}
label{
    font-weight: bold;
}
.all-inputs{
    background-color: #38404f;
    width: 290px;
    margin-top: 5px;
    margin-left: 0;
    margin-bottom: 5px;
    color: white;
}
.forgot-pass{
    margin-left: 190px;
    font-size: 14px;
    text-decoration: underline;
}
.forgot-pass:hover{
    cursor: pointer;
}
.forgot-pass:active{
    color: #f57375;
}
.sign-in-but{
    margin: 9px 0 0 0;
    width: 290px;
    height: 23px;
    font-size: 14px;
}
.sign-in-but:hover{
    cursor: pointer;
}
.sign-in-but:active{
    background-color: #92d774;
    color: #3f3f40;
}
.create-account{
    text-decoration: underline;
    margin: 0 auto;
    padding-top: 15px;
    font-size: 14px;
}
.create-account:active{
    color: #f57375;
}
</style>