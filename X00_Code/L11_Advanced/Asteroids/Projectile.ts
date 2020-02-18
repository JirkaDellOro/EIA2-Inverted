namespace L11_AsteroidsAdvanced {
    export class Projectile extends Moveable {
        protected static maxLifetime: number = 2;
        protected lifetime: number = Projectile.maxLifetime;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position);

            console.log("Projectile constructor");
            this.velocity = _velocity.copy();
        }

        draw(): void {
            // console.log("Projectile draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-2, -2, 2, 2);
            crc2.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
}