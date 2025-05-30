'strict mode';
// ********** loading screen ************
//Hides the loading screen immediately after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.remove("show");
    }
  }, 1);
});

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
links.classList.toggle("show-links");
});	