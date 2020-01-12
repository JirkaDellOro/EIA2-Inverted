"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    /**
     * Describes a Ufo.
     * Ufo changes direction and dispatches events to the main program to create [[Projectile]]s
     */
    class Ufo extends L12_AsteroidsAddition.Moveable {
        constructor() {
            super();
            this.position = new L12_AsteroidsAddition.Vector(0, Math.random() * L12_AsteroidsAddition.crc2.canvas.height);
            this.velocity = new L12_AsteroidsAddition.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Ufo.speed);
            this.hitRadius = 25;
        }
        draw() {
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.translate(this.position.x, this.position.y);
            L12_AsteroidsAddition.crc2.translate(-30, -17);
            L12_AsteroidsAddition.crc2.stroke(L12_AsteroidsAddition.ufoPath);
            L12_AsteroidsAddition.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            L12_AsteroidsAddition.Sound.play("saucerBig");
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
        }
        shoot() {
            let event = new CustomEvent(L12_AsteroidsAddition.ASTEROID_EVENT.UFO_SHOOTS, { detail: { ufo: this } });
            L12_AsteroidsAddition.crc2.canvas.dispatchEvent(event);
        }
    }
    Ufo.speed = 50;
    L12_AsteroidsAddition.Ufo = Ufo;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Ufo.js.map