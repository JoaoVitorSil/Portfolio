const sections = document.querySelectorAll("section");
const navlink = document.querySelectorAll(".nav a");
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let current = "";

  if(scrollY > 70)
    nav.classList.add("scroll");
  else 
    nav.classList.remove("scroll");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navlink.forEach((a) => {
      a.classList.remove("active");
      if (a.classList.contains(current)) {
        a.classList.add("active");
      }
    });
});
