"use strict";
/**
 * # eiaSteroids
 *
 * Example project demonstrating object oriented design for the course
 * Entwicklung Interaktiver Anwendungen II (EIA2) {@link https://jirkadelloro.github.io/EIA2-Inverted/}
 *
 * Project heavily inspired by Asteroids, the arcade classic created by Atari {@link https://www.atari.com/}
 *
 * To create this documentation using TypeDoc: `typedoc --tsconfig ../../tsconfig.json`
 *
 * @author Jirka Dell'Oro-Friedl
 * @copyright Jirka Dell'Oro-Friedl, Hochschule Furtwangen University, 2020
 */
var L12_eiaSteroids;
(function (L12_eiaSteroids) {
    let ASTEROID_EVENT;
    (function (ASTEROID_EVENT) {
        ASTEROID_EVENT["UFO_SHOOTS"] = "ufoShoots";
        ASTEROID_EVENT["SHIP_SHOOTS"] = "shipShoots";
        ASTEROID_EVENT["ASTEROID_HIT"] = "asteroidHit";
    })(ASTEROID_EVENT = L12_eiaSteroids.ASTEROID_EVENT || (L12_eiaSteroids.ASTEROID_EVENT = {}));
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
    })(GAMESTATE = L12_eiaSteroids.GAMESTATE || (L12_eiaSteroids.GAMESTATE = {}));
    window.addEventListener("load", handleLoad);
    L12_eiaSteroids.linewidth = 2;
    let moveables = [];
    let ship;
    const frameRate = 50; // frames per second
    const frameTime = 1 / frameRate; // time per frame in seconds
    function handleLoad(_event) {
        console.log("Asteroids starting");
        setGameState(GAMESTATE.START);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L12_eiaSteroids.crc2 = canvas.getContext("2d");
        L12_eiaSteroids.crc2.fillStyle = "black";
        L12_eiaSteroids.crc2.strokeStyle = "white";
        L12_eiaSteroids.crc2.lineWidth = L12_eiaSteroids.linewidth;
        L12_eiaSteroids.createPaths();
        L12_eiaSteroids.Info.init(canvas);
        L12_eiaSteroids.Sound.init();
        createShip();
        canvas.addEventListener(ASTEROID_EVENT.UFO_SHOOTS, handleUfoShot);
        canvas.addEventListener(ASTEROID_EVENT.SHIP_SHOOTS, handleShipShot);
        canvas.addEventListener(ASTEROID_EVENT.ASTEROID_HIT, breakAsteroid);
        canvas.addEventListener("pointerup", shootLaser);
        canvas.addEventListener("pointerdown", chargeLaser);
        document.addEventListener("keydown", handleKeypress);
        document.addEventListener("keyup", handleKeypress);
        canvas.addEventListener("pointermove", setHeading);
        window.setInterval(update, 1000 * frameTime);
    }
    function setGameState(_newState) {
        if (L12_eiaSteroids.gamestate == GAMESTATE.OVER)
            return;
        if (L12_eiaSteroids.gamestate == _newState)
            return;
        L12_eiaSteroids.gamestate = _newState;
        if (L12_eiaSteroids.gamestate == GAMESTATE.PLAY)
            L12_eiaSteroids.Sound.playAtmo(2);
    }
    function handleKeypress(_event) {
        switch (_event.code) {
            case "ShiftLeft":
            case "ShiftRight":
                ship.thrust(_event.type == "keydown");
                break;
            case "Space": {
                setGameState(GAMESTATE.PLAY);
            }
        }
    }
    /**
     * Creates a projectile at the point given with random heading, moving away a little to protect the source
     */
    function shootProjectile(_origin, _target) {
        let velocity = L12_eiaSteroids.Vector.getRandom(200, 200);
        if (_target) {
            velocity = L12_eiaSteroids.Vector.getDifference(_target, _origin);
            velocity.scale(200 / velocity.length);
        }
        let projectile = new L12_eiaSteroids.Projectile(_origin, velocity);
        // move projectile away from ufo to prevent suicide
        projectile.move(0.15);
        moveables.push(projectile);
        L12_eiaSteroids.Sound.play("fire");
    }
    /**
     * Starts a projectile when a Ufo dispatched the shoot event from the Ufos position
     */
    function handleUfoShot(_event) {
        let ufo = _event.detail.ufo;
        if (ufo instanceof L12_eiaSteroids.UfoSmall)
            shootProjectile(ufo.position, ship.position);
        else
            shootProjectile(ufo.position);
    }
    /**
     * Creates laser beams and a hotspot when ship dispatched the shoot event.
     */
    function handleShipShot(_event) {
        let event = _event;
        let charge = event.detail.charge;
        let target = event.detail.target;
        moveables.push(new L12_eiaSteroids.Hotspot(target, charge));
        moveables.push(new L12_eiaSteroids.Laser(event.detail.pathLaserLeft, charge));
        moveables.push(new L12_eiaSteroids.Laser(event.detail.pathLaserRight, charge));
        L12_eiaSteroids.Sound.play("fire");
    }
    /**
     * Direct the ship towards the position given in the event object
     */
    function setHeading(_event) {
        let target = mapClientToCanvas(_event.clientX, _event.clientY);
        ship.head(target);
    }
    /**
     * Calls the ship to charge laser guns
     */
    function chargeLaser(_event) {
        ship.charge(true);
    }
    /**
     * Calls the ship to shoot at the position given with the event object
     */
    function shootLaser(_event) {
        let position = mapClientToCanvas(_event.clientX, _event.clientY);
        ship.shoot(position);
    }
    /**
     * Map a position on the client (event.clientX / Y) to a position on the canvas
     */
    function mapClientToCanvas(_x, _y) {
        return new L12_eiaSteroids.Vector(_x - L12_eiaSteroids.crc2.canvas.offsetLeft, _y - L12_eiaSteroids.crc2.canvas.offsetTop);
    }
    /**
     * Marks the asteroid given with the event object as expandable and creates two smaller ones,
     * except the asteroid was a smallest one already
     */
    function breakAsteroid(_event) {
        let asteroid = _event.detail.asteroid;
        L12_eiaSteroids.Sound.breakAsteroid(asteroid.size);
        if (asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L12_eiaSteroids.Asteroid(asteroid.size / 2, asteroid.position);
                fragment.velocity.add(asteroid.velocity);
                moveables.push(fragment);
            }
        }
        asteroid.expendable = true;
    }
    /**
     * Creates the specified number of asteroids
     */
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L12_eiaSteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    /**
     * Creates the players ship in the center of the canvas
     */
    function createShip() {
        console.log("Create ship");
        ship = new L12_eiaSteroids.Ship(new L12_eiaSteroids.Vector(L12_eiaSteroids.crc2.canvas.width / 2, L12_eiaSteroids.crc2.canvas.height / 2));
        moveables.push(ship);
    }
    /**
     * Create a Ufo
     */
    function createUfo(_small = false) {
        console.log("Create ufo");
        let ufo = _small ? new L12_eiaSteroids.UfoSmall : new L12_eiaSteroids.Ufo();
        moveables.push(ufo);
    }
    /**
     * The main update function!
     */
    function update() {
        L12_eiaSteroids.crc2.fillRect(0, 0, L12_eiaSteroids.crc2.canvas.width, L12_eiaSteroids.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(frameTime);
            moveable.draw();
        }
        deleteExpandables();
        handleCollisions();
        progress();
        L12_eiaSteroids.Info.display(ship);
    }
    /**
     * Removes all objects marked as expendable from the list of moveables and calls the scorePoint function
     */
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable) {
                scorePoints(moveables[i]);
                moveables.splice(i, 1);
            }
        }
    }
    /**
     * Checks collisions of all moveable objects and calls their hit-methods accordingly
     */
    function handleCollisions() {
        for (let i = 0; i < moveables.length; i++) {
            let a = moveables[i];
            if (a instanceof L12_eiaSteroids.Laser)
                continue;
            for (let j = i + 1; j < moveables.length; j++) {
                let b = moveables[j];
                if (b instanceof L12_eiaSteroids.Laser)
                    continue;
                if (a instanceof L12_eiaSteroids.Asteroid && b instanceof L12_eiaSteroids.Asteroid)
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
    /**
     * Calculates the color for the laser guns, the beams, the hotspot and the meter bar
     */
    function getColorCharge(_charge, _alpha) {
        _charge = Math.max(Math.min(1, _charge), 0);
        let angle = 240 + 150 * _charge * _alpha;
        let light = 30 + 30 * _charge;
        return `HSL(${angle}, 100%, ${light}%, ${_alpha})`;
    }
    L12_eiaSteroids.getColorCharge = getColorCharge;
    /**
     * Scores points for every object destroyed as given in the [[POINTS]] enum
     */
    function scorePoints(_expended) {
        if (L12_eiaSteroids.gamestate != GAMESTATE.PLAY)
            return;
        let points = 0;
        if (_expended instanceof L12_eiaSteroids.Asteroid) {
            if (_expended.size < 0.3)
                points = POINTS.ASTEROID_SMALL;
            else if (_expended.size > 0.8)
                points = POINTS.ASTEROID_BIG;
            else
                points = POINTS.ASTEROID_MEDIUM;
        }
        if (_expended instanceof L12_eiaSteroids.Ufo)
            points = POINTS.UFO_LARGE;
        L12_eiaSteroids.Info.score += points;
    }
    /**
     * Handles gamestate and calculates when to spawn which objects dependend on the current score
     * and the number of currently moving objects.
     */
    function progress() {
        if (ship.expendable)
            setGameState(GAMESTATE.OVER);
        if (L12_eiaSteroids.gamestate != GAMESTATE.PLAY)
            return;
        let difficulty = L12_eiaSteroids.Info.score / 500;
        L12_eiaSteroids.Sound.atmoDelay = 0.3 + 1.7 / Math.floor(1 + difficulty);
        if (moveables.length < 5 + difficulty)
            if (Math.random() * difficulty < 1)
                createAsteroids(1);
            else if (Math.random() * difficulty < 1)
                createUfo(false);
            else
                createUfo(true);
    }
})(L12_eiaSteroids || (L12_eiaSteroids = {}));
//# sourceMappingURL=Main.js.map