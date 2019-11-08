"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    class Projectile extends L10_AsteroidsInheritance.Moveable {
        constructor(_position, _velocity) {
            super(_position);
            this.velocity = new L10_AsteroidsInheritance.Vector(_velocity.x, _velocity.y);
            this.range = 2;
        }
        draw() {
            L10_AsteroidsInheritance.crc2.save();
            L10_AsteroidsInheritance.crc2.translate(this.position.x, this.position.y);
            L10_AsteroidsInheritance.crc2.lineWidth = 2;
            L10_AsteroidsInheritance.crc2.strokeRect(-1, -1, 2, 2);
            L10_AsteroidsInheritance.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.range -= _timeslice;
            if (this.range < 0) {
                this.velocity = new L10_AsteroidsInheritance.Vector(0, 0);
                this.expendable = true;
            }
        }
    }
    L10_AsteroidsInheritance.Projectile = Projectile;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Projectile.js.map