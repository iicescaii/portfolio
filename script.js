// typing js
var typed = new Typed("#element", {
  strings: ["Computer Science Student", "Aspiring Full Stack Developer"],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; // Adjust for navbar height
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*='" + id + "']")
          .classList.add("active");
      });
    }
  });
};

// Smooth scroll for section links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const targetSection = document.getElementById(id);

    let navHeight = document.querySelector("header").offsetHeight; // Adjust for your header's height
    let position = targetSection.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });

    // Close the menu when a link is clicked
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
