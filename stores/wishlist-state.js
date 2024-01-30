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

        const heartColor = (book) =>  {
            return wishlist.books.some((item) => item.title === book.title)
                ? "#e55053"
                : "#3a7ca8";
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
        persist: true,
        storage: persistedState.localStorage,
    }
)

