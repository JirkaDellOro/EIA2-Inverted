"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Projectile extends L10_Asteroids.Moveable {
        constructor(_position, _velocity) {
            super(_position);
            this.position = new L10_Asteroids.Vector(_position.x, _position.y);
            this.velocity = new L10_Asteroids.Vector(_velocity.x, _velocity.y);
            this.range = 2;
        }
        draw() {
            L10_Asteroids.crc2.save();
            L10_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Asteroids.crc2.lineWidth = 2;
            L10_Asteroids.crc2.strokeRect(-1, -1, 2, 2);
            L10_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.range -= _timeslice;
            if (this.range < 0) {
                this.velocity = new L10_Asteroids.Vector(0, 0);
            }
        }
    }
    L10_Asteroids.Projectile = Projectile;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Projectile.js.map