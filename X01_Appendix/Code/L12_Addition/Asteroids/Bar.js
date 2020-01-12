"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    /**
     * Decribes a meter bar to display in a user interface. Also used for the laser guns on the spaceship
     */
    class Bar {
        constructor(_position, _size, _maxValue = 1) {
            this.size = new L12_AsteroidsAddition.Vector(100, 10);
            this.strokeStyle = "white";
            this.fillStyle = "green";
            this.position = _position.copy();
            this.size = _size.copy();
            this.maxValue = _maxValue;
        }
        draw(_value, _fillStyle, _strokeStyle) {
            L12_AsteroidsAddition.crc2.beginPath();
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.translate(this.position.x, this.position.y);
            this.fillStyle = _fillStyle || this.fillStyle;
            this.strokeStyle = _strokeStyle || this.strokeStyle;
            L12_AsteroidsAddition.crc2.fillStyle = this.fillStyle;
            L12_AsteroidsAddition.crc2.strokeStyle = this.strokeStyle;
            let normValue = Math.max(0, Math.min(this.maxValue, _value)) / this.maxValue;
            L12_AsteroidsAddition.crc2.fillRect(0, -this.size.y / 2, this.size.x * normValue, this.size.y);
            L12_AsteroidsAddition.crc2.strokeRect(0, -this.size.y / 2, this.size.x, this.size.y);
            L12_AsteroidsAddition.crc2.restore();
        }
    }
    L12_AsteroidsAddition.Bar = Bar;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Bar.js.map