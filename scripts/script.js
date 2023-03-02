const burgerBtn = document.querySelector('.burger__menu'),
    navRight = document.querySelector('.nav__right'),
    body = document.querySelector('body'),
    subnav = document.querySelector('.subnav'),
    burgerbg = document.querySelector('.burger__bg');

const toggleMenu = () => {
    navRight.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    subnav.classList.toggle('active')
    burgerbg.classList.toggle('active')
}

burgerBtn.addEventListener('click', e => {

    e.stopPropagation();
    toggleMenu()
})

document.addEventListener('click', e => {
    let target = e.target;
    console.log(target);
    let itsMenu = target == burgerbg || burgerbg.contains(target);
    let itsBurger = target == burgerBtn;
    let menuActive = navRight.classList.contains('active') || burgerbg.classList.contains('active');
    if (itsMenu && !itsBurger && menuActive) {
        toggleMenu()
        console.log('click');
    }

})


// burgerBtn.addEventListener('click', function () {

// })


