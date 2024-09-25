"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * The laser beam pointing from the [[Gun]] to the [[Hotspot]]
     */
    class Laser extends eiaSteroids.Projectile {
        static maxLifetime = 0.1;
        charge;
        path;
        constructor(_path, _charge) {
            super(new eiaSteroids.Vector(), new eiaSteroids.Vector());
            this.lifetime = Laser.maxLifetime;
            this.charge = _charge;
            this.path = _path;
        }
        draw() {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.strokeStyle = eiaSteroids.getColorCharge(this.charge, this.lifetime / Laser.maxLifetime);
            this.path();
            eiaSteroids.crc2.stroke();
            eiaSteroids.crc2.restore();
        }
    }
    eiaSteroids.Laser = Laser;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Laser.js.map