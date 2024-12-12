import { defineStore } from "pinia";

export const useProfileStore = defineStore(
    'ProfileStore', () => {
        const state = reactive({
            userData: null,
            token: '',
            errorMessage: ''
        });

        const isAuthorized = computed(() => {
            return state.token !== null;
        });

        const setToken = (token) => {
            state.token = token;
        }

        const setUserData = (userData) => {
            state.userData = userData;
        }

        const setErrorMessage = (errorMessage) => {
            state.errorMessage = errorMessage;
        }

        const clearState = () => {
            state.token = '';
            state.userData = null;
            state.errorMessage = '';
        }

        return {
            state,
            setToken,
            setUserData,
            setErrorMessage,
            clearState,
            isAuthorized
        };
    },
    {
        persist: true,
    }
)