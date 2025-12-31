
function openModal(src) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");

    modal.style.display = "flex";
    modalImg.src = src;
  }

  function closeModal() {
    document.getElementById("image-modal").style.display = "none";
  }
  
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
  
  window.addEventListener("scroll", () => {
    localStorage.setItem("scrollPosition", window.scrollY);
  });

  window.addEventListener("load", () => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      nav.classList.remove("active");
    }
  });
});

function openModal(src) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
}
  