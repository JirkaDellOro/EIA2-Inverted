"use strict";
var L03_FormElements;
(function (L03_FormElements) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.querySelectorAll("fieldset");
        // Install listeners on fieldsets
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);
        // Handling checkbox
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);
        // Slider response
        if (target.name == "Slider") {
            let progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        // Meter response
        if (target.name == "Stepper") {
            let meter = document.querySelector("meter");
            meter.value = parseFloat(target.value);
        }
        // Color response
        if (target.name == "Color") {
            let ouput = document.querySelector("output");
            ouput.value = target.value;
        }
    }
})(L03_FormElements || (L03_FormElements = {}));
//# sourceMappingURL=FormElements.js.map