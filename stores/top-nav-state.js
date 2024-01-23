import { defineStore } from "pinia";

export const useTopNavStore = defineStore(
    'TopNavStore', () => {
        const profileStore = useProfileStore();
        const token = computed(() => profileStore.state.token);

        return {
            showSignIn: computed(() => !token.value),
            showSignOut: computed(() => token.value),
            showCreateAccount: computed(() => !token.value),
            showMyAccount: computed(() => token.value)
        };
    }
)