// construction banner html reference variables

const constructionBanner = document.getElementById('hbanner');

const constructionButton = document.getElementById('hbutton');

// construction warning labels disappears on X button click.

constructionButton.addEventListener("click", function () {
    // remove the button from the DOM
    constructionBanner.style.display = "none";
});






