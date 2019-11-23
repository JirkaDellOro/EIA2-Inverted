namespace L11_AsteroidsAdvanced_2 {
    export class Projectile extends Moveable {
        protected static lifetime: number = 2;
        lifetime: number;

        constructor(_position: Vector, _velocity: Vector) {
            super(4, _position);
            this.velocity = new Vector(_velocity.x, _velocity.y);
            this.lifetime = Projectile.lifetime;
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
            this.lifetime -= _timeslice;

            if (this.lifetime < 0) {
                this.velocity = new Vector(0, 0);
                this.expendable = true;
            }
        }
    }
}