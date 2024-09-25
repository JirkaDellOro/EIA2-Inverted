"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * The base class for all moving objects. Implements standard methods for moving and hit detection
     */
    class Moveable {
        position;
        velocity;
        expendable = false;
        hitRadius = 0;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new eiaSteroids.Vector();
            this.velocity = new eiaSteroids.Vector();
        }
        isHitBy(_partner) {
            let difference = eiaSteroids.Vector.getDifference(this.position, _partner.position);
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
                this.position.x += eiaSteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += eiaSteroids.crc2.canvas.height;
            if (this.position.x > eiaSteroids.crc2.canvas.width)
                this.position.x -= eiaSteroids.crc2.canvas.width;
            if (this.position.y > eiaSteroids.crc2.canvas.height)
                this.position.y -= eiaSteroids.crc2.canvas.height;
        }
    }
    eiaSteroids.Moveable = Moveable;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Moveable.js.map