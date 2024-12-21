// Change the background color of header when scrolling
const head = document.getElementById('header');

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) { // Adjust this value as needed
      head.classList.add("scrolled-header");
    } else {
      head.classList.remove("scrolled-header");
    }
  });


// Typing in home
var typed = new Typed(".home-text",{
    strings:["Frontend Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});