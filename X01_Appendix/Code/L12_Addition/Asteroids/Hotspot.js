"use strict";
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    class Hotspot extends L12_AsteroidsAddition.Projectile {
        constructor(_position) {
            super(_position, new L12_AsteroidsAddition.Vector());
            this.lifetime = Hotspot.maxLifetime;
            this.hitRadius = 25;
        }
        draw() {
            let ratio = this.lifetime / Hotspot.maxLifetime;
            if (ratio < 0)
                return;
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.translate(this.position.x, this.position.y);
            L12_AsteroidsAddition.crc2.beginPath();
            L12_AsteroidsAddition.crc2.fillStyle = "HSL(180, 100%, 70%, " + 0.7 * ratio + ")";
            L12_AsteroidsAddition.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            L12_AsteroidsAddition.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            L12_AsteroidsAddition.crc2.fill();
            L12_AsteroidsAddition.crc2.restore();
        }
        hit() {
            this.lifetime -= Hotspot.maxLifetime / 3;
            this.expendable = this.lifetime < 0;
            console.log("Hotspot hit, remaining range: ", this.lifetime);
        }
    }
    Hotspot.maxLifetime = 0.5;
    L12_AsteroidsAddition.Hotspot = Hotspot;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Hotspot.js.map