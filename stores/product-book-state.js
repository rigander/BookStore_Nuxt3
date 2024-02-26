import { defineStore } from "pinia";

export const useProductBookStore = defineStore(
    'ProductBookStore', () => {
        const bookData = {
            id: '',
            title: '',
            slug: '',
            image: '',
            price: '',
            discount: '',
            inStock: '',
            description: '',
            information: ''
        }
        return{
            bookData,

        }
    }
)