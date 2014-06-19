// Configuration parapmeters
var endPoint = "http://instanceof-applaitagora.rhcloud.com/api/apps/create";

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
var youGoBoy = function (appname, appdescription, url) {
    $.ajax({
        type: "POST",
        url: endPoint,
        data: {
            name: appname,
            description: appdescription,
            url: url
        }
    }).done(function (data) {
        $("#submission-toast").fadeIn();
        $("#request-form").hide();
    }).fail(function (error) {
        console.log(JSON.stringify(error, null, "  "));
    });
};

var ohNoes = function () {
    $("#failure-toast").fadeIn();
    $("#request-form").hide();
}

$("#request-submit").click( function (event) {
    event.preventDefault();
    var appname = $("#item-app-name").val();
    var appdescription = $("#item-app-description").val();
    var url = $("#item-url").val();
    (appname && appdescription && url) ? youGoBoy(appname, appdescription, url) : ohNoes();
    return false;
});

// Reenable form, for resubmission
$(".request-again").click( function (event) {
    $(this).parent().hide();
    $("#request-form").fadeIn();
    $("#item-app-name").select();
});
