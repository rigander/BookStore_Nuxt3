import { defineStore } from "pinia";

export const useCartStore = defineStore(
    'cartStore', () => {
        const basket = reactive({
            showBasket: false,
            books: []

        })
        const setBasketVisibility = (slug) => {
            basket.showBasket = slug;
        };
        const addToCart = (book) => {
            basket.books.push(book);
        };

        return{
            basket,
            setBasketVisibility,
            addToCart
        }
    }
)