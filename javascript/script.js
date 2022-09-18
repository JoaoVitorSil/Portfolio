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

class MobileNavbar {
  constructor(mobileMenu, nav, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.nav = document.querySelector(nav);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.nav.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav",
  ".nav a",
);
mobileNavbar.init();