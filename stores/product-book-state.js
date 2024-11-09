import { defineStore } from "pinia";

export const useProductBookStore = defineStore(
    'ProductBookStore', () => {
        const bookData = ref(null);
        const setBookData = (book) => {
            bookData.value = book;
        }
        return{
            bookData,
            setBookData
        };
    });