$( document ).ready(function() {
    


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

$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


});