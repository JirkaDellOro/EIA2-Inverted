"use strict";
var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    console.log("Start");
    let chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }
    function placeLetter(_event) {
        // console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        let letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        // console.log(_event);
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
//# sourceMappingURL=BlackmailerCompanion.js.map