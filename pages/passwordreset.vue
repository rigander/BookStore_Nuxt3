<script setup>

</script>

<template>
    <div class="pass-reset_wrapper">
        <VeeForm class="pass-reset_form">
            <h1>Reset My Password</h1>
            <label for="email">Email</label>
            <VeeField
                name="email"
                type="email"
            >
            </VeeField>
            <button>
                Send verification email
            </button>
        </VeeForm>
    </div>
</template>