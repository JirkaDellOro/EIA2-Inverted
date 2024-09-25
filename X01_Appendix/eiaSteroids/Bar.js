"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * Decribes a meter bar to display in a user interface. Also used for the laser guns on the spaceship
     */
    class Bar {
        size = new eiaSteroids.Vector(100, 10);
        position;
        strokeStyle = "white";
        fillStyle = "green";
        maxValue;
        constructor(_position, _size, _maxValue = 1) {
            this.position = _position.copy();
            this.size = _size.copy();
            this.maxValue = _maxValue;
        }
        draw(_value, _fillStyle, _strokeStyle) {
            eiaSteroids.crc2.beginPath();
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            this.fillStyle = _fillStyle || this.fillStyle;
            this.strokeStyle = _strokeStyle || this.strokeStyle;
            eiaSteroids.crc2.fillStyle = this.fillStyle;
            eiaSteroids.crc2.strokeStyle = this.strokeStyle;
            let normValue = Math.max(0, Math.min(this.maxValue, _value)) / this.maxValue;
            eiaSteroids.crc2.fillRect(0, -this.size.y / 2, this.size.x * normValue, this.size.y);
            eiaSteroids.crc2.strokeRect(0, -this.size.y / 2, this.size.x, this.size.y);
            eiaSteroids.crc2.restore();
        }
    }
    eiaSteroids.Bar = Bar;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Bar.js.map