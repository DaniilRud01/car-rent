$(document).ready(function(){
    $('.top__slider').slick({
       autoplay: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                }
            },
            {
                breakpoint: 480,
                settings: {
                }
            }]
    })
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
});

$(function(){
    $("#phone__number").mask("+7(999) 999 - 99 99", {
    });
});

document.querySelector('.questions__btn').addEventListener('click', (e) => {
    e.preventDefault()
    if(!document.querySelector('#name').value){
        document.querySelector('#name').style='border-bottom: 1px solid red'
        document.querySelector('#name').placeholder='Заполните это поле!'
    }
    if(!document.querySelector('#phone__number').value){
        document.querySelector('#phone__number').style='border-bottom: 1px solid red'
        document.querySelector('#phone__number').placeholder='Введите полный формат номера'
    }else{
        document.querySelector('.modal__win').classList.add('active')
    }
})

document.querySelector('.modal__win-close').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.modal__win').classList.remove('active')

})

document.querySelector('.burger__menu').addEventListener('click', (e) => {
    e.preventDefault()
    e.stopImmediatePropagation()
    document.querySelector('.burger__menu').classList.toggle('burger__active')
    document.querySelector('.menu__media').classList.toggle('active__menu')
})
