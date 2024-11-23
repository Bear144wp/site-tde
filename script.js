// Função para aumentar e diminuir a fonte
const increaseFontButton = document.getElementById("increase-font");
const decreaseFontButton = document.getElementById("decrease-font");
const body = document.body;

increaseFontButton.addEventListener("click", () => {
    let currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
    body.style.fontSize = (currentFontSize * 1.1) + "px";
});

decreaseFontButton.addEventListener("click", () => {
    let currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
    body.style.fontSize = (currentFontSize / 1.1) + "px";
});
