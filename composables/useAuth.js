    const { closeModalAndNavigate } = useModalStore();
    const profileStore = useProfileStore();
    const { setUserData, setToken } = useProfileStore();
    
    const login = async (email, password) => {
            await csrfRequest();
            const { data, error } = await useFetchPost(
                '/api/auth/login',
                { email, password }
            );
            if (error.value) {
                console.error('Login error:', error.value.data.message);
                return { success: false, error: error.value.data.message };
            }
            const { token, data: userData } = data.value;
            setToken(token.value);
            setUserData(userData);
            closeModalAndNavigate('/');
            return { success: true };
    };

    const logout = async () => {
        await csrfRequest();
        const { data, error } = await useFetchPost(
            '/api/auth/logout',
            null,
            {
                headers: {
                    'Authorization': `Bearer ${profileStore.state.token}`,
                    'X-XSRF-TOKEN': useCookie( 'XSRF-TOKEN').value,
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
