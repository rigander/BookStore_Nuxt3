import {defineStore, skipHydrate} from "pinia";

export const useWishListStore = defineStore(
    'wishlistStore', () => {
        const wishlist = reactive({
            books: []
        })
        const toggleWishlist = (book, category) => {
            const bookUpdated = { ...book, category }
            const existingBook = wishlist.books.find((item) =>
                item.title === book.title);
            const index = wishlist.books.findIndex((b) => b.title === book.title);
            if (existingBook || index !== -1) {
                    wishlist.books.splice(index, 1);
            } else {
                wishlist.books.push(bookUpdated);
            }
        }
        const removeFromWishlist = (book) => {
            const index = wishlist.books.findIndex((b) => b.title === book.title);
            if (index !== -1) {
                wishlist.books.splice(index, 1);
            }
        };

        const countBooksInWishlist = computed( () => {
            return wishlist.books.length;
        })

        const heartColor = (book) =>  {
            return wishlist.books.some((item) => item.title === book.title)
                ? "orange-heart"
                : "dark-heart";
        };

        return{
            wishlist,
            toggleWishlist,
            countBooksInWishlist,
            removeFromWishlist,
            heartColor
        }
    },
    {
        persist: {
            storage: persistedState.localStorage,
        }
    })

