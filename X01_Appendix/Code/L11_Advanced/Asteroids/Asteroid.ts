namespace L11_AsteroidsAdvanced {
    export class Asteroid extends Moveable {
        public size: number;
        private type: number;

        constructor(_size: number, _position?: Vector) {
            super(_position);
            
            console.log("Asteroid constructor");

            this.velocity = Vector.getRandom(100, 200);

            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
            this.hitRadius = 50 * _size;
        }

        public draw(): void {
            // console.log("Asteroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.lineWidth = linewidth / this.size;
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }

        public hit(): void {
            super.hit();
            let event: CustomEvent = new CustomEvent(ASTEROID_EVENT.ASTEROID_HIT, {detail: {asteroid: this}});
            crc2.canvas.dispatchEvent(event);
        }
    }
}