import { defineStore } from "pinia";

export const useWishListStore = defineStore(
    'wishlistStore', () => {
        const wishlist = reactive({
            books: []
        })

        const addToWishlist = (book) => {
            wishlist.books.push(book);
        };

        const removeFromWishlist = (book) => {
            const index = wishlist.books.findIndex((b) => b === book);
            if (index !== -1) {
                wishlist.books.splice(index, 1);
            }
        };
    }
)