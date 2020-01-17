/**
 * eiaSteroids 
 * 
 * @see Main.ts for details
 */
namespace eiaSteroids {
  /**
   * Describes a two-dimensional vector and implements various helpful methods to use it.
   */
  export class Vector {
    public x: number;
    public y: number;

    public constructor(_x: number = 0, _y: number = 0) {
      this.set(_x, _y);
    }

    public static getDifference(_v0: Vector, _v1: Vector): Vector {
      return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
    }

    public static getRandom(_minLength: number, _maxLength: number): Vector {
      let length: number = _minLength + Math.random() * (_maxLength - _minLength);
      let direction: number = Math.random() * 2 * Math.PI;
      return Vector.getPolar(direction, length);
    }

    public static getPolar(_angle: number, _length: number): Vector {
      let vector: Vector = new Vector();
      vector.set(Math.cos(_angle), Math.sin(_angle));
      vector.scale(_length);
      return vector;
    }

    public get length(): number {
      return Math.hypot(this.x, this.y);
    }

    public set(_x: number, _y: number): void {
      this.x = _x;
      this.y = _y;
    }

    public scale(_factor: number): void {
      this.x *= _factor;
      this.y *= _factor;
    }

    public add(_addend: Vector): void {
      this.x += _addend.x;
      this.y += _addend.y;
    }

    public copy(): Vector {
      return new Vector(this.x, this.y);
    }
  }
}
