"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * Describes a small projectile as fired by the [[Ufo]]s
     */
    class Projectile extends eiaSteroids.Moveable {
        constructor(_position, _velocity) {
            super(_position);
            this.lifetime = Projectile.maxLifetime;
            this.velocity = _velocity.copy();
        }
        draw() {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            eiaSteroids.crc2.strokeRect(-2, -2, 2, 2);
            eiaSteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    Projectile.maxLifetime = 2;
    eiaSteroids.Projectile = Projectile;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Projectile.js.map