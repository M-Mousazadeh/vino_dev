// JavaScript Document

$(document).ready(function(){
    $('#fil-group-bn .comonfli').click(function(){
      $('.comonfli').removeClass("active-new2");
      $(this).addClass("active-new2");
  });
});
$(document).ready(function() {
    $( window ).scroll(function() {
          var height = $(window).scrollTop();
          if(height >= 100) {
              $('.mn-head').addClass('fixed-menu');
          } else {
              $('.mn-head').removeClass('fixed-menu');
          }
      });
  });
$(document).ready(function(){
    $('.ps-sild').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
		dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items:4
            }
        }
    })
	
	$('.best-sl-m').owlCarousel({
        rtl : true,
		autoplay:true,
    margin:25,
        nav: false,
		dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items:3
            }
        }
    })
	$('.news-slid').owlCarousel({
        rtl : true,
		autoplay:true,
        nav: false,
		margin: 20,
		dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items:3
            }
        }
    })

    $('.team-slid').owlCarousel({
        rtl : true,
        autoplay:true,
        loop:true,
         nav: true,
        margin: 20,
        dots:false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items:1
                },
                1000: {
                    items:4
                }
            }
    })
});