namespace L12_AsteroidsAddition {
    export class Hotspot extends Projectile {
        protected static maxLifetime: number = 0.5;
        private laserLifetime: number = 0.1;
        private start: Vector;

        constructor(_position: Vector, _start: Vector) {
            super(_position, new Vector());
            this.lifetime = Hotspot.maxLifetime;
            this.hitRadius = 25;
            this.start = _start.copy();
        }

        draw(): void {
            let ratio: number = this.lifetime / Hotspot.maxLifetime;
            if (ratio < 0)
                return;
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = "HSL(180, 100%, 70%, " + 0.7 * ratio + ")";
            crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            crc2.fill();

            if (this.laserLifetime > 0.02) {
                let start: Vector = Vector.getDifference(this.start, this.position);
                crc2.strokeStyle = "HSL(180, 100%, 70%, 0.7)";
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(start.x, start.y);
                crc2.stroke();
            }
            crc2.restore();
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            this.laserLifetime *= 0.5;
        }

        public hit(): void {
            this.lifetime -= Hotspot.maxLifetime / 3;
            this.expendable = this.lifetime < 0;
            console.log("Hotspot hit, remaining range: ", this.lifetime);
        }
    }
}