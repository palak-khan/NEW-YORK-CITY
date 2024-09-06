function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function loaderAnimation() {
  const tl = gsap.timeline();

  tl.from(".n", {
    x: 500,
    y: 100,
    duration: 1.5,
    delay: 2,
  });

  tl.from(
    ".y",
    {
      y: 100,
      duration: 1,
    },
    "<"
  );

  tl.from(
    ".c",
    {
      x: -520,
      y: 100,
      duration: 1,
    },
    "<"
  );
  tl.to(".loader-page", {
    height: "0",
    opacity: 0,
    duration: 1.3,
  });
  tl.to(".loader-page h1", {
    opacity: 0,
    duration: 1,
  }
  );
}

// Execute the loaderAnimation function
loaderAnimation();

gsap.to(".scroll-bar", {
  width: "100%",
  duration: 1, // Set the duration of the scroll bar animation
  ease: "none", // Set the easing function for the animation
  scrollTrigger: {
    trigger: ".main",
    scroller: ".main",
    start: "top 0%", // Adjust start position as needed
    end: "bottom 0%", // Adjust end position as needed
    scrub: 1, // Set the scrub value for a smoother animation
  },
});

Shery.imageEffect(".imgs", {
  style: 3,
  config: {
    uFrequencyX: { value: 12, range: [0, 100] },
    uFrequencyY: { value: 12, range: [0, 100] },
    uFrequencyZ: { value: 10, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 1 },
    zindex: { value: "9", range: [-9999999, 9999999] },
    aspect: { value: 1.0833399835075679 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.53 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
    a: { value: 0, range: [0, 30] },
    b: { value: -0.88, range: [-1, 1] },
  },
});
function sliderTextAnimation() {
  var titleZero = document.querySelector(".title-0");
  var titleZeroSvg = document.querySelector(".title-0-svg");
  var slideOne = document.querySelector(".slide1");
  slideOne.addEventListener("mouseenter", function () {
    titleZero.style.color = "#fa5a32";
    titleZeroSvg.style.opacity = 1;
  });
  slideOne.addEventListener("mouseleave", function () {
    titleZero.style.color = "#ffff";
    titleZeroSvg.style.opacity = 0;
  });

  var titleOne = document.querySelector(".title-1");
  var titleOneSvg = document.querySelector(".title-1-svg");
  var slideTwo = document.querySelector(".slide2");
  slideTwo.addEventListener("mouseenter", function () {
    titleOne.style.color = "#fa5a32";
    titleOneSvg.style.opacity = 1;
  });
  slideTwo.addEventListener("mouseleave", function () {
    titleOne.style.color = "#ffff";
    titleOneSvg.style.opacity = 0;
  });

  var titleTwo = document.querySelector(".title-2");
  var titleTwoSvg = document.querySelector(".title-2-svg");
  var slideThree = document.querySelector(".slide3");
  slideThree.addEventListener("mouseenter", function () {
    titleTwo.style.color = "#fa5a32";
    titleTwoSvg.style.opacity = 1;
  });
  slideThree.addEventListener("mouseleave", function () {
    titleTwo.style.color = "#ffff";
    titleTwoSvg.style.opacity = 0;
  });

  var titleThree = document.querySelector(".title-3");
  var titleThreeSvg = document.querySelector(".title-3-svg");
  var slideFour = document.querySelector(".slide4");
  slideFour.addEventListener("mouseenter", function () {
    titleThree.style.color = "#fa5a32";
    titleThreeSvg.style.opacity = 1;
  });
  slideFour.addEventListener("mouseleave", function () {
    titleThree.style.color = "#ffff";
    titleThreeSvg.style.opacity = 0;
  });

  var titleFour = document.querySelector(".title-4");
  var titleFourSvg = document.querySelector(".title-4-svg");
  var slideFive = document.querySelector(".slide5");
  slideFive.addEventListener("mouseenter", function () {
    titleFour.style.color = "#fa5a32";
    titleFourSvg.style.opacity = 1;
  });
  slideFive.addEventListener("mouseleave", function () {
    titleFour.style.color = "#ffff";
    titleFourSvg.style.opacity = 0;
  });
}

sliderTextAnimation();

function sliderAnimation() {
  let lastSlide = document.querySelector(".slide6");
  let distanceToScroll = lastSlide.offsetLeft - lastSlide.offsetWidth;

  gsap.to(".wrapper", {
    x: -distanceToScroll,
    duration: 5,
    scrollTrigger: {
      trigger: ".row2",
      scroller: ".main",
      start: "top 28%", // Adjust start position as needed
      end: "top -200%", // Adjust start position as needed
      // Adjust end position as needed
      scrub: 3, // Set the scrub value for a smoother animation
      pin: ".page5",
    },
  });
}
sliderAnimation();
