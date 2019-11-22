namespace L11_AsteroidsAdvanced_2 {
    export class Ufo extends Moveable {
        speed: number = 50;

        constructor() {
            super(25);
            this.position = new Vector(0, Math.random() * crc2.canvas.height);

            // let speed: number = 100; // zuerst hier implementieren, dann als Objekt-Attribut, schließlich als Klassenattribut
            this.velocity = new Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(this.speed);
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.translate(-30, -17);
            crc2.stroke(ufoPath);
            crc2.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
            if (Math.random() < 0.01)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = this.speed * (Math.floor(Math.random() * 3) - 1);
        }

        shoot(): void {
            let event: CustomEvent = new CustomEvent("ufoShoots", {detail: {ufo: this}});
            crc2.canvas.dispatchEvent(event);
        }
    }
}