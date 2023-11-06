var profileImg = document.getElementById("profileImg");
var dropdownContent = document.getElementById("dropdownContent");

// toggle the dropdown menu when clicking the profile picture
profileImg.addEventListener("click", function() {
    // if dropdownContent is already visible then set none --> will not be visible
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        // if dropdownContent is not visible when clicking profile img then set block --> will be visible
        dropdownContent.style.display = "block";
    }
});

// close the dropdown when clicking anywhere outside of it
window.addEventListener("click", function(event) {
    // if clicked element is not profileImg or dropdownContent, then set dropdown display none --> will not be visible
    if (event.target != profileImg && event.target != dropdownContent) {
        dropdownContent.style.display = "none";
    }
});