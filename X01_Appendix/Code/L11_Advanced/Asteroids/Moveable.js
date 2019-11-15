"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Moveable {
        constructor(_hitRadius = 0, _position) {
            this.expendable = false;
            this.hitRadius = 0;
            this.hitRadius = _hitRadius;
            if (_position) // nach Einführung zweiter Paramter
                this.position = new L11_AsteroidsAdvanced.Vector(_position.x, _position.y);
            else
                this.position = new L11_AsteroidsAdvanced.Vector(0, 0); // nur mit dieser Zeile anfangen
            // set velocity in pixel per second
            this.velocity = new L11_AsteroidsAdvanced.Vector(0, 0);
        }
        isHitBy(_partner) {
            let difference = L11_AsteroidsAdvanced.Vector.difference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false; // no collision
            return true;
        }
        hit() {
            console.log("Hit: ", this);
            this.expendable = true;
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
    }
    L11_AsteroidsAdvanced.Moveable = Moveable;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Moveable.js.map