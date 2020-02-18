"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Asteroid extends L11_AsteroidsAdvanced.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Asteroid constructor");
            this.velocity = L11_AsteroidsAdvanced.Vector.getRandom(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
            this.hitRadius = 50 * _size;
        }
        draw() {
            // console.log("Asteroid draw");
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.scale(this.size, this.size);
            L11_AsteroidsAdvanced.crc2.translate(-50, -50);
            L11_AsteroidsAdvanced.crc2.lineWidth = L11_AsteroidsAdvanced.linewidth / this.size;
            L11_AsteroidsAdvanced.crc2.stroke(L11_AsteroidsAdvanced.asteroidPaths[this.type]);
            L11_AsteroidsAdvanced.crc2.restore();
        }
        hit() {
            super.hit();
            let event = new CustomEvent(L11_AsteroidsAdvanced.ASTEROID_EVENT.ASTEROID_HIT, { detail: { asteroid: this } });
            L11_AsteroidsAdvanced.crc2.canvas.dispatchEvent(event);
        }
    }
    L11_AsteroidsAdvanced.Asteroid = Asteroid;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Asteroid.js.map