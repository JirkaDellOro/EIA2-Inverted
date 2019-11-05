namespace L10_Asteroids {
    export class Moveable {
        position: Vector;
        velocity: Vector;
        expendable: boolean = false;

        constructor(_position?: Vector) { // zweiten Parameter erst später einführen
            if (_position) // nach Einführung zweiter Paramter
                this.position = new Vector(_position.x, _position.y);
            else
                this.position = new Vector(0, 0); // nur mit dieser Zeile anfangen

            // set velocity in pixel per second
            this.velocity = new Vector(0, 0);
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
            // defined in subclasses
        }

        // erst später implementieren während der Arbeit im Hauptprogramm
        // isHit(_test: Vector): boolean {
        //     let radius: number = 50 * this.size;
        //     let difference: Vector = new Vector(_test.x - this.position.x, _test.y - this.position.y);
        //     return (Math.abs(difference.x) < radius && Math.abs(difference.y) < radius);
        // }
    }
}