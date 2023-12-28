<script setup>
const photos = [
  "/img/Banner.png",
  "/img/slider1.png",
  "/img/slider2.png",
  "/img/slider3.png",
  "/img/slider4.png"
];
</script>

<template>
    <div class="main-slider">
        <div class="main-slider__wrapper">
                <Swiper>
                    <SwiperSlide
                        v-for="photo in photos">
                        <img :src="photo" alt="">
                    </SwiperSlide>
                </Swiper>
        </div>
    </div>
</template>