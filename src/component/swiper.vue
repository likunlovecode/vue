<template>
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/images/ban.jpg" /></div>
            <div class="swiper-slide"><img src="../assets/images/ban.jpg" /></div>
            <div class="swiper-slide"><img src="../assets/images/ban.jpg" /></div>
            <div class="swiper-slide"><img src="../assets/images/ban.jpg" /></div>
            <div class="swiper-slide"><img src="../assets/images/ban.jpg" /></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>
<script>
// import $ from '../assets/js/jquery.min.js';
import Swiper from '../assets/js/swiper.min.js';
export default {
  mounted(){
        var mySwiper=new Swiper(('.swiper-container'),{
        autoplay:2000,
        continuous:true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: '.swiper-pagination',
        },
        stopPropation:true,
         })
      
    }
}
</script>
<style>
.slide > * {
    max-width: 100%;
}
.slider .slide-prev {
    cursor: pointer;
    height: 48px;
    width: 48px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -24px;
    background-color: rgba(255,255,255,0.8);
    padding: 0px;
}
.slider .slide-next {
    cursor: pointer;
    height: 48px;
    width: 48px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -24px;
    background-color: rgba(255,255,255,0.8);
    padding: 0px;
}
.slider .slide-next:hover, .slider .slide-prev:hover {
    background-color: rgba(255,255,255,0.9);
}
.slider .slide-next img, .slider .slide-prev img {
    position: relative;
    top: 0;
    left: 0;
    max-height: 100%;
    max-width: 100%;
}
</style>


