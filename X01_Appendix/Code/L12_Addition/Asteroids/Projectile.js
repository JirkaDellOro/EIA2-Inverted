"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    /**
     * Describes a small projectile as fired by the [[Ufo]]s
     */
    class Projectile extends L12_AsteroidsAddition.Moveable {
        constructor(_position, _velocity) {
            super(_position);
            this.lifetime = Projectile.maxLifetime;
            // console.log("Projectile constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            // console.log("Projectile draw");
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.translate(this.position.x, this.position.y);
            L12_AsteroidsAddition.crc2.strokeRect(-2, -2, 2, 2);
            L12_AsteroidsAddition.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    Projectile.maxLifetime = 2;
    L12_AsteroidsAddition.Projectile = Projectile;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Projectile.js.map