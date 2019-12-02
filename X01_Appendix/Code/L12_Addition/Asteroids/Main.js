"use strict";
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    let ASTEROID_EVENT;
    (function (ASTEROID_EVENT) {
        ASTEROID_EVENT["UFO_SHOOTS"] = "ufoShoots";
        ASTEROID_EVENT["ASTEROID_HIT"] = "asteroidHit";
    })(ASTEROID_EVENT = L12_AsteroidsAddition.ASTEROID_EVENT || (L12_AsteroidsAddition.ASTEROID_EVENT = {}));
    window.addEventListener("load", handleLoad);
    L12_AsteroidsAddition.linewidth = 2;
    let moveables = [];
    let ship;
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L12_AsteroidsAddition.crc2 = canvas.getContext("2d");
        L12_AsteroidsAddition.crc2.fillStyle = "black";
        L12_AsteroidsAddition.crc2.strokeStyle = "white";
        L12_AsteroidsAddition.crc2.lineWidth = L12_AsteroidsAddition.linewidth;
        L12_AsteroidsAddition.createPaths();
        console.log("Asteroids paths: ", L12_AsteroidsAddition.asteroidPaths);
        createAsteroids(1);
        createShip();
        createUfo();
        // createUfo();
        // createUfo();
        canvas.addEventListener(ASTEROID_EVENT.UFO_SHOOTS, handleUfoShot);
        canvas.addEventListener(ASTEROID_EVENT.ASTEROID_HIT, breakAsteroid);
        canvas.addEventListener("mouseup", shootLaser);
        document.addEventListener("keydown", handleKeypress);
        canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function handleKeypress(_event) {
        if (_event.code == "KeyW")
            ship.thrust();
    }
    function shootProjectile(_origin) {
        console.log("Shoot projectile");
        let velocity = L12_AsteroidsAddition.Vector.getRandom(200, 200);
        let projectile = new L12_AsteroidsAddition.Projectile(_origin, velocity);
        // move projectile away from ufo to prevent suicide
        projectile.move(0.15);
        moveables.push(projectile);
    }
    function handleUfoShot(_event) {
        let ufo = _event.detail.ufo;
        shootProjectile(ufo.position);
    }
    function setHeading(_event) {
        let target = mapClientToCanvas(_event.clientX, _event.clientY);
        ship.head(target);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let position = mapClientToCanvas(_event.clientX, _event.clientY);
        let hotspot = new L12_AsteroidsAddition.Hotspot(position);
        moveables.push(hotspot);
    }
    function mapClientToCanvas(_x, _y) {
        return new L12_AsteroidsAddition.Vector(_x - L12_AsteroidsAddition.crc2.canvas.offsetLeft, _y - L12_AsteroidsAddition.crc2.canvas.offsetTop);
    }
    function breakAsteroid(_event) {
        let asteroid = _event.detail.asteroid;
        if (asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L12_AsteroidsAddition.Asteroid(asteroid.size / 2, asteroid.position);
                fragment.velocity.add(asteroid.velocity);
                moveables.push(fragment);
            }
        }
        asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L12_AsteroidsAddition.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function createShip() {
        console.log("Create ship");
        ship = new L12_AsteroidsAddition.Ship(new L12_AsteroidsAddition.Vector(L12_AsteroidsAddition.crc2.canvas.width / 2, L12_AsteroidsAddition.crc2.canvas.height / 2));
        moveables.push(ship);
    }
    function createUfo() {
        console.log("Create ufo");
        let ufo = new L12_AsteroidsAddition.Ufo();
        moveables.push(ufo);
    }
    function update() {
        // console.log("Update");
        L12_AsteroidsAddition.crc2.fillRect(0, 0, L12_AsteroidsAddition.crc2.canvas.width, L12_AsteroidsAddition.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw();
        handleCollisions();
        console.log("Moveable length: ", moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
    function handleCollisions() {
        for (let i = 0; i < moveables.length; i++) {
            let a = moveables[i];
            for (let j = i + 1; j < moveables.length; j++) {
                let b = moveables[j];
                if (a instanceof L12_AsteroidsAddition.Asteroid && b instanceof L12_AsteroidsAddition.Asteroid)
                    continue;
                if (a.expendable || b.expendable)
                    continue;
                if (a.isHitBy(b)) {
                    a.hit();
                    b.hit();
                }
            }
        }
    }
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Main.js.map