const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener('click', () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
  }
}) 