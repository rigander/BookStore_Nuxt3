import { defineStore } from "pinia";

export const useModalStore = defineStore(
    'modalStore', () => {
        const show = ref(true);

        return{
            show
        }
    }
)