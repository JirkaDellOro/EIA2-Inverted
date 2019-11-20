"use strict";
var L11_AsteroidsAdvanced_2;
(function (L11_AsteroidsAdvanced_2) {
    window.addEventListener("load", handleLoad);
    L11_AsteroidsAdvanced_2.moveables = [];
    // let ship: Ship;
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_AsteroidsAdvanced_2.crc2 = canvas.getContext("2d");
        L11_AsteroidsAdvanced_2.crc2.fillStyle = "black";
        L11_AsteroidsAdvanced_2.crc2.strokeStyle = "white";
        L11_AsteroidsAdvanced_2.createPaths();
        createAsteroids(5);
        createUfo();
        createUfo();
        createUfo();
        createUfo();
        // canvas.addEventListener("mousedown", loadLaser);
        // canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        // Event-Names candidates for enum
        canvas.addEventListener("ufoShoots", ufoShoot);
        canvas.addEventListener("asteroidHit", breakAsteroid);
        window.setInterval(update, 20);
    }
    function shootProjectile(_origin) {
        let velocity = new L11_AsteroidsAdvanced_2.Vector(0, 0);
        velocity.random(200, 200);
        let projectile = new L11_AsteroidsAdvanced_2.Projectile(_origin, velocity);
        projectile.move(0.15);
        L11_AsteroidsAdvanced_2.moveables.push(projectile);
    }
    function ufoShoot(_event) {
        let ufo = _event.detail.ufo;
        shootProjectile(ufo.position);
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L11_AsteroidsAdvanced_2.Asteroid(1.0);
            L11_AsteroidsAdvanced_2.moveables.push(asteroid);
        }
    }
    function createUfo() {
        console.log("Create ufo");
        let ufo = new L11_AsteroidsAdvanced_2.Ufo();
        L11_AsteroidsAdvanced_2.moveables.push(ufo);
    }
    function update() {
        // console.log("Update");
        L11_AsteroidsAdvanced_2.crc2.fillRect(0, 0, L11_AsteroidsAdvanced_2.crc2.canvas.width, L11_AsteroidsAdvanced_2.crc2.canvas.height);
        for (let moveable of L11_AsteroidsAdvanced_2.moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        // ship.draw();
        deleteExpendables();
        handleCollisions();
        console.log("Moveables: ", L11_AsteroidsAdvanced_2.moveables.length);
    }
    function handleCollisions() {
        for (let i = 0; i < L11_AsteroidsAdvanced_2.moveables.length; i++) {
            let moveable0 = L11_AsteroidsAdvanced_2.moveables[i];
            for (let j = i + 1; j < L11_AsteroidsAdvanced_2.moveables.length; j++) {
                let moveable1 = L11_AsteroidsAdvanced_2.moveables[j];
                if (moveable0 instanceof L11_AsteroidsAdvanced_2.Asteroid && moveable1 instanceof L11_AsteroidsAdvanced_2.Asteroid)
                    continue;
                if (moveable0.expendable || moveable1.expendable)
                    continue;
                if (moveable0.isHitBy(moveable1)) {
                    moveable0.hit();
                    moveable1.hit();
                }
            }
        }
    }
    function deleteExpendables() {
        // step backwards for deletion
        for (let i = L11_AsteroidsAdvanced_2.moveables.length - 1; i >= 0; i--) {
            if (L11_AsteroidsAdvanced_2.moveables[i].expendable)
                L11_AsteroidsAdvanced_2.moveables.splice(i, 1);
        }
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let position = new L11_AsteroidsAdvanced_2.Vector(_event.clientX - L11_AsteroidsAdvanced_2.crc2.canvas.offsetLeft, _event.clientY - L11_AsteroidsAdvanced_2.crc2.canvas.offsetTop);
        let hotspot = new L11_AsteroidsAdvanced_2.Hotspot(position);
        L11_AsteroidsAdvanced_2.moveables.push(hotspot);
    }
    function breakAsteroid(_event) {
        let asteroid = _event.detail.asteroid;
        if (asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L11_AsteroidsAdvanced_2.Asteroid(asteroid.size / 2, asteroid.position);
                fragment.velocity.add(asteroid.velocity);
                L11_AsteroidsAdvanced_2.moveables.push(fragment);
            }
        }
        asteroid.expendable = true;
    }
})(L11_AsteroidsAdvanced_2 || (L11_AsteroidsAdvanced_2 = {}));
//# sourceMappingURL=Main.js.map