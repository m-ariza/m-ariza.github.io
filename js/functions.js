var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');
var $wScroll = $(window).scrollTop();

if ($wWidth > 820) {
    $('.links-container').slideDown(500);
}
$(window).resize(function() {
    var $wWidth = $(window).width();
    if ($wWidth > 820) {
        console.log('window width is > 820');
        $('.links-container').fadeIn(800);
    } else {
        $('.links-container').css(
            'display', 'none'
        );
    }

});

$(window).scroll(function() {
    var $wScroll = $(window).scrollTop();

    var $aboutTitlePageTop = $('#about-title-page').offset().top;
    var $rightAboutPageTop = $('#about-page').offset().top;
    if ($wScroll > $aboutTitlePageTop * 0.5) {
        $('#about-name').addClass('is-showing');

    } else {
        $('#about-name').removeClass('is-showing');
    }

    if ($wScroll > $rightAboutPageTop * 0.5) {
        $('.about-me').fadeIn(900);
    } else {
        $('.about-me').fadeOut(500);
    }

    var $workTitlePageTop = $('#project-title-page').offset().top;
    var $projectPageTop = $('#project-page').offset().top;
    if ($wScroll > $workTitlePageTop * 0.6) {
        $('#work-name').addClass('is-showing');
    } else {
        $('#work-name').removeClass('is-showing');
    }

    if ($wScroll > $projectPageTop * 0.7) {
        $('.projects').fadeIn(900);
    } else {
        $('.projects').fadeOut(500);
    }

    var $wHeight = $(window).height();
    if ($wScroll > $wHeight * 0.6) {
        $('.links-container').css({
            'background-color': 'rgba(0, 0, 0, 0.89)'
        });
    } else {
        $('.links-container').css({
            'background-color': 'rgba(0, 0, 0, 0.0)'
        });
    }



});

$menuBtn.click(function() {
    var $wWidth = $(window).width();
    if ($wWidth > 500 && $wWidth < 820) {
        $('.links-container').animate({
            'width': 'toggle'
        });
    } else {
        $('.links-container').slideToggle(300);
    }

});

$links.click(function() {
    var $wWidth = $(window).width();

    if ($wWidth > 500 && $wWidth < 820) {
        $('.links-container').animate({
            'width': 'toggle'
        });
    } else if ($wWidth < 500) {
        $('.links-container').slideToggle(300);
    }

    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 400, function() {
        window.location.hash = href;
    });
    /*
    $('#audio-player-project').click(function () {
        this.href = $(this).attr('data-url');
        console.log($(this).attr('data-url'));
        window.open(this.href);
        return false;
    })
*/
});
