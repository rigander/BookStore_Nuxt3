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

        const removeFromCart = (book) => {
            const index = basket.books.findIndex((b) => b === book);
            if (index !== -1) {
                basket.books.splice(index, 1);
            }
        };

        return{
            basket,
            setBasketVisibility,
            addToCart,
            removeFromCart
        }
    }
)