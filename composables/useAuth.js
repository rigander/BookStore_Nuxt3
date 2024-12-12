    const { closeModalAndNavigate } = useModalStore();
    const profileStore = useProfileStore();
    const { setUserData, setToken } = useProfileStore();
    
    const login = async (email, password) => {
        try {
            await csrfRequest();
            const { data, error } = await useFetchPost(
                '/api/auth/login',
                { email, password }
            );
            if (error.value) {
                console.error('Login error:', error.value.data.message);
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

    const logout = async () => {
        await csrfRequest();
        const { data, error } = await useFetchPost(
            '/api/auth/logout',
            null,
            {
                headers: {
                    'Authorization': `Bearer ${profileStore.state.token}`,
                    'X-XSRF-TOKEN': useCookie( 'XSRF-TOKEN').value
                },
            }
        )
        if (data) {
            profileStore.state.userData = null;
            profileStore.state.token = '';
            closeModalAndNavigate('/', 'login');
        }
    }

export { login, logout }
