import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import IMask from 'imask'

if (document.querySelector(".js-diary-slider")) {
  const diarySlider = new Swiper(".js-diary-slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: ".js-diary-slider-prev",
      nextEl: ".js-diary-slider-next",
    },

    breakpoints: {
      992: {
        spaceBetween: 50,
      },
    },
  });
}

if (document.querySelector(".js-location-slider")) {
  const locationSlider = new Swiper(".js-location-slider", {
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 12,
    navigation: {
      prevEl: ".js-location-slider-prev",
      nextEl: ".js-location-slider-next",
    },

    breakpoints: {
      992: {
        spaceBetween: 20,
      },
    },
  });
}

if (document.querySelector(".js-experts-slider")) {
  const expertsSlider = new Swiper(".js-experts-slider", {
    slidesPerView: "auto",
    spaceBetween: 16,
    allowTouchMover: false,

    breakpoints: {
      1024: {
        spaceBetween: 0,
        allowTouchMover: true,
        slidesPerView: "auto",
      },
    },
  });
}

if (document.querySelector(".js-steps-slider")) {
  const stepsSlider = new Swiper(".js-steps-slider", {
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      prevEl: ".js-steps-slider-prev",
      nextEl: ".js-steps-slider-next",
    },
    breakpoints: {
      1024: {
        spaceBetween: 20,
      },
    },
  });
}

const menu = document.querySelector(".js-menu");

if (menu) {
  const menuOpenBtn = document.querySelector(".js-menu-open");
  const menuCloseBtn = document.querySelector(".js-menu-close");

  menuOpenBtn.addEventListener("click", openMenu);
  menuCloseBtn.addEventListener("click", closeMenu);
}

function openMenu() {
  menu.classList.add("is-open");
}

function closeMenu() {
  menu.classList.remove("is-open");
}


var form = $("#form-modal");

$('.modal-form__content').steps({
  headerTag: "h3",
  bodyTag: "section",
  contentContainerTag: "div",
  actionContainerTag: "div",
  stepsContainerTag: "div",
  labels: {
    next: 'Далее',
    previous: 'Назад',
    finish: 'Отправить'
  },
  onStepChanging: function (event, currentIndex, newIndex)
  {
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
  },
  onFinishing: function (event, currentIndex)
  {
      form.validate()
      return form.valid();
  },
  onFinished: function (event, currentIndex)
  {
      alert("Submitted!");
  }
})

form.validate({
  errorElement: "span",
  errorPlacement: function errorPlacement(error, element) {
    error.addClass("form-error");
  }
});


const inputTel = document.querySelector('.js-tel-input');

if (inputTel) {
  IMask(inputTel, {
    mask: '+{7}(000)000-00-00'
  });
}

$('.js-modal-close').on('click', function() {
  $('.js-modal').removeClass('is-open');
  $('body').removeClass('no-scroll')
})

$('.js-modal-open').on('click', function() {
  $('body').addClass('no-scroll')
  $(`.js-modal[data-modal="${$(this).data('modal')}"]`).addClass('is-open');
})

$('.js-form-file').on('change', function() {
  var fileName = $(this).val();
  fileName = fileName.replace('C:\\fakepath\\', '');
  $(this).siblings('.form-file__name').text(fileName);
})