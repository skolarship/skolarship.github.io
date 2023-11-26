document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbarLinks = document.querySelector(".mobile-navbar-links");
  
    hamburger.addEventListener("click", function () {
      if (navbarLinks.style.display === "block") {
        navbarLinks.style.display = "none";
      } else {
        navbarLinks.style.display = "block";
      }
    });
  });