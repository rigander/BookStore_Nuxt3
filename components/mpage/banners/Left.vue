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
                <Swiper class="black-slider"
                        :modules="[
                          SwiperAutoplay, SwiperEffectCreative,
                          SwiperNavigation, SwiperPagination,
                        ]"
                        :pagination = "{
                          dynamicBullets: true,
                        }"
                        :navigation="{
                          enabled: true,
                        }"
                        :slides-per-view="1"
                        :loop="true"
                        :grabCursor="true"
                        :effect="'creative'"
                        :autoplay="{
                          delay: 4000,
                          disableOnInteraction: true,
                      }"
                        :creative-effect="{
                        prev: {
                          shadow: true,
                          translate: ['-20%', 0, -800],
                        },
                        next: {
                          shadow: true,
                          translate: ['120%', 0, -800],
                        },
                      }"
                >
                    <SwiperSlide
                            v-for="photo in photos">
                        <img :src="photo" alt="">
                    </SwiperSlide>
                </Swiper>
        </div>
    </div>
</template>


<style lang="css">
.black-slider{
    user-select: none;
    font-weight: bold;
    --swiper-navigation-size: 45px;
    --swiper-navigation-top-offset: 50%;
    --swiper-navigation-sides-offset: 15px;
    --swiper-navigation-color: #88a2bd;
}

</style>