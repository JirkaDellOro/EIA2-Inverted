"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_eiaSteroids;
(function (L12_eiaSteroids) {
    /**
     * The area of destruction the laser gun creates. The higher the charge, the bigger and more robust it is.
     */
    class Hotspot extends L12_eiaSteroids.Projectile {
        constructor(_position, _charge) {
            super(_position, new L12_eiaSteroids.Vector());
            this.charge = Math.max(0, Math.min(1, _charge));
            this.maxLifetime = this.lifetime = Hotspot.maxLifetime * this.charge;
            this.hitRadius = 5 + 40 * this.charge;
        }
        draw() {
            let ratio = this.lifetime / this.maxLifetime;
            if (ratio < 0)
                return;
            L12_eiaSteroids.crc2.save();
            L12_eiaSteroids.crc2.translate(this.position.x, this.position.y);
            L12_eiaSteroids.crc2.beginPath();
            L12_eiaSteroids.crc2.fillStyle = L12_eiaSteroids.getColorCharge(this.charge, ratio);
            L12_eiaSteroids.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            L12_eiaSteroids.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            L12_eiaSteroids.crc2.fill();
            L12_eiaSteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
        hit() {
            this.lifetime -= Hotspot.maxLifetime / 5;
            this.expendable = this.lifetime < 0;
        }
    }
    Hotspot.maxLifetime = 2;
    L12_eiaSteroids.Hotspot = Hotspot;
})(L12_eiaSteroids || (L12_eiaSteroids = {}));
//# sourceMappingURL=Hotspot.js.map