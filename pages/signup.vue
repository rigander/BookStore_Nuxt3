<script setup>
definePageMeta({
    layout: false
})
</script>


<template>
    <div class="sign-up__main">
        <form action="#" name="registration" class="sign-up__form">
            <img class="sign-up_img" src="/img/Chromatic-Floral-Rabbit.svg" alt="rabbit">
            <h1 title="Sign Up">Sign Up</h1>
            <hr>
            <div class="sign-up_group">
                <span class="invalidUserName valid-feedback"></span>
                <label for="name" class="sign-up_label_name">Username</label>
                <input class="sign-up__all-inputs sing-up_name" minlength="2" name="UserName" type="text">
            </div>
            <div class="sign-up_group">
                <span id="invalidEmail" class="valid-feedback"></span>
                <label for="email" class="sign-up_label_email">E-mail</label>
                <input class="sing-up__all-inputs sign-up_email" type="email" name="Email">
            </div>
            <div class="sign-up_group">
                <span id="invalidPhone" class="valid-feedback"></span>
                <label for="phone">Phone</label>
                <input class="sing-up_all-inputs sign-up_phone" name="phoneNumber" placeholder="+(380)00-000-0000"
                       type="text">
            </div>
            <div class="sign-up_group sing-up_pass">
                <span id="shortPass" class="valid-feedback short-pass"></span>
                <label for="pass1">Password</label>
                <input class="sing-up__all-inputs" name="Password" id="pass1"
                       type="password">
                <input id="passInput" class="checkbox" type="checkbox">
                <span id="invalidPass" class="valid-feedback"></span>
                <span id="invalidRepeatPass" class="valid-feedback"></span>
                <div>
                    <span id="passwordsNotEqual" class="valid-feedback"></span>
                </div>
            </div>
            <div class="sign-up_group sign-up_pass-confirm">
                <label>Password Confirmation</label>
                <input class="sing-up_all-inputs pass2" name="confirmPassword" id="pass2" type="password">
                <input class="checkbox sign-up_confirm__pass-input" type="checkbox">
                <span id="shortRepeatPass" class="valid-feedback"></span>
            </div>
            <div class="sign-up_group sign-up_agreement">
                <span id="invalidTerms" class="valid-feedback"></span>
                <input name="checkTerms" class="sign-up_agreement__input" type="checkbox"/>
                I agree to the<a href="" id="sign-up_terms">
                End User License Agreement &amp; Privacy Policy</a>
            </div>
            <div class="sign-up_group">
                <input name="submitButton" id="sign-up_submit" value="Submit" type="submit">
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.sign-up__main{
    background-color: #333537;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
.sign-up__form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    width: 400px;
    background-color: #2e3032;
}
.sign-up_img{
    height: 200px;
}
h1{
    color: #e1e4e8;
    font-size: 20px;
    align-self: flex-start;
}
hr{
    color: white;
    height: 2px;
    width: 100%;
    margin: 8px 0 40px 0;
}
label{
    margin-left: 20px;
}
.sign-up__all-inputs{
    margin-top: 5px;
    width: 300px;
}
.sign-up_email{
    width: 300px;
    margin-top: 5px;
}
.sign-up_phone{
    margin-left: 20px;
    padding-left: 5px;
    width: 300px;
    margin-top: 5px;
}
#pass1{
    width: 300px;
    margin-top: 5px;
}
#pass2{
    width: 300px;
    margin-top: 5px;
}
.sign-up_agreement{
    margin: 20px 0;
    color: #e1e4e8;
}
#sign-up_submit{
    margin: 20px 0;
    width: 300px;
    height: 28px;
    color: white;
}
#sign-up_submit:hover{
    cursor: pointer;
}
#sign-up_submit:active{
    background-color: #a26693;
    color: black;
}
</style>