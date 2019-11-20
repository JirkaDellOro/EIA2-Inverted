"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Asteroid extends L11_AsteroidsAdvanced.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Asteroid constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_AsteroidsAdvanced.Vector(0, 0);
            this.velocity = new L11_AsteroidsAdvanced.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
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
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new L11_AsteroidsAdvanced.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L11_AsteroidsAdvanced.Asteroid = Asteroid;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Asteroid.js.map