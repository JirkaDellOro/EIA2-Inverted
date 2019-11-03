"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Asteroid {
        constructor(_size, _position) {
            this.size = _size;
            if (_position) // nach Einführung zweiter Paramter
                this.position = new L09_Asteroids.Vector(_position.x, _position.y);
            else
                this.position = new L09_Asteroids.Vector(0, 0); // nur mit dieser Zeile anfangen
            this.type = Math.floor(Math.random() * 4);
            // set velocity in pixel per second
            this.velocity = new L09_Asteroids.Vector(0, 0);
            this.velocity.random(0.1, 0.2);
            this.velocity.scale(L09_Asteroids.crc2.canvas.width);
        }
        move(_timeslice) {
            let offset = new L09_Asteroids.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Asteroids.crc2.canvas.height;
            if (this.position.x > L09_Asteroids.crc2.canvas.width)
                this.position.x -= L09_Asteroids.crc2.canvas.width;
            if (this.position.y > L09_Asteroids.crc2.canvas.height)
                this.position.y -= L09_Asteroids.crc2.canvas.height;
        }
        draw() {
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.scale(this.size, this.size);
            L09_Asteroids.crc2.translate(-50, -50);
            L09_Asteroids.crc2.lineWidth = 1 / this.size; // erst wenn gesehen wurde, dass die Linienstärke mit der Skalierung schwankt
            L09_Asteroids.crc2.stroke(L09_Asteroids.asteroidPaths[this.type]);
            L09_Asteroids.crc2.restore();
        }
        // erst später implementieren während der Arbeit im Hauptprogramm
        isHit(_test) {
            let radius = 50 * this.size;
            let difference = new L09_Asteroids.Vector(_test.x - this.position.x, _test.y - this.position.y);
            return (Math.abs(difference.x) < radius && Math.abs(difference.y) < radius);
        }
    }
    L09_Asteroids.Asteroid = Asteroid;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map