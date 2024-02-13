import { defineStore } from "pinia";

export const useModalStore = defineStore(
    'modalStore', () => {
        const show = ref(false);
        const isSignUpPage = ref(false);
        const showLogin = ref(false);
        const showCart = ref(false);
        const closeModalAndNavigate = (path) => {
            showLogin.value = false;
            const router = useRouter();
            router.push(path);
        }

        return{
            show,
            isSignUpPage,
            closeModalAndNavigate,
            showLogin,
            showCart,
        }
    }
)