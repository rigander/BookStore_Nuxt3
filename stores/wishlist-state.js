import { defineStore } from "pinia";

export const useWishListStore = defineStore(
    'wishlistStore', () => {
        const wishlist = ref({
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

        const toggleWishlist = (book) => {
            const existingBook = wishlist.value.books.find((b) => b.title === book.title);

            if (existingBook) {
                removeFromWishlist(book);
            } else {
                addToWishlist(book);
            }
        };

        const countBooksInWishlist = computed( () => {
            return wishlist.value.books.length;
        })

        return{
            wishlist,
            addToWishlist,
            removeFromWishlist,
            countBooksInWishlist,
            toggleWishlist

        }
    },
    {
        persist: true,
        storage: persistedState.localStorage,
    }
)