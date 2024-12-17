const btn = document.querySelector("#open_btn");
const modalContainer = document.querySelector("#modal_container");
const closeBtn = document.querySelector("#close_btn");

btn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
