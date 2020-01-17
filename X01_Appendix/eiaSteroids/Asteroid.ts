/**
 * eiaSteroids 
 * 
 * @see Main.ts for details
 */
namespace eiaSteroids {
  /**
   * Describes an asteroid with individual size and shape (type)
   */
  export class Asteroid extends Moveable {
    public size: number;
    private type: number;

    public constructor(_size: number, _position?: Vector) {
      super(_position);
      this.velocity = Vector.getRandom(100, 200);

      this.type = Math.floor(Math.random() * 4);
      this.size = _size;
      this.hitRadius = 50 * _size;
    }

    public draw(): void {
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
      let event: CustomEvent = new CustomEvent(ASTEROID_EVENT.ASTEROID_HIT, { detail: { asteroid: this } });
      crc2.canvas.dispatchEvent(event);
    }
  }
}