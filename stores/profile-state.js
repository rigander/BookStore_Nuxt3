import { defineStore } from "pinia";
import {object} from "yup";

export const useProfileStore = defineStore(
    'ProfileStore', () => {

        const state = {
            userData: null,
            token: '',
            errorMessage: ''
        }


        const setToken = (token) => {
            state.token = token;
            console.log(token);
        }

        const setUserData = (userData) => {
            state.userData = userData;
            console.log(userData);

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