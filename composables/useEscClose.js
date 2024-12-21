const modalStore = useModalStore();

/**
 *
 * @param {string} key - keyboard button
 * @param {string} modal - modal window name
 */

const useEscClose = (key, modal) => {
    const handleKeydown = (event) => {
        if (event.key === key) {
            modalStore.closeModal(modal);
        }
    };
    onMounted(() => {
        document.addEventListener('keydown', handleKeydown);
    });
    onUnmounted(() => {
        document.removeEventListener('keydown', handleKeydown);
    });
}

export {useEscClose};