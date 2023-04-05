$('#slider_1').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
new WOW().init();
var owl = $('#slider_1');
owl.owlCarousel();
// Listen to owl events:
owl.on('changed.owl.carousel', function(event) {
    new WOW().init();
})

$('#slider_2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        720:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('#slider_3').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        700:{
            items:3
        },
        900:{
            items:4
        },
        1200:{
            items:5
        }
    }
})