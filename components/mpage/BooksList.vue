<script setup>
const opt = reactive({
    genre: 'best-sellers',
});

const changeGenre = (event, genre) => {
    event.preventDefault();
    opt.genre = genre;
};


const currentPage = ref(1);
const apiBaseUrl = useRuntimeConfig().public.apiBase;

const { data: categories } = await useFetch(`${apiBaseUrl}/categories`,);

const { data: booksStore } = await useFetch(
    `${apiBaseUrl}/category/best-sellers/books?page=${currentPage.value}`,
    { cache: false }
);
console.log(booksStore);

</script>


<template>
    <main id="main-content-wrapper-scifi">
        <div class="books-li_container-scifi">
            <section class="product-list-scifi">
                <div class="product-list__nav_new">
                    <ul class="product-list__nav_ul">
                        <li
                                v-for="(item, index) in categories.data.featured"
                                :key="index"
                                :class="opt.genre === item.slug && 'active'"
                                @click="changeGenre($event, item.slug)"
                                class="option product-list__nav__li"
                        >
                            <div><a href="">{{ item.name }}</a></div>
                        </li>
                    </ul>
                    <div class="big-box"></div>
                </div>
                <Books
                    v-model="booksStore"
                />
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.product-list__nav_new{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
}
.product-list__nav_ul{
  display: flex;
  padding: 0;
  margin: 0;
}
.big-box{
  width: 242px;
  height: 39px;
  border-bottom: 1px solid #d4d4d5;
}
.option{
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 140px;
  height: 39px;
  border: 1px solid #d8dce0;
  border-left: none;
  border-top: none;
  text-shadow: 0.5px 0.9px 0 #fff;
  font-size: 17px;
  font-weight: 300;
  color: #6b6969;
  margin-right: -1px;
  background-color: #e1e4e8;
}
.option:hover{
  font-size: 18px;
}
.active{
  border-bottom: none;
  background-color: transparent;
  font-weight: bold;
  color: #3f3f40;
}
#componentContainer{
    width: 170px;
    align-self: flex-end;
    margin-left: 600px;
    margin-top: 20px;
}
.long-text {
    height: auto;
    overflow: visible;
}
.short-text {
    width: 80px;
}

</style>

