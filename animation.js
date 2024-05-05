
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


let tl = gsap.timeline();
tl.from(".nav",{
    opacity:0,
    duration:0.5,
  delay:0.5,
  stagger:0.1
},"a")
tl.from(".nav .l a,.nav .m img,.nav .r a",{
  y:"-150%",
  duration:0.5,
  delay:0.5,
  stagger:0.1
},"a")
tl.from(".part1,.part2",{
    opacity:0,
    scale:1.2,
    duration:0.5,
  delay:0.5,
  stagger:0.1
},"a")



tl.from(".page2",{
    scale:1.1,
    // opacity:0,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:".page2",
        scroller:"#main",
        // markers:true,
        scrub:true,
        // start:"top 80%",
    }
})
tl.from(".page3 .exp ",{
  // scale:1.1,
  x:"120",
  opacity:0,
  duration:0.5,
  stagger:0.5,
  scrollTrigger:{
      trigger:".page3 .exp",
      scroller:"#main",
      // markers:true,
      scrub:true,
      // start:"top 80%",
  }
})
tl.from(".page4 .port .box1 ",{
  scale:1.2,
  duration:0.5,
  stagger:0.5,
  scrollTrigger:{
      trigger:".page4 .port .box1",
      scroller:"#main",
      // markers:true,
      scrub:true,
  }
})
tl.from(".page6",{
  scale:0,
  duration:0.5,
  stagger:0.5,
  scrollTrigger:{
      trigger:".page6",
      scroller:"#main",
      // markers:true,
      scrub:true,
  }
},"a")

tl.from(".page8",{
  opacity:0.8,
  duration:0.5,
  stagger:0.5,
  scrollTrigger:{
      trigger:".page8",
      scroller:"#main",
      // markers:true,
      scrub:true,
  }

},"a")
