<script setup>
const router = useRouter();
</script>

<template>
    <div class="order-success_container">
        <div class="order-success_content">
            <h2>Your Order Successfully Created</h2>
            <div class="order-success_buttons">
                <button
                    @click="router.push('/')"
                    class="btn-return">Return to Shopping
                </button>
                <button
                    @click="router.push('/orderstatus')"
                    class="btn-status">My Orders Status
                </button>
            </div>
        </div>
    </div>
</template>
