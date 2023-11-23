<script setup>
let reviews;
reviews = [
    {   number: 1,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has" +
        "been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" +
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, bu"+
        "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"+
        "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with"+
        "desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        number: 2,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has" +
        "been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" +
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"+
        "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"+
        "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with"+
        "desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        source: ''
    },

];
</script>


<template>
    <article
        class="name top-name"
        v-for="review in reviews"
    >
        <div class="avatar-name"><img src="~/assets/img/product-page/avatar.png" alt="">
            <h4>Name {{ review.number }}</h4></div>
        <p class="text-review">
            {{ review.text }}
            </p></article>
</template>