namespace L05_CocktailBar {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;

    async function handleLoad(_event: Event): Promise<void> {
        console.log("Init");

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);

        form = <HTMLFormElement>document.querySelector("form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        console.log(submit);

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);

        displayOrder();
    }

    async function sendOrder(_event: Event): Promise<void> {
        console.log("Send order");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index.html?" + query.toString());
        alert("Order sent!");
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder(): void {
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(form);

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount: number = Number(formData.get("Amount"));
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


    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}