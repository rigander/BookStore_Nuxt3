import { defineStore } from 'pinia'

export const useCategoryStore = defineStore(
    'category',
    () => {
        const selectedSlug = ref(null);
        const books = ref([]);

        const setBooks = (newBooks) => {
            books.value = newBooks;
        };

        const loadBooks = async () => {
            if (!selectedSlug.value) return;
            const uri = `http://api.book-store.loc/api/category/${selectedSlug.value}/books`;
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