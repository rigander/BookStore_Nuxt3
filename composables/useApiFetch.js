const csrfRequest = async () => {
    const apiBaseUrl = useRuntimeConfig().public.apiBase;
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

const useFetchGet = async (url,  needAuthorize = false, options = {}) => {
    const apiBaseUrl = useRuntimeConfig().public.apiBase;
    const opts = {
        method: "GET",
        baseURL: apiBaseUrl,
        transform: (_data) => _data.data,
        ... options,
    };
    if (url !== '/sanctum/csrf-cookie'){
        url = `/api${url}`;
    }
    if (needAuthorize){
        const auth = useCookie('ProfileStore');
        if(auth.value && auth.value.state.token){
            opts.headers = {'Authorization' : `Bearer ${auth.value.state.token}`};
        }
    }
    return useFetch(url, opts)};

const useFetchPost = async (url, body, options = {}) => {
    const apiBaseUrl = useRuntimeConfig().public.apiBase;
    const opts = {
        method: 'post',
        headers: {
            'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
        },
        credentials: 'include',
        cache: false,
        ...options
    };
    const { data, error } =  await useFetch(`${apiBaseUrl}${url}`, {
        ...opts,
        body,
    });

    return { data, error };
};

export { csrfRequest, useFetchPost, useFetchGet };