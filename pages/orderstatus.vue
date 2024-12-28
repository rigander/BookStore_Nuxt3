<script setup>
const { processedOrders } = useCartStore();
const orders = processedOrders.orders.filter(order => order !== null);
</script>


<template>
            <ul>
                <li class="order-container"
                    v-for="(order, index) in orders" :key="index">
                    <div class="order">
                        <div class="order-data">
                                <table>
                                    <tr>
                                        <th class="order-header" colspan="2">
                                            Order # {{ order.data.id }}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th><strong>Status:</strong></th>
                                        <td>{{ order.data.status }}</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Delivery Method:</strong></th>
                                        <td>{{ order.data.delivery_method }}</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Payment Method:</strong></th>
                                        <td>{{ order.data.payment_method }}</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Created At:</strong></th>
                                        <td>{{ order.data.created_at }}</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Updated At:</strong></th>
                                        <td>{{ order.data.updated_at }}</td>
                                    </tr>
                                </table>
                            </div>
                        <div class="order-book-wrapper"
                             v-for="book in order.data.books"
                        >
                            <NuxtLink :to="{name: 'product-book',
                                            params: { book: book.slug },
                                            query: { category: book.category, page: book.page }}"
                                       class="order-book">
                                <img :src="book.image" alt="img">
                                <span class="order-book_name">{{ book.title }}</span>
                            </NuxtLink>
                            <span class="order-book_cost">{{ book.price }}$</span>
                        </div>
                    </div>
                </li>
            </ul>
</template>
