"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * Describes a Ufo.
     * Ufo changes direction and dispatches events to the main program to create [[Projectile]]s
     */
    class Ufo extends eiaSteroids.Moveable {
        static speed = 50;
        constructor() {
            super();
            this.position = new eiaSteroids.Vector(0, Math.random() * eiaSteroids.crc2.canvas.height);
            this.velocity = new eiaSteroids.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Ufo.speed);
            this.hitRadius = 25;
        }
        draw() {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            this.scale();
            eiaSteroids.crc2.translate(-30, -17);
            eiaSteroids.crc2.stroke(eiaSteroids.ufoPath);
            eiaSteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
            this.playSound();
        }
        playSound() {
            eiaSteroids.Sound.play("saucerBig");
        }
        scale() {
            // to be overriden by the small Ufo
        }
        shoot() {
            let event = new CustomEvent(eiaSteroids.ASTEROID_EVENT.UFO_SHOOTS, { detail: { ufo: this } });
            eiaSteroids.crc2.canvas.dispatchEvent(event);
        }
    }
    eiaSteroids.Ufo = Ufo;
    class UfoSmall extends Ufo {
        playSound() {
            eiaSteroids.Sound.play("saucerSmall");
        }
        scale() {
            eiaSteroids.crc2.scale(0.5, 0.5);
            eiaSteroids.crc2.lineWidth = eiaSteroids.linewidth * 2;
        }
    }
    eiaSteroids.UfoSmall = UfoSmall;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Ufo.js.map