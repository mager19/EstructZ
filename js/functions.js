$( document ).ready(function() {
    

$(".fancybox").fancybox({
        'width'             : '75%',
             'height'            : '75%',
             'autoScale'         : false,
             'transitionIn'      : 'none',
             'transitionOut'     : 'none',
             'type'              : 'iframe',
             'showCloseButton'   : true,
             'opacity'   : true
    }).trigger("click")

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    // autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})

	$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplayTimeout:3000,
    // autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1,
            nav:false,
        },
        1000:{
            items:1
        }
    }
})



});