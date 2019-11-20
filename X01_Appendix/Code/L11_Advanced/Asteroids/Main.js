"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    window.addEventListener("load", handleLoad);
    L11_AsteroidsAdvanced.linewidth = 2;
    let moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_AsteroidsAdvanced.crc2 = canvas.getContext("2d");
        L11_AsteroidsAdvanced.crc2.fillStyle = "black";
        L11_AsteroidsAdvanced.crc2.strokeStyle = "white";
        L11_AsteroidsAdvanced.crc2.lineWidth = L11_AsteroidsAdvanced.linewidth;
        L11_AsteroidsAdvanced.createPaths();
        console.log("Asteroids paths: ", L11_AsteroidsAdvanced.asteroidPaths);
        createAsteroids(5);
        // createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        console.log("Shoot projectile");
        let origin = new L11_AsteroidsAdvanced.Vector(_event.clientX - L11_AsteroidsAdvanced.crc2.canvas.offsetLeft, _event.clientY - L11_AsteroidsAdvanced.crc2.canvas.offsetTop);
        let velocity = new L11_AsteroidsAdvanced.Vector(0, 0);
        velocity.random(100, 100);
        let projectile = new L11_AsteroidsAdvanced.Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new L11_AsteroidsAdvanced.Vector(_event.clientX - L11_AsteroidsAdvanced.crc2.canvas.offsetLeft, _event.clientY - L11_AsteroidsAdvanced.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof L11_AsteroidsAdvanced.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L11_AsteroidsAdvanced.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L11_AsteroidsAdvanced.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        // console.log("Update");
        L11_AsteroidsAdvanced.crc2.fillRect(0, 0, L11_AsteroidsAdvanced.crc2.canvas.width, L11_AsteroidsAdvanced.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw();
        // handleCollisions();
        console.log("Moveable length: ", moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Main.js.map