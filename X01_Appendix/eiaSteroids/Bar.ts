/**
 * eiaSteroids 
 * 
 * @see Main.ts for details
 */
namespace eiaSteroids {
  /**
   * Decribes a meter bar to display in a user interface. Also used for the laser guns on the spaceship
   */
  export class Bar {
    public size: Vector = new Vector(100, 10);
    public position: Vector;
    public strokeStyle: string = "white";
    public fillStyle: string = "green";
    public maxValue: number;

    public constructor(_position: Vector, _size: Vector, _maxValue: number = 1) {
      this.position = _position.copy();
      this.size = _size.copy();
      this.maxValue = _maxValue;
    }

    public draw(_value: number, _fillStyle?: string, _strokeStyle?: string): void {
      crc2.beginPath();
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      this.fillStyle = _fillStyle || this.fillStyle;
      this.strokeStyle = _strokeStyle || this.strokeStyle;
      crc2.fillStyle = this.fillStyle;
      crc2.strokeStyle = this.strokeStyle;
      let normValue: number = Math.max(0, Math.min(this.maxValue, _value)) / this.maxValue;
      crc2.fillRect(0, -this.size.y / 2, this.size.x * normValue, this.size.y);
      crc2.strokeRect(0, -this.size.y / 2, this.size.x, this.size.y);
      crc2.restore();
    }
  }
}