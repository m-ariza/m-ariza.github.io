/**
 * Created by Marco on 5/22/2017.
 */
(function() {

    function fadeSplash() {
        $('.splash').fadeOut(800, 'swing');
    }


    setTimeout(fadeSplash, 800);
    var menu = document.getElementById('menu-btn');

    var $menuBtn = $('#menu-btn');
    var $nav = $('.nav-container');
    $menuBtn.click(function() {
        menu.classList.toggle("change");

        (function expandNav() {
            if ($nav.outerWidth() == 50) {
                $nav.removeClass('shrink-nav');
                $nav.addClass('expand-nav add-shadow');
                $('.menu-link').css({
                    "display": "inline-block"
                });

            } else if ($nav.outerWidth() != 50) {
                $nav.addClass('shrink-nav');
                $nav.removeClass('expand-nav add-shadow');
                $('.menu-link').css({
                    "display": "none"
                });
            }
        })();
    });

    function handlerIn() {
        $nav.addClass('menu-hover');
        console.log('in');

    }

    function handlerOut() {
        console.log('out');
        console.log('in');

        $nav.removeClass('menu-hover');
    }
    $menuBtn.hover(handlerIn, handlerOut);
})();