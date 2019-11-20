"use strict";
var L11_AsteroidsAdvanced_2;
(function (L11_AsteroidsAdvanced_2) {
    class Ufo extends L11_AsteroidsAdvanced_2.Moveable {
        constructor() {
            super(25);
            this.speed = 50;
            this.position = new L11_AsteroidsAdvanced_2.Vector(0, Math.random() * L11_AsteroidsAdvanced_2.crc2.canvas.height);
            // let speed: number = 100; // zuerst hier implementieren, dann als Objekt-Attribut, schließlich als Klassenattribut
            this.velocity = new L11_AsteroidsAdvanced_2.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(this.speed);
        }
        draw() {
            L11_AsteroidsAdvanced_2.crc2.save();
            L11_AsteroidsAdvanced_2.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced_2.crc2.translate(-30, -17);
            L11_AsteroidsAdvanced_2.crc2.stroke(L11_AsteroidsAdvanced_2.ufoPath);
            L11_AsteroidsAdvanced_2.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.01)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = this.speed * (Math.floor(Math.random() * 3) - 1);
        }
        shoot() {
            // console.log("Shoot");
            let event = new CustomEvent("ufoShoots", { detail: { ufo: this } });
            L11_AsteroidsAdvanced_2.crc2.canvas.dispatchEvent(event);
        }
    }
    L11_AsteroidsAdvanced_2.Ufo = Ufo;
})(L11_AsteroidsAdvanced_2 || (L11_AsteroidsAdvanced_2 = {}));
//# sourceMappingURL=Ufo.js.map