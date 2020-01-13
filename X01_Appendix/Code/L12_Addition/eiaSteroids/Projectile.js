"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_eiaSteroids;
(function (L12_eiaSteroids) {
    /**
     * Describes a small projectile as fired by the [[Ufo]]s
     */
    class Projectile extends L12_eiaSteroids.Moveable {
        constructor(_position, _velocity) {
            super(_position);
            this.lifetime = Projectile.maxLifetime;
            // console.log("Projectile constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            // console.log("Projectile draw");
            L12_eiaSteroids.crc2.save();
            L12_eiaSteroids.crc2.translate(this.position.x, this.position.y);
            L12_eiaSteroids.crc2.strokeRect(-2, -2, 2, 2);
            L12_eiaSteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    Projectile.maxLifetime = 2;
    L12_eiaSteroids.Projectile = Projectile;
})(L12_eiaSteroids || (L12_eiaSteroids = {}));
//# sourceMappingURL=Projectile.js.map