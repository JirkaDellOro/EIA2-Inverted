"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let asteroidPaths;
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        asteroidPaths = createShapes(L09_Asteroids.shapes);
        console.log(asteroidPaths);
        for (let path of asteroidPaths) {
            crc2.stroke(path);
            crc2.translate(100, 0);
        }
        crc2.stroke(L09_Asteroids.ufo);
    }
    function createShapes(_shapes) {
        let paths = [];
        for (let type of _shapes) {
            let path = new Path2D();
            let first = true;
            console.group(type);
            for (let coordinates of type) {
                console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Main.js.map