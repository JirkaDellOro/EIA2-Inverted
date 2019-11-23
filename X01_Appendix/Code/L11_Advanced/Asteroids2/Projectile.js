"use strict";
var L11_AsteroidsAdvanced_2;
(function (L11_AsteroidsAdvanced_2) {
    class Projectile extends L11_AsteroidsAdvanced_2.Moveable {
        constructor(_position, _velocity) {
            super(4, _position);
            this.velocity = new L11_AsteroidsAdvanced_2.Vector(_velocity.x, _velocity.y);
            this.lifetime = Projectile.lifetime;
        }
        draw() {
            L11_AsteroidsAdvanced_2.crc2.save();
            L11_AsteroidsAdvanced_2.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced_2.crc2.lineWidth = 2;
            L11_AsteroidsAdvanced_2.crc2.strokeRect(-1, -1, 2, 2);
            L11_AsteroidsAdvanced_2.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0) {
                this.velocity = new L11_AsteroidsAdvanced_2.Vector(0, 0);
                this.expendable = true;
            }
        }
    }
    Projectile.lifetime = 2;
    L11_AsteroidsAdvanced_2.Projectile = Projectile;
})(L11_AsteroidsAdvanced_2 || (L11_AsteroidsAdvanced_2 = {}));
//# sourceMappingURL=Projectile.js.map