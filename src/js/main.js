let callbtn = document.querySelector('.call')
let popup = document.querySelector('.overlay')
let closebtn = document.querySelector('.overlay__popup-close')
let more = document.querySelector('.more')
let openmore = document.querySelector('.openmore')
let closemore = document.querySelector('.more__close')



callbtn.onclick = function () {
    popup.style.display = 'flex'
}

closebtn.onclick = function () {
    popup.style.display = 'none'
}

popup.onclick = function (event) {
    if (event.target.classList.contains('overlay')) {
        popup.style.display = 'none'
    }
}

openmore.onclick = function () {
    more.style.display = 'flex'
}

closemore.onclick = function () {
    more.style.display = 'none'
}

more.onclick = function (event) {
    if (event.target.classList.contains('more')) {
        more.style.display = 'none'
    }
}

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200:{
            slidesPerView: 3,
        },
        950:{
            slidesPerView: 3,
        },
        792:{
            slidesPerView: 3,
        },
        600:{
            slidesPerView: 2,
        },
        320:{
            slidesPerView: 1,
        },
        240:{
            slidesPerView: 1,
        }
    }
});


$('#typeBold').click(function() {
    $('#textBlock').toggleClass('bold');
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


let burger = document.querySelector('.header__burger')
let beginMenu = document.querySelector('.begin__nav')

burger.onclick = function () {
    burger.classList.toggle('active')
    beginMenu.classList.toggle('active')
}


