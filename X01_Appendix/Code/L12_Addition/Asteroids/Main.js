"use strict";
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    let ASTEROID_EVENT;
    (function (ASTEROID_EVENT) {
        ASTEROID_EVENT["UFO_SHOOTS"] = "ufoShoots";
        ASTEROID_EVENT["SHIP_SHOOTS"] = "shipShoots";
        ASTEROID_EVENT["ASTEROID_HIT"] = "asteroidHit";
    })(ASTEROID_EVENT = L12_AsteroidsAddition.ASTEROID_EVENT || (L12_AsteroidsAddition.ASTEROID_EVENT = {}));
    let POINTS;
    (function (POINTS) {
        POINTS[POINTS["ASTEROID_BIG"] = 10] = "ASTEROID_BIG";
        POINTS[POINTS["ASTEROID_MEDIUM"] = 25] = "ASTEROID_MEDIUM";
        POINTS[POINTS["ASTEROID_SMALL"] = 50] = "ASTEROID_SMALL";
        POINTS[POINTS["UFO_LARGE"] = 100] = "UFO_LARGE";
        POINTS[POINTS["UFO_SMALL"] = 250] = "UFO_SMALL";
    })(POINTS || (POINTS = {}));
    let GAMESTATE;
    (function (GAMESTATE) {
        GAMESTATE[GAMESTATE["START"] = 0] = "START";
        GAMESTATE[GAMESTATE["PLAY"] = 1] = "PLAY";
        GAMESTATE[GAMESTATE["OVER"] = 2] = "OVER";
    })(GAMESTATE || (GAMESTATE = {}));
    window.addEventListener("load", handleLoad);
    L12_AsteroidsAddition.linewidth = 2;
    let gamestate = GAMESTATE.START;
    let moveables = [];
    let ship;
    let barEnergy;
    let barCharge;
    let score = 0;
    const frameRate = 50; // frames per second
    const frameTime = 1 / frameRate; // time per frame in seconds
    function handleLoad(_event) {
        console.log("Asteroids starting");
        L12_AsteroidsAddition.Sound.init();
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L12_AsteroidsAddition.crc2 = canvas.getContext("2d");
        L12_AsteroidsAddition.crc2.fillStyle = "black";
        L12_AsteroidsAddition.crc2.strokeStyle = "white";
        L12_AsteroidsAddition.crc2.lineWidth = L12_AsteroidsAddition.linewidth;
        barEnergy = new L12_AsteroidsAddition.Bar(new L12_AsteroidsAddition.Vector(canvas.width / 2 - 80, 30), new L12_AsteroidsAddition.Vector(-300, 30));
        barCharge = new L12_AsteroidsAddition.Bar(new L12_AsteroidsAddition.Vector(canvas.width / 2 + 80, 30), new L12_AsteroidsAddition.Vector(300, 30));
        L12_AsteroidsAddition.crc2.textAlign = "right";
        L12_AsteroidsAddition.crc2.font = "40px Consolas";
        L12_AsteroidsAddition.createPaths();
        console.log("Asteroids paths: ", L12_AsteroidsAddition.asteroidPaths);
        createShip();
        createAsteroids(5);
        createUfo();
        createUfo();
        createUfo();
        canvas.addEventListener(ASTEROID_EVENT.UFO_SHOOTS, handleUfoShot);
        canvas.addEventListener(ASTEROID_EVENT.SHIP_SHOOTS, handleShipShot);
        canvas.addEventListener(ASTEROID_EVENT.ASTEROID_HIT, breakAsteroid);
        canvas.addEventListener("pointerup", shootLaser);
        canvas.addEventListener("pointerdown", chargeLaser);
        document.addEventListener("keydown", handleKeypress);
        canvas.addEventListener("pointermove", setHeading);
        window.setInterval(update, 1000 * frameTime);
    }
    function handleKeypress(_event) {
        if (_event.code == "ShiftLeft") {
            ship.thrust();
        }
    }
    function shootProjectile(_origin) {
        // console.log("Shoot projectile");
        let velocity = L12_AsteroidsAddition.Vector.getRandom(200, 200);
        let projectile = new L12_AsteroidsAddition.Projectile(_origin, velocity);
        // move projectile away from ufo to prevent suicide
        projectile.move(0.15);
        moveables.push(projectile);
        L12_AsteroidsAddition.Sound.play("fire");
    }
    function handleUfoShot(_event) {
        let ufo = _event.detail.ufo;
        shootProjectile(ufo.position);
    }
    function handleShipShot(_event) {
        let event = _event;
        let charge = event.detail.charge;
        let target = event.detail.target;
        moveables.push(new L12_AsteroidsAddition.Hotspot(target, charge));
        moveables.push(new L12_AsteroidsAddition.Laser(event.detail.pathLaserLeft, charge));
        moveables.push(new L12_AsteroidsAddition.Laser(event.detail.pathLaserRight, charge));
        L12_AsteroidsAddition.Sound.play("fire");
    }
    function setHeading(_event) {
        let target = mapClientToCanvas(_event.clientX, _event.clientY);
        ship.head(target);
    }
    function chargeLaser(_event) {
        console.log("Charge laser");
        ship.charge(true);
    }
    function shootLaser(_event) {
        // console.log("Shoot laser");
        let position = mapClientToCanvas(_event.clientX, _event.clientY);
        ship.shoot(position);
    }
    function mapClientToCanvas(_x, _y) {
        return new L12_AsteroidsAddition.Vector(_x - L12_AsteroidsAddition.crc2.canvas.offsetLeft, _y - L12_AsteroidsAddition.crc2.canvas.offsetTop);
    }
    function breakAsteroid(_event) {
        let asteroid = _event.detail.asteroid;
        L12_AsteroidsAddition.Sound.breakAsteroid(asteroid.size);
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
            moveable.move(frameTime);
            moveable.draw();
        }
        deleteExpandables();
        handleCollisions();
        displayInfo();
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable) {
                scorePoints(moveables[i]);
                moveables.splice(i, 1);
            }
        }
    }
    function handleCollisions() {
        for (let i = 0; i < moveables.length; i++) {
            let a = moveables[i];
            if (a instanceof L12_AsteroidsAddition.Laser)
                continue;
            for (let j = i + 1; j < moveables.length; j++) {
                let b = moveables[j];
                if (b instanceof L12_AsteroidsAddition.Laser)
                    continue;
                if (a instanceof L12_AsteroidsAddition.Asteroid && b instanceof L12_AsteroidsAddition.Asteroid)
                    continue;
                if (a.expendable || b.expendable)
                    continue;
                if (a.isHitBy(b)) {
                    console.log("Collision ", a, b);
                    a.hit();
                    b.hit();
                }
            }
        }
    }
    function getColorCharge(_charge, _alpha) {
        _charge = Math.max(Math.min(1, _charge), 0);
        let angle = 240 + 150 * _charge * _alpha;
        let light = 30 + 30 * _charge;
        return `HSL(${angle}, 100%, ${light}%, ${_alpha})`;
    }
    L12_AsteroidsAddition.getColorCharge = getColorCharge;
    function displayInfo() {
        L12_AsteroidsAddition.crc2.save();
        barEnergy.draw(ship.energy, "#80ff8080", ship.energy <= 0 ? "grey" : "white");
        barCharge.draw(ship.charged, getColorCharge(ship.charged, 0.8), ship.coolDown > 0 ? "grey" : "white");
        L12_AsteroidsAddition.crc2.fillStyle = "white";
        L12_AsteroidsAddition.crc2.fillText(score.toString(), L12_AsteroidsAddition.crc2.canvas.width / 2 + 60, 44);
        L12_AsteroidsAddition.crc2.restore();
    }
    function scorePoints(_expended) {
        let points = 0;
        if (_expended instanceof L12_AsteroidsAddition.Asteroid) {
            console.log(_expended.size);
            if (_expended.size < 0.3)
                points = POINTS.ASTEROID_SMALL;
            else if (_expended.size > 0.8)
                points = POINTS.ASTEROID_BIG;
            else
                points = POINTS.ASTEROID_MEDIUM;
        }
        if (_expended instanceof L12_AsteroidsAddition.Ufo)
            points = POINTS.UFO_LARGE;
        score += points;
    }
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Main.js.map