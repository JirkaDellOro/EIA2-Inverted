/**
 * eiaSteroids 
 * 
 * @see Main.ts for details
 */
namespace eiaSteroids {
  /**
   * Describes a small projectile as fired by the [[Ufo]]s
   */
  export class Projectile extends Moveable {
    protected static maxLifetime: number = 2;
    protected lifetime: number = Projectile.maxLifetime;

    public constructor(_position: Vector, _velocity: Vector) {
      super(_position);
      this.velocity = _velocity.copy();
    }

    public draw(): void {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.strokeRect(-2, -2, 2, 2);
      crc2.restore();
    }

    public move(_timeslice: number): void {
      super.move(_timeslice);
      this.lifetime -= _timeslice;
      if (this.lifetime < 0)
        this.expendable = true;
    }
  }
}