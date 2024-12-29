import { defineStore } from "pinia";

export const useModalStore = defineStore(
    'modalStore', () => {
        const isSignUpPage = ref(false);
        const modalActive = reactive({});
        const openModal = (key) => {
            modalActive[key] = true;
        };
        const closeModal = (key) => {
            modalActive[key] = false;
        };
        const toggleModal = (key) => {
            modalActive[key] = !modalActive[key];
        };
        const closeModalAndNavigate = (path, key) => {
            modalActive[key] = false;
            const router = useRouter();
            router.push(path);
        }

        return{
            isSignUpPage,
            closeModalAndNavigate,
            modalActive,
            toggleModal,
            openModal,
            closeModal
        }
    }
)