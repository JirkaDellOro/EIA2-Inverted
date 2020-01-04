"use strict";
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable constructor");
            this.expendable = false;
            this.hitRadius = 0;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L12_AsteroidsAddition.Vector();
            this.velocity = new L12_AsteroidsAddition.Vector();
        }
        isHitBy(_partner) {
            let difference = L12_AsteroidsAddition.Vector.getDifference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false;
            return true;
        }
        hit() {
            // console.log("Hit", this);
            this.expendable = true;
        }
        move(_timeslice) {
            // console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L12_AsteroidsAddition.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L12_AsteroidsAddition.crc2.canvas.height;
            if (this.position.x > L12_AsteroidsAddition.crc2.canvas.width)
                this.position.x -= L12_AsteroidsAddition.crc2.canvas.width;
            if (this.position.y > L12_AsteroidsAddition.crc2.canvas.height)
                this.position.y -= L12_AsteroidsAddition.crc2.canvas.height;
        }
    }
    L12_AsteroidsAddition.Moveable = Moveable;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Moveable.js.map