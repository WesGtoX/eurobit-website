$(document).ready(function() {

    // Get the header height
    const headerHeight = $('.main-menu').outerHeight();
    
    const scrollLink = $("a[href^='#']")

    // Smooth scroll
    scrollLink.click(function(e) {
        
        const linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight + 20
        }, 1000);

        e.preventDefault();
    });
});

TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".logo", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".nav ul li", 1, {
    delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".social-media ul li", 1, {
    delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.from(".side-strip", 2, {
    delay: 2.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".row", 2, {
    delay: 2.4,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".row h6", 2, {
    delay: 3,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".row p", 2, {
    delay: 3.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".home h1", 2, {
    delay: 3.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".home p", 2, {
    delay: 3.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".home .info", 2, {
    delay: 3.6,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".home button", 2, {
    delay: 3.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".form", 2, {
    delay: 3.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})