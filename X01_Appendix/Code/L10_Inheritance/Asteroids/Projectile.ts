namespace L10_AsteroidsInheritance {
    export class Projectile extends Moveable {
        range: number;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position);
            this.velocity = new Vector(_velocity.x, _velocity.y);
            this.range = 2;
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.lineWidth = 2;
            crc2.strokeRect(-1, -1, 2, 2);
            crc2.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
            this.range -= _timeslice;

            if (this.range < 0) {
                this.velocity = new Vector(0, 0);
                this.expendable = true;
            }
        }
    }
}