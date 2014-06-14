// Configuration parapmeters
var endPoint = "http://localhost:1337/";

// Prepare the collapse nav function
var collapsenav = function() {
    if ($(".navbar").offset().top > $('.intro').outerHeight() - 50) {
        $(".navbar-fixed-top").addClass("show");
    } else {
        $(".navbar-fixed-top").removeClass("show");
    }
};

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

// Handle app-request with AJAX
$("#request-submit").click( function (event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: endPoint,
        data: {
            email: $("#item-email").val(),
            url: $("#item-url").val()
        }
    }).done(function (data) {
        $("#submission-toast").fadeIn();
        $("#request-form").hide();
    }).fail(function (error) {
        console.log(JSON.stringify(error, null, "  "));
    });
    return false;
});

// Reenable form, for resubmission
$("#request-again").click( function (event) {
    $("#submission-toast").hide();
    $("#request-form").fadeIn();
});
