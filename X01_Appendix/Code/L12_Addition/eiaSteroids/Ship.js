"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_eiaSteroids;
(function (L12_eiaSteroids) {
    /**
     * Describes a laser gun which is just a special [[Bar]]
     */
    class Gun extends L12_eiaSteroids.Bar {
        constructor(_position) {
            super(_position, Gun.size);
        }
        draw(_charge, _strokeStyle = "white") {
            super.draw(_charge, L12_eiaSteroids.getColorCharge(_charge, 1), _strokeStyle);
        }
    }
    Gun.size = new L12_eiaSteroids.Vector(-15, 6);
    /**
     * Describes the space ship the player controls.
     * Can head towards a given point, thrust in this direction and dispatch an event to the main program in order
     * to create the [[Laser]] beams and a [[Hotspot]]. Handles its energy and dispatches it to
     * - shield when hit,
     * - thrust when moving
     * - and laser guns while charging
     */
    class Ship extends L12_eiaSteroids.Moveable {
        constructor(_position) {
            super(_position);
            this.gunLeft = new Gun(new L12_eiaSteroids.Vector(10, -12));
            this.gunRight = new Gun(new L12_eiaSteroids.Vector(10, 12));
            this.charged = 0; // start uncharged
            this.energy = 1; // start with full energy
            this.coolDown = 0; // start with guns cool
            this.rotation = 0;
            this.exhaust = false;
            this.charging = false;
            this.timeShield = 0;
            this.velocity = new L12_eiaSteroids.Vector();
            this.hitRadius = 10;
        }
        charge(_on) {
            this.charging = _on;
            if (!_on)
                this.charged = 0;
        }
        head(_target) {
            let difference = L12_eiaSteroids.Vector.getDifference(_target, this.position);
            this.rotation = Math.atan2(difference.y, difference.x);
        }
        thrust() {
            this.energy -= Ship.energyToThrust;
            if (this.energy <= 0)
                return;
            let change = L12_eiaSteroids.Vector.getPolar(this.rotation, Ship.acceleration);
            this.velocity.add(change);
            // console.log(this.velocity);
            this.exhaust = true;
            L12_eiaSteroids.Sound.play("thrust");
        }
        draw() {
            let color = `HSL(0, 100%, ${100 - 20 * this.timeShield}%)`;
            L12_eiaSteroids.crc2.save();
            L12_eiaSteroids.crc2.strokeStyle = color;
            L12_eiaSteroids.crc2.translate(this.position.x, this.position.y);
            L12_eiaSteroids.crc2.rotate(this.rotation);
            L12_eiaSteroids.crc2.beginPath();
            L12_eiaSteroids.crc2.moveTo(-5, 10);
            L12_eiaSteroids.crc2.lineTo(20, 0);
            L12_eiaSteroids.crc2.lineTo(-5, -10);
            L12_eiaSteroids.crc2.moveTo(0, 8);
            L12_eiaSteroids.crc2.lineTo(0, -8);
            L12_eiaSteroids.crc2.stroke();
            this.gunLeft.draw(this.charged, color);
            this.gunRight.draw(this.charged, color);
            if (this.exhaust)
                this.drawExhaust();
            L12_eiaSteroids.crc2.restore();
            this.exhaust = false;
        }
        drawExhaust() {
            L12_eiaSteroids.crc2.moveTo(0, 0);
            L12_eiaSteroids.crc2.lineTo(-7, 5);
            L12_eiaSteroids.crc2.lineTo(-15, 0);
            L12_eiaSteroids.crc2.lineTo(-7, -5);
            L12_eiaSteroids.crc2.closePath();
            L12_eiaSteroids.crc2.stroke();
        }
        move(_timeslice) {
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
            this.velocity.scale(0.99);
            super.move(_timeslice);
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
            let event = new CustomEvent(L12_eiaSteroids.ASTEROID_EVENT.SHIP_SHOOTS, {
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
            L12_eiaSteroids.crc2.canvas.dispatchEvent(event);
        }
        getLaserPath(_gun, _target) {
            let position = this.position.copy();
            let rotation = this.rotation;
            return () => {
                L12_eiaSteroids.crc2.save();
                L12_eiaSteroids.crc2.beginPath();
                L12_eiaSteroids.crc2.translate(position.x, position.y);
                L12_eiaSteroids.crc2.rotate(rotation);
                L12_eiaSteroids.crc2.moveTo(_gun.position.x, _gun.position.y);
                L12_eiaSteroids.crc2.restore();
                L12_eiaSteroids.crc2.lineTo(_target.x, _target.y);
            };
        }
    }
    Ship.energyToCharge = 0.002;
    Ship.energyToThrust = 0.003;
    Ship.energyToShield = 0.4;
    Ship.acceleration = 20;
    Ship.timeEnergyRestore = 20; // energy recovery from 0 in seconds
    Ship.timeToChargeFully = 1;
    Ship.timeCooling = 0.5; // time the laser gun cools down before charge starts
    Ship.timeToShowShield = 2; // time to display shield color when hit
    L12_eiaSteroids.Ship = Ship;
})(L12_eiaSteroids || (L12_eiaSteroids = {}));
//# sourceMappingURL=Ship.js.map