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

    /*$(".light-gallery").lightGallery({
        mode: 'lg-fade',
        cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 800,
        thumbnail : false
    });*/

    /*$('#dynamic').on('click', function(e) {
        e.preventDefault();
        $(this).lightGallery({
            dynamic: true,
            thumbnail: false,
            dynamicEl: [{
                src: 'http://sachinchoolur.github.io/lightGallery/static/img/1.jpg'
            },{
                src: 'http://sachinchoolur.github.io/lightGallery/static/img/2.jpg'
            },{
                src: 'http://sachinchoolur.github.io/lightGallery/static/img/3.jpg'
            },{
                src: 'http://sachinchoolur.github.io/lightGallery/static/img/4.jpg'
            }]
        })

    });*/


    document.getElementById('manufactureGallery').addEventListener('click', function() {
        lightGallery(document.getElementById('manufactureGallery'), {
            dynamic: true,
            mode: 'lg-fade',
            cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
            thumbnail: false,
            dynamicEl: [{
                    "src": '../img/manufacture/vj-f01.jpg',
                    'thumb': '../img/manufacture/vj-f01.jpg'
                    //'subHtml': '<p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
                },
                {
                    "src": '../img/manufacture/vj-f02.jpg',
                    'thumb': '../img/manufacture/vj-f02.jpg'
                },
                {
                    "src": '../img/manufacture/vj-f03.jpg'

                },
                {
                    "src": '../img/manufacture/vj-f04.jpg'

                },
                {
                    "src": '../img/manufacture/vj-f05.jpg'

                },
                {
                    "src": '../img/manufacture/vj-f06.jpg'

                },
                {
                    "src": '../img/manufacture/vj-f07.jpg'

                },
                {
                    "src": '../img/manufacture/vj-f08.jpg'

                },
                {
                    "src": '../img/manufacture/vj-f09.jpg'

                },
                {
                    "src": '../img/manufacture/vj-f11.jpg'

                },
                {
                    "src": '../img/manufacture/vj-f12.jpg'

                }]
        })

    });




    /*lightGallery(document.getElementsByName('lightgallery'), {
        mode: 'lg-fade',
        cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 800,
        thumbnail : false


        /!*!// Elements
        thumbnail : true, // Whether to display a button to show thumbnails.
        caption : false, // Enables image captions. Content is taken from "data-title" attribute.
        captionLink : false, // Makes image caption a link. URL is taken from "data-link" attribute.
        desc : false, // Enables image descriptions. Description is taken from "data-desc" attr.
        counter : false, // Shows total number of images and index number of current image.
        controls : true, // Whether to display prev/next buttons.

        // Transitions
        //mode : 'slide', // Type of transition between images. Either 'slide' or 'fade'.
        useCSS : true, // Whether to always use jQuery animation for transitions or as a fallback.
        easing : 'linear', // Value for CSS "transition-timing-function" prop. and jQuery .animate().
        //speed : 1000, // Transition duration (in ms).

        // Navigation
        hideControlOnEnd : false, // If true, prev/next button will be hidden on first/last image.
        loop : false, // Allows to go to the other end of the gallery at first/last img.
        auto : false, // Enables slideshow mode.
        pause : 4000, // Delay (in ms) between transitions in slideshow mode.
        escKey : true, // Whether lightGallery should be closed when user presses "Esc".

        // Mobile devices
        mobileSrc : false, // If "data-responsive-src" attr. should be used for mobiles.
        mobileSrcMaxWidth : 640, // Max screen resolution for alternative images to be loaded for.
        swipeThreshold : 50, // How far user must swipe for the next/prev image (in px).

        // Video
        vimeoColor : 'CCCCCC', // Vimeo video player theme color (hex color code).
        videoAutoplay : true, // Set to false to disable video autoplay option.
        videoMaxWidth : 855, // Limits video maximal width (in px).

        // i18n
        lang : { allPhotos: 'All photos' }, // Text of labels.


        // Dynamical load
        dynamic : false, // Set to true to build a gallery based on the data from "dynamicEl" opt.
        dynamicEl : [], // Array of objects (src, thumb, caption, desc, mobileSrc) for gallery els.

        // Misc
        rel : false, // Combines containers with the same "data-rel" attr. into 1 gallery.
        exThumbImage : false, // Name of a "data-" attribute containing the paths to thumbnails.*!/!*!/
    });*/


});