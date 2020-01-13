"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_eiaSteroids;
(function (L12_eiaSteroids) {
    /**
     * The laser beam pointing from the [[Gun]] to the [[Hotspot]]
     */
    class Laser extends L12_eiaSteroids.Projectile {
        constructor(_path, _charge) {
            super(new L12_eiaSteroids.Vector(), new L12_eiaSteroids.Vector());
            this.lifetime = Laser.maxLifetime;
            this.charge = _charge;
            this.path = _path;
        }
        draw() {
            L12_eiaSteroids.crc2.save();
            L12_eiaSteroids.crc2.strokeStyle = L12_eiaSteroids.getColorCharge(this.charge, this.lifetime / Laser.maxLifetime);
            this.path();
            L12_eiaSteroids.crc2.stroke();
            L12_eiaSteroids.crc2.restore();
        }
    }
    Laser.maxLifetime = 0.1;
    L12_eiaSteroids.Laser = Laser;
})(L12_eiaSteroids || (L12_eiaSteroids = {}));
//# sourceMappingURL=Laser.js.map