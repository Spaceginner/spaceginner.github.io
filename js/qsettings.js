currentTheme = "dark"

function changeTheme() {
    var rv = document.querySelector(":root").style;

    if (currentTheme == "dark") {
        rv.setProperty("--mainColor", "#BFBDBE");
        rv.setProperty("--seconderyColor", "#090909");
        rv.setProperty("--linkFirstColor", "#A1A1A1")
        rv.setProperty("--buttonBackgroundColor", "#7b7b7b")

        currentTheme = "light"
    }
}

document.getElementById("qsettheme").addEventListener("click", function() {changeTheme();});
