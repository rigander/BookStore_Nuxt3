<script setup lang="ts">
definePageMeta({
    layout: false,
})

</script>


<template>
    <NuxtLayout name="scifi">
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container">
            <section class="product-list">
                <div class="title_sci-fi"><h4>Science Fiction</h4></div>
                <ScifiBooks/>
            </section>
        </div>
    </main>
    </NuxtLayout>
</template>