<script setup>

const route = useRoute();
const { data: booksStore } = await useFetch(`http://api.book-store.loc/api/category/${route.params.slug}/books`)

</script>


<template>
    <SharedAsideNav/>
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container-scifi">
            <section class="product-list-scifi">
                <div class="title_sci-fi">
                    <h4>{{ booksStore.data.name }}</h4>
                </div>
                <ScifiBooks v-model="booksStore"/>
            </section>
        </div>
    </main>
</template>