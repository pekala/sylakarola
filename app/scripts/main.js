'use strict';

var gridElements = document.getElementsByClassName('grid--element');

function onGridElementClicked(e) {
    var el = this;
    e.preventDefault();
    window.scrollTo(0,0);

    function moveX(startX, endX) {
        el.style.left = endX;
        var last = el.getBoundingClientRect();
        var invert = startX - last.left;
        el.classList.remove('animate');
        el.style.transform = 'translateX('+ invert + 'px)';

        requestAnimationFrame(function () {
            el.classList.add('animate');
            el.style.transform = '';
        });
    }

    function moveY(startY, endY) {
        el.style.top = endY;
        var last = el.getBoundingClientRect();
        var invert = startY - last.top;
        el.classList.remove('animate');
        el.style.transform = 'translateY('+ invert + 'px)';

        requestAnimationFrame(function () {
            el.classList.add('animate');
            el.style.transform = '';
        });
    }

    function redirect() {
        location.href = e.target.href;
    }

    var first = this.getBoundingClientRect();
    this.style.left = first.left + 'px';
    this.style.top = first.top + 'px';
    this.style.position = 'absolute';

    if (first.left !== 0) {
        moveX(first.left, 0);
        setTimeout(function () {
            console.log('moved X')
            if (first.top !== 60) {
                moveY(first.top, '60px');
                setTimeout(redirect, 300);
            } else {
                redirect();
            }
        }, 300);
    } else if (first.top !== 60) {
        moveY(first.top, '60px');
        setTimeout(redirect, 300);
    } else {
        redirect();
    }

    requestAnimationFrame(function () {
        // hide other elements
        for (var i = 0; i < gridElements.length; i++) {
            if (gridElements[i] !== el) {
                gridElements[i].classList.toggle('is-hidden');
            }
        }
    });

}

for (var i = 0; i < gridElements.length; i++) {
    gridElements[i].addEventListener('click', onGridElementClicked, false);
}
