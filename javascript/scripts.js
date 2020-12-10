/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function showHideNavMenu() {
    var menu = document.getElementById("menu");
    if (window.getComputedStyle(menu).display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


