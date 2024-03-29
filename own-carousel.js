$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:15,
        autoWidth:true,
        responsiveRefreshRate:200,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true,
                loop:false
            },
            600:{
                items:3,
                nav:true,
                loop:false
            },
            900:{
                items:4,
                nav:true,
                loop:false
            },
            1024:{
                items:4,
                nav:true,
                loop:false
            },
            1250:{
                items:4,
                nav:true,
                loop:false
            },
            1550:{
                items:4,
                nav:true,
                loop:false
            },
            1850:{
                items:5,
                nav:true,
                loop:false
            },
            2100:{
                items:7,
                nav:true,
                loop:false
            }
        }
    })
  });