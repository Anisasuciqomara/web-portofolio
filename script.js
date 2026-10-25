// ===== Menu hamburger =====
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// Tutup menu saat link diklik
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  });
});

// ===== Link menu ikut menyala sesuai section + header sticky =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((sec) => {
    const top = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((l) => l.classList.remove("active"));
      const current = document.querySelector(`nav a[href="#${sec.id}"]`);
      if (current) current.classList.add("active");
    }
  });

  header.classList.toggle("sticky", scrollY > 50);
});

// ===== Animasi muncul saat scroll =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== Efek mengetik =====
new Typed(".typing-text", {
  strings: [
    "I'm a Data Science Enthusiast",
    "I'm a freelance",
    "I'm a photography enthusiast",
  ],
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 1200,
  loop: true,
});
