"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_eiaSteroids;
(function (L12_eiaSteroids) {
    /**
     * The base class for all moving objects. Implements standard methods for moving and hit detection
     */
    class Moveable {
        constructor(_position) {
            this.expendable = false;
            this.hitRadius = 0;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L12_eiaSteroids.Vector();
            this.velocity = new L12_eiaSteroids.Vector();
        }
        isHitBy(_partner) {
            let difference = L12_eiaSteroids.Vector.getDifference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false;
            return true;
        }
        hit() {
            this.expendable = true;
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L12_eiaSteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L12_eiaSteroids.crc2.canvas.height;
            if (this.position.x > L12_eiaSteroids.crc2.canvas.width)
                this.position.x -= L12_eiaSteroids.crc2.canvas.width;
            if (this.position.y > L12_eiaSteroids.crc2.canvas.height)
                this.position.y -= L12_eiaSteroids.crc2.canvas.height;
        }
    }
    L12_eiaSteroids.Moveable = Moveable;
})(L12_eiaSteroids || (L12_eiaSteroids = {}));
//# sourceMappingURL=Moveable.js.map