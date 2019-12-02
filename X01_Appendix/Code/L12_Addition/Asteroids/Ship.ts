namespace L12_AsteroidsAddition {
    export class Ship extends Moveable {
        private static acceleration: number = 10;
        // private static maxCharge: number = 1;
        // private charge: number = 0;
        private rotation: number = 0;
        private exhaust: boolean = false;

        constructor(_position: Vector) {
            super(_position);

            this.velocity = new Vector();
            this.hitRadius = 10;
        }

        public head(_target: Vector): void {
            let difference: Vector = Vector.getDifference(_target, this.position);
            this.rotation = Math.atan2(difference.y, difference.x);
        }

        public thrust(): void {
            let change: Vector = Vector.getPolar(this.rotation, Ship.acceleration);
            this.velocity.add(change);
            // console.log(this.velocity);
            this.exhaust = true;
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.rotation);
            crc2.beginPath();
            crc2.moveTo(-5, 10);
            crc2.lineTo(20, 0);
            crc2.lineTo(-5, -10);
            crc2.moveTo(0, 8);
            crc2.lineTo(0, -8);
            crc2.stroke();
            if (this.exhaust) {
                crc2.moveTo(0, 0);
                crc2.lineTo(-7, 5);
                crc2.lineTo(-15, 0);
                crc2.lineTo(-7, -5);
                crc2.closePath();
                crc2.stroke();
            }
            crc2.restore();
            this.exhaust = false;
        }

        public move(_timeslice: number): void {
            this.velocity.scale(0.99);
            super.move(_timeslice);
        }
    }
}