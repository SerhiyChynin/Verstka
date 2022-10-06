$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
        responsive : {
        // breakpoint from 0 up
            0: { 
                items: 2,
                margin: 32,
                dots: false,
                loop: true,
            // stagePadding: 90,
            
        },
        // breakpoint from 480 up
        601 : {
            items: 3,
            margin: 32,
            dots: false,
            loop: true,
        },
        // breakpoint from 768 up
        1001 : {
            items: 3,
            margin: 48,
            dots: false,
            loop: true,
        },
}
  });
});

// video
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');


videoWrapper.addEventListener('click', function () {
    
    if (video.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play();
    }
    else {
        videoBtn.classList.remove('none');
        videoWrapper.classList.add('video-overlay');
        video.pause();
    }
});

// mobile Nav

const openNavBtn = document.querySelector('#openMobileNav');
const mobileNav = document.querySelector('#mobileNav');
const closeNavBtn = document.querySelector('#closeMobileNav');

openNavBtn.onclick = function () {
    mobileNav.classList.remove('none')
    document.body.classList.add('#no-scroll');
}
closeNavBtn.onclick = function () {
    mobileNav.classList.add('none')
    document.body.classList.add('#no-scroll');
};




