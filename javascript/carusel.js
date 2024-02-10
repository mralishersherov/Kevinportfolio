$('.owl-carousel').owlCarousel({
    loop: true,
    
    nav: false,
    autoplay: true,
    autoWidth: true,
    smartSpeed: 200,
    responsive: true,
    responsive: {
        0: {
            items: 1
        },
        300:{
            items: 2
        },
        500: {
            items: 3
        },
        700:{
            items: 4
        },
        1000: {
            items: 5
        }
    }
})

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })