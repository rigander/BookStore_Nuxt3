<script setup>
const { processedOrders } = useCartStore();
const orders = processedOrders.orders.filter(order => order !== null);
console.log(orders);
</script>


<template>
        <div class="order-status">
            <ul>
                <li  v-for="(order, index) in orders" :key="index">
                    <div class="checkout-orders">
                        <div class="checkout-order_merch__container">
                                <h1>Order # {{ order.data.id }}</h1>
                            <div class="order-item">
                                <table>
                                    <tr>
                                        <td><strong>Status:</strong></td>
                                        <td>{{ order.data.status }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Delivery Method:</strong></td>
                                        <td>{{ order.data.delivery_method }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Payment Method:</strong></td>
                                        <td>{{ order.data.payment_method }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Created At:</strong></td>
                                        <td>{{ order.data.created_at }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Updated At:</strong></td>
                                        <td>{{ order.data.updated_at }}</td>
                                    </tr>
                                </table>
                            </div>

                            <NuxtLink
                                    v-for="book in order.data.books"
                                    :to="{
                           name: 'product-book',
                           params: { book: book.slug },
                           query: { category: book.category, page: book.page }
                          }"
                                    class="checkout-order_merch">
                                    <img :src="book.image" alt="img">
                                    <span class="checkout-book_name">{{ book.title }}</span>
                                    <span class="cost">{{ book.price }}$</span>
                                </NuxtLink>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
</template>
