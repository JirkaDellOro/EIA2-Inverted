"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Moveable {
        constructor(_position) {
            this.expendable = false;
            if (_position) // nach Einführung zweiter Paramter
                this.position = new L11_AsteroidsAdvanced.Vector(_position.x, _position.y);
            else
                this.position = new L11_AsteroidsAdvanced.Vector(0, 0); // nur mit dieser Zeile anfangen
            // set velocity in pixel per second
            this.velocity = new L11_AsteroidsAdvanced.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = new L11_AsteroidsAdvanced.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_AsteroidsAdvanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_AsteroidsAdvanced.crc2.canvas.height;
            if (this.position.x > L11_AsteroidsAdvanced.crc2.canvas.width)
                this.position.x -= L11_AsteroidsAdvanced.crc2.canvas.width;
            if (this.position.y > L11_AsteroidsAdvanced.crc2.canvas.height)
                this.position.y -= L11_AsteroidsAdvanced.crc2.canvas.height;
        }
        draw() {
            // defined in subclasses
        }
    }
    L11_AsteroidsAdvanced.Moveable = Moveable;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Moveable.js.map