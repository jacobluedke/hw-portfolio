
function smoothScroll(target,duration) {
    var target = document.querySelector(target);
    var targetPosition = document.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        console.log(startTime);
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t *(t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var about = document.querySelector('#about');
var abtme = document.querySelector('.abtme');
var work = document.querySelector('#work');
var worksec = document.querySelector('.work');
var contact = document.querySelector('#contact');
var contactsec = document.querySelector('.contact');

about.addEventListener('click', function() {
    smoothScroll('.abtme', 1000);
}


