"use strict";
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    class Hotspot extends L12_AsteroidsAddition.Projectile {
        constructor(_position, _charge) {
            super(_position, new L12_AsteroidsAddition.Vector());
            // console.log("Hotspot constructor");
            this.charge = Math.max(0, Math.min(1, _charge));
            this.maxLifetime = this.lifetime = Hotspot.maxLifetime * this.charge;
            this.hitRadius = 5 + 40 * this.charge;
        }
        draw() {
            let ratio = this.lifetime / this.maxLifetime;
            if (ratio < 0)
                return;
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.translate(this.position.x, this.position.y);
            L12_AsteroidsAddition.crc2.beginPath();
            L12_AsteroidsAddition.crc2.fillStyle = L12_AsteroidsAddition.getColorCharge(this.charge, ratio);
            // console.log(getColorCharge(this.charge, ratio));
            L12_AsteroidsAddition.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            L12_AsteroidsAddition.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            L12_AsteroidsAddition.crc2.fill();
            L12_AsteroidsAddition.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
        hit() {
            this.lifetime -= Hotspot.maxLifetime / 5;
            this.expendable = this.lifetime < 0;
            // console.log("Hotspot hit, remaining range: ", this.lifetime);
        }
    }
    Hotspot.maxLifetime = 2;
    L12_AsteroidsAddition.Hotspot = Hotspot;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Hotspot.js.map