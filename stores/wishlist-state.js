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
            const index = wishlist.books.findIndex((b) => b.title === book.title);
            if (index !== -1) {
                wishlist.books.splice(index, 1);
            }
        };

        const countBooksInWishlist = computed( () => {
            return wishlist.books.length;
        })

        return{
            wishlist,
            addToWishlist,
            removeFromWishlist,
            countBooksInWishlist,
        }
    },
    {
        persist: true,
        storage: persistedState.localStorage,
    }
)