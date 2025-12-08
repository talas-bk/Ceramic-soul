
import JustValidate from "just-validate";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../sass/style.scss";

const swiper = new Swiper('.swiper', {
  loop: true,
  modules: [Navigation, Pagination],

  pagination: {
    el: ".swiper-pagination",
    clickable :true,
  },
  navigation: {
    nextEl: ".icon-right-open",
    prevEl: ".icon-left-open",
  },

  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 3,
      spaceBetween:10,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView:3,
      spaceBetween:10,
    },
    // when window width is >=1440px
    1440: {
      slidesPerView: 3 ,
      spaceBetween:20,
    }
  },
 
});


// Form validation
const form = document.querySelector('#form');
if (form) {
  const validator = new JustValidate('#form');

  validator
   .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'pls fill the form',

    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'pls fill the form',

    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#email',[
    {
      rule: 'required',
      errorMessage: 'pls fill the email',

    },
    {
      rule: 'email',
      errorMessage: 'Please enter a valid email address',

    },

  ])
  .addField('#checkbox',[
    {
      rule: 'required',
      errorMessage: 'pls click the box',
    },
   ],
    {
      errorsContainer: document.querySelector('#checkbox')
        .parentElement.parentElement.querySelector('.errorMessege')
    }

  );
}


// Burger menu
const btnBurger = document.querySelector(".burger");
const sideBurger = document.querySelector(".header_nav");
const overlay = document.querySelector(".overlay");
const navBtn = document.getElementById("nav-btn")
const spanbtn = document.querySelector(".btn-burger")

const addHiddens = function () {
  sideBurger.classList.toggle("hidden");
  overlay.classList.toggle('remove');
  spanbtn.classList.toggle("transform")
};

navBtn.addEventListener('click',addHiddens);
btnBurger.addEventListener("click", addHiddens);
overlay.addEventListener("click", addHiddens);
// sideBurger.addEventListener("click", addHiddens)

