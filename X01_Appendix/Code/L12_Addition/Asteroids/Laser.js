"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    /**
     * The laser beam pointing from the [[Gun]] to the [[Hotspot]]
     */
    class Laser extends L12_AsteroidsAddition.Projectile {
        constructor(_path, _charge) {
            super(new L12_AsteroidsAddition.Vector(), new L12_AsteroidsAddition.Vector());
            this.lifetime = Laser.maxLifetime;
            this.charge = _charge;
            this.path = _path;
        }
        draw() {
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.strokeStyle = L12_AsteroidsAddition.getColorCharge(this.charge, this.lifetime / Laser.maxLifetime);
            this.path();
            L12_AsteroidsAddition.crc2.stroke();
            L12_AsteroidsAddition.crc2.restore();
        }
    }
    Laser.maxLifetime = 0.1;
    L12_AsteroidsAddition.Laser = Laser;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Laser.js.map