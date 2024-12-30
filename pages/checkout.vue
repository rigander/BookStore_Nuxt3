<script setup>
import {object, string, ref as yupRef, number, boolean} from "yup";
import { configure } from "vee-validate";
// Check if logged in prior entry to page
definePageMeta({
    middleware: 'auth'
})
const router = useRouter();
const profileStore = useProfileStore();
const name = profileStore.state.userData ? profileStore.state.userData.name : '';
const email = profileStore.state.userData ? profileStore.state.userData.email : '';
const phone = profileStore.state.userData ? profileStore.state.userData.phone : '';
const modalStore = useModalStore();
const { basket, totalCost, clearCart, addProcessedOrder } = useCartStore();
const createdOrder = ref(null);
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
const errorMessageServ = ref('');

// Hide or Show address input fields for courier delivery
const handleShowDeliveryAddress = () => {
    showDeliveryAddress.value = !showDeliveryAddress.value;
}

// Get User Data from Server
const {data, error} = await useFetchGet('/user', true);
let user = ref(null);
if(data.value){
     user = data.value;
}

const orderBody = {
    books: basket.books,
    delivery_method: selectedDeliveryMethod,
    payment_method: selectedPaymentMethod,
}

// Checkout / Submit order
const submitOrder = async () => {
    const {data, error} = await useFetchPost(
        '/api/checkout', orderBody );
    createdOrder.value = data.value;

    // Show error message from server (if happened)
    if (error.value) {
        errorMessageServ.value = error.value.data?.message || 'Something went wrong, please try again.';
        return;
    }
    // Clear error message in case of successful request
    errorMessageServ.value = '';
}

const Checkout = async () => {
    await submitOrder();
    addProcessedOrder(createdOrder.value);
    clearCart();
    router.push('/ordersuccessful');
}

// Vee-validate configuration
configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: false,
});

const nameSurname = /^[A-Za-zА-Яа-яЁё]+ +[A-Za-zА-Яа-яЁё]+(-[A-Za-zА-Яа-яЁё]+)*$/;
const phoneRegex = /^\+\(38\)\d{3}-\d{3}-\d{4}$/;

//Scheme validation
const schema = object({
    email:
        string()
            .required("Email address is required.")
            .email("Enter Valid Email."),
    name:
        string()
            .required("Please enter your Full Name and Family Name.")
            .matches(nameSurname, "Invalid Name format"),
    phone:
        string()
            .required("Mobile phone number is required.")
            .length(17, "Invalid phone number length.")
            .min(17,"Invalid phone number.")
            .max(17,"Invalid phone number.")
            .matches(phoneRegex, "Invalid phone number."),
    receiver:
        string()
            .required("Please enter Full Name and Family Name.")
            .matches(nameSurname, "Invalid Name format"),
});


</script>

<template>
    <div class="checkout-form_wrapper">
        <VeeForm
            :validation-schema="schema"
            v-slot="{ meta }"
            class="checkout-form">
            <h1 class="order-placement-header">Order placement</h1>
            <p
                id="dialog-description"
                class="error_fill-up__serv"
                v-if="errorMessageServ">{{ errorMessageServ }}
            </p>
            <div class="your_contact-details">
                <label class="label__name_family-name" for="name-surname">Your contact details</label>
                <VeeErrorMessage name="name" class="error_fill-up"/>
                <VeeField
                    v-model="name"
                    class="name_family-name" name="name"
                    type="text" placeholder="Name Surname"/>
                <VeeErrorMessage name="email" class="error_fill-up"/>
                <VeeField
                    v-model="email"
                    class="email_checkout" name="email"
                    type="email" placeholder="Email"/>
                <VeeErrorMessage name="phone" class="error_fill-up"/>
                <VeeField
                    v-model="phone"
                    v-maska
                    data-maska="+(38)###-###-####"
                    class="mobile-phone_checkout"
                    name="phone" type="phone" placeholder="Phone"/>
            </div>
            <div class="checkout-orders">
                <h1>Order</h1>
                <div class="checkout-order_merch__container">
                    <client-only>
                        <NuxtLink
                            v-for="book in basket.books"
                            :to="{
                           name: 'product-book',
                           params: { book: book.slug },
                           query: { category: book.category, page: book.page }
                          }"
                            class="checkout-order_merch">
                            <img :src="book.image" alt="img">
                            <span class="checkout-book_name">{{ book.title }}</span>
                            <span class="checkout_quantity">{{ book.quantity }} pc.</span>
                            <span class="cost">{{ (book.price * book.quantity).toFixed(2) }}$</span>
                        </NuxtLink>
                    </client-only>
                    <div
                        @click="modalStore.openModal('cart')"
                        id="edit-products">Edit Your Order
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
                <VeeErrorMessage name="receiver" class="error_fill-up"/>
                <VeeField type="text" name="receiver" placeholder="Full Name and Family Name"/>
                <label for="order-comments">Add comments</label>
                <textarea name="order-comments"></textarea>
            </div>
            <div class="checkout_total-cost">
                <h1>Total</h1>
                <client-only>
                    <div class="total_cost">{{ totalCost }} $</div>
                </client-only>
            </div>
            <button
                @click.prevent="Checkout"
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