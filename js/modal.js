const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay-la");
const openModalBtn = document.querySelector(".btn-la");
const closeModalBtn = document.querySelector(".btn-close");

// Function for opening the modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Event listener for opening the modal when the button is clicked
openModalBtn.addEventListener("click", openModal);

// Function for closing the modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Event listeners for clicking the close button, clicking the overlay, or pressing Esc key
closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});