// var swiper = new Swiper('.swiper', {
//     direction: 'vertical',
//     sliderPerView: 1,
//     spaceBetween: 0,
//     mousewheel: true,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'progressbar',
//     }
// })

new fullpage('#fullpage', {
    //.............................................
    //....Your other options....
    //..............................................
    onLeave: function () {
        jQuery('.section [data-aos]').removeClass("aos-animate");
    },
    onSlideLeave: function () {
        jQuery('.slide [data-aos]').removeClass("aos-animate");
    },
    afterSlideLoad: function () {
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
    },
    afterLoad: function () {
        jQuery('.section.active [data-aos]').addClass("aos-animate");
        //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
    }
});