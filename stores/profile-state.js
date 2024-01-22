import { defineStore } from "pinia";

export const useProfileStore = defineStore(
    'ProfileStore', () => {
        const state = reactive({
            userData: null,
            token: '',
            errorMessage: ''
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
            clearState
        };
    },
    {
        persist: true,
        storage: persistedState.localStorage,
    }
)