const navLinks = document.querySelectorAll('.icons a');
const Logo = document.querySelector('.logo a')
const sections = document.querySelectorAll('section');
window.onscroll = () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop  - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }         

      })
    }
  })
}
const activePage = () => {
  navLinks.forEach(link => {
    link.classList.remove('active');
  })
   sections.forEach(section => {
    section.classList.remove('active');
  })
}
navLinks.forEach((link , idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active'));
    activePage();
    link.classList.add('active');

  })
})
Logo.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');
  }
});

const menuIcon = document.querySelector('.fa-bars');
const icons = document.querySelector('.icons');
menuIcon.addEventListener('click', () => {
  icons.classList.toggle('active');
  menuIcon.classList.toggle('fa-xmark');
});

let clicked = document.querySelector('body');
clicked.addEventListener('click', (e) => {
  if (!e.target.classList.contains('icons') && !e.target.classList.contains('fa-bars')) {
    icons.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
  }
});

const para = document.querySelector(".me");
  const fullText = para.innerText;
  const words = fullText.split(" ");
  const halfText = words.slice(0, 48).join(" ") + ".";

  function updateParagraph() {
    if (window.innerWidth <= 768) {
      para.innerText = halfText;
    } else {
      para.innerText = fullText;
    }
  }

  // Initial check
  updateParagraph();

  // Update on resize
  window.addEventListener("resize", updateParagraph);

  const para2 = document.querySelector(".ma");
  const fullText2 = para2.innerText;
  const words2 = fullText2.split(" ");
  const halfText2 = words2.slice(0, 33).join(" ") + ".";

  function update() {
    if (window.innerWidth <= 768) {
      para2.innerText = halfText2;
    } else {
      para2.innerText = fullText2;
    }
  }

  // Initial check
  update();

  // Update on resize
  window.addEventListener("resize", update);

