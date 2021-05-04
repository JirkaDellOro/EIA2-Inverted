"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", start);
    let crc2;
    function start(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawTriangle();
        crc2.save();
        crc2.translate(400, 100);
        crc2.rotate(Math.PI * 90 / 180);
        drawTriangle();
        crc2.restore();
    }
    function drawTriangle() {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 300);
        crc2.lineTo(300, 300);
        crc2.closePath();
        crc2.stroke();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map