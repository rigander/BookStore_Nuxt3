import { defineStore } from 'pinia'

export const useCategoryStore = defineStore(
    'category',
    () => {
        const selectedSlug = ref(null);
        let books = ref([]);

        const setBooks = (newBooks) => {
            books.value = newBooks;
            console.log('books:', books);
            console.log('inside', books.value);
        };

        const loadBooks = async () => {
            if (!selectedSlug.value) return;
            const uri = `http://api.book-store.loc/api/category/${selectedSlug.value}/books?page=1`;
            const { data: booksResponse } = await useFetch(uri);
            setBooks(booksResponse);
        };

        const setSelectedSlug = (slug) => {
            selectedSlug.value = slug;
            loadBooks();
        };

        return {
            selectedSlug,
            setSelectedSlug,
            loadBooks,
            books
        };
    }
);