// menu 

const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav')
const body = document.querySelector('body')

function showMenu () {

    burger.addEventListener('click', () => {
        menu.classList.toggle('show-menu')
        burger.classList.toggle('transform-burger')
        body.classList.toggle('stop-overflow')
    })

}

showMenu ()


// change content

const number = document.querySelector('.header__number')
const navTitle = document.querySelector('#nav-title')

function change () {

    if (window.innerWidth <= 768) {
        navTitle.after(number)
    }

}   

change ()


// benefits slider

let benefitsSlider = new Swiper(".benefits__slider", {
    slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".benefits__pagination",
          clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        991: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});

// reviews slider

let reviewsSlider = new Swiper(".reviews__slider", {
    slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".reviews__pagination",
          clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    }
});


//action slider 


let actionSlider = new Swiper(".action__slider", {
    slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".action__pagination",
          clickable: true,
    },
});


// company photo slider
let companyPhotoSlider = new Swiper(".company-photo__slider", {
    slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".company-photo__pagination",
          clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        991: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }
});




//breakdowns mobile

function showBreakdowns () {

  const btnBreackdowns = document.querySelectorAll('.breakdowns__block')

  btnBreackdowns.forEach((item) => {
      item.addEventListener('click', () => {
          let currentBtnBreakdowns = item
          let listBreakdownsId = currentBtnBreakdowns.getAttribute('data-breakdowns')
          let currentListBreakdowns = document.getElementById(listBreakdownsId)
          
          currentBtnBreakdowns.classList.toggle('active-breakdowns')
          currentListBreakdowns.classList.toggle('show-breakdowns')
      })
  })

}  

showBreakdowns ()


