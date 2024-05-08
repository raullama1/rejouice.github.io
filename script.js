function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()

function loader() {
    var tl = gsap.timeline()
    tl.from("#loader h3",{
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })
    tl.to("#loader h3", {
        opacity: 0,
        x:-10,
        duration: 1,
        stagger: 0.1
    })
    tl.to("#loader", {
        opacity: 0,
    })
    tl.from("#page1-content h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: -0.5
    })
    tl.to("#loader", {
        display: "none"
    })
}
loader()

function cursorEffect(){
    var page1Content = document.querySelector("#page1-content");

    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function(dets){
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            // delay: .1,
        });
    });

// scale 0 = it will be so small can't be seen 
    page1Content.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale:1,
        })
    });

    page1Content.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 0
        })
    });
}
cursorEffect()

//pop up text
function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2, // by this the text will come 1 by 1.
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 70%",
            end: "top 46%",
            // markers: true,
            scrub:2
        }
    })
    gsap.from(".elem h4", {
        y: 50,// move downwards by 120px.
        stagger: 0.2, // by this the text will come 1 by 1.
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 78%",
            end: "top 95%",
            // markers: true,
            scrub:2
        }
    }) 
    gsap.from(".elem h3", {
        y: 50,// move downwards by 120px.
        stagger: 0.2, // by this the text will come 1 by 1.
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 77%",
            end: "top 95%",
            // markers: true,
            scrub:2
        }
    }) 
}
page2Animation()

function page3Animation() {
    gsap.from("#page3-top h2", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 95%",
            end: "top 80%",
            // markers: true, 
            scrub: 2
        }
    })
}
page3Animation()

// Function to handle video playback
function handleVideoPlayback(videoElement) {
    // Play the video when mouse enters
    videoElement.addEventListener('mouseenter', function() {
        videoElement.play();
    });

    // Pause the video when mouse leaves
    videoElement.addEventListener('mouseleave', function() {
        videoElement.pause();
        // Reset the video to the beginning
        videoElement.currentTime = 0;
    });
}

// Call the function for each video element
var videos = document.querySelectorAll('video');
videos.forEach(function(video) {
    handleVideoPlayback(video);
});


function page4Animation() {
    gsap.from(".page4-elem h4", {
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 75%",
            end: "top 59%",
            // markers: true,
            scrub: 2
        }
    });

    gsap.from(".page4-elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 60%",
            end: "top 30%",
            // markers: true, 
            scrub: 2
        }
    });
}
page4Animation();

function cursorEffect5(){
    var page5 = document.querySelector("#page5");

    var cursor5 = document.querySelector("#cursor5");

    page5.addEventListener("mousemove", function(dets){
        gsap.to(cursor5, {
            x: dets.x,
            y: dets.y,
            // delay: .1,
        });
    });

// scale 0 = it will be so small can't be seen 
    page5.addEventListener("mouseenter", function(){
        gsap.to(cursor5, {
            scale:1,
        })
    });

    page5.addEventListener("mouseleave", function(){
        gsap.to(cursor5, {
            scale: 0
        })
    });
}
cursorEffect5()

function page6Animation() {
    gsap.from(".page6-elem h4", {
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 95%",
            end: "top 83%",
            // markers: true,
            scrub:2
        }
    });

    gsap.from(".page6-elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 85%",
            end: "top 55%",
            // markers: true,
            scrub: 2
        }
    })
}
page6Animation();

function swiperJs() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 15,
        speed: 10000,
        loop: true,
        autoplay: {
          delay: 1,
          duration: 1,
          disableOnInteraction: false,
        },
      });
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
}
swiperJs()

function page7Animation() {
    gsap.from("#page7-top h1",{
        y: 90,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 60%",
            end: "top 45%",
            // markers: true,
            scrub: 2
        }
    })
}

page7Animation()

function page8Animation() {
    gsap.from("#page8-top h2", {
        y: 120,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page8",
            scroller: "#main",
            start: "top 93%",
            end: "top 65%",
            scrub: 2,
            // markers: true
        }
    })
}
page8Animation()

function footerAnimation() {
    gsap.from("#footer-top", {
        y:-160,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 90%",
            end: "top 30%",
            // markers: true,
            scrub: 2
        },
    })

    gsap.from("#footer-bottom-top",{
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: .2,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 70%",
            end: "top 1%",
            // markers: true,
            scrub: 2
        }
    })

    gsap.from("#fbottom h1 span",{
        y: 180,
        opacity: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#footer-bottom-top",
            scroller: "#main",
            start: "top 65%",
            end: "top 30%",
            // markers: true,
            scrub: 2
        }
    })
}
footerAnimation()


