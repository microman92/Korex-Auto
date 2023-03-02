const sliders = document.querySelectorAll('.cards');
const sliderCards = document.querySelectorAll('.card__img_slider');


sliders.forEach(item => {
    new Swiper(item, {
        // loop: true,
        slidesPerView: 4,
        freemode: true,
        spaceBetween: 17,
        autoheight: true,
        centeredMode: true,
        slidesPerGroup: 1,
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        }
    })
})
sliderCards.forEach(item => {
    new Swiper(item, {
        slidesPerView: 1,
        autoheight: true,
        centeredMode: true,
        slidesPerGroup: 1,
        clickable: true,
        nested: true,
        slideToClickedSlide: true,
        pagination: {
            el: '.card__pagination',
            clickable: true,
            bulletClass: 'card__pagination_line',
            bulletActiveClass: 'active',
        },
    })
})

new Swiper('.header__content', {
    pagination: {
        el: '.header__content_pagination',
        clickable: true,
        bulletClass: 'pagination__line',
        bulletActiveClass: 'active',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 147,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {}
})