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
            const existingBook = basket.books.find((item) =>
                item.title === book.title);
            if (existingBook) {
                existingBook.quantity += 1;
            } else {
                basket.books.push(book);
            }
            setBasketVisibility(true);
        };
        const increaseQuantity = (book) => {
            book.quantity += 1;
        };
        const reduceQuantity = (book) => {
            if (book.quantity > 1) {
                book.quantity -= 1;
            }
        };
        const hideCart = () => {
            basket.showBasket = false;
        }
        const removeFromCart = (book) => {
            const index = basket.books.findIndex((b) => b === book);
            if (index !== -1) {
                basket.books.splice(index, 1);
            }
        };
        const countBooksInCart = computed(() => basket.books.reduce((total, book) => total + book.quantity, 0));

        const totalCost = computed(() => basket.books.reduce((total, book) => total + book.price * book.quantity, 0).toFixed(2));

        return{
            basket,
            setBasketVisibility,
            addToCart,
            increaseQuantity,
            reduceQuantity,
            removeFromCart,
            hideCart,
            countBooksInCart,
            totalCost
        }
    },
{
    persist: true,
        storage: persistedState.localStorage,
}
)