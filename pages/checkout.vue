<script setup>
import {object, string, ref as yupRef, number, boolean} from "yup";
import { configure } from "vee-validate";
const router = useRouter();
const {apiBaseUrl} = useApiFetch();
const profileStore = useProfileStore();
const token = profileStore.state.token;
const name = profileStore.state.userData ? profileStore.state.userData.name : '';
const email = profileStore.state.userData ? profileStore.state.userData.email : '';
const phone = profileStore.state.userData ? profileStore.state.userData.phone : '';
const modalStore = useModalStore();
const cart = useCartStore();
const delivery_method = [
    {
        name: 'Нова Пошта',
        slug: 'nova_poshta',
    },
    {
        name: 'Meest Express',
        slug: 'meest',
    },
    {
        name: 'Укр Пошта',
        slug: 'ukr_poshta'
    }
];
const payment_method = [
    {
        name: 'Visa',
        slug: 'visa',
    },
    {
        name: 'MasterCard',
        slug: 'mastercard',
    },
    {
        name: 'American Express',
        slug: 'am_express',
    },
    {
        name: 'Payment upon delivery',
        slug: 'cash',
    },
];
const selectedPaymentMethod = ref('visa');
const selectedDeliveryMethod = ref('nova_poshta');
const showDeliveryAddress = ref(false);
const handleShowDeliveryAddress = () => {
    showDeliveryAddress.value = !showDeliveryAddress.value;
}
const submitOrder = async () => {
    try {
        const {data: responseData, error} = await useFetch(
            `${apiBaseUrl}/api/checkout`,
            {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: {
                    books: cart.basket.books,
                    delivery_method: selectedDeliveryMethod,
                    payment_method: selectedPaymentMethod,
                }
            }
        );

    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
}
const handleCheckout = () => {
    if(token){
         submitOrder();
        return
    }
    modalStore.showModal();
}

</script>

<template>
    <div class="checkout-form_wrapper">
        <VeeForm class="checkout-form">
            <h1 class="order-placement-header">Order placement</h1>
            <div class="your_contact-details">
                <label class="label__name_family-name" for="name-surname">Your contact details</label>
                <VeeField v-model="name" class="name_family-name" name="name-surname" type="text" placeholder="Name Surname"/>
                <VeeField v-model="email" class="email_checkout" name="email" type="email" placeholder="Email"/>
                <VeeField v-model="phone" class="mobile-phone_checkout" name="phone" type="phone" placeholder="Phone"/>
            </div>
            <div class="checkout-orders">
                <h1>Order</h1>
                <div class="checkout-order_merch__container">
                    <client-only>
                        <div
                            v-for="book in cart.basket.books"
                            class="checkout-order_merch">
                            <img :src="book.image" alt="img">
                            <span class="checkout-book_name">{{ book.title }}</span>
                            <span class="checkout_quantity">{{ book.quantity }} pc.</span>
                            <span class="cost">{{ (book.price * book.quantity).toFixed(2) }}$</span>
                        </div>
                    </client-only>
                    <div
                        @click="cart.setBasketVisibility(true)"
                        id="edit-products">Edit products
                    </div>
                </div>
            </div>
            <div class="delivery_to-post__wrapper">
                <h1>Delivery</h1>
                <div class="delivery_to-post">
                    <div class="delivery_to-post_content">
                        <div class="self-pickup">
                            <label for="self-pickup">Pick up in person from post office</label>
                            <input type="checkbox" name="self-pickup">
                        </div>
                        <select
                            v-model="selectedDeliveryMethod"
                            name="delivery_method"
                            id="delivery-method">
                            <option
                                v-for="del_meth in delivery_method"
                                :value="del_meth.slug">
                                {{ del_meth.name }}
                            </option>
                        </select>
                    </div>
                    <div class="checkout_courier-delivery">
                        <div class="courier-delivery_checkbox">
                            <label
                                :class="{'active-label': showDeliveryAddress}"
                                for="courier-delivery">Courier delivery</label>
                            <input
                                @click="handleShowDeliveryAddress"
                                type="checkbox"
                                name="сourier-delivery">
                        </div>
                        <div
                            v-if="showDeliveryAddress"
                            class="address-for-delivery">
                            <input type="text" class="city">
                            <input type="text" class="home-address-street">
                            <input type="text" class="building">
                            <input type="text" class="floor">
                            <input type="text" class="flat">
                        </div>
                    </div>
                </div>
            </div>
            <div class="payment">
                <h1>Payment</h1>
                <select
                    v-model="selectedPaymentMethod"
                    name="pay-method"
                    id="pay-method">
                    <option
                        v-for="pay_meth in payment_method"
                        :value="pay_meth.slug">
                        {{ pay_meth.name }}
                    </option>
                </select>
                <label for="receiver">Receiver</label>
                <input type="text" name="receiver">
                <label for="order-comments">Add comments</label>
                <textarea name="order-comments"></textarea>
            </div>
            <div class="checkout_total-cost">
                <h1>Total</h1>
                <client-only>
                    <div class="total_cost">{{ cart.totalCost }} $</div>
                </client-only>
            </div>
            <button
                @click.prevent="handleCheckout"
            >
                Checkout
            </button>
            <div><p>By confirming the order, I accept the terms and
                conditions, including the provisions on the collection
                and protection of personal data and the user agreement.
            </p></div>
        </VeeForm>
    </div>
</template>


<style lang="scss" scoped>

</style>