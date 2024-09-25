"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * The area of destruction the laser gun creates. The higher the charge, the bigger and more robust it is.
     */
    class Hotspot extends eiaSteroids.Projectile {
        static maxLifetime = 2;
        maxLifetime;
        charge;
        constructor(_position, _charge) {
            super(_position, new eiaSteroids.Vector());
            this.charge = Math.max(0, Math.min(1, _charge));
            this.maxLifetime = this.lifetime = Hotspot.maxLifetime * this.charge;
            this.hitRadius = 5 + 40 * this.charge;
        }
        draw() {
            let ratio = this.lifetime / this.maxLifetime;
            if (ratio < 0)
                return;
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            eiaSteroids.crc2.beginPath();
            eiaSteroids.crc2.fillStyle = eiaSteroids.getColorCharge(this.charge, ratio);
            eiaSteroids.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            eiaSteroids.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            eiaSteroids.crc2.fill();
            eiaSteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
        hit() {
            this.lifetime -= Hotspot.maxLifetime / 5;
            this.expendable = this.lifetime < 0;
        }
    }
    eiaSteroids.Hotspot = Hotspot;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Hotspot.js.map