"use strict";
var L06_CocktailBar;
(function (L06_CocktailBar) {
    window.addEventListener("load", handleLoad);
    let form;
    // let url: string = "index.html";
    let url = "http://localhost:5001";
    async function handleLoad(_event) {
        console.log("Init");
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L06_CocktailBar.generateContent(data);
        form = document.querySelector("form");
        let slider = document.querySelector("input#amount");
        let submit = document.querySelector("button[type=button]");
        console.log(submit);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        displayOrder();
    }
    async function sendOrder(_event) {
        console.log("Send order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(form);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + ": €" + itemPrice + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
        }
        order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L06_CocktailBar || (L06_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map