$(document).ready(function(){
    $('.items-teacher').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i></button>`,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },    
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },   
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  arrows:false
                }
            },    
        ]
    });
  });

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(`#backtop`).fadeIn();
        }else{
            $(`#backtop`).fadeOut();
        }
    });
    $(`#backtop`).click(function(){
        $(`html, body`).animate({
            scrollTop:0
        },500)
    })
})