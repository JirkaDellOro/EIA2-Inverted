"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Hotspot extends L11_AsteroidsAdvanced.Projectile {
        constructor(_position) {
            super(_position, new L11_AsteroidsAdvanced.Vector(0, 0));
            this.lifetime = Hotspot.maxLifetime;
            this.hitRadius = 25;
        }
        draw() {
            let ratio = this.lifetime / Hotspot.maxLifetime;
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
            this.lifetime -= Hotspot.maxLifetime / 3;
            this.expendable = this.lifetime < 0;
            console.log("Hotspot hit, remaining range: ", this.lifetime);
        }
    }
    Hotspot.maxLifetime = 0.5;
    L11_AsteroidsAdvanced.Hotspot = Hotspot;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Hotspot.js.map