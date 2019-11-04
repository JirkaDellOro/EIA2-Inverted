"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Moveable {
        constructor(_position) {
            if (_position) // nach Einführung zweiter Paramter
                this.position = new L10_Asteroids.Vector(_position.x, _position.y);
            else
                this.position = new L10_Asteroids.Vector(0, 0); // nur mit dieser Zeile anfangen
            // set velocity in pixel per second
            this.velocity = new L10_Asteroids.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = new L10_Asteroids.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Asteroids.crc2.canvas.height;
            if (this.position.x > L10_Asteroids.crc2.canvas.width)
                this.position.x -= L10_Asteroids.crc2.canvas.width;
            if (this.position.y > L10_Asteroids.crc2.canvas.height)
                this.position.y -= L10_Asteroids.crc2.canvas.height;
        }
        draw() {
            // defined in subclasses
        }
    }
    L10_Asteroids.Moveable = Moveable;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Moveable.js.map