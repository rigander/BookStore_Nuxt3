import { defineStore } from 'pinia'

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        selectedSlug: null,
        books: [],
    }),
    actions: {
        setSelectedSlug(slug) {
            this.selectedSlug = slug
        },
        setBooks(books) {
            this.books = books
        },
    },
})