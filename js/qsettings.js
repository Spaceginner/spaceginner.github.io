currentTheme = "dark";
currentLanguage = "eng";
isQSetLangOpened = false;

function changeTheme() {
    var rv = document.querySelector(":root").style;

    if (currentTheme == "dark") {
        rv.setProperty("--mainColor", "#BFBDBE");
        rv.setProperty("--seconderyColor", "#090909");
        rv.setProperty("--linkFirstColor", "#A1A1A1");
        rv.setProperty("--buttonBackgroundColor", "#7b7b7b");
        rv.setProperty("--svgFilter", "invert(0%) sepia(0%) saturate(6161%) hue-rotate(266deg) brightness(106%) contrast(93%)");

        currentTheme = "light";
    } else {
        rv.setProperty("--mainColor", "#090909");
        rv.setProperty("--seconderyColor", "#BFBDBE");
        rv.setProperty("--linkFirstColor", "#F2E5D5");
        rv.setProperty("--buttonBackgroundColor", "#252525");
        rv.setProperty("--svgFilter", "invert(84%) sepia(5%) saturate(58%) hue-rotate(278deg) brightness(92%) contrast(87%)");

        currentTheme = "dark";
    }
}

function openQSetLangTab() {
    lss = document.getElementById("langsel").style

    if (!isQSetLangOpened) {
        lss.setProperty("visibility", "visible");
        isQSetLangOpened = true;
    } else {
        lss.setProperty("visibility", "hidden");
        isQSetLangOpened = false;
    }
}

function changeLanguage(id) {
    fetch("./lang/" + id + ".json")
        .then((response) => {
            return response.json();
        }).then((langSet) => {
            for (i in langSet.ids) {
                idText = langSet.ids[i]
                document.getElementById(idText).textContent = langSet.text[idText];
            }
        });
}

document.getElementById("qsettheme").addEventListener("click", function() {changeTheme();});
document.getElementById("qsetlang").addEventListener("click", function() {openQSetLangTab();});
document.getElementById("seleng").addEventListener("click", function() {changeLanguage("eng");});
document.getElementById("selrus").addEventListener("click", function() {changeLanguage("rus");});
document.getElementById("selukr").addEventListener("click", function() {changeLanguage("ukr");});
