<template>
    <div class="reg-suc__wrapper">
        <h1 class="reg-suc_title">
            Registration Successful
        </h1>
        <div class="reg-suc_links">
            <button class="reg-suc_my-account">
                Sign In to My Account
            </button>
            <button class="reg-suc_home-page">
                Return to Home Page
            </button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.reg-suc__wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
}
.reg-suc_title{
    font-size: 50px;
    padding: 70px;
}
.reg-suc_links{
    display: flex;
    justify-content: space-between;
    width: 800px;
    font-size: 30px;
}
.reg-suc_my-account,
.reg-suc_home-page{
    height: 80px;
    padding: 20px;
    border: 1px solid #434243;
    border-radius: 2px;
}
.reg-suc_my-account:hover,
.reg-suc_home-page:hover{
    background-color: #92d774;
}
.reg-suc_my-account:active,
.reg-suc_home-page:active{
    background-color: #3f3f40;
    color: white;
}
</style>