/**
 * eiaSteroids 
 * 
 * @see Main.ts for details
 */
namespace L12_eiaSteroids {
  /**
   * The laser beam pointing from the [[Gun]] to the [[Hotspot]]
   */
  export class Laser extends Projectile {
    protected static maxLifetime: number = 0.1;
    private charge: number;
    private path: Function;

    constructor(_path: Function, _charge: number) {
      super(new Vector(), new Vector());

      this.lifetime = Laser.maxLifetime;
      this.charge = _charge;
      this.path = _path;
    }

    draw(): void {
      crc2.save();
      crc2.strokeStyle = getColorCharge(this.charge, this.lifetime / Laser.maxLifetime);
      this.path();
      crc2.stroke();
      crc2.restore();
    }
  }
}