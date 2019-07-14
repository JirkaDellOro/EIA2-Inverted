"use strict";
var L02_BlackmailCompanion;
(function (L02_BlackmailCompanion) {
    let chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mail = document.querySelector("#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }
    function placeLetter(_event) {
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        let letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.top = y + "px";
        letter.style.left = x + "px";
        letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_BlackmailCompanion || (L02_BlackmailCompanion = {}));
//# sourceMappingURL=BlackmailCompanion.js.map