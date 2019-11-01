namespace L09_Asteroids {
    export class Asteroid {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            this.size = _size;
            this.position = new Vector(0, 0);
            this.type = Math.floor(Math.random() * 4);
            this.velocity = new Vector(Math.random() * 10 - 5, Math.random() * 10 - 5);
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
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
    }
}