"use strict";
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    class Ship extends L12_AsteroidsAddition.Moveable {
        constructor(_position) {
            super(_position);
            // private static maxCharge: number = 1;
            // private charge: number = 0;
            this.rotation = 0;
            this.exhaust = false;
            this.velocity = new L12_AsteroidsAddition.Vector();
            this.hitRadius = 10;
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
            if (this.exhaust) {
                L12_AsteroidsAddition.crc2.moveTo(0, 0);
                L12_AsteroidsAddition.crc2.lineTo(-7, 5);
                L12_AsteroidsAddition.crc2.lineTo(-15, 0);
                L12_AsteroidsAddition.crc2.lineTo(-7, -5);
                L12_AsteroidsAddition.crc2.closePath();
                L12_AsteroidsAddition.crc2.stroke();
            }
            L12_AsteroidsAddition.crc2.restore();
            this.exhaust = false;
        }
        move(_timeslice) {
            this.velocity.scale(0.99);
            super.move(_timeslice);
        }
    }
    Ship.acceleration = 10;
    L12_AsteroidsAddition.Ship = Ship;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Ship.js.map