<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";

const schema = object({
    email: string()
        .required()
        .email()
        .test(
            "email-is-taken",
            "Email is already taken",
            async (value) => !(await existingEmail(value))
        )
        .label("Email Address"),
    password: string().required().min(8).label("Your Password"),
    confirmed: string()
        .required()
        .oneOf([yupRef("password")], "Passwords do not match") //Cross-Field Validation
        .label("Your Confirmation Password"),
});

const apiBaseUrl = useRuntimeConfig().public.apiBase;

const formData =ref({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    checkTerms: false
})

const submitForm = async () => {
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


// Vee Validate
const onSubmit = (values) => {
    console.log(values);
}
const validateEmail = (value) => {
    if (!value) {
        return 'This field is required';
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
        return 'Please enter a valid email';
    }
    return true;
};
const isRequired = (value) => {
    if (value && value.trim()) {
        return true;
    }
    return "All fields are mandatory to fill in"
}
</script>


<template>
    <div class="sign-up__main">
        <VeeForm
            @submit="[onSubmit, submitForm]"
            name="registration"
            class="sign-up__form">
            <img class="sign-up_img" src="/img/Chromatic-Floral-Rabbit.svg" alt="rabbit">
            <h1 title="Sign Up">Sign Up</h1>
            <VeeErrorMessage name="email" class="error_fill-up"/>
            <hr>
            <div class="sign-up_group">
                <label for="name" class="sign-up_label_name">Username</label>
                <VeeField
                    v-model="formData.name"
                    class="sign-up__all-inputs sing-up_name"
                    minlength="2" name="name" type="text"/>
            </div>
            <div class="sign-up_group">
                <label for="email" class="sign-up_label_email">E-mail</label>
                <VeeField
                    :rules="[validateEmail, isRequired]"
                    v-model="formData.email"
                    class="sing-up__all-inputs sign-up_email"
                    type="email" name="email"/>
            </div>
            <div class="sign-up_group">
                <label for="phone">Phone</label>
                <VeeField
                    v-model="formData.phone"
                    class="sing-up_all-inputs sign-up_phone"
                    name="phone" placeholder="+(380)00-000-0000" pattern="\d*"
                    type="text"/>
            </div>
            <div class="sign-up_group sing-up_pass">
                <span id="shortPass" class="valid-feedback short-pass"></span>
                <label for="pass1">Password</label>
                <VeeField
                    v-model="formData.password"
                    class="sing-up__all-inputs"
                    name="password" id="pass1"
                    :type="showPass ? 'text' : 'password'"/>
                <input
                    v-model="showPass"
                    class="checkbox" type="checkbox"
                    @click="PassVisibility"
                >
            </div>
            <div class="sign-up_group sign-up_pass-confirm">
                <label>Password Confirmation</label>
                <VeeField
                    v-model="formData.password_confirmation"
                    class="sing-up_all-inputs pass2"
                    name="password_confirmation" id="pass2"
                    :type="showPass2 ? 'text' : 'password'"/>
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
        </VeeForm>
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