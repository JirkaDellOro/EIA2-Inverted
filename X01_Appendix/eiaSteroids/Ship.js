"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * Describes a laser gun which is just a special [[Bar]]
     */
    class Gun extends eiaSteroids.Bar {
        static size = new eiaSteroids.Vector(-15, 6);
        constructor(_position) {
            super(_position, Gun.size);
        }
        draw(_charge, _strokeStyle = "white") {
            super.draw(_charge, eiaSteroids.getColorCharge(_charge, 1), _strokeStyle);
        }
    }
    /**
     * Describes the space ship the player controls.
     * Can head towards a given point, thrust in this direction and dispatch an event to the main program in order
     * to create the [[Laser]] beams and a [[Hotspot]]. Handles its energy and dispatches it to
     * - shield when hit,
     * - thrust when moving
     * - and laser guns while charging
     */
    class Ship extends eiaSteroids.Moveable {
        static energyToCharge = 0.002;
        static energyToThrust = 0.003;
        static energyToShield = 0.4;
        static acceleration = 20;
        static timeEnergyRestore = 20; // energy recovery from 0 in seconds
        static timeToChargeFully = 1;
        static timeCooling = 0.5; // time the laser gun cools down before charge starts
        static timeToShowShield = 2; // time to display shield color when hit
        gunLeft = new Gun(new eiaSteroids.Vector(10, -12));
        gunRight = new Gun(new eiaSteroids.Vector(10, 12));
        charged = 0; // start uncharged
        energy = 1; // start with full energy
        coolDown = 0; // start with guns cool
        rotation = 0;
        thrusting = false;
        charging = false;
        timeShield = 0;
        constructor(_position) {
            super(_position);
            this.velocity = new eiaSteroids.Vector();
            this.hitRadius = 10;
        }
        charge(_on) {
            this.charging = _on;
            if (!_on)
                this.charged = 0;
        }
        thrust(_on) {
            this.thrusting = _on;
        }
        head(_target) {
            let difference = eiaSteroids.Vector.getDifference(_target, this.position);
            this.rotation = Math.atan2(difference.y, difference.x);
        }
        accelerate() {
            this.energy -= Ship.energyToThrust;
            if (this.energy <= 0) {
                this.thrust(false);
                return;
            }
            let change = eiaSteroids.Vector.getPolar(this.rotation, Ship.acceleration);
            this.velocity.add(change);
            eiaSteroids.Sound.play("thrust");
        }
        draw() {
            let color = `HSL(0, 100%, ${100 - 20 * this.timeShield}%)`;
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.strokeStyle = color;
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            eiaSteroids.crc2.rotate(this.rotation);
            eiaSteroids.crc2.beginPath();
            eiaSteroids.crc2.moveTo(-5, 10);
            eiaSteroids.crc2.lineTo(20, 0);
            eiaSteroids.crc2.lineTo(-5, -10);
            eiaSteroids.crc2.moveTo(0, 8);
            eiaSteroids.crc2.lineTo(0, -8);
            eiaSteroids.crc2.stroke();
            this.gunLeft.draw(this.charged, color);
            this.gunRight.draw(this.charged, color);
            if (this.thrusting)
                this.drawExhaust();
            eiaSteroids.crc2.restore();
        }
        drawExhaust() {
            eiaSteroids.crc2.moveTo(0, 0);
            eiaSteroids.crc2.lineTo(-7, 5);
            eiaSteroids.crc2.lineTo(-15, 0);
            eiaSteroids.crc2.lineTo(-7, -5);
            eiaSteroids.crc2.closePath();
            eiaSteroids.crc2.stroke();
        }
        move(_timeslice) {
            this.velocity.scale(0.99);
            super.move(_timeslice);
            this.coolDown = (Math.max(0, this.coolDown - _timeslice / Ship.timeCooling));
            this.timeShield = (Math.max(0, this.timeShield - _timeslice));
            if (this.charging) {
                this.energy -= Ship.energyToCharge;
                if (!this.coolDown && this.energy > 0)
                    this.charged += _timeslice / Ship.timeToChargeFully;
            }
            else {
                this.energy += _timeslice / Ship.timeEnergyRestore;
                this.energy = Math.min(1, Math.max(0, this.energy));
            }
            if (this.thrusting)
                this.accelerate();
        }
        hit() {
            this.energy -= Ship.energyToShield;
            this.timeShield = Ship.timeToShowShield;
            if (this.energy < 0)
                super.hit();
        }
        shoot(_target) {
            this.charging = false;
            if (this.coolDown > 0)
                return;
            // console.log("Ship shoots");
            let event = new CustomEvent(eiaSteroids.ASTEROID_EVENT.SHIP_SHOOTS, {
                detail: {
                    target: _target,
                    charge: this.charged,
                    rotation: this.rotation,
                    pathLaserLeft: this.getLaserPath(this.gunLeft, _target),
                    pathLaserRight: this.getLaserPath(this.gunRight, _target)
                }
            });
            this.charge(false);
            this.coolDown = 1;
            eiaSteroids.crc2.canvas.dispatchEvent(event);
        }
        getLaserPath(_gun, _target) {
            let position = this.position.copy();
            let rotation = this.rotation;
            return () => {
                eiaSteroids.crc2.save();
                eiaSteroids.crc2.beginPath();
                eiaSteroids.crc2.translate(position.x, position.y);
                eiaSteroids.crc2.rotate(rotation);
                eiaSteroids.crc2.moveTo(_gun.position.x, _gun.position.y);
                eiaSteroids.crc2.restore();
                eiaSteroids.crc2.lineTo(_target.x, _target.y);
            };
        }
    }
    eiaSteroids.Ship = Ship;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Ship.js.map