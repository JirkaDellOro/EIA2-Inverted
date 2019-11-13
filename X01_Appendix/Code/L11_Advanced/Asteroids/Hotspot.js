"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Hotspot extends L11_AsteroidsAdvanced.Projectile {
        constructor(_position) {
            super(_position, new L11_AsteroidsAdvanced.Vector(0, 0));
            this.duration = 0.5;
            this.range = this.duration;
            this.hitRadius = 25;
        }
        draw() {
            let ratio = this.range / this.duration;
            if (ratio < 0)
                return;
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.beginPath();
            L11_AsteroidsAdvanced.crc2.fillStyle = "HSL(180, 100%, 70%, " + 0.7 * ratio + ")";
            L11_AsteroidsAdvanced.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            L11_AsteroidsAdvanced.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            L11_AsteroidsAdvanced.crc2.fill();
            L11_AsteroidsAdvanced.crc2.restore();
        }
        hit() {
            this.range -= this.duration / 4;
            this.expendable = this.range < 0;
            console.log("Hotspot hit, remaining range: ", this.range);
        }
    }
    L11_AsteroidsAdvanced.Hotspot = Hotspot;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Hotspot.js.map