"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Ufo extends L11_AsteroidsAdvanced.Moveable {
        constructor() {
            super();
            this.position = new L11_AsteroidsAdvanced.Vector(0, Math.random() * L11_AsteroidsAdvanced.crc2.canvas.height);
            this.velocity = new L11_AsteroidsAdvanced.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Ufo.speed);
            this.hitRadius = 25;
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
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
        }
        shoot() {
            console.log("Ufo shoots");
            let event = new CustomEvent(L11_AsteroidsAdvanced.ASTEROID_EVENT.UFO_SHOOTS, { detail: { ufo: this } });
            L11_AsteroidsAdvanced.crc2.canvas.dispatchEvent(event);
        }
    }
    Ufo.speed = 50;
    L11_AsteroidsAdvanced.Ufo = Ufo;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Ufo.js.map