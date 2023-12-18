<script setup>
const booksStore = useCategoryStore();

</script>


<template>
    <SharedAsideNav/>
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container-scifi">
            <section class="product-list-scifi">
                <div class="title_sci-fi">
                    <h4>{{ booksStore.selectedSlug }}</h4>
                </div>
                <ScifiBooks/>
            </section>
        </div>
    </main>
</template>