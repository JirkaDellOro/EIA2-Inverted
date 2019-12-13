namespace L12_AsteroidsAddition {
    class Gun {
        position: Vector;

        public constructor(_position: Vector) {
            this.position = _position.copy();
        }

        public draw(_charge: number): void {
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(0, -3, -15, 6);
            crc2.fillRect(0, -3, -_charge, 6);
            crc2.restore();
        }
    }

    export class Ship extends Moveable {
        private static acceleration: number = 10;
        public gunLeft: Gun = new Gun(new Vector(10, -12));
        public gunRight: Gun = new Gun(new Vector(10, 12));
        // private static maxCharge: number = 1;
        // private charge: number = 0;
        private rotation: number = 0;
        private exhaust: boolean = false;
        private charging: boolean = false;
        private charged: number = 0;

        public constructor(_position: Vector) {
            super(_position);

            this.velocity = new Vector();
            this.hitRadius = 10;
        }

        public charge(): void {
            this.charging = true;
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

            this.gunLeft.draw(this.charged);
            this.gunRight.draw(this.charged);

            if (this.exhaust)
                this.drawExhaust();

            crc2.restore();
            this.exhaust = false;
        }

        public drawExhaust(): void {
            crc2.moveTo(0, 0);
            crc2.lineTo(-7, 5);
            crc2.lineTo(-15, 0);
            crc2.lineTo(-7, -5);
            crc2.closePath();
            crc2.stroke();
        }

        public move(_timeslice: number): void {
            if (this.charging)
                this.charged += _timeslice;
            this.velocity.scale(0.99);
            super.move(_timeslice);
        }
    }
}