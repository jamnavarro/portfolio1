function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

document.addEventListener("DOMContentLoaded", function () {
  function fadeInOnScroll() {
      document.querySelectorAll(".section").forEach((section, index) => {
          let rect = section.getBoundingClientRect();

          // Only trigger fade-in when the section is in view and doesn't already have the class
          if (rect.top < window.innerHeight - 100 && !section.classList.contains("visible")) {
              section.classList.add("visible");
          }
      });
  }

  // Fire the fade-in on page load in case sections are already in view
  fadeInOnScroll();
  
  // Fire on scroll
  window.addEventListener("scroll", fadeInOnScroll);
});
