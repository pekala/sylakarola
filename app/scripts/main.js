'use strict';

var HEADER_HEIGHT = 60;

var setGallery = function(photos, desc) {
    $('#gallery-photos figure').remove();
    $('#gallery-desc *').remove();
    if(desc) {
        $('<div class="gallery-intro">' + desc + '</div>').appendTo('#gallery-desc');
    }
    $(photos).each(function(index, photo) {
        $('<figure>' +
            '<a href="' + photo.src + '" data-size="' + photo.width + 'x' + photo.height + '">' +
            '<img src="' + photo.thumb + '" alt="' + photo.desc + '" />' +
            '</a>' +
            '<figcaption><strong>' + photo.caption + '</strong> ' + photo.desc + '</figcaption>' +
            '</figure>').appendTo('#gallery-photos');
    });
};

$(document).ready(function() {
    var hash = window.location.hash.substr(1);
    $('#' + hash).click();
});

function closeElement($el) {
    var deferred = $.Deferred();
    if(!$el.length) {
        return deferred.resolve();
    }
    $el.removeClass('opened');

    $('#about-page').fadeOut();
    $('#publications-page').fadeOut();
    $('#contact-page').fadeOut();
    $('#gallery').fadeOut();

    window.location.hash = '';
    $el.velocity('reverse', {
        duration: 200
    }).velocity({
        left: $el.data('position').left,
    }, {
        duration: 200,
        complete: function() {
            $('.grid-figure').not($el).show();
            $el.removeAttr('style');
            $el.removeClass('fixed');
            $('.grid-figure').not($el).velocity('transition.fadeIn', {
                stagger: 50,
                display: 'inline-block',
                complete: function () {
                    deferred.resolve();
                }
            });
        }
    });
    return deferred.promise();
}

$('#go-to-contact').on('click', function() {
    closeElement($('.grid-figure.opened'));
});

$('#go-to-about').on('click', function() {
    closeElement($('.grid-figure.opened')).then(function () {
        $('.grid-figure').velocity('transition.fadeOut', {
            stagger: 50,
            duration: 400,
            display: 'inline-block',
            complete: function () {
                $('.grid-figure').hide();
                $('#about-page').fadeIn();
            }
        });
    });
});

$('.grid-figure').on('click', function(e) {
    e.preventDefault();

    var $el = $(this),
        id = $el.attr('id');
    if (!$el.hasClass('opened')) {
        $el.addClass('opened');

        // window.location.hash = id;

        $el.data({
            'position': $el.position()
        });

        if (id !== 'about' && id !== 'publications') {
            setGallery(window.galleries[id], window.galleryDesc[id]);
        }
        $('.grid-figure').not($el).velocity('transition.fadeOut', {
            stagger: 50,
            duration: 400,
            display: 'inline-block',
            complete: function() {
                $el.css({
                    top: $el.position().top,
                    left: $el.position().left
                });
                $el.addClass('fixed');

                var durationX;
                if ($el.position().left < 10) {
                    durationX = 0;
                } else {
                    durationX = 400;
                }

                $el.velocity({
                    left: 2
                }, {
                    duration: durationX,
                    easing: [0.86, 0, 0.07, 1]
                }).velocity({
                    height: $(window).width() > 665 ? 640 : 0.4 * $(window).height(),
                    top: HEADER_HEIGHT
                }, {
                    easing: [0.86, 0, 0.07, 1],
                    complete: function() {
                        $('.grid-figure').not($el).hide();
                        $('html, body').animate({ scrollTop: 0 }, 'slow');
                        if (id === 'about') {
                            $('#about-page').fadeIn();
                        } else if (id === 'publications') {
                            $('#publications-page').fadeIn();
                        } else if (id === 'contact') {
                            $('#contact-page').fadeIn();
                        } else {
                            $('#gallery').fadeIn();
                            window.initPhotoSwipeFromDOM('#gallery-photos');
                        }
                    }
                });

            }
        });
    } else {
        closeElement($el);
    }
});

$('#show-courses').on('click', function(e) {
    e.preventDefault();
    $('.courses').toggleClass('revealed');
    window.setTimeout(function() {
        $('.overlay').animate({
            scrollTop: $('.overlay').height()
        }, 'slow');
    }, 500);
});

$('form').submit(function(e) {
    e.preventDefault();
    var email = $('#email').val();
    var name = $('#name').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    $('button').attr('disabled', 'disabled');
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'OVAlsbixBG3Ij3J7C_BNDg',
            'message': {
                'from_email': email,
                'from_name': name,
                'to': [{
                    'email': 'maciej@peka.la',
                    'type': 'to'
                }],
                'autotext': 'true',
                'subject': subject,
                'html': message
            }
        }
    }).done(function(response) {
        if (response[0].status === 'rejected') {
            $('#error').show();
        } else {
            $('input, textarea').val('');
        }
        $('button').removeAttr('disabled');
    }).fail(function() {
        $('#error').show();
        $('button').removeAttr('disabled');
    });
});
