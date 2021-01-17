
TweenMax.from(".navbar1", 2, {
    left: "-20%",
    ease: Expo.easeInOut,
    delay: 0.4,
});

var t6 = new TimelineMax({ paused: true });

t6.to(".nav1", 1.8, {
    width: "94%",
    ease: Expo.easeInOut,
});

t6.staggerTo(".nav-item1 a", 0.6, { top: "0px", ease: Expo.easeInOut }, 0.1, "-=0.8");

t6.reverse();
$(document).on("click", ".nav-toggle1", function () {
    t6.reversed(!t6.reversed());
});

$(document).on("click", ".nav-item1 a", function () {
    t6.reversed(!t6.reversed());
});