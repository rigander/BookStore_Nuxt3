<template>
    <div class="help-you-with_wrapper">
        <div class="help-you-with">
            <h1>BooksOnline Help Center</h1>
            <input type="text" placeholder="How can we help?">
        </div>
        <img src="/img/help-bg.jpg" alt="help-bg">
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.help-you-with_wrapper{
    position: relative;
}
.help-you-with{
    position: absolute;
    top: 150px;
    left: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 40px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    input{
        width: 700px;
        height: 30px;
        padding: 10px;
        outline: 1px solid transparent;
        transition: outline-color 0.3s;
    }
    input:focus {
        outline-color: #007bff;
        box-shadow: 0 0 5px 2px #007bff; /* добавьте голубое гало */
        border-color: #007bff;
    }
}
</style>