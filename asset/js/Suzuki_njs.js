
// header

$(document).ready(function () {

    $('.next').on('click', function () {
        let imageActive = $('.active');
        let nextImage = imageActive.next();

        if (nextImage.length) {
            imageActive.removeClass('active').css('z-index', '-10');
            nextImage.addClass('active').css('z-index', '10');
        }


    });



    $('.prev').on('click', function () {
        let imageActive = $('.active');
        let prevImage = imageActive.prev();

        if (prevImage.length) {
            imageActive.removeClass('active').css('z-index', '-10');
            prevImage.addClass('active').css('z-index', '10');
        }


    });



});


// nav 

let navToggle = document.querySelector('.navbar-toggle input');
let nav = document.querySelector('nav ul');

navToggle.addEventListener('click' , function(){
    nav.classList.toggle('slide');
});




// dropdown 


    // let dropdownInfo = document.querySelector('.dropdown-info');
    // dropdownInfo.innerHTML += ` 
    // <div class="dropdown-info-select">
    // <span class="select">Dimensi</span>
    // <i class="fa fa-caret-down icon"></i>
    // </div>


    // <ul>
    //     <div class="dropdown-data-info-item">Hello</div>
    //     <div class="dropdown-data-info-item">Hello</div>
    //     <div class="dropdown-data-info-item">Hello</div>
    // </ul> `;


let dropdownSelect = document.querySelector('.dropdown-info-select');
dropdownSelect.addEventListener('click' , function(){
    let divInfo = document.querySelector('.dropdown-info ul');
    divInfo.classList.toggle('active');
    
});




   


// footer

let getDate = new Date();
let date = document.querySelector('#date');
date.innerHTML += getDate.getFullYear();