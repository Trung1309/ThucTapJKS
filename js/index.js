$(document).ready(function(){
    $('.items-teacher').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i></button>`,
        arrows:true,
        autoplay: 2000
    });
  });