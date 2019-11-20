"use strict";
var L11_AsteroidsAdvanced_2;
(function (L11_AsteroidsAdvanced_2) {
    class Asteroid extends L11_AsteroidsAdvanced_2.Moveable {
        constructor(_size, _position) {
            super(50 * _size, _position);
            this.size = _size;
            this.type = Math.floor(Math.random() * 4);
            this.velocity.random(0.1, 0.2);
            this.velocity.scale(L11_AsteroidsAdvanced_2.crc2.canvas.width);
        }
        draw() {
            L11_AsteroidsAdvanced_2.crc2.save();
            L11_AsteroidsAdvanced_2.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced_2.crc2.scale(this.size, this.size);
            L11_AsteroidsAdvanced_2.crc2.translate(-50, -50);
            L11_AsteroidsAdvanced_2.crc2.lineWidth = 1 / this.size; // erst wenn gesehen wurde, dass die Linienstärke mit der Skalierung schwankt
            L11_AsteroidsAdvanced_2.crc2.stroke(L11_AsteroidsAdvanced_2.asteroidPaths[this.type]);
            L11_AsteroidsAdvanced_2.crc2.restore();
        }
        hit() {
            // console.log("Shoot");
            super.hit();
            let event = new CustomEvent("asteroidHit", { detail: { asteroid: this } });
            L11_AsteroidsAdvanced_2.crc2.canvas.dispatchEvent(event);
        }
        // erst später implementieren während der Arbeit im Hauptprogramm
        isHit(_test) {
            let radius = 50 * this.size;
            let difference = new L11_AsteroidsAdvanced_2.Vector(_test.x - this.position.x, _test.y - this.position.y);
            return (Math.abs(difference.x) < radius && Math.abs(difference.y) < radius);
        }
    }
    L11_AsteroidsAdvanced_2.Asteroid = Asteroid;
})(L11_AsteroidsAdvanced_2 || (L11_AsteroidsAdvanced_2 = {}));
//# sourceMappingURL=Asteroid.js.map