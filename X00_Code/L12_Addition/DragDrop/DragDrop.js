"use strict";
var L12_DragDrop;
(function (L12_DragDrop) {
    window.addEventListener("load", hndLoad);
    let drag;
    function hndLoad(_event) {
        console.log("Start DragDrop");
        drag = document.querySelector("div#drag span");
        let picker = document.querySelector("input");
        picker.addEventListener("change", hndChange);
        initDraggable();
        initDroppables();
    }
    function hndChange(_event) {
        drag.style.backgroundColor = _event.target.value;
    }
    function initDraggable() {
        drag.draggable = true;
        drag.addEventListener("dragstart", hndDragStart);
    }
    function hndDragStart(_event) {
        if (!_event.dataTransfer)
            return;
        let color = drag.style.backgroundColor;
        _event.dataTransfer.setData("color", color);
    }
    function initDroppables() {
        let drops = document.querySelectorAll("div#drop span");
        for (let drop of drops) {
            drop.addEventListener("drop", hndDrop);
            drop.addEventListener("dragover", hndDragOver);
        }
    }
    function hndDragOver(_event) {
        _event.preventDefault();
    }
    function hndDrop(_event) {
        if (!_event.dataTransfer)
            return;
        let color = _event.dataTransfer.getData("color");
        console.log(color);
        _event.target.style.backgroundColor = color;
    }
})(L12_DragDrop || (L12_DragDrop = {}));
//# sourceMappingURL=DragDrop.js.map