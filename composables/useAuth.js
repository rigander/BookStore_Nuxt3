export const useAuth = () => {
    const { csrfRequest, useFetchPost } = useApiFetch();
    const { closeModalAndNavigate } = useModalStore();
    const { setUserData, setToken } = useProfileStore();
    const errorMessageServ = ref(null);

    const login = async (email, password) => {
        try {
            await csrfRequest();
            const { data, error } = await useFetchPost(
                '/api/auth/login',
                { email, password }
            );
            if (error.value) {
                console.error('Login error:', error.value.data.message);
                errorMessageServ.value = error.value.data.message;
                return { success: false, error: error.value.data.message };
            }

            const { id, name, email: userEmail, phone, email_verified_at } = data.value.data;
            const token = data.value.token.value;
            const userData = { id, name, email: userEmail, phone, email_verified_at };

            setToken(token);
            setUserData(userData);

            closeModalAndNavigate('/');
            return { success: true };
        } catch (err) {
            console.error('Unexpected login error:', err);
            return { success: false, error: 'Unexpected error' };
        }
    };

    return {
        login,
        errorMessageServ,
    };
};
