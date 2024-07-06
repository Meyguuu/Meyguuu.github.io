// INDEX

function handleClick() {
    window.location.href = "verification.html";
}

// VERIFICATION

function validateForm(event) {
    event.preventDefault(); 

    const monthLetter1 = document.getElementById("monthLetter1").value.toUpperCase();
    const monthLetter2 = document.getElementById("monthLetter2").value.toUpperCase();
    const monthLetter3 = document.getElementById("monthLetter3").value.toUpperCase();
    const monthLetter4 = document.getElementById("monthLetter4").value.toUpperCase();
    const monthLetter5 = document.getElementById("monthLetter5").value.toUpperCase();
    const monthLetter6 = document.getElementById("monthLetter6").value.toUpperCase();
    const monthLetter7 = document.getElementById("monthLetter7").value.toUpperCase();
    const monthLetter8 = document.getElementById("monthLetter8").value.toUpperCase();
    const monthLetter9 = document.getElementById("monthLetter9").value.toUpperCase();
    

    const month = monthLetter1 + monthLetter2 + monthLetter3 + monthLetter4 + monthLetter5 + monthLetter6 + monthLetter7 + monthLetter8 + monthLetter9;

    const vsecAss = document.getElementById("ver-questionIn2").value;


    const year = document.getElementById("year").value;
    
    if (month === "APRIL" && vsecAss === "11000" && year === "2001") {
        window.location.href = "Graduation.html";
    } else {
        console.log("Engkkkks!!!");
    }
}

// TEXT ANIMATION
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", (event) => {

  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });


  function createScrollTrigger(triggerElement, timeline) {

    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });

    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play(),
    });
  }

  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.6,
      ease: "back.out(2)",
      stagger: { amount: 0.5 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-fade-in]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      stagger: { amount: 0.8 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[words-slide-from-right]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      x: "1em",
      duration: 0.8,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-fade-in-random]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      opacity: 0,
      duration: 0.05,
      ease: "power1.out",
      stagger: { amount: 0.4, from: "random" },
    });
    createScrollTrigger($(this), tl);
  });

  $("[scrub-each-word]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 90%",
        end: "top center",
        scrub: true,
      },
    });
    tl.from($(this).find(".word"), {
      opacity: 0.2,
      duration: 0.2,
      ease: "power1.out",
      stagger: { each: 0.4 },
    });
  });

  gsap.set("[text-split]", { opacity: 1 });
});

