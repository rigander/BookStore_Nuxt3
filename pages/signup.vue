<script setup>

const apiBaseUrl = useRuntimeConfig().public.apiBase;

const formData =ref({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    checkTerms: false
})

const errorMessage = ref();
const usernameRegex = /^[a-zA-Z0-9!_\[\].\\|/-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{1,10}$/;
const passwordRegex = /^.{10,18}$/;
const submitForm = async () => {
    if (
        !formData.value.name ||
        !formData.value.email ||
        !formData.value.phone ||
        !formData.value.password ||
        !formData.value.password_confirmation
    ) {
        errorMessage.value = 'All fields need to be filled';
        return;
    }
    if (!usernameRegex.test(formData.value.name)) {
        errorMessage.value = 'User name must not contain special symbols';
        return;
    }
    if (formData.value.name.length > 18){
        errorMessage.value = 'User name should not be longer 18 symbols';
        return;
    }
    if (formData.value.name.length < 2){
        errorMessage.value = 'User name should not be longer 18 symbols';
        return;
    }
    if (!emailRegex.test(formData.value.email)) {
        errorMessage.value = 'Incorrect e-mail';
        return;
    }
    if (!phoneRegex.test(formData.value.phone)) {
        errorMessage.value = 'Wrong phone number';
        return;
    }
    if (!passwordRegex.test(formData.value.password)) {
        errorMessage.value = 'Password must be 10 to 18 symbols';
        return;
    }

    if (formData.value.password !== formData.value.password_confirmation) {
        errorMessage.value = 'Passwords are not similar';
        return;
    }
    if (!formData.value.checkTerms) {
        errorMessage.value = 'Click checkbox if agree with User Agreement';
        return;
    }
    errorMessage.value = '';

    // Get CSRFCookie before sending form.
    await getCSRFCookie();

    const { data : responseData, error } = await useFetch(
        `${apiBaseUrl}/auth/register`,
        {
            method: 'post',
            body: {
                name: formData.value.name,
                email: formData.value.email,
                phone: formData.value.phone,
                password: formData.value.password,
                password_confirmation: formData.value.password_confirmation
            }
        }
    );
    if (!error.value) {
        errorMessage.value = '';
        return;
    }
    if (error) {
        const serverErrors = error.value.data.errors;

        if (serverErrors.email) {
            errorMessage.value = serverErrors.email[0];
            return;
        }
        if (serverErrors.phone) {
            errorMessage.value = serverErrors.phone[0];
            return;
        }
        errorMessage.value = 'Validation error. Please check your input.';
    }
}

const getCSRFCookie = async () => {
    try {
        const response = await useFetch(
            'http://api.book-store.loc/sanctum/csrf-cookie',
            {
                credentials: 'include'
            }
        );
        console.log(response.status.value);
    } catch (error) {
        console.error('Failed to get CSRF cookie', error);
    }
}

// Show text input on corresponding checkbox click
const showPass = ref(false);
const showPass2 = ref(false);
const PassVisibility = () => {
    showPass.value = !showPass.value;
};
const Pass2Visibility = () => {
    showPass2.value = !showPass2.value;
};

</script>


<template>
    <div class="sign-up__main">
        <form
            @submit.prevent="submitForm"
            name="registration"
            class="sign-up__form">
            <img class="sign-up_img" src="/img/Chromatic-Floral-Rabbit.svg" alt="rabbit">
            <h1 title="Sign Up">Sign Up</h1>
            <span class="error_fill-up">{{ errorMessage }}</span>
            <hr>
            <div class="sign-up_group">
                <label for="name" class="sign-up_label_name">Username</label>
                <input
                    v-model="formData.name"
                    class="sign-up__all-inputs sing-up_name"
                    minlength="2" name="name" type="text">
            </div>
            <div class="sign-up_group">
                <label for="email" class="sign-up_label_email">E-mail</label>
                <input
                    v-model="formData.email"
                    class="sing-up__all-inputs sign-up_email"
                    type="email" name="email">
            </div>
            <div class="sign-up_group">
                <label for="phone">Phone</label>
                <input
                    v-model="formData.phone"
                    class="sing-up_all-inputs sign-up_phone"
                    name="phone" placeholder="+(380)00-000-0000" pattern="\d*"
                    type="text">
            </div>
            <div class="sign-up_group sing-up_pass">
                <span id="shortPass" class="valid-feedback short-pass"></span>
                <label for="pass1">Password</label>
                <input
                    v-model="formData.password"
                    class="sing-up__all-inputs"
                    name="password" id="pass1"
                    :type="showPass ? 'text' : 'password'">
                <input
                    v-model="showPass"
                    class="checkbox" type="checkbox"
                    @click="PassVisibility"
                >
            </div>
            <div class="sign-up_group sign-up_pass-confirm">
                <label>Password Confirmation</label>
                <input
                    v-model="formData.password_confirmation"
                    class="sing-up_all-inputs pass2"
                    name="password_confirmation" id="pass2"
                    :type="showPass2 ? 'text' : 'password'">
                <input
                    v-model="showPass2"
                    class="checkbox" type="checkbox"
                    @click="Pass2Visibility">
                <span id="shortRepeatPass" class="valid-feedback"></span>
            </div>
            <div class="sign-up_group sign-up_agreement">
                <span class="valid-feedback"></span>
                <input
                    v-model="formData.checkTerms"
                    @click="formData.checkTerms = true"
                    name="checkTerms" class="sign-up_agreement__input"
                    type="checkbox"/>
                I agree to the<a href="" id="sign-up_terms">
                End User License Agreement &amp; Privacy Policy</a>
            </div>
            <div class="sign-up_group">
                <input name="submitButton" id="sign-up_submit"
                       value="Submit" type="submit">
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.error_fill-up{
    padding-top: 5px;
    color: red;
    font-size: 20px;
    height: 40px;
}
.sign-up__main{
    background-color: #f2f2f3;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 800px;
    width: 1280px;

}
.sign-up__form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    width: 400px;
    background-color: #424143;
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