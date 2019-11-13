/**
 * Created by timothylam on 8/28/16.
 */
$(document).ready(function () {

    // Constants
    var animationsEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var fadeIn = 'animated fadeInUp';

    // Handle parallax
    $('.parallax').parallax();

    // Add intro animations
    $('#title').addClass(fadeIn).one(animationsEnd, function () {
        $('#profileimg').addClass(fadeIn).one(animationsEnd, function () {
            $('#subtitle').addClass(fadeIn);
        });
    });

    // Handle modal opening
    for (var i = 1; i <= 13; i++) {
        (function (k) {
            var button = "#card-button" + k;
            $(button).click(function () {
                var modal = "#modal" + k;
                $(modal).openModal();
            });
        })(i);
    }

    $("#email-modal-trigger").click(function () {
        $("#email-modal").openModal();
    });

    // Handle title bar clicks
    $('#bio-click').click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 10
        }, 800);
        return false;
    });
    $('#contact-click').click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 10
        }, 800);
        return false;
    });
    $('#project-click').click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 10
        }, 800);
        return false;
    });

    // Handle hovers over contacts
    for (var i = 1; i <= 3; i++) {
        (function (k) {
            var img = "#img-hover" + k;
            $(img).mouseenter(function() {
                $(img).fadeTo("fast", 1, null);
            }).mouseleave(function() {
                $(img).fadeTo("fast", .7, null);
            });
        })(i);
    }

    // Handle Materialize ScrollFire
    var options = [
        {
            selector: '#projects', offset: 500, callback: function () {
            $('#m1').addClass('animated fadeInLeft');
            $('#m2').addClass('animated fadeIn');
            $('#m3').addClass('animated fadeInRight');

            $('#w1').addClass('animated fadeInLeft');
            $('#w2').addClass('animated fadeIn');
            $('#w3').addClass('animated fadeInRight');

            $('#ml1').addClass('animated fadeInLeft');
            $('#ml2').addClass('animated fadeIn');
            $('#ml3').addClass('animated fadeInRight');
        }
        }, {
            selector: '#m1', offset: 500, callback: function () {
            $('#m4').addClass('animated fadeInLeft');
            $('#m5').addClass('animated fadeIn');
            $('#m6').addClass('animated fadeInRight');

            $('#ml4').addClass('animated fadeInLeft');
            $('#ml5').addClass('animated fadeInRight');
        }
        }, {
            selector: '#m4', offset: 500, callback: function () {
            $('#m7').addClass('animated fadeInLeft');
        }
        }
    ];
    Materialize.scrollFire(options);
});
