// Prepare the collapse nav function
var collapsenav = function() {
    if ($(".navbar").offset().top > $('.intro').outerHeight() - 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
};

//Collapse navigation on page load depending on position of page
$(window).load(collapsenav);

//jQuery to collapse the navbar on scroll
$(window).scroll(collapsenav);

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
