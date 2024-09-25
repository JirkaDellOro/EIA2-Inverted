"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * Describes an asteroid with individual size and shape (type)
     */
    class Asteroid extends eiaSteroids.Moveable {
        size;
        type;
        constructor(_size, _position) {
            super(_position);
            this.velocity = eiaSteroids.Vector.getRandom(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
            this.hitRadius = 50 * _size;
        }
        draw() {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            eiaSteroids.crc2.scale(this.size, this.size);
            eiaSteroids.crc2.translate(-50, -50);
            eiaSteroids.crc2.lineWidth = eiaSteroids.linewidth / this.size;
            eiaSteroids.crc2.stroke(eiaSteroids.asteroidPaths[this.type]);
            eiaSteroids.crc2.restore();
        }
        hit() {
            super.hit();
            let event = new CustomEvent(eiaSteroids.ASTEROID_EVENT.ASTEROID_HIT, { detail: { asteroid: this } });
            eiaSteroids.crc2.canvas.dispatchEvent(event);
        }
    }
    eiaSteroids.Asteroid = Asteroid;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Asteroid.js.map