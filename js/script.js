// construction banner html reference variables

const constructionBanner = document.getElementById('hbanner');

const constructionButton = document.getElementById('hbutton');

// construction warning labels disappears on X button click.

constructionButton.addEventListener("click", function () {
    // remove the button from the DOM
    constructionBanner.style.display = "none";
});

// Form handling
window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success') && urlParams.get('success') === 'true') {
    console.log('Message sent successfully');
    }
}