// Search Box
let searchForm = document.querySelector('.srchbox');

document.querySelector('#srchicon').onclick = () => {
    searchForm.classList.toggle('active');
}

// Cart
let cart = document.querySelector('.items-cart');

document.querySelector('#carticon').onclick = () => {
    cart.classList.toggle('active');
}

// Login
let lgnfrm = document.querySelector('.login-form');

document.querySelector('#lgn').onclick = () => {
    lgnfrm.classList.toggle('active');
}


// For Swiper Slider
var swiper = new Swiper(".slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
        1500: {
            slidesPerView: 3,
        },
    },
});



// Media
document.querySelector('#menuicon').onclick = () => {
    document.querySelector('.navbar').classList.toggle('active');
}

