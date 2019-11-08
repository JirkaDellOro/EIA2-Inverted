"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    window.addEventListener("load", handleLoad);
    L11_AsteroidsAdvanced.moveables = [];
    // let ship: Ship;
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_AsteroidsAdvanced.crc2 = canvas.getContext("2d");
        L11_AsteroidsAdvanced.crc2.fillStyle = "black";
        L11_AsteroidsAdvanced.crc2.strokeStyle = "white";
        L11_AsteroidsAdvanced.createPaths();
        createAsteroids(5);
        createUfo();
        createUfo();
        createUfo();
        // canvas.addEventListener("mousedown", loadLaser);
        // canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        canvas.addEventListener("ufoShoots", ufoShoot);
        window.setInterval(update, 20);
    }
    function shootProjectile(_origin) {
        let velocity = new L11_AsteroidsAdvanced.Vector(0, 0);
        velocity.random(200, 200);
        let projectile = new L11_AsteroidsAdvanced.Projectile(_origin, velocity);
        L11_AsteroidsAdvanced.moveables.push(projectile);
    }
    function ufoShoot(_event) {
        let ufo = _event.detail.ufo;
        shootProjectile(ufo.position);
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L11_AsteroidsAdvanced.Asteroid(1.0);
            L11_AsteroidsAdvanced.moveables.push(asteroid);
        }
    }
    function createUfo() {
        console.log("Create ufo");
        let ufo = new L11_AsteroidsAdvanced.Ufo();
        L11_AsteroidsAdvanced.moveables.push(ufo);
    }
    function update() {
        // console.log("Update");
        L11_AsteroidsAdvanced.crc2.fillRect(0, 0, L11_AsteroidsAdvanced.crc2.canvas.width, L11_AsteroidsAdvanced.crc2.canvas.height);
        for (let moveable of L11_AsteroidsAdvanced.moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        // ship.draw();
        // handleCollisions();
        deleteExpendables();
        console.log("Moveables: ", L11_AsteroidsAdvanced.moveables.length);
    }
    function deleteExpendables() {
        // step backwards for deletion
        for (let i = L11_AsteroidsAdvanced.moveables.length - 1; i >= 0; i--) {
            if (L11_AsteroidsAdvanced.moveables[i].expendable)
                L11_AsteroidsAdvanced.moveables.splice(i, 1);
        }
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new L11_AsteroidsAdvanced.Vector(_event.clientX - L11_AsteroidsAdvanced.crc2.canvas.offsetLeft, _event.clientY - L11_AsteroidsAdvanced.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log("Asteroid hit: ", asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
        //     asteroidHit.velocity = new Vector(0, 0);
    }
    function getAsteroidHit(_hotspot) {
        console.log("Get asteroid hit");
        for (let moveable of L11_AsteroidsAdvanced.moveables) {
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
                L11_AsteroidsAdvanced.moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Main.js.map