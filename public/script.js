// Nav Bar
const hamburgerButton = document.getElementsByClassName("hamburger-button");
const navLinks = document.getElementsByClassName("nav-links")[0];

function navBarButton() {
  hamburgerButton.addEventListener("click", () => {
    console.log("listening");
    navLinks.classList.toggle("active");
  });
}

// Slide Animation
const content = document.querySelectorAll(".content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.4,
  }
);

content.forEach((contents) => {
  observer.observe(contents);
});
