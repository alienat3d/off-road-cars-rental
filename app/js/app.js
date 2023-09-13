'use strict';

import Swiper from 'swiper';

import { Keyboard, Mousewheel, Parallax, Controller, Pagination, Scrollbar, Navigation } from 'swiper/modules';

const swiperImages = new Swiper('.slider-images', {
  modules: [Parallax, Controller],
  loop: false,
  speed: 2400,
  parallax: true,
});

const swiperText = new Swiper('.slider-text', {
  modules: [Keyboard, Mousewheel, Controller, Pagination, Scrollbar, Navigation],
  loop: false,
  speed: 2400,
  mousewheel: {
    invert: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

swiperImages.controller.control = swiperText;
swiperText.controller.control = swiperImages;

// Just in case, later to delete.
// document.addEventListener('DOMContentLoaded', () => {});
