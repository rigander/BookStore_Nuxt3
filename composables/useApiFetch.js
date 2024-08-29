export const useApiFetch = () => {
    const apiBaseUrl = useRuntimeConfig().public.apiBase;
    const csrfRequest = async () => {
        const csrfToken = useCookie( 'XSRF-TOKEN').value;
        if (!csrfToken) {
            const { data, error } = await useFetch(
                `${apiBaseUrl}/sanctum/csrf-cookie`,
                {
                    credentials: 'include',
                    cache: false
                }
            );
            if (error.value) {
                console.error("Error fetching CSRF token:", error.value);
            }
        }
    };
    const useFetchGet = async (endpoint,  needAuthorize = false, options = {}) => {

        const opts = {
            baseURL: apiBaseUrl,
            method: "GET",
            ... options,
            transform: (_data) => _data.data
        };

        if (endpoint !== '/sanctum/csrf-cookie'){
            endpoint = `/api${endpoint}`;
        }

        if (needAuthorize){
            const auth = useCookie('ProfileStore');
            if(auth.value && auth.value.state.token){
                opts.headers = {'Authorization' : `Bearer ${auth.value.state.token}`};
            }
        }
        return await useFetch(endpoint, opts);
    };

    const useFetchPost = async (url, body, options = {}) => {
        const defaultOptions = {
            method: 'post',
            headers: {
                'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
            },
            credentials: 'include',
            cache: false
        };

        const requestOptions = { ...defaultOptions, ...options };

        const { data, error } = await useFetch(`${apiBaseUrl}${url}`, {
            ...requestOptions,
            body
        });

        return { data, error };
    };

    return {
        apiBaseUrl,
        csrfRequest,
        useFetchPost,
        useFetchGet
    }
}