/* BANNER */
// construction banner html reference variables
const constructionBanner = document.getElementById('hbanner');
const constructionButton = document.getElementById('hbutton');

// construction warning labels disappears on X button click.
constructionButton.addEventListener('click', function () {
	// remove the button from the DOM
	constructionBanner.style.display = 'none';
});

/* CONTACT FORM */
window.onload = function () {
	const urlParams = new URLSearchParams(window.location.search);
	const success = document.querySelector('#contact-us-form .form-success-message');

	if (urlParams.has('success') && urlParams.get('success') === 'true') {
		success.classList.remove('hidden');
	}
};

/* MODAL */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay-la');
const openModalBtn = document.querySelector('.btn-la');
const closeModalBtn = document.querySelector('.btn-close');

// Function for opening the modal
const openModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};
// Event listener for opening the modal when the button is clicked
openModalBtn.addEventListener('click', openModal);

// Function for closing the modal
const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

// Event listeners for clicking the close button, clicking the overlay, or pressing Esc key
closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
