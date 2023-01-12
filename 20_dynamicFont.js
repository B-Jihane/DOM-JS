let fontsize = document.getElementById("fontsize");

function updateFontSize() {
    let elements = document.getElementsByClassName("controlled_fontsize");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = fontsize.value + "px";
    }
};

fontsize.addEventListener("input", updateFontSize);