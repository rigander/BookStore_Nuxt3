<script setup>
const apiBaseUrl = useRuntimeConfig().public.apiBase;
const errorMessage = ref();
const formData =ref({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    checkTerms: false
})

const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9!_\[\].\\|/-]+$/;
    return usernameRegex.test(username);
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPhone = (phone) => {
    const phoneRegex = /^\d{1,10}$/;
    return phoneRegex.test(phone);
};

const isValidPassword = (password) => {
    const passwordRegex = /^.{10,18}$/;
    return passwordRegex.test(password);
};
const validateFields = () => {
    const { name, email, phone, password, password_confirmation } = formData.value;
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
    if (!isValidUsername(name)) {
        errorMessage.value = 'User name must not contain special symbols';
        return false;
    }

    if (name.length > 18 || name.length < 2) {
        errorMessage.value = 'User name should be between 2 and 18 characters';
        return false;
    }

    if (!isValidEmail(email)) {
        errorMessage.value = 'Incorrect e-mail';
        return false;
    }

    if (!isValidPhone(phone)) {
        errorMessage.value = 'Wrong phone number';
        return false;
    }

    if (!isValidPassword(password)) {
        errorMessage.value = 'Password must be 10 to 18 symbols';
        return false;
    }

    if (password !== password_confirmation) {
        errorMessage.value = 'Passwords are not similar';
        return false;
    }

    if (!formData.value.checkTerms) {
        errorMessage.value = 'Click checkbox if you agree with User Agreement';
        return false;
    }

    errorMessage.value = '';
    return true;
};

const handleServerErrors = (serverErrors) => {
    if (serverErrors.email) {
        errorMessage.value = serverErrors.email[0];
    } else if (serverErrors.phone) {
        errorMessage.value = serverErrors.phone[0];
    } else {
        errorMessage.value = 'Validation error. Please check your input.';
    }
};
const submitForm = async () => {
    validateFields();
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
    handleServerErrors();
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

