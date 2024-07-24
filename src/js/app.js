import fslightbox from "fslightbox";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

if (document.querySelector(".js-diary-slider")) {
  const diarySlider = new Swiper(".js-diary-slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: '.js-diary-slider-prev',
      nextEl: '.js-diary-slider-next',
    },

    breakpoints: {
      992: {
        spaceBetween: 50,
      }
    }
  });
}

if (document.querySelector(".js-location-slider")) {
  const locationSlider = new Swiper(".js-location-slider", {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 12,
    navigation: {
      prevEl: '.js-location-slider-prev',
      nextEl: '.js-location-slider-next',
    },

    breakpoints: {
      992: {
        spaceBetween: 20,
      }
    }
  });
}

if (document.querySelector(".js-experts-slider")) {
  const expertsSlider = new Swiper(".js-experts-slider", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    allowTouchMover: false,

    breakpoints: {
      1024: {
        spaceBetween: 0,
        allowTouchMover: true,
        slidesPerView: 'auto',
      }
    }
  });
}

if (document.querySelector(".js-steps-slider")) {
  const stepsSlider = new Swiper(".js-steps-slider", {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      prevEl: '.js-steps-slider-prev',
      nextEl: '.js-steps-slider-next',
    },
    breakpoints: {
      1024: {
        spaceBetween: 20,
      }
    }
  });
}


const menu = document.querySelector(".js-menu");

if (menu) {
  const menuOpenBtn = document.querySelector('.js-menu-open');
  const menuCloseBtn = document.querySelector('.js-menu-close');

  menuOpenBtn.addEventListener("click", openMenu);
  menuCloseBtn.addEventListener("click", closeMenu);
}

function openMenu() {
  menu.classList.add("is-open");
}

function closeMenu() {
  menu.classList.remove("is-open");
}


