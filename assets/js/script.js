'use strict'

// add Event on multiple elements

const addEventOnElements = function (elements, eventType, callBack) {
      for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener(eventType, callBack);
      }
}

// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
      loadingElement.classList.add("loaded");
      this.document.body.classList.remove("active");
});


// MOBILE NAV TOGGLE

const [navTogglers, navLinks, navbar, overlay] = [
      document.querySelectorAll("[data-nav-toggler]"),
      document.querySelectorAll("[data-nav-link]"),
      document.querySelector("[data-navbar]"),
      document.querySelector("[data-overlay]")
];

const toggleNav = function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav)

// HEADER

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
      if (window.scrollY > 50) {
            header.classList.add("active");
      } else {
            header.classList.remove("active");
      }
}

window.addEventListener("scroll", activeElementOnScroll);



/*
!     TEXT ANIMATION EFFECT FOR HERO SECTION
*/

const letterBoxes = document.querySelectorAll("[data-letter-effect]");
const heroSlides = document.querySelectorAll("[data-hero-slide]");
const heroDots = document.querySelectorAll("[data-hero-dot]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setActiveHeroSlide = function (index) {
      if (!heroSlides.length) return;

      const activeSlideIndex = index % heroSlides.length;

      for (let i = 0; i < heroSlides.length; i++) {
            const isActive = i === activeSlideIndex;
            heroSlides[i].classList.toggle("active", isActive);

            if (heroDots[i]) {
                  heroDots[i].classList.toggle("active", isActive);
            }
      }
}

const setLetterEffect = function () {
      setActiveHeroSlide(activeLetterBoxIndex);

      // loop through all letter boxes
      for (let i = 0; i < letterBoxes.length; i++) {
            // set Initial animation delay
            let letterAnimationDelay = 0;

            // Get all character from the current letter box
            const letters = letterBoxes[i].textContent.trim();
            // remove all character from the current letter box
            letterBoxes[i].textContent = "";

            // loop through all letters
            for (let j = 0; j < letters.length; j++) {

                  // create a span 
                  const span =  document.createElement("span");

                  // set animation delay on span
                  span.style.animationDelay = `${letterAnimationDelay}s`;

                  // set the "in" class on the span, if current letter box is active
                  // otherwise class is "out" 
                  if (i === activeLetterBoxIndex) {
                        span.classList.add("in");
                  } else {
                        span.classList.add("out");
                  }

                  // pass current letter into span
                  span.textContent = letters[j];

                  // add space class in span, when current letter contain space
                  if (letters[j] == " ") {
                        span.classList.add("space");
                  }

                  // pass the span on current letter box
                  letterBoxes[i].appendChild(span);

                  // skip letterAnimationDelay when loop is in the last index
                  if (j >= letters.length - 1) {
                        break;
                  } 

                  // otherwise update
                  letterAnimationDelay += 0.05;

            }

            // get total delay of active of active letter box
            if (i === activeLetterBoxIndex) {
                  totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
            }

            // add active class on last active letter box
            if (i == lastActiveLetterBoxIndex) {
                  letterBoxes[i].classList.add("active");
            } else {
                  letterBoxes[i].classList.remove("active");
            }

      }

      setTimeout( function () {
            lastActiveLetterBoxIndex = activeLetterBoxIndex;

            // update activeLetterBoxIndex boxed on total letter boxes
            activeLetterBoxIndex >= letterBoxes.length - 1 ? activeLetterBoxIndex = 0 : activeLetterBoxIndex++;

            setLetterEffect();

      }, (totalLetterBoxDelay * 1000) + 3000);

}

// call the letter effect function after window loaded
window.addEventListener("load", setLetterEffect);




/*
! BACK TO TOP
*/

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
      const bodyHeight = this.document.body.scrollHeight;
      const windowHeight = this.window.innerHeight;
      const scrollEndPos = bodyHeight - windowHeight;
      const totalScrollPercent = (this.window.scrollY / scrollEndPos) * 100;

      backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`;

      // visible back top btn when scrolled 5% of the page
      if (totalScrollPercent > 5) {
            backTopBtn.classList.add("show");
      } else {
            backTopBtn.classList.remove("show");
      }
});





/*
! SCROLL REVEAL
*/

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
      for (let i = 0; i < revealElements.length; i++) {
            const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;

            if (elementIsInScreen) {
                  revealElements[i].classList.add("revealed");
            } else {
                  revealElements[i].classList.remove("revealed");
            }
      }
}

window.addEventListener("scroll", scrollReveal);

scrollReveal();



