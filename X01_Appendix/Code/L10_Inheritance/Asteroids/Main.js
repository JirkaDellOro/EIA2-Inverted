"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    window.addEventListener("load", handleLoad);
    L10_AsteroidsInheritance.moveables = [];
    // let ship: Ship;
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_AsteroidsInheritance.crc2 = canvas.getContext("2d");
        L10_AsteroidsInheritance.crc2.fillStyle = "black";
        L10_AsteroidsInheritance.crc2.strokeStyle = "white";
        L10_AsteroidsInheritance.createPaths();
        createAsteroids(5);
        // createShip();
        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        let origin = new L10_AsteroidsInheritance.Vector(_event.clientX - L10_AsteroidsInheritance.crc2.canvas.offsetLeft, _event.clientY - L10_AsteroidsInheritance.crc2.canvas.offsetTop);
        let velocity = new L10_AsteroidsInheritance.Vector(0, 0);
        velocity.random(100, 100);
        let projectile = new L10_AsteroidsInheritance.Projectile(origin, velocity);
        L10_AsteroidsInheritance.moveables.push(projectile);
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L10_AsteroidsInheritance.Asteroid(1.0);
            L10_AsteroidsInheritance.moveables.push(asteroid);
        }
    }
    function update() {
        // console.log("Update");
        L10_AsteroidsInheritance.crc2.fillRect(0, 0, L10_AsteroidsInheritance.crc2.canvas.width, L10_AsteroidsInheritance.crc2.canvas.height);
        for (let moveable of L10_AsteroidsInheritance.moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        // ship.draw();
        // handleCollisions();
        deleteExpendables();
        console.log("Moveables: ", L10_AsteroidsInheritance.moveables.length);
    }
    function deleteExpendables() {
        // step backwards for deletion
        for (let i = L10_AsteroidsInheritance.moveables.length - 1; i >= 0; i--) {
            if (L10_AsteroidsInheritance.moveables[i].expendable)
                L10_AsteroidsInheritance.moveables.splice(i, 1);
        }
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new L10_AsteroidsInheritance.Vector(_event.clientX - L10_AsteroidsInheritance.crc2.canvas.offsetLeft, _event.clientY - L10_AsteroidsInheritance.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log("Asteroid hit: ", asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
        //     asteroidHit.velocity = new Vector(0, 0);
    }
    function getAsteroidHit(_hotspot) {
        console.log("Get asteroid hit");
        for (let moveable of L10_AsteroidsInheritance.moveables) {
            if (moveable instanceof L10_AsteroidsInheritance.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L10_AsteroidsInheritance.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                L10_AsteroidsInheritance.moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Main.js.map