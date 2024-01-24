import { defineStore } from "pinia";

export const useTopNavStore = defineStore(
    'TopNavStore', () => {
        const profileStore = useProfileStore();
        const cartStore = useCartStore();
        const token = computed(() => profileStore.state.token);
        const booksInCart = computed(() => cartStore.basket.books);
        const showLogOutDialog = ref(false);
        const toggleLogOut = () => {
            showLogOutDialog.value = !showLogOutDialog.value;
        }
        return {
            showSignIn: computed(() => !token.value),
            showSignOut: computed(() => token.value),
            showCreateAccount: computed(() => !token.value),
            showMyAccount: computed(() => token.value),
            showBooksInCart: computed(() => booksInCart.value.length > 0),
            showLogOutDialog,
            toggleLogOut
        };
    }
)