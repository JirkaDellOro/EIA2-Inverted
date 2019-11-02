"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Asteroids.crc2 = canvas.getContext("2d");
        L09_Asteroids.createPaths();
        let asteroid = new L09_Asteroids.Asteroid(1);
        asteroid.position.x = 100;
        asteroid.position.y = 100;
        asteroid.draw();
        let asteroid1 = new L09_Asteroids.Asteroid(0.5);
        asteroid1.position.x = 200;
        asteroid1.position.y = 100;
        asteroid1.draw();
        let asteroid2 = new L09_Asteroids.Asteroid(0.25);
        asteroid2.position.x = 300;
        asteroid2.position.y = 100;
        setInterval(update, 20);
        function update() {
            asteroid2.draw();
            asteroid2.move(0.02);
        }
        // crc2.translate(0.5, 0.5);
        // // crc2.scale(5, 1);
        // for (let path of asteroidPaths) {
        //     // crc2.lineWidth = 1/5;
        //     crc2.stroke(path);
        //     crc2.translate(100, 0);
        // }
        // crc2.stroke(ufoPath);
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Main.js.map