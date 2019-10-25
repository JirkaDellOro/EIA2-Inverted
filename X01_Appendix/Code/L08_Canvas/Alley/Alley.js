"use strict";
var L08_Canvas_Alley;
(function (L08_Canvas_Alley) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        let posStreet = { x: crc2.canvas.width / 2, y: horizon };
        let posTreesStart = { x: crc2.canvas.width * 0.42, y: horizon };
        let posTreesEnd = { x: 0, y: crc2.canvas.height };
        drawBackground();
        drawSun({ x: 100, y: 80 });
        drawCloud({ x: 560, y: 100 }, { x: 200, y: 40 });
        drawMountains(posMountains, 80, 200, "grey", "white");
        drawMountains(posMountains, 60, 170, "grey", "lightgrey");
        drawStreet(posStreet);
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
    }
    function drawTrees(_nTrees, _posStart, _posEnd, _minScale, _stepPos, _stepScale) {
        let transform = crc2.getTransform();
        let step = {
            x: (_posEnd.x - _posStart.x) * _stepPos,
            y: (_posEnd.y - _posStart.y) * _stepPos
        };
        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);
        do {
            drawTree();
            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);
        } while (--_nTrees > 0);
        crc2.setTransform(transform);
    }
    function drawTree() {
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -200);
        crc2.save();
        crc2.translate(0, -120);
        do {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);
            let colorAngle = 120 - Math.random() * 60;
            let color = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";
            crc2.fillStyle = color;
            crc2.fill(branch);
            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 40;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 95%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        let path = new Path2D;
        path.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.fill(path);
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < nParticles; drawn++) {
            let x = (Math.random() - 0.5) * _size.x;
            let y = -Math.random() * _size.y;
            crc2.save();
            crc2.translate(x, y);
            crc2.fillStyle = gradient;
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawStreet(_position) {
        let fragment = crc2.canvas.width / 8;
        crc2.beginPath();
        crc2.moveTo(_position.x + fragment / 2, _position.y);
        crc2.lineTo(crc2.canvas.width - fragment, crc2.canvas.height);
        crc2.lineTo(0 + fragment, crc2.canvas.height);
        crc2.lineTo(_position.x - fragment / 2, _position.y);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkgrey");
        gradient.addColorStop(0.6, "black ");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
})(L08_Canvas_Alley || (L08_Canvas_Alley = {}));
//# sourceMappingURL=Alley.js.map