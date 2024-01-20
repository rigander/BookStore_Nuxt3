<script setup>
const modalStore = useModalStore();

import {object, string, ref as yupRef, number, boolean} from "yup";
import { configure } from "vee-validate";

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: false,
});
const errorMessageServEmail = ref();
const errorMessageServPhone = ref();
const usernameRegex = /^[a-zA-Z0-9!_\[\].\\|/-]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!$_+%:?*()!@#^&_-]).*$/;
const phoneRegex = /^\+\(38\)\d{3}-\d{3}-\d{4}$/;
const schema = object({
    name:
        string()
        .required("fill in name field")
        .min(2, "must be no less then 2 symbols")
        .max(20, "must not be longer 20 symbols")
        .matches(usernameRegex, "invalid username format"),
    email:
        string()
        .required("fill in your email")
        .email("enter valid email"),
    phone:
         string()
         .required("fill in mobile phone number")
         .length(17, "invalid phone number length")
         .min(17,"invalid phone number")
         .max(17,"invalid phone number")
         .matches(phoneRegex, "invalid phone number4"),
    password:
         string()
        .required("fill in password")
        .matches(passwordRegex, "weak password")
        .min(8,"must be at least 8 symbols")
        .max(20, "must not exceed 20 symbols"),
    password_confirmation:
         string()
        .required("fill in confirm password")
        .oneOf([yupRef("password")], "passwords do not match"),
    checkTerms:
         boolean()
         .oneOf([true], "Please accept End User Licence Agreement " +
             "& Privacy Policy before proceeding"),

});

const initialValues = { name:"", email: "", phone:"", password: "",
    password_confirmation: "", checkTerms: false };

const formData =ref({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
})
const apiBaseUrl = useRuntimeConfig().public.apiBase;

// Function to handle successful form submission
const handleSuccess = () => {
    errorMessageServEmail.value = '';
    errorMessageServPhone.value = '';
    formData.value = { ...initialValues };
    const router = useRouter();
    router.push('/registrationsuccessful');
}

// Function to handle errors during form submission
const handleError = (error) => {
    const serverErrors = error.value.data.errors;

    if (serverErrors.email) {
        errorMessageServEmail.value = serverErrors.email[0];
        return;
    }
    if (serverErrors.phone) {
        errorMessageServPhone.value = serverErrors.phone[0];
    }
};

// Function to submit the form data to the server
const submitForm = async () => {
    try {
    const {data: responseData, error} = await useFetch(
        `${apiBaseUrl}/auth/register`,
        {
            method: 'post',
            body: {
                name: formData.value.name,
                email: formData.value.email,
                phone: formData.value.phone,
                password: formData.value.password,
                password_confirmation: formData.value.password_confirmation,
            }
        }
    );
    if (!error.value) {
        handleSuccess();
    } else {
        handleError(error);
    }
} catch (error) {
        console.error('An unexpected error occurred:', error);
    }
}

// Show text input on corresponding checkbox click
const showPassInput = ref(false);
const showPassConfirmInput = ref(false);
const PassVisibility = () => {
    showPassInput.value = !showPassInput.value;
};
const Pass2Visibility = () => {
    showPassConfirmInput.value = !showPassConfirmInput.value;
};

const onPhoneMaskChange = (event) => {
        const rawValue = event.target.value;
        const phoneNumber = rawValue.replace(/\D/g, '');
        formData.value.phone = phoneNumber.slice(2);
    }
</script>


<template>
    <div class="sign-up__main">
        <VeeForm
            :validation-schema="schema"
            v-slot="{ meta }"
            :initial-values="initialValues"
            @submit="submitForm"
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
                    type="text">
                </VeeField>
            </div>
            <div class="sign-up_group">
                <VeeErrorMessage name="email" class="error_fill-up"/>
                <span class="error_fill-up">{{ errorMessageServEmail }}</span>
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
                <span class="error_fill-up">{{ errorMessageServPhone }}</span>
                <label for="phone">Phone</label>
                <VeeField
                    v-maska
                    data-maska="+(38)###-###-####"
                    @maska="onPhoneMaskChange"
                    class="sing-up_all-inputs sign-up_phone"
                    name="phone" placeholder="+(38)000-000-0000" pattern="\d*"
                    type="text"/>
            </div>
            <div class="sign-up_group sing-up_pass">
                <VeeErrorMessage name="password" class="error_fill-up"/>
                <label for="pass1">Password</label>
                <VeeField
                    v-model="formData.password"
                    class="sing-up__all-inputs"
                    name="password" id="pass1"
                    :type="showPassInput ? 'text' : 'password'"/>
                <input
                    v-model="showPassInput"
                    class="checkbox" type="checkbox"
                    @click="PassVisibility"
                >
            </div>
            <div class="sign-up_group sign-up_pass-confirm">
                <VeeErrorMessage name="password_confirmation" class="error_fill-up" id="error-confirm"/>
                <label>Password Confirmation</label>
                <VeeField
                    v-model="formData.password_confirmation"
                    class="sing-up_all-inputs pass2"
                    name="password_confirmation" id="pass2"
                    :type="showPassConfirmInput ? 'text' : 'password'"/>
                <input
                    v-model="showPassConfirmInput"
                    class="checkbox" type="checkbox"
                    @click="Pass2Visibility">
            </div>
            <div class="sign-up_group sign-up_agreement">
                <VeeErrorMessage name="checkTerms" class="error_fill-up" id="error-terms"/>
                <VeeField
                    v-model="formData.checkTerms"
                    v-slot="{ field }"
                    :value="true"
                    :unchecked-value="false"
                    name="checkTerms"
                    class="sign-up_agreement__input"
                    type="checkbox"/>
                I agree to the<a href="" id="sign-up_terms">
                End User License Agreement &amp; Privacy Policy</a>
            </div>
            <div class="sign-up_group">
                <button
                    :disabled="!meta.valid"
                    name="submitButton"
                    value="Submit"
                    class="sign-up_submit"
                    type="submit">Submit
                </button>
            </div>
        </VeeForm>
    </div>
</template>
