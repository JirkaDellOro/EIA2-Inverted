"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_eiaSteroids;
(function (L12_eiaSteroids) {
    /**
     * Describes a Ufo.
     * Ufo changes direction and dispatches events to the main program to create [[Projectile]]s
     */
    class Ufo extends L12_eiaSteroids.Moveable {
        constructor() {
            super();
            this.position = new L12_eiaSteroids.Vector(0, Math.random() * L12_eiaSteroids.crc2.canvas.height);
            this.velocity = new L12_eiaSteroids.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Ufo.speed);
            this.hitRadius = 25;
        }
        draw() {
            L12_eiaSteroids.crc2.save();
            L12_eiaSteroids.crc2.translate(this.position.x, this.position.y);
            L12_eiaSteroids.crc2.translate(-30, -17);
            L12_eiaSteroids.crc2.stroke(L12_eiaSteroids.ufoPath);
            L12_eiaSteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            L12_eiaSteroids.Sound.play("saucerBig");
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
        }
        shoot() {
            let event = new CustomEvent(L12_eiaSteroids.ASTEROID_EVENT.UFO_SHOOTS, { detail: { ufo: this } });
            L12_eiaSteroids.crc2.canvas.dispatchEvent(event);
        }
    }
    Ufo.speed = 50;
    L12_eiaSteroids.Ufo = Ufo;
})(L12_eiaSteroids || (L12_eiaSteroids = {}));
//# sourceMappingURL=Ufo.js.map