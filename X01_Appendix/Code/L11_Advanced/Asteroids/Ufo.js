"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Ufo extends L11_AsteroidsAdvanced.Moveable {
        constructor() {
            super();
            this.speed = 50;
            this.position = new L11_AsteroidsAdvanced.Vector(0, Math.random() * L11_AsteroidsAdvanced.crc2.canvas.height);
            this.velocity = new L11_AsteroidsAdvanced.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(this.speed);
        }
        draw() {
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.translate(-30, -17);
            L11_AsteroidsAdvanced.crc2.stroke(L11_AsteroidsAdvanced.ufoPath);
            L11_AsteroidsAdvanced.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.01)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = this.speed * (Math.floor(Math.random() * 3) - 1);
        }
        shoot() {
            // implement these two lines, start with emtpy function
            let event = new CustomEvent("ufoShoots", { detail: { ufo: this } });
            L11_AsteroidsAdvanced.crc2.canvas.dispatchEvent(event);
        }
    }
    L11_AsteroidsAdvanced.Ufo = Ufo;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Ufo.js.map