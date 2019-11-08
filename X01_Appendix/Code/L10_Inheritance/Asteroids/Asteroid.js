"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    class Asteroid extends L10_AsteroidsInheritance.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.size = _size;
            this.type = Math.floor(Math.random() * 4);
            this.velocity.random(0.1, 0.2);
            this.velocity.scale(L10_AsteroidsInheritance.crc2.canvas.width);
        }
        draw() {
            L10_AsteroidsInheritance.crc2.save();
            L10_AsteroidsInheritance.crc2.translate(this.position.x, this.position.y);
            L10_AsteroidsInheritance.crc2.scale(this.size, this.size);
            L10_AsteroidsInheritance.crc2.translate(-50, -50);
            L10_AsteroidsInheritance.crc2.lineWidth = 1 / this.size; // erst wenn gesehen wurde, dass die Linienstärke mit der Skalierung schwankt
            L10_AsteroidsInheritance.crc2.stroke(L10_AsteroidsInheritance.asteroidPaths[this.type]);
            L10_AsteroidsInheritance.crc2.restore();
        }
        // erst später implementieren während der Arbeit im Hauptprogramm
        isHit(_test) {
            let radius = 50 * this.size;
            let difference = new L10_AsteroidsInheritance.Vector(_test.x - this.position.x, _test.y - this.position.y);
            return (Math.abs(difference.x) < radius && Math.abs(difference.y) < radius);
        }
    }
    L10_AsteroidsInheritance.Asteroid = Asteroid;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Asteroid.js.map