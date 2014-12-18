'use strict';

var HEADER_HEIGHT = 69;

var setGallery = function(photos) {
    $('#gallery figure').remove();
    $(photos).each(function(index, photo) {
        $('<figure>' +
            '<a href="' + photo.src + '" data-size="' + photo.width + 'x' + photo.height + '">' +
            '<img src="' + photo.thumb + '" alt="' + photo.desc + '" />' +
            '</a>' +
            '<figcaption><strong>' + photo.caption + '</strong> ' + photo.desc + '</figcaption>' +
            '</figure>').appendTo('#gallery');
    });
};

$(document).ready(function() {
    var hash = window.location.hash.substr(1);
    $('#' + hash).click();
});

$('.grid-figure').on('click', function(e) {
    e.preventDefault();

    var $el = $(this),
        id = $el.attr('id');
    if (!$el.hasClass('opened')) {
        $el.addClass('opened');

        window.location.hash = id;

        $el.data({
            'position': $el.position()
        });

        if (id !== 'about') {
            setGallery(window.galleries[id]);
        }

        $('.grid-figure').not($el).velocity('transition.fadeOut', {
            stagger: 50,
            duration: 400,
            display: 'inline-block',
            complete: function() {
                $el.css({
                    'position': 'fixed',
                    top: $el.position().top,
                    left: $el.position().left
                });

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
                    height: 640,
                    top: HEADER_HEIGHT
                }, {
                    easing: [0.86, 0, 0.07, 1],
                    complete: function() {
                        $('.grid-figure').not($el).hide();
                        if (id !== 'about') {
                            $('#gallery').fadeIn();
                            window.initPhotoSwipeFromDOM('#gallery');
                        } else {
                            $('#about-page').fadeIn();
                        }
                    }
                });

            }
        });
    } else {
        $el.removeClass('opened');
        if (id !== 'about') {
            $('#gallery').fadeOut();
        } else {
            $('#about-page').fadeOut();
        }
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
                $('.grid-figure').not($el).velocity('transition.fadeIn', {
                    stagger: 50,
                    display: 'inline-block'
                });
            }
        });
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