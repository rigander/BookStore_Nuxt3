import { defineStore } from "pinia";

export const useTopNavState = defineStore(
    'topNavStore', () => {
        const show = ref(true);
        const shouldRenderMenuItem = (menuItem) => {
            return !(show && menuItem.name === 'Sign in');
        };

        return{
            show,
            shouldRenderMenuItem
        }
    }
)