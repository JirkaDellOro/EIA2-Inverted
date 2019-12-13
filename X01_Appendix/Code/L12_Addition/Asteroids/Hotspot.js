"use strict";
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    class Hotspot extends L12_AsteroidsAddition.Projectile {
        constructor(_position, _start) {
            super(_position, new L12_AsteroidsAddition.Vector());
            this.laserLifetime = 0.1;
            this.lifetime = Hotspot.maxLifetime;
            this.hitRadius = 25;
            this.start = _start.copy();
        }
        draw() {
            let ratio = this.lifetime / Hotspot.maxLifetime;
            if (ratio < 0)
                return;
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.translate(this.position.x, this.position.y);
            L12_AsteroidsAddition.crc2.beginPath();
            L12_AsteroidsAddition.crc2.fillStyle = "HSL(180, 100%, 70%, " + 0.7 * ratio + ")";
            L12_AsteroidsAddition.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            L12_AsteroidsAddition.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            L12_AsteroidsAddition.crc2.fill();
            if (this.laserLifetime > 0.02) {
                let start = L12_AsteroidsAddition.Vector.getDifference(this.start, this.position);
                L12_AsteroidsAddition.crc2.strokeStyle = "HSL(180, 100%, 70%, 0.7)";
                L12_AsteroidsAddition.crc2.beginPath();
                L12_AsteroidsAddition.crc2.moveTo(0, 0);
                L12_AsteroidsAddition.crc2.lineTo(start.x, start.y);
                L12_AsteroidsAddition.crc2.stroke();
            }
            L12_AsteroidsAddition.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.laserLifetime *= 0.5;
        }
        hit() {
            this.lifetime -= Hotspot.maxLifetime / 3;
            this.expendable = this.lifetime < 0;
            console.log("Hotspot hit, remaining range: ", this.lifetime);
        }
    }
    Hotspot.maxLifetime = 0.5;
    L12_AsteroidsAddition.Hotspot = Hotspot;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Hotspot.js.map