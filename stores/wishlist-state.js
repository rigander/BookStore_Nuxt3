import { defineStore } from "pinia";

export const useWishListStore = defineStore(
    'wishlistStore', () => {
        const wishlist = reactive({
            books: []
        })
        const toggleWishlist = (book) => {
            const existingBook = wishlist.books.find((item) =>
                item.title === book.title);
            const index = wishlist.books.findIndex((b) => b.title === book.title);
            if (existingBook || index !== -1) {
                    wishlist.books.splice(index, 1);
            } else {
                wishlist.books.push(book);
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

        return{
            wishlist,
            toggleWishlist,
            countBooksInWishlist,
            removeFromWishlist
        }
    },
    {
        persist: true,
        storage: persistedState.localStorage,
    }
)

