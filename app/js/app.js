'use strict';

import Swiper from 'swiper';

import {
  Keyboard,
  Mousewheel,
  Parallax,
  Controller,
  Pagination,
  Scrollbar,
  Navigation,
} from 'swiper/modules';

import { gsap, Power2 } from 'gsap';
// === SWIPER SLIDER ===
const swiperImages = new Swiper('.slider-images', {
  modules: [Parallax, Controller, Pagination],
  loop: false,
  speed: 2400,
  parallax: true,
  pagination: {
    el: '.slider-pagination-count__total',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      const totalResult = total < 10 ? `0${total}` : `${total}`;
      return totalResult;
    },
  },
});

const swiperText = new Swiper('.slider-text', {
  modules: [
    Keyboard,
    Mousewheel,
    Controller,
    Pagination,
    Scrollbar,
    Navigation,
  ],
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
// === / SWIPER SLIDER ===
// ===  GEAR ANIMATION ===
const gear = document.querySelector('.slider-gear');

swiperText.on('slideNextTransitionStart', () => {
  gsap.to(gear, 2.8, {
    rotation: '+=50',
    ease: Power2.easeOut,
  });
});

swiperText.on('slidePrevTransitionStart', () => {
  gsap.to(gear, 2.8, {
    rotation: '-=50',
    ease: Power2.easeOut,
  });
});
// === / GEAR ANIMATION ===
// === SLIDER CHANGE COUNT ===
const currentNumber = document.querySelector(
    '.slider-pagination-count__current'
  ),
  currentSlideNum = document.querySelector('.slider-pagination-num__number');

swiperImages.on('slideChange', function () {
  const index = swiperImages.realIndex + 1;

  gsap.to(currentNumber, 0.2, {
    force3D: true,
    y: -10,
    opacity: 0,
    ease: Power2.easeOut,
    onComplete: function () {
      gsap.to(currentNumber, 0.1, {
        force3D: true,
        y: 10,
      });
      const totalResult = index < 10 ? `0${index}` : `${index}`;
      return currentNumber.textContent = totalResult, currentSlideNum.textContent = totalResult;
      /* if (index < 10) {
        return currentNumber.textContent = `0${index}`, currentSlideNum.textContent = `0${index}`;
      } else {
        return currentNumber.textContent = `${index}`, currentSlideNum.textContent = `${index}`;
      } */
    },
  });

  gsap.to(currentNumber, 0.2, {
    force3D: true,
    y: 0,
    opacity: 1,
    ease: Power2.easeOut,
    delay: 0.3,
  });
});
// === / SLIDER CHANGE COUNT ===
// Just in case, later to delete.
// document.addEventListener('DOMContentLoaded', () => {});
