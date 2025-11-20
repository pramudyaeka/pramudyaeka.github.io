document.addEventListener("DOMContentLoaded", function () {
  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("text-black");
      navbar.classList.remove("text-white");
    } else {
      navbar.classList.add("text-white");
      navbar.classList.remove("text-black");
    }
  });

  // ===== POPUP NAME =====
  const savedName = localStorage.getItem("username");
  const popup = document.getElementById("popup");
  const content = document.getElementById("content");
  const displayName = document.getElementById("displayName");

  if (!savedName) {
    popup.classList.remove("hidden");
    content.classList.add("blur-sm");
  } else {
    displayName.textContent = savedName;
  }

  document.getElementById("saveNameBtn").addEventListener("click", () => {
    const name = document.getElementById("username").value.trim();
    if (name === "") return alert("Nama tidak boleh kosong!");
    localStorage.setItem("username", name);
    displayName.textContent = name;
    popup.classList.add("hidden");
    content.classList.remove("blur-sm");
  });

  // ===== CONTACT FORM MODAL =====
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const gender = document.getElementById("gender").value;
    const pesan = document.getElementById("pesan").value;
    const modal = document.getElementById("messageModal");
    const modalContent = document.getElementById("modalContent");
    modalContent.textContent = `Nama: ${nama}\nTanggal Lahir: ${tanggal}\nJenis Kelamin: ${gender}\nPesan: ${pesan}`;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });

  document.getElementById("closeModal").addEventListener("click", function () {
    const modal = document.getElementById("messageModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  // ===== MOBILE MENU =====
  const menuBtn = document.getElementById("menuBtn");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () =>
    mobileMenu.classList.remove("translate-x-full")
  );
  closeMenu.addEventListener("click", () =>
    mobileMenu.classList.add("translate-x-full")
  );
  document.querySelectorAll("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", () =>
      mobileMenu.classList.add("translate-x-full")
    );
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
// ===== HOME IMAGE RESPONSIVE ZOOM =====
//   const homeImg = document.querySelector("#home img");
//   function adjustHomeImage() {
//     const width = window.innerWidth;
//     if (width < 640) {
//       // mobile
//       homeImg.style.transform = "scale(1.3)";
//     } else if (width < 1024) {
//       // tablet
//       homeImg.style.transform = "scale(1.15)";
//     } else {
//       // desktop
//       homeImg.style.transform = "scale(1.0)";
//     }
//   }
//   adjustHomeImage();
//   window.addEventListener("resize", adjustHomeImage);
// });
