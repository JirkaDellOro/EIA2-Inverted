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
        displayOrder();
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.querySelector("form"));
        console.group("Order");
        for (let entry of formData) {
            console.log(entry);
            let element = document.getElementsByName(entry[0])[0];
            displayOrderRow(order, entry[1].toString());
            console.log(element);
        }
        console.groupEnd();
    }
    function displayOrderRow(_element, _item, _price) {
        _element.innerHTML += _item + "<br>";
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map