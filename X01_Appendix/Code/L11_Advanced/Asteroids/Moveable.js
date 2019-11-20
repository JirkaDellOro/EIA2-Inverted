"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable constructor");
            this.expendable = false;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_AsteroidsAdvanced.Vector(0, 0);
            this.velocity = new L11_AsteroidsAdvanced.Vector(0, 0);
        }
        move(_timeslice) {
            // console.log("Moveable move");
            let offset = this.velocity.copy();
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
            // console.log("Moveable move");
        }
    }
    L11_AsteroidsAdvanced.Moveable = Moveable;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Moveable.js.map