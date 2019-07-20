namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Init");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);

        displayOrder();
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder(): void {
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

        console.group("Order");
        for (let entry of formData) {
            console.log(entry);
            let element: HTMLInputElement = <HTMLInputElement>document.getElementsByName(entry[0])[0];

            displayOrderRow(order, entry[1].toString());
            console.log(element);
        }
        console.groupEnd();
    }

    function displayOrderRow(_element: HTMLElement, _item: string, _price?: number): void {
        _element.innerHTML += _item + "<br>";
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}