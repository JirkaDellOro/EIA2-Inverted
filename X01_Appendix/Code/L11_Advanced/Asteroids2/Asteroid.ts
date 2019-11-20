namespace L11_AsteroidsAdvanced_2 {
    export class Asteroid extends Moveable {
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) {
            super(50 * _size, _position);
            this.size = _size;
            this.type = Math.floor(Math.random() * 4);

            this.velocity.random(0.1, 0.2);
            this.velocity.scale(crc2.canvas.width);
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.lineWidth = 1 / this.size;   // erst wenn gesehen wurde, dass die Linienstärke mit der Skalierung schwankt
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }
        
        hit(): void {
            // console.log("Shoot");
            super.hit();
            let event: CustomEvent = new CustomEvent("asteroidHit", {detail: {asteroid: this}});
            crc2.canvas.dispatchEvent(event);
        }

        // erst später implementieren während der Arbeit im Hauptprogramm
        isHit(_test: Vector): boolean {
            let radius: number = 50 * this.size;
            let difference: Vector = new Vector(_test.x - this.position.x, _test.y - this.position.y);
            return (Math.abs(difference.x) < radius && Math.abs(difference.y) < radius);
        }
    }
}