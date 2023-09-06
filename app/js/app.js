'use strict';

import Swiper from 'swiper';

import { Keyboard, Mousewheel, Parallax } from 'swiper/modules';

const swiperImages = new Swiper('.slider-images', {
  modules: [Keyboard, Mousewheel, Parallax],
  loop: false,
  speed: 2400,
  parallax: true,
  mousewheel: {
    invert: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

// Just in case, later to delete.
// document.addEventListener('DOMContentLoaded', () => {});
