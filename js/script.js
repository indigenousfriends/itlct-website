// construction banner html reference variables

const constructionBanner = document.getElementById('hbanner');

const constructionButton = document.getElementById('hbutton');

// construction warning labels disappears on X button click.

constructionButton.addEventListener('click', function () {
	// remove the button from the DOM
	constructionBanner.style.display = 'none';
});

// Form handling
window.onload = function () {
	const urlParams = new URLSearchParams(window.location.search);
	const success = document.querySelector('#contact-us-form .form-success-message');

	if (urlParams.has('success') && urlParams.get('success') === 'true') {
		success.classList.remove('hidden');
	}
};
