"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Asteroid extends L10_Asteroids.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.size = _size;
            if (_position) // nach Einführung zweiter Paramter
                this.position = new L10_Asteroids.Vector(_position.x, _position.y);
            else
                this.position = new L10_Asteroids.Vector(0, 0); // nur mit dieser Zeile anfangen
            this.type = Math.floor(Math.random() * 4);
            this.velocity.random(0.1, 0.2);
            this.velocity.scale(L10_Asteroids.crc2.canvas.width);
        }
        draw() {
            L10_Asteroids.crc2.save();
            L10_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Asteroids.crc2.scale(this.size, this.size);
            L10_Asteroids.crc2.translate(-50, -50);
            L10_Asteroids.crc2.lineWidth = 1 / this.size; // erst wenn gesehen wurde, dass die Linienstärke mit der Skalierung schwankt
            L10_Asteroids.crc2.stroke(L10_Asteroids.asteroidPaths[this.type]);
            L10_Asteroids.crc2.restore();
        }
        // erst später implementieren während der Arbeit im Hauptprogramm
        isHit(_test) {
            let radius = 50 * this.size;
            let difference = new L10_Asteroids.Vector(_test.x - this.position.x, _test.y - this.position.y);
            return (Math.abs(difference.x) < radius && Math.abs(difference.y) < radius);
        }
    }
    L10_Asteroids.Asteroid = Asteroid;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map