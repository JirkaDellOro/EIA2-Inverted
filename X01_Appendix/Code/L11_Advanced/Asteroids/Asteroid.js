"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Asteroid extends L11_AsteroidsAdvanced.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.size = _size;
            if (_position) // nach Einführung zweiter Paramter
                this.position = new L11_AsteroidsAdvanced.Vector(_position.x, _position.y);
            else
                this.position = new L11_AsteroidsAdvanced.Vector(0, 0); // nur mit dieser Zeile anfangen
            this.type = Math.floor(Math.random() * 4);
            this.velocity.random(0.1, 0.2);
            this.velocity.scale(L11_AsteroidsAdvanced.crc2.canvas.width);
        }
        draw() {
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.scale(this.size, this.size);
            L11_AsteroidsAdvanced.crc2.translate(-50, -50);
            L11_AsteroidsAdvanced.crc2.lineWidth = 1 / this.size; // erst wenn gesehen wurde, dass die Linienstärke mit der Skalierung schwankt
            L11_AsteroidsAdvanced.crc2.stroke(L11_AsteroidsAdvanced.asteroidPaths[this.type]);
            L11_AsteroidsAdvanced.crc2.restore();
        }
        // erst später implementieren während der Arbeit im Hauptprogramm
        isHit(_test) {
            let radius = 50 * this.size;
            let difference = new L11_AsteroidsAdvanced.Vector(_test.x - this.position.x, _test.y - this.position.y);
            return (Math.abs(difference.x) < radius && Math.abs(difference.y) < radius);
        }
    }
    L11_AsteroidsAdvanced.Asteroid = Asteroid;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Asteroid.js.map