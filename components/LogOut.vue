<script setup>
const TopNavStore = useTopNavStore();
const {apiBaseUrl} = useApiFetch();
const profileStore = useProfileStore();

const handleSuccess = () => {
    profileStore.state.userData = null;
    profileStore.state.token = '';
    TopNavStore.toggleLogOut();
}
const submitLogOut = async () => {
    try {
         const {data, error} = await useFetch(
            `${apiBaseUrl}/auth/logout`,
            {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${profileStore.state.token}`
                }
            }
        );
        if (data) {
            handleSuccess();
        }
    }
    catch (error) {
        console.error('An unexpected error occurred:', error);
    }
}
</script>

<template>
    <div
            @click.stop="TopNavStore.toggleLogOut"
            class="log-out_wrapper">
            <VeeForm
                    @click.stop
                    @submit="submitLogOut"
                    class="log-out_form">
                <h1>Do you wish to log out from your account ?</h1>
                <div class="log-out_yes-no">
                    <button
                            type="submit"
                    >Yes
                    </button>
                    <button
                            type="button"
                            @click.stop="TopNavStore.toggleLogOut"
                    >No
                    </button>
                </div>
            </VeeForm>
    </div>
</template>

<style lang="scss" scoped>
.log-out_wrapper{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 500;
    background: rgba(0,0,0, 0.5);
    color: white;
}
.log-out_form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-size: 20px;
    height: 100px;
    width: 500px;
    background-color: #3f3f40;
    margin: 4% auto;
}
.log-out_yes-no{
    display: flex;
  button{
    border: none;
    border-radius: 2px;
    height: 40px;
    width: 150px;
    margin: 10px;
    background-color: #52a452;
  }
  button:hover{
    background-color: #92d774;
  }
  button:active{
    color: #3f3f40;
    font-weight: bold;
  }
}
</style>