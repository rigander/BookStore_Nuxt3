<script setup>
definePageMeta({
    layout: false
})
</script>


<template>
    <div class="sign-up__main">
        <form action="#" name="registration" id="form">
            <h1 title="Sign Up">Sign Up</h1>
            <div class="container1">
                <div class="group">
                    <span class="invalidUserName valid-feedback"></span>
                    <label for="name">Username</label>
                    <input class="all-inputs name" minlength="2" placeholder="" id="username" name="UserName"
                           type="text">
                </div>
            </div>
            <div class="group">
                <span id="invalidEmail" class="valid-feedback"></span>
                <label for="email">E-mail</label>
                <input class="all-inputs email" id="email" placeholder="enter your e-mail address..." type="email" name="Email">
            </div>
            <div class="group">
                <label for="phone">Phone</label>
                <input class="all-inputs phone" name="phoneNumber" id="phone" placeholder="+(380)00-000-0000" type="text">
                <span id="invalidPhone" class="valid-feedback"></span>
            </div>
            <div id="passwordsInputs">
                <div id="password" class="group">
                    <span id="shortPass" class="valid-feedback short-pass"></span>
                    <label for="pass1">Password</label>
                    <input  class="passwords pass1" name="Password"  id="pass1" placeholder="enter your password..."
                            type="password">
                    <input id="passInput" class="checkbox" type="checkbox">
                    <span id="invalidPass" class="valid-feedback"></span>
                    <span id="invalidRepeatPass" class="valid-feedback"></span>
                    <div>
                        <span id="passwordsNotEqual" class="valid-feedback"></span>
                    </div>
                </div>
                <div id="checkPass" class="group">
                    <div>Password Confirmation</div>
                    <label for="pass2">Password</label>
                    <input class="passwords pass2" name="confirmPassword" id="pass2" placeholder="repeat your password..." type="password">
                    <input id="confirmPassInput" class="checkbox" type="checkbox">
                    <span id="shortRepeatPass" class="valid-feedback"></span>
                </div>
            </div>
            <div id="agreements" class="group">
                <span id="invalidTerms" class="valid-feedback"></span>
                <input name="checkTerms"  id="agreement" type="checkbox"/>
                I agree to the<a href="" id="terms">
                End User License Agreement &amp; Privacy Policy</a>
            </div>
            <div class="group">
                <input name="submitButton" id="submit" value="Submit" type="submit">
            </div>
            <hr>
            <div class="verify-human">
                <h1>Verify you are a human</h1>
                <div class="verification"></div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
#form{
    margin: 0 auto;
    width: 400px;
    height: 800px;
    background-color: #2e3032;
}
.sign-up__main{
    background-color: #333537;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
}
hr{
    color: white;
    height: 1px;
    width: 85%;
    margin: 0 auto;
}
.verification{
    margin: 0 auto;
    height: 200px;
    width: 200px;
    border: 1px solid white;
}
</style>