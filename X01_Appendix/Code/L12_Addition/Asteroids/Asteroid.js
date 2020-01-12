"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    /**
     * Describes an asteroid with individual size and shape (type)
     */
    class Asteroid extends L12_AsteroidsAddition.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.velocity = L12_AsteroidsAddition.Vector.getRandom(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
            this.hitRadius = 50 * _size;
        }
        draw() {
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.translate(this.position.x, this.position.y);
            L12_AsteroidsAddition.crc2.scale(this.size, this.size);
            L12_AsteroidsAddition.crc2.translate(-50, -50);
            L12_AsteroidsAddition.crc2.lineWidth = L12_AsteroidsAddition.linewidth / this.size;
            L12_AsteroidsAddition.crc2.stroke(L12_AsteroidsAddition.asteroidPaths[this.type]);
            L12_AsteroidsAddition.crc2.restore();
        }
        hit() {
            super.hit();
            let event = new CustomEvent(L12_AsteroidsAddition.ASTEROID_EVENT.ASTEROID_HIT, { detail: { asteroid: this } });
            L12_AsteroidsAddition.crc2.canvas.dispatchEvent(event);
        }
    }
    L12_AsteroidsAddition.Asteroid = Asteroid;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Asteroid.js.map