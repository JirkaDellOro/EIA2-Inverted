"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_eiaSteroids;
(function (L12_eiaSteroids) {
    /**
     * Describes an asteroid with individual size and shape (type)
     */
    class Asteroid extends L12_eiaSteroids.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.velocity = L12_eiaSteroids.Vector.getRandom(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
            this.hitRadius = 50 * _size;
        }
        draw() {
            L12_eiaSteroids.crc2.save();
            L12_eiaSteroids.crc2.translate(this.position.x, this.position.y);
            L12_eiaSteroids.crc2.scale(this.size, this.size);
            L12_eiaSteroids.crc2.translate(-50, -50);
            L12_eiaSteroids.crc2.lineWidth = L12_eiaSteroids.linewidth / this.size;
            L12_eiaSteroids.crc2.stroke(L12_eiaSteroids.asteroidPaths[this.type]);
            L12_eiaSteroids.crc2.restore();
        }
        hit() {
            super.hit();
            let event = new CustomEvent(L12_eiaSteroids.ASTEROID_EVENT.ASTEROID_HIT, { detail: { asteroid: this } });
            L12_eiaSteroids.crc2.canvas.dispatchEvent(event);
        }
    }
    L12_eiaSteroids.Asteroid = Asteroid;
})(L12_eiaSteroids || (L12_eiaSteroids = {}));
//# sourceMappingURL=Asteroid.js.map