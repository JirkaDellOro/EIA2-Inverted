"use strict";
var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Init");
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let inputs = document.querySelectorAll("input");
        console.log(inputs);
        let formData = new FormData(document.querySelector("form"));
        console.log(formData);
        for (let whatever of formData)
            console.log(whatever);
        console.log(formData.get("Amount"));
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map