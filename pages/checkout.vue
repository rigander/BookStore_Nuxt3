<script setup>
import {object, string, ref as yupRef, number, boolean} from "yup";
import { configure } from "vee-validate";

</script>

<template>
    <div class="checkout-form_wrapper">
        <VeeForm class="checkout-form">
            <div class="your_contact-details">
                <label class="label__name_family-name" for="name-surname">Your contact details</label>
                <VeeField class="name_family-name" name="name-surname" type="text"/>
                <VeeField class="home-city" name="home-city" type="text"/>
            </div>
            <div class="checkout-orders">
                <h1>Order</h1>
                <div class="checkout-order_merch">
                    <img src="" alt="img">
                    <span class="checkout-book_name">Book title</span>
                    <span class="checkout_quantity">1 pc.</span>
                    <span class="cost"></span>
                    <NuxtLink>Edit products</NuxtLink>
                </div>
            </div>
            <h1>Delivery</h1>
            <div class="delivery_to-post">
                <label for="self-pickup">Pick up in person from post office</label>
                <input type="checkbox" name="self-pickup">
                <select name="address" id="delivery-address">
                    <option value="">Office no1. Wall street</option>
                    <option value="">Office no2. Sunny street</option>
                </select>
            </div>
            <div class="checkout_courier-delivery"><label for="courier-delivery">Courier delivery</label>
                <input type="checkbox" name="сourier-delivery">
                <input type="text" class="city">
                <input type="text" class="home-address-street">
                <input type="text" class="building">
                <input type="text" class="floor">
                <input type="text" class="flat">
            </div>
            <div class="payment">
                <h1>Payment</h1>
                <select name="pay-method" id="pay-method">
                    <option value="text">Payment upon delivery</option>
                    <option value="text">Payment by Visa/MasterCard </option>
                </select>
                <label for="receiver">Receiver</label>
                <input type="text" name="receiver">
                <label for="order-comments">Add comments</label>
                <textarea name="order-comments"></textarea>
            </div>
            <div class="checkout_total-cost">
                <h1>Total</h1>
                <div class="total_cost">1600 $</div>
            </div>
            <button>
                I confirm the order
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
}
.checkout-form{
    width: 800px;
}
.your_contact-details{
    display: flex;
    flex-direction: column;
    width: 600px;
}
.label__name_family-name{

}
</style>