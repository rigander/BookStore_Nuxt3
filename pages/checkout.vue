<script setup>
import {object, string, ref as yupRef, number, boolean} from "yup";
import { configure } from "vee-validate";
const {apiBaseUrl} = useApiFetch()
const profileStore = useProfileStore();
const token = profileStore.state.token;
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
const selectedPaymentMethod = ref('');
const selectedDeliveryMethod = ref('');
const showDeliveryAddress = ref(false);
const handleShowDeliveryAddress = () => {
    showDeliveryAddress.value = !showDeliveryAddress.value;
}
const submitOrder = async () => {
    try {
        const {data: responseData, error} = await useFetch(
            `${apiBaseUrl}/checkout`,
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
                <VeeField class="name_family-name" name="name-surname" type="text" placeholder="Name Surname"/>
                <VeeField class="home-city" name="home-city" type="text" placeholder="Home City"/>
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
.checkout-form_wrapper{
    display: flex;
    width: 1280px;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    color: #3f3f40;
}
.checkout-form{
    width: 800px;
    button{
        background-color: #52a452;
        font-weight: bold;
        margin-top: 25px;
        height: 60px;
        width: 250px;
        border: none;
        border-radius: 1px;
        background-image: linear-gradient(to top, #79b260, #92d774);
        color: #ffffff;
        font-size: 24px;
        font-family: SegoeWP;
    }
    button:hover{
        color: #3c3f41;
    }
    button:active{
        background-color: white;
        color: #52a452;
    }
    p{
        margin: 30px 0;
        font-size: 20px;
        line-height: 1.5;
    }
}
.order-placement-header{
    font-size: 25px;
    font-weight: bold;
    margin: 20px auto;
}
.your_contact-details{
    display: flex;
    flex-direction: column;
    input{
        margin-left: 0;
        padding: 0 10px;
    }
    input::placeholder{
        padding-left: 10px;
    }
}
.name_family-name{
    height: 25px;
}
.home-city{
    height: 40px;
}
.label__name_family-name{
    color: #3f3f40;
    padding-bottom: 20px;
    padding-top: 20px;
    font-size: 22px;
    font-weight: bold;
}

.checkout-orders{
    h1{
        font-size: 22px;
        font-weight: 600;
        padding-bottom: 15px;
    }
}
.checkout_quantity{
    width: 50px;
}
.checkout-order_merch__container{
    display: flex;
    flex-direction: column;
    width: 800px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px;
}
.checkout-order_merch{
    display: flex;
    margin-bottom: 20px;
    img{
        width: 7%;
    }
    .checkout-book_name{
        width: 500px;
        padding-left: 15px;
    }
    .cost{
        width: 100px;
        font-weight: bold;
        color: green;
        padding-left: 100px;
    }
}
#edit-products{
    display: flex;
    justify-content: flex-end;
}
.delivery_to-post__wrapper{
    display: flex;
    flex-direction: column;
    h1{
        margin: 30px 0 15px 0;
        font-size: 20px;
        font-weight: bold;
    }
}
.delivery_to-post{
    display: flex;
    flex-direction: column;
}
.self-pickup{
    label{
        color: #3f3f40;
    }

    padding-bottom: 5px;
    padding-left: 4px;
}
#delivery-method{
    width: 450px;
}
#edit-products:hover{
    color: #52a452;
    cursor: pointer;
}
.delivery_to-post_content{
    border: 1px solid black;
    border-radius: 4px;
    padding: 14px 6px;
}
.checkout_courier-delivery{
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 14px 6px;
    display: flex;
    flex-direction: column;
}
.courier-delivery_checkbox{
    label{
        margin-left: 5px;
    }
    input{
        margin: 4px 0 15px 15px;
    }
}
.active-label{
    color: #2e3032;
}
.address-for-delivery{
    display: flex;
    flex-direction: column;
    width: 500px;
    input{
        margin-left: 3px;
    }
}
.payment{
    display: flex;
    flex-direction: column;
    h1{
        font-size: 20px;
        padding-top: 30px;
        font-weight: bold;
    }
    select{
        height: 30px;
    }
    label{
        color: black;
        margin-bottom: 5px;
    }
    input{
        margin-left: 0;
        height: 30px;
    }
    textarea{
        height: 100px;
        resize: none;
        padding: 5px;
    }
}
#pay-method{
    margin: 20px 0;
    color: #6d6d6d;
}
.checkout_total-cost{
    margin: 20px 0;
    padding: 30px;
    border: 1px solid black;
    h1{
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 30px;
    }
    .total_cost{
        font-size: 23px;
        font-weight: bold;
        color: green;
        margin-left: 2px;
    }
}

</style>