"use strict";
var L04_CocktailBar;
(function (L04_CocktailBar) {
    function generateDynamicContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
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
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group) {
                fieldset.append(group);
            }
        }
    }
    L04_CocktailBar.generateDynamicContent = generateDynamicContent;
    function createSelect(_category, _items) {
        let result = document.createElement("select");
        return result;
    }
    function createMulti(_category, _items) {
        let result = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = checkbox.id = item.name;
            checkbox.setAttribute("price", item.price.toString());
            checkbox.name = _category;
            let label = document.createElement("label");
            label.htmlFor = label.textContent = item.name;
            result.appendChild(checkbox);
            result.appendChild(label);
        }
        return result;
    }
    function createSingle(_category, _items) {
        let result = document.createElement("div");
        return result;
    }
})(L04_CocktailBar || (L04_CocktailBar = {}));
//# sourceMappingURL=Setup.js.map