document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

  if (!modal) return;

  document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
