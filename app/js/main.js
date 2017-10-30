(function ($) {

    //svg4everybody();

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: false,
        //dynamicBullets: true,
        grabCursor: true,
        /*navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },*/
        /*pagination: {
            el: '.swiper-pagination',
            //type: 'progressbar',
            clickable: true
        },*/
        /*autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }*/
    });




})(jQuery);

/*Fancy box*/

$(document).ready(function() {

    /*menu*/
    var $menu = $('#menu'),
        $menulink = $('.menu-link');

    $menulink.click(function() {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });

    $(".fancybox").fancybox();
});