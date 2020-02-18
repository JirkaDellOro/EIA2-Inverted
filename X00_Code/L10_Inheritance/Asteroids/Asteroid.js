"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    class Asteroid extends L10_AsteroidsInheritance.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Asteroid constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_AsteroidsInheritance.Vector(0, 0);
            this.velocity = new L10_AsteroidsInheritance.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            // console.log("Asteroid draw");
            L10_AsteroidsInheritance.crc2.save();
            L10_AsteroidsInheritance.crc2.translate(this.position.x, this.position.y);
            L10_AsteroidsInheritance.crc2.scale(this.size, this.size);
            L10_AsteroidsInheritance.crc2.translate(-50, -50);
            L10_AsteroidsInheritance.crc2.lineWidth = L10_AsteroidsInheritance.linewidth / this.size;
            L10_AsteroidsInheritance.crc2.stroke(L10_AsteroidsInheritance.asteroidPaths[this.type]);
            L10_AsteroidsInheritance.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new L10_AsteroidsInheritance.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L10_AsteroidsInheritance.Asteroid = Asteroid;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Asteroid.js.map