<script setup >
const items = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Discount and Clearance",
        link: "/scifi"
    },
    {
        name: "Sonatini Hippeastrum Alaska",
        link: "/product"
    },
]
</script>


<template>
    <div class="product-info__nav-route">
        <ul class="bread-cramps">
            <li
                v-for="item in items"
            >
                <div
                    v-if="item.name !== 'Home'"
                >
                    <ProductBreadcrumpsDchevron/></div>
                <a :href="item.link">{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>