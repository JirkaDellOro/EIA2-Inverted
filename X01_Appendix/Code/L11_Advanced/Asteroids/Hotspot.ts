namespace L11_AsteroidsAdvanced {
    export class Hotspot extends Projectile {
        range: number;
        duration: number = 0.5;

        constructor(_position: Vector) {
            super(_position, new Vector(0, 0));
            this.range = this.duration;
            this.hitRadius = 25;
        }

        draw(): void {
            let ratio: number = this.range / this.duration;
            if (ratio < 0)
                return;
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = "HSL(180, 100%, 70%, " + 0.7 * ratio + ")";
            crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            crc2.fill();
            crc2.restore();
        }

        hit(): void {
            this.range -= this.duration / 4;
            this.expendable = this.range < 0;
            console.log("Hotspot hit, remaining range: ", this.range);
        }
    }
}