
import JustValidate from "just-validate";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import tailwindcss from "tailwindcss";

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


// Burger menu
const actBurger = document.querySelector(".btn-burger");
const sideBurger = document.querySelector(".header_nav");

if (actBurger && sideBurger) {
  actBurger.addEventListener('click', () => {
    actBurger.classList.toggle("hiddenBurger");
    sideBurger.classList.toggle("open");
  });
}



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
