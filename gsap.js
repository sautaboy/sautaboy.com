const tl = gsap.timeline()
tl.to("#loading-screen", {
    opacity: 1,
    backgroundColor: "#fff"
}).from("#loading-screen img", {
    opacity: 0,
    duration: 1,
    scale: 0,
    rotate: 360,
    ease: "power2.out"
}).to("#loading-screen", {
    opacity: 0,
    scale: 20,
    y: "-100%",
    duration: 2,
    backgroundColor: "transparent",
    ease: "power2.inOut",
    onComplete: () => {
        gsap.set("#loading-screen", { display: "none" });
    },
}).to("header,main,footer", {
    opacity: 1,
    ease: "power2.out"
})




document.querySelector("#whole").addEventListener("mousemove", (dets) => {
    gsap.to("#curser", {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})


document.querySelectorAll("img").forEach((each) => {
    each.addEventListener
        ("mouseenter", (dets) => {
            gsap.to("#curser", {
                x: dets.x,
                y: dets.y,
                scale: 3,
                duration: 1,
                backgroundColor: "red",
                ease: "back.out"
            })
        })
})
document.querySelectorAll("img").forEach((each) => {
    each.addEventListener
        ("mouseleave", (dets) => {
            gsap.to("#curser", {
                x: dets.x,
                y: dets.y,
                scale: 1,
                duration: 1,
                backgroundColor: "green",
                ease: "back.out"
            })
        })
})



gsap.to("#sliding-gallery img", {
    transform: "translateX(-270%)",
    scrollTrigger: {
        trigger: "#sliding-gallery",
        scroller: "body",
        start: "top 0%",
        end: "top -30%",
        scrub: 2,
        pin: true,
    }
})
