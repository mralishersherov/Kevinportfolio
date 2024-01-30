$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    autoplay: true,
    autoWidth: true,
    smartSpeed: 200,
    responsive: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})