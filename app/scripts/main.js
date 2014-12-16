$(document).ready(function() {
    'use strict';

    $('#gallery-photos').click(function(e) {
        e.preventDefault();
        window.location.hash = 'photos';
        $(this).lightGallery({
            onCloseAfter: function() {
                window.location.hash = '';
            },
            dynamic: true,
            mode: 'fade',
            caption: true,
            desc: true,
            mobileSrc: false,
            dynamicEl: [{
                src: 'images/photos/1.jpg',
                thumb: 'images/photos/1_thumb.jpg',
                caption: 'Portrait',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/2.jpg',
                thumb: 'images/photos/2_thumb.jpg',
                caption: 'Portrait in motion',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/3.jpg',
                thumb: 'images/photos/3_thumb.jpg',
                caption: 'Portrait',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/4.jpg',
                thumb: 'images/photos/4_thumb.jpg',
                caption: 'Portrait  ',
                desc: 'Analog camera',
            }, {
                src: 'images/photos/5.jpg',
                thumb: 'images/photos/5_thumb.jpg',
                caption: 'Portrait',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/6.jpg',
                thumb: 'images/photos/6_thumb.jpg',
                caption: 'Portrait',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/7.jpg',
                thumb: 'images/photos/7_thumb.jpg',
                caption: 'Portrait',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/8.jpg',
                thumb: 'images/photos/8_thumb.jpg',
                caption: 'In motion',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/9.jpg',
                thumb: 'images/photos/9_thumb.jpg',
                caption: 'Misc',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/10.jpg',
                thumb: 'images/photos/10_thumb.jpg',
                caption: 'Portrait',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/11.jpg',
                thumb: 'images/photos/11_thumb.jpg',
                caption: 'Conceptual ',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/12.jpg',
                thumb: 'images/photos/12_thumb.jpg',
                caption: 'Portrait in the grass',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/13.jpg',
                thumb: 'images/photos/13_thumb.jpg',
                caption: 'Nude prologue',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/14.jpg',
                thumb: 'images/photos/14_thumb.jpg',
                caption: 'Portrait',
                desc: 'Digital camera, analogue lens, Photoshop',
            }, {
                src: 'images/photos/15.jpg',
                thumb: 'images/photos/15_thumb.jpg',
                caption: 'Conceptual ',
                desc: 'Digital camera, Photoshop',
            }, {
                src: 'images/photos/16.jpg',
                thumb: 'images/photos/16_thumb.jpg',
                caption: 'Misc',
                desc: 'Digital camera, Photoshop',
            }]
        });
    });


    $('#gallery-prints').click(function(e) {
        e.preventDefault();
        window.location.hash = 'prints';
        $(this).lightGallery({
            onCloseAfter: function() {
                window.location.hash = '';
            },
            dynamic: true,
            mode: 'fade',
            caption: true,
            desc: true,
            mobileSrc: false,
            dynamicEl: [{
                src: 'images/prints/1.jpg',
                thumb: 'images/prints/1_thumb.jpg',
                caption: 'Octopus',
                desc: 'Print on cotton'
            }, {
                src: 'images/prints/2.jpg',
                thumb: 'images/prints/2_thumb.jpg',
                caption: 'Potato fingers',
                desc: 'Print on cotton'
            }, {
                src: 'images/prints/3.jpg',
                thumb: 'images/prints/3_thumb.jpg',
                caption: 'Gold bark',
                desc: 'Print on silk'
            }, {
                src: 'images/prints/4.jpg',
                thumb: 'images/prints/4_thumb.jpg',
                caption: 'Owl \'s feather',
                desc: 'Print on silk'
            }, {
                src: 'images/prints/5.jpg',
                thumb: 'images/prints/5_thumb.jpg',
                caption: 'Owl perception',
                desc: 'Print on cotton'
            }, {
                src: 'images/prints/6.jpg',
                thumb: 'images/prints/6_thumb.jpg',
                caption: 'Dotty',
                desc: 'Print on cotton'
            }, {
                src: 'images/prints/7.jpg',
                thumb: 'images/prints/7_thumb.jpg',
                caption: 'Botanical',
                desc: 'Print on silk'
            }, {
                src: 'images/prints/8.jpg',
                thumb: 'images/prints/8_thumb.jpg',
                caption: 'Planty',
                desc: 'Print on cotton'
            }, {
                src: 'images/prints/9.jpg',
                thumb: 'images/prints/9_thumb.jpg',
                caption: 'Houndstooth digital',
                desc: 'Print project'
            }, {
                src: 'images/prints/10.jpg',
                thumb: 'images/prints/10_thumb.jpg',
                caption: 'B-day party',
                desc: 'Print project'
            }, {
                src: 'images/prints/11.jpg',
                thumb: 'images/prints/11_thumb.jpg',
                caption: 'desc: Track jam',
                desc: 'Print project'
            }]
        });
    });

    $('#gallery-drawings').click(function(e) {
        e.preventDefault();
        window.location.hash = 'drawings';
        $(this).lightGallery({
            onCloseAfter: function() {
                window.location.hash = '';
            },
            dynamic: true,
            mode: 'fade',
            caption: true,
            desc: true,
            mobileSrc: false,
            dynamicEl: [{
                src: 'images/drawings/1.jpg',
                thumb: 'images/drawings/1_thumb.jpg',
                caption: 'Watercolours',
                desc: 'Africa - inspired watercolour picture'
            }, {
                src: 'images/drawings/2.jpg',
                thumb: 'images/drawings/2_thumb.jpg',
                caption: 'Sketching ',
                desc: 'Corn sketch in fineliner',
            }, {
                src: 'images/drawings/3.jpg',
                thumb: 'images/drawings/3_thumb.jpg',
                caption: 'Sketching',
                desc: 'Shoes sketch',
            }, {
                src: 'images/drawings/4.jpg',
                thumb: 'images/drawings/4_thumb.jpg',
                caption: 'Drawings',
                desc: 'Fashion drawing',
            }, {
                src: 'images/drawings/13.jpg',
                thumb: 'images/drawings/13_thumb.jpg',
                caption: 'Drawings',
                desc: 'SS 15 fashion collection',
            }, {
                src: 'images/drawings/5.jpg',
                thumb: 'images/drawings/5_thumb.jpg',
                caption: 'Flat drawing by hand',
                desc: 'Technical drawing with details',
            }, {
                src: 'images/drawings/6.jpg',
                thumb: 'images/drawings/6_thumb.jpg',
                caption: 'Flat drawing, digital',
                desc: 'Technical drawing in Illustrator',
            }, {
                src: 'images/drawings/7.jpg',
                thumb: 'images/drawings/7_thumb.jpg',
                caption: 'Flat drawing, digital',
                desc: 'Technical drawing in Illustrator',
            }, {
                src: 'images/drawings/8.jpg',
                thumb: 'images/drawings/8_thumb.jpg',
                caption: 'Flat drawing, digital',
                desc: 'Technical drawing in Illustrator',
            }, {
                src: 'images/drawings/9.jpg',
                thumb: 'images/drawings/9_thumb.jpg',
                caption: 'Flat drawing, digital',
                desc: 'Technical drawing in Illustrator',
            }, {
                src: 'images/drawings/10.jpg',
                thumb: 'images/drawings/10_thumb.jpg',
                caption: 'Flat drawing, digital',
                desc: 'Technical drawing in Illustrator',
            }, {
                src: 'images/drawings/12.jpg',
                thumb: 'images/drawings/12_thumb.jpg',
                caption: 'Sketching',
                desc: 'Silhouettes',
            }]
        });
    });

    $('#gallery-sewing').click(function(e) {
        e.preventDefault();
        window.location.hash = 'sewing';
        $(this).lightGallery({
            onCloseAfter: function() {
                window.location.hash = '';
            },
            dynamic: true,
            mode: 'fade',
            caption: true,
            desc: true,
            mobileSrc: false,
            dynamicEl: [{
                src: 'images/sewing/1.jpg',
                thumb: 'images/sewing/1_thumb.jpg',
                caption: 'Sweatshirt',
                desc: 'Sewn from 2nd hand clothes'
            }, {
                src: 'images/sewing/2.jpg',
                thumb: 'images/sewing/2_thumb.jpg',
                caption: 'Sweat coat',
                desc: 'Bathrobe inspired coat with snap buttons'
            }, {
                src: 'images/sewing/3.jpg',
                thumb: 'images/sewing/3_thumb.jpg',
                caption: 'Anty shirt',
                desc: 'Shirt with ant print'
            }, {
                src: 'images/sewing/4.jpg',
                thumb: 'images/sewing/4_thumb.jpg',
                caption: 'Scarf / hood',
                desc: 'Soft scarf in jersey cotton'
            }, {
                src: 'images/sewing/5.jpg',
                thumb: 'images/sewing/5_thumb.jpg',
                caption: 'iPad cover',
                desc: ' .'
            }, {
                src: 'images/sewing/6.jpg',
                thumb: 'images/sewing/6_thumb.jpg',
                caption: 'Draping',
                desc: 'Coat fragment'
            }]
        });
    });

    $('#gallery-adobe').click(function(e) {
        e.preventDefault();
        window.location.hash = 'adobe';
        $(this).lightGallery({
            onCloseAfter: function() {
                window.location.hash = '';
            },
            dynamic: true,
            mode: 'fade',
            caption: true,
            desc: true,
            mobileSrc: false,
            dynamicEl: [{
                src: 'images/adobe/1.jpg',
                thumb: 'images/adobe/1_thumb.jpg',
                caption: 'Mood board',
                desc: 'School projet'
            }, {
                src: 'images/adobe/2.jpg',
                thumb: 'images/adobe/2_thumb.jpg',
                caption: 'Mood board',
                desc: 'School project'
            }, {
                src: 'images/adobe/3.jpg',
                thumb: 'images/adobe/3_thumb.jpg',
                caption: 'Persona',
                desc: 'School project'
            }, {
                src: 'images/adobe/4.jpg',
                thumb: 'images/adobe/4_thumb.jpg',
                caption: 'Persona',
                desc: 'School project'
            }, {
                src: 'images/adobe/5.jpg',
                thumb: 'images/adobe/5_thumb.jpg',
                caption: 'Page from a report',
                desc: 'School project'
            }, {
                src: 'images/adobe/6.jpg',
                thumb: 'images/adobe/6_thumb.jpg',
                caption: 'Collage',
                desc: 'Blog post'
            }, {
                src: 'images/adobe/7.jpg',
                thumb: 'images/adobe/7_thumb.jpg',
                caption: 'Delicate & Sustainable',
                desc: 'Newsletter moodboard'
            }, {
                src: 'images/adobe/8.jpg',
                thumb: 'images/adobe/8_thumb.jpg',
                caption: 'Easter Voucher',
                desc: ''
            }, {
                src: 'images/adobe/9.jpg',
                thumb: 'images/adobe/9_thumb.jpg',
                caption: 'Sale flyer',
                desc: ''
            }, {
                src: 'images/adobe/10.jpg',
                thumb: 'images/adobe/10_thumb.jpg',
                caption: 'Goodie bag flyer',
                desc: ''
            }, {
                src: 'images/adobe/11.jpg',
                thumb: 'images/adobe/11_thumb.jpg',
                caption: 'Promo box',
                desc: ''
            }, {
                src: 'images/adobe/12.jpg',
                thumb: 'images/adobe/12_thumb.jpg',
                caption: 'Maikel Tawadros',
                desc: 'Newsletter moodboard'
            }, {
                src: 'images/adobe/13.jpg',
                thumb: 'images/adobe/13_thumb.jpg',
                caption: 'Summer Lovin',
                desc: 'Newsletter moodboard'
            }, {
                src: 'images/adobe/14.jpg',
                thumb: 'images/adobe/14_thumb.jpg',
                caption: 'Festival Chick',
                desc: 'Newsletter moodboard'
            }, {
                src: 'images/adobe/15.jpg',
                thumb: 'images/adobe/15_thumb.jpg',
                caption: 'Urban Summer',
                desc: 'Newsletter moodboard'
            }, {
                src: 'images/adobe/16.jpg',
                thumb: 'images/adobe/16_thumb.jpg',
                caption: 'Minka Toeth',
                desc: 'Newsletter proposal'
            }]
        });
    });

    var hash = window.location.hash.substr(1);
    $('#gallery-' + hash).click();
});

(function() {
    'use strict';
    var $triggerBttn = $('#show-about'),
        $overlay = $('div.overlay'),
        $closeBttn = $('button.overlay-close'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        support = {
            transitions: Modernizr.csstransitions
        };

    function toggleOverlay(e) {
        e.preventDefault();
        if ($overlay.hasClass('open')) {
            $('body').css('overflow', '');
            $overlay.removeClass('open').addClass('close');
            var onEndTransitionFn = function(ev) {
                $overlay.removeClass('close');
                if (support.transitions) {
                    if (ev.propertyName !== 'visibility') {
                        return;
                    }
                    $(this).off(transEndEventName, onEndTransitionFn);
                }
            };
            window.location.hash = '';
            if (support.transitions) {
                $overlay.on(transEndEventName, onEndTransitionFn);
            } else {
                onEndTransitionFn();
            }
        } else if (!$overlay.hasClass('close')) {
            $overlay.addClass('open');
            $('body').css('overflow', 'hidden');
            window.location.hash = 'about';
        }
    }

    $triggerBttn.on('click', toggleOverlay);
    $closeBttn.on('click', toggleOverlay);

    $('#show-courses').on('click', function(e) {
        e.preventDefault();
        $('.courses').toggleClass('revealed');
        window.setTimeout(function() {
            $('.overlay').animate({
                scrollTop: $('.overlay').height()
            }, 'slow');
        }, 500);
    });
})();