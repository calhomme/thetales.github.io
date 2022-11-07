gsap.registerPlugin(ScrollTrigger);

//LOADER
const fadingText = document.querySelector('.loading-container');
const removeOverlay = document.querySelector('.overlay');
const background = document.querySelector('.page-content');

window.addEventListener('mouseover', () => {
    background.classList.add('stop-scrolling');
    setTimeout(function() {
        background.classList.remove('stop-scrolling');
    }, 3000);
}, {once: true});

setTimeout(function() {
    gsap.to('.loading-container', {opacity: 0, y: -100, duration: 0.75, ease: 'power1.out'});
}, 3500);

setTimeout(function() {
    removeOverlay.classList.add('fading');
}, 4000);

//BACK ON TOP AFTER RELOAD
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//PARALLAX
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .7 + 'px)';
});

//MOUSEMOVE EFFECT
let pointer = document.querySelector(".ball");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    pointer.style.top = e.pageY + 'px';
    pointer.style.left = e.pageX + 'px';
}

//NAV ANIMATION

ScrollTrigger.matchMedia({
    //desktop
    "(min-width: 768px)": function() {
        gsap.to(".nav-country", {
            x: innerWidth * 0.7,
            duration: 3,
            scrollTrigger: {
                trigger: ".nav-country",
                start: "top 50%",
                end: "bottom 60%",
                toggleActions: "restart none none none",
                scrub: 4,
            }
        }),
        gsap.to(".nav-country2", {
            x: innerWidth * -0.7,
            duration: 3,
            scrollTrigger: {
                trigger: ".nav-country2",
                start: "top 50%",
                end: "bottom 60%",
                toggleActions: "restart none none none",
                scrub: 4
            }
        })
    }
})



