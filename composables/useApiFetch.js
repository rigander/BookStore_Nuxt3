export const useApiFetch = () => {
    const apiBaseUrl = useRuntimeConfig().public.apiBase;
    return {
        apiBaseUrl
    }
}