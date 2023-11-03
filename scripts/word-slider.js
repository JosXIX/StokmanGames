const textElement = document.getElementById('index-header-word-slider-text');
const indexHeaderText = [
"Tauche hinein in eine Welt, um die echte Welt um dich herum zu vergessen.",
"Spiele auf deine eingen Art und Weise und in deiner Geschwindigkeit.",
"Eigenerstellte Mods für beliebte Spiele immer und aktuell."];
let currentIndex = 0;

function changeText() {
    textElement.textContent = indexHeaderText[currentIndex];
    currentIndex = (currentIndex + 1) % indexHeaderText.length;
}

changeText();
setInterval(changeText, 8000);