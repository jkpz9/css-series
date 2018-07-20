let navToggle = document.querySelector('.nav-toggle'),
    mainContent = document.querySelector('.site-container'),
    nav = document.querySelector('nav'),
    screenWidth = document.body.clientWidth,
    navWidth = (nav.offsetWidth / screenWidth) * 100

navToggle.addEventListener('click', () => toggleNav())

function toggleNav() {
    if (mainContent.classList.contains('is-open')) {
        mainContent.classList.remove('is-open')
        mainContent.style.transform = "translateX(0)";
    } else {
        mainContent.classList.add('is-open')
        navToggle = document.querySelector('.site-content');
        mainContent.style.transform = "translateX(" + navWidth + "%)";
    }
}

// let navToggle = document.querySelector(".nav-toggle"),
//   mainContent = document.querySelector(".site-container"),
//   nav = document.querySelector("nav"),
//   navWidth = nav.offsetWidth,
//   screenWidth = document.body.scrollWidth,
//   navWidthPercent = navWidth / screenWidth * 100;

// nav.style.left = -navWidthPercent + "%";

// navToggle.addEventListener("click", () => toggleNavigation());

// // TODO: make clicking on mainContent close the navigation
// //       if it is open

// function toggleNavigation() {

//   if (parseInt(nav.style.left) < 0) {
//     let counter = -navWidthPercent;
//     nav.style.left = counter + "%";
//     mainContent.left = 0 + "%";

//     function slideIn() {
//       counter += 5;
//       if (counter >= 0) {
//         nav.style.left = 0;
//         mainContent.style.left = navWidthPercent + "%";
//         return true;
//       }
//       nav.style.left = counter + "%";
//       mainContent.style.left = counter + navWidthPercent + "%";
//       requestAnimationFrame(slideIn);
//     }
//     slideIn();

//   } else {
//     counter = 0;

//     function slideOut() {
//       counter -= 4;
//       if (counter <= -navWidthPercent) {
//         nav.style.left = -navWidthPercent + "%";
//         mainContent.style.left = 0;
//         return true;
//       }
//       nav.style.left = counter + "%";
//       mainContent.style.left = counter + navWidthPercent + "%";
//       requestAnimationFrame(slideOut);
//     }
//     slideOut();
//   }
// };