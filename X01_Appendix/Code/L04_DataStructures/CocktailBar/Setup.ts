namespace L04_CocktailBar {
    export function generateDynamicContent(_data: Data): void {
        for (let category in _data) {
            let items: Item[] = _data[category];
            let group: HTMLElement | null = null;
            switch (category) {
                case "Drink":
                    group = createSelect(category, items);
                    break;
                case "Extras":
                    group = createMulti(category, items);
                    break;
                case "Container":
                    group = createSingle(category, items);
                    break;
                default:
                    break;
            }

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group) {
                fieldset.append(group);
            }
        }
    }

    function createSelect(_category: string, _items: Item[]): HTMLSelectElement {
        let result: HTMLSelectElement = document.createElement("select");
        return result;
    }
    function createMulti(_category: string, _items: Item[]): HTMLDivElement {
        let result: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = checkbox.id = item.name;
            checkbox.setAttribute("price", item.price.toString());
            checkbox.name = _category;

            let label: HTMLLabelElement = document.createElement("label");
            label.htmlFor = label.textContent = item.name;

            result.appendChild(checkbox);
            result.appendChild(label);
        }
        return result;
    }
    function createSingle(_category: string, _items: Item[]): HTMLDivElement {
        let result: HTMLDivElement = document.createElement("div");
        return result;
    }
}