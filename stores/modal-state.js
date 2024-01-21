import { defineStore } from "pinia";

export const useModalStore = defineStore(
    'modalStore', () => {
        const show = ref(false);
        const isSignUpPage = ref(false);

        const hideModal = () => {
            show.value = false;
        }
        const closeModalAndNavigate = (path) => {
            hideModal();
            const router = useRouter();
            router.push(path);
        }

        return{
            show,
            isSignUpPage,
            hideModal,
            closeModalAndNavigate
        }
    }
)