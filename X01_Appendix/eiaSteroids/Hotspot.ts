/**
 * eiaSteroids 
 * 
 * @see Main.ts for details
 */
namespace eiaSteroids {
  /**
   * The area of destruction the laser gun creates. The higher the charge, the bigger and more robust it is.
   */
  export class Hotspot extends Projectile {
    protected static maxLifetime: number = 2;
    private maxLifetime: number;
    private charge: number;

    public constructor(_position: Vector, _charge: number) {
      super(_position, new Vector());

      this.charge = Math.max(0, Math.min(1, _charge));
      this.maxLifetime = this.lifetime = Hotspot.maxLifetime * this.charge;
      this.hitRadius = 5 + 40 * this.charge;
    }

    public draw(): void {
      let ratio: number = this.lifetime / this.maxLifetime;
      if (ratio < 0)
        return;
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.beginPath();
      crc2.fillStyle = getColorCharge(this.charge, ratio);
      crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
      crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
      crc2.fill();
      crc2.restore();
    }

    public move(_timeslice: number): void {
      super.move(_timeslice);
    }

    public hit(): void {
      this.lifetime -= Hotspot.maxLifetime / 5;
      this.expendable = this.lifetime < 0;
    }
  }
}