"use strict";
var L06_CocktailBar;
(function (L06_CocktailBar) {
    window.addEventListener("load", handleLoad);
    // const url: string = "index.html";
    const url = "localhost:8100";
    async function handleLoad(_event) {
        console.log("Init");
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L06_CocktailBar.generateContent(data);
         let form = document.querySelector("form");
        let mytext = document.querySelector("input#mytext");
        let slider = document.querySelector("input#amount");
        let eyecolor = document.querySelector("input#eyecolor");
        let haircolor = document.querySelector("input#haircolor");
        let clothcolor = document.querySelector("input#clothcolor");
        let slider2 = document.querySelector("input#weight");
        let submit = document.querySelector("button[type=button]");
        console.log(submit);
        submit.addEventListener("click", sendOrder);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        displayOrder();
    }
    async function sendOrder(_event) {
        return; // for testing
        console.log("SendOrder");
        // _event.preventDefault();
        let formData = new FormData(document.querySelector("form"));
        let query = new URLSearchParams(formData);
        await fetch(url + "?" + query.toString());
        alert("Order sent!");
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.querySelector("form"));
        // console.group("Order");
        for (let entry of formData) {
            // console.log(entry);
            let selector = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price"));
              switch (entry[0]) {
                case "Amount":
                        let amount = Number(formData.get("Amount"));
                        order.innerHTML += amount + " " + "Meter" + "<br>";
                break;
                case "Weight":
                        let weight = Number(formData.get("Weight"));
                        order.innerHTML += weight + " " + "Kg" + "<br>";
                break;
                case "Eyecolor":
                        let eyecolor = String(formData.get("Eyecolor"));
                        order.innerHTML += eyecolor + "<br>";
                break;
                case "Haircolor":
                        let haircolor = String(formData.get("Haircolor"));
                        order.innerHTML += haircolor + "<br>";
                break;
                case "Clothcolor":
                        let clothcolor = String(formData.get("Clothcolor"));
                        order.innerHTML += clothcolor + "<br>";
                break;
                case "Mytext":
                        let mytext = String(formData.get("Mytext"));
                        order.innerHTML += mytext + "<br>";
                break;
               
                default:
                    order.innerHTML += item.value + "" + "<br>";
            }
            // console.log(item);
            price += itemPrice;
        }
        // console.groupEnd();
        order.innerHTML += "<p><strong>Total: €" + price.toFixed(2);
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L06_CocktailBar || (L06_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map