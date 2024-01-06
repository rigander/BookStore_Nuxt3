import { defineStore } from "pinia";

export const useCategoryStore = defineStore(
    'categoryState', () => {
        const state = reactive({
            selectedCategory: null
        })

        const setSelectedCategory = (slug) => {
            state.selectedCategory = slug;
        };

        return {
            state,
            setSelectedCategory,
        };
    },
    {
        persist: true,
        storage: persistedState.localStorage,
    }
    );