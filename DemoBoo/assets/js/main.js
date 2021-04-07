var owl = $('.owl-carousel');
var clientHeight;
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    // $(".owl-carousel__slider").owlCarousel();
    $('.viewed-slide').owlCarousel();
    // Handle button close menu
    $(".nav-menu__body-icon").click(function(){
        // console.log(1);
        $(".nav-menu__body").addClass("exit-menu");
        $('.nav-menu').removeClass('showing-menu');
    });
    $(".header-navbar__list-menu").hover(function(){
        // console.log(2);
        $(".nav-menu__body").removeClass("exit-menu");
    });

    // Handle margin top for app when slider change
    $(window).resize(function(){
        setTimeout(function() {
            $('.contain-banner').css('margin-top',$('.slider-wrap').height());
        }, 400);
    });

    setTimeout(function() {
        $('.contain-banner').css('margin-top',$('.slider-wrap').height());
    }, 100);
    console.log($('.slider-wrap').height());
    // var heightSlide = new Promise(
    //     function(resolve, reject) {
    //         resolve($('.slider-wrap').height());
    //     }
    // );
    // heightSlide
    //     .then(function(height) {
    //         $('.contain-banner').css('margin-top',height);
    //     });

    // Change header when scroll top
    window.onscroll = function() {changeScrollTop()};

    // Change header when hover logo
    $('.header-navbar__logo-link').hover(function() {
        document.querySelector('.header-wrap').classList.add('header-navbar--change');
    });
    $('.slider-wrap').hover(function() {
        document.querySelector('.header-wrap').classList.remove('header-navbar--change');
    });

    // Responsive
    
    // Show menu header
    $('.show-mobile-menu').click(function() {
        console.log("da bam");
        $('.nav-menu').addClass('showing-menu');
    });

    $('.nav-menu__overlay').hover(function() {
        $('.nav-menu').removeClass('showing-menu');
    });

    $('#menu-men').hover(function() {
        $('.nav-menu').addClass('showing-menu');
    });
    $('#menu-women').hover(function() {
        $('.nav-menu').addClass('showing-menu');
    });

    // Click back to top
    $('#back-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
});

function changeScrollTop() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector('.header-wrap').classList.add('header-navbar--change');
    }else{
        document.querySelector('.header-wrap').classList.remove('header-navbar--change');
    }

    // Controls btn-scroll-top
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector('#back-top').classList.add('show-btn-scroll');
    }else{
        document.querySelector('#back-top').classList.remove('show-btn-scroll');
    }

    // Setup to move up for product on sale, viewed and trending
    var bannerX=$('.app-body-wrap').offset().top - 200;
    var trendX= $('.trending-outfits').offset().top - 200;
    var viewedX= $('.viewed-products').offset().top - 200;
    if( document.documentElement.scrollTop > bannerX && document.documentElement.scrollTop < (bannerX+100)) {
        $('.best-selling-title').addClass('moveUp');
        $('.best-selling-intro').addClass('moveUp');
    }else if( document.documentElement.scrollTop > trendX && document.documentElement.scrollTop < (trendX +200)) {
        $('.best-selling-title').addClass('moveUp');
        $('.best-selling-intro').addClass('moveUp');
    }else if( document.documentElement.scrollTop > viewedX && document.documentElement.scrollTop < (viewedX +200)) {
        $('.best-selling-title').addClass('moveUp');
        $('.best-selling-intro').addClass('moveUp');
    }else {
        $('.best-selling-title').removeClass('moveUp');
        $('.best-selling-intro').removeClass('moveUp');
    }
}

//Handle slide
$('.slider__model').owlCarousel({
  loop:true,
  margin:0,
  item: 1,
  nav:true,
  autoplay:true,
  autoplayTimeout: 2500,
  autoplaySpeed: 0,
  dots: false,
  dotsData:true,
  autoplayHoverPause: true,
  smartSpeed: 800,
  responsive:{
      0:{
          items:1
      },
      740:{
          items:1
      },
      1024:{
          items:1
      }
  }
});

// Handle slide-bottom
$('.viewed-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout: 1400,
    dots: false,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2
        },
        740:{
            items:4
        },
        1024:{
            items:4
        }
    }
});

// Slide text on top-banner
$('.slider-text-banner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout: 400,
    // autoplaySpeed: 0,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        740:{
            items:6
        },
        1024:{
            items:8
        }
    }
});

// Handle slide on search box
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout: 1000,
    dots: false,
    responsive:{
        0:{
            items:3
        },
        740:{
            items:4
        },
        1024:{
            items:4
        }
    }
});