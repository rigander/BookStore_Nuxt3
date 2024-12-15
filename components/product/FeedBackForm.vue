<template>
    <form action="#" name="feed-back" id="form">
        <h2 class="title">Write a comment</h2>
        <div class="group">
            <label for="name">Your name</label>
            <input minlength="2" placeholder="enter your fabulous name" id="name" name="firstName"
                   type="text">
            <span id="invalidName" class="valid-feedback"></span>
        </div>
        <div class="group">
            <label for="email">e-mail</label>
            <input id="email" placeholder="enter your e-mail address" type="email" name="email">
            <span id="invalid-email" class="valid-feedback"></span>
        </div>
        <div class="group">
            <label id="message-label" for="message">Message</label>
            <textarea id="message" placeholder="eager to know your thoughts..." type="text"
                      name="message"></textarea>
            <span id="invalid-thoughts" class="valid-feedback"></span>
        </div>
        <div class="group">
            <input name="submitButton" id="submit2" value="Submit" type="submit">
        </div>
    </form>
</template>