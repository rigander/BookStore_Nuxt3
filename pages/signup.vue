<script setup>
import {object, string, ref as yupRef, number} from "yup";
import { useValidateForm } from "vee-validate";
import { configure } from "vee-validate";

configure({
    validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: false, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const usernameRegex = /^[a-zA-Z0-9!_\[\].\\|/-]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegex = /^\d+$/;
const schema = object({
    name:
        string()
        .required("Fill in name field")
        .min(2, "Name must be no less then 2 symbols")
        .max(20, "Name must not be longer 20 symbols")
        .matches(usernameRegex, "Invalid username format"),
    email:
        string()
        .required("Fill in your email")
        .email("Enter valid email address"),
    phone:
         string()
         .required("Fill in mobile phone number")
         .length(10, "Invalid phone number")
         .min(10,"Invalid phone number")
         .max(10,"Invalid phone number")
         .matches(phoneRegex, "Invalid phone number"),
    password:
         string()
        .required("Fill in password field")
        .matches(passwordRegex, "Weak password")
        .min(8,"Password must be at least 8 symbols")
        .max(20, "Password must not exceed 20 symbols"),
    confirmed:
         string()
        .required("Fill in confirm password field")
        .oneOf([yupRef("password")], "Passwords do not match"),
});

const initialValues = { name:"", email: "", phone:"", password: "",
    password_confirmation: "" };

const formData =ref({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    checkTerms: false
})
const apiBaseUrl = useRuntimeConfig().public.apiBase;
const submitForm = async () => {
    const { data : responseData } = await useFetch(
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

const handleSubmit = () => {
    console.log('Form submitted!');
}

// const $v = useValidateForm(schema, initialValues);
// const handleSubmit = async (values, actions) => {
//     try {
//         await $v.form.validate;
//         if ($v.form.pending) return;
//         console.log(values);
//         await submitForm();
//         actions.resetForm();
//     } catch (error) {
//         console.error(error.errors);
//     }
// };
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
        <VeeForm
            :validation-schema="schema"
            @submit.prevent="handleSubmit"
            name="registration"
            class="sign-up__form"
        >
            <img class="sign-up_img" src="/img/Chromatic-Floral-Rabbit.svg" alt="rabbit">
            <h1 title="Sign Up">Sign Up</h1>
            <hr>
            <div class="sign-up_group">
                <VeeErrorMessage name="name" class="error_fill-up"/>
                <label for="name" class="sign-up_label_name">Username</label>
                <VeeField
                    v-model="formData.name"
                    class="sign-up__all-inputs sing-up_name"
                    name="name"
                    type="text"/>
            </div>
            <div class="sign-up_group">
                <VeeErrorMessage name="email" class="error_fill-up"/>
                <label for="email" class="sign-up_label_email">E-mail</label>
                <VeeField
                    v-model="formData.email"
                    name="email"
                    class="sing-up__all-inputs sign-up_email"
                    type="email"
                    />
            </div>
            <div class="sign-up_group">
                <VeeErrorMessage name="phone" class="error_fill-up"/>
                <label for="phone">Phone</label>
                <VeeField
                    v-model="formData.phone"
                    class="sing-up_all-inputs sign-up_phone"
                    name="phone" placeholder="+(380)00-000-0000" pattern="\d*"
                    type="text"/>
            </div>
            <div class="sign-up_group sing-up_pass">
                <VeeErrorMessage name="password" class="error_fill-up"/>
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
                <VeeErrorMessage name="password_confirmation" class="error_fill-up"/>
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
            </div>
            <div class="sign-up_group sign-up_agreement">
                <VeeErrorMessage name="checkTerms" class="error_fill-up"/>
                <VeeField
                    v-model="formData.checkTerms"
                    @click="formData.checkTerms = true"
                    name="checkTerms" class="sign-up_agreement__input"
                    type="checkbox"/>
                I agree to the<a href="" id="sign-up_terms">
                End User License Agreement &amp; Privacy Policy</a>
            </div>
            <div class="sign-up_group">
                <VeeField
                    name="submitButton"
                    value="Submit"
                    id="sign-up_submit"
                    type="submit"/>
            </div>
        </VeeForm>
    </div>
</template>

<style lang="scss" scoped>
.is-success{
    border: #52a452;
}
.is-danger{
    border: red;
}
.error_fill-up{
    margin-left: 95px;
    color: red;
    font-size: 17px;
    height: 40px;
    position: absolute;
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
    position: relative;
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
    height: 40px;
    color: white;
    background-color: #52a452;
    border: none;
    border-radius: 2px;
}
#sign-up_submit:hover{
    cursor: pointer;
}
#sign-up_submit:active{
    background-color: #a26693;
    color: black;
}
</style>