"use strict";
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    class Gun {
        constructor(_position) {
            this.position = _position.copy();
        }
        draw(_charge) {
            L12_AsteroidsAddition.crc2.beginPath();
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.translate(this.position.x, this.position.y);
            L12_AsteroidsAddition.crc2.fillStyle = L12_AsteroidsAddition.getColorCharge(_charge, 1);
            L12_AsteroidsAddition.crc2.fillRect(0, -Gun.size.y / 2, -Gun.size.x * Math.min(1, _charge), Gun.size.y);
            L12_AsteroidsAddition.crc2.strokeRect(0, -Gun.size.y / 2, -Gun.size.x, Gun.size.y);
            L12_AsteroidsAddition.crc2.restore();
        }
    }
    Gun.size = new L12_AsteroidsAddition.Vector(15, 6);
    class Ship extends L12_AsteroidsAddition.Moveable {
        constructor(_position) {
            super(_position);
            this.gunLeft = new Gun(new L12_AsteroidsAddition.Vector(10, -12));
            this.gunRight = new Gun(new L12_AsteroidsAddition.Vector(10, 12));
            this.charged = 0;
            // private static maxCharge: number = 1;
            // private charge: number = 0;
            this.rotation = 0;
            this.exhaust = false;
            this.charging = false;
            this.velocity = new L12_AsteroidsAddition.Vector();
            this.hitRadius = 10;
        }
        charge(_on) {
            this.charging = _on;
            if (!_on)
                this.charged = 0;
        }
        head(_target) {
            let difference = L12_AsteroidsAddition.Vector.getDifference(_target, this.position);
            this.rotation = Math.atan2(difference.y, difference.x);
        }
        thrust() {
            let change = L12_AsteroidsAddition.Vector.getPolar(this.rotation, Ship.acceleration);
            this.velocity.add(change);
            // console.log(this.velocity);
            this.exhaust = true;
        }
        draw() {
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.translate(this.position.x, this.position.y);
            L12_AsteroidsAddition.crc2.rotate(this.rotation);
            L12_AsteroidsAddition.crc2.beginPath();
            L12_AsteroidsAddition.crc2.moveTo(-5, 10);
            L12_AsteroidsAddition.crc2.lineTo(20, 0);
            L12_AsteroidsAddition.crc2.lineTo(-5, -10);
            L12_AsteroidsAddition.crc2.moveTo(0, 8);
            L12_AsteroidsAddition.crc2.lineTo(0, -8);
            L12_AsteroidsAddition.crc2.stroke();
            this.gunLeft.draw(this.charged);
            this.gunRight.draw(this.charged);
            if (this.exhaust)
                this.drawExhaust();
            L12_AsteroidsAddition.crc2.restore();
            this.exhaust = false;
        }
        drawExhaust() {
            L12_AsteroidsAddition.crc2.moveTo(0, 0);
            L12_AsteroidsAddition.crc2.lineTo(-7, 5);
            L12_AsteroidsAddition.crc2.lineTo(-15, 0);
            L12_AsteroidsAddition.crc2.lineTo(-7, -5);
            L12_AsteroidsAddition.crc2.closePath();
            L12_AsteroidsAddition.crc2.stroke();
        }
        move(_timeslice) {
            if (this.charging)
                this.charged += _timeslice / Ship.timeToChargeFully;
            this.velocity.scale(0.99);
            super.move(_timeslice);
        }
        shoot(_target) {
            console.log("Ship shoots");
            let event = new CustomEvent(L12_AsteroidsAddition.ASTEROID_EVENT.SHIP_SHOOTS, {
                detail: {
                    target: _target,
                    charge: this.charged,
                    rotation: this.rotation,
                    pathLaserLeft: this.getLaserPath(this.gunLeft, _target),
                    pathLaserRight: this.getLaserPath(this.gunRight, _target)
                }
            });
            this.charge(false);
            this.charged = 0;
            L12_AsteroidsAddition.crc2.canvas.dispatchEvent(event);
        }
        getLaserPath(_gun, _target) {
            let position = this.position.copy();
            let rotation = this.rotation;
            return () => {
                L12_AsteroidsAddition.crc2.save();
                L12_AsteroidsAddition.crc2.beginPath();
                L12_AsteroidsAddition.crc2.translate(position.x, position.y);
                L12_AsteroidsAddition.crc2.rotate(rotation);
                L12_AsteroidsAddition.crc2.moveTo(_gun.position.x, _gun.position.y);
                L12_AsteroidsAddition.crc2.restore();
                L12_AsteroidsAddition.crc2.lineTo(_target.x, _target.y);
            };
        }
    }
    Ship.acceleration = 10;
    Ship.timeToChargeFully = 1;
    L12_AsteroidsAddition.Ship = Ship;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Ship.js.map