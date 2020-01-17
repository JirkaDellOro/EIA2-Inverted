/**
 * eiaSteroids 
 * 
 * @see Main.ts for details
 */
namespace eiaSteroids {
  /**
   * Describes a laser gun which is just a special [[Bar]]
   */
  class Gun extends Bar {
    private static size: Vector = new Vector(-15, 6);

    public constructor(_position: Vector) {
      super(_position, Gun.size);
    }

    public draw(_charge: number, _strokeStyle: string = "white"): void {
      super.draw(_charge, getColorCharge(_charge, 1), _strokeStyle);
    }
  }

  /**
   * Describes the space ship the player controls.  
   * Can head towards a given point, thrust in this direction and dispatch an event to the main program in order
   * to create the [[Laser]] beams and a [[Hotspot]]. Handles its energy and dispatches it to 
   * - shield when hit, 
   * - thrust when moving
   * - and laser guns while charging
   */
  export class Ship extends Moveable {
    private static energyToCharge: number = 0.002;
    private static energyToThrust: number = 0.003;
    private static energyToShield: number = 0.4;
    private static acceleration: number = 20;
    private static timeEnergyRestore: number = 20; // energy recovery from 0 in seconds
    private static timeToChargeFully: number = 1;
    private static timeCooling: number = 0.5; // time the laser gun cools down before charge starts
    private static timeToShowShield: number = 2; // time to display shield color when hit

    public gunLeft: Gun = new Gun(new Vector(10, -12));
    public gunRight: Gun = new Gun(new Vector(10, 12));
    public charged: number = 0; // start uncharged
    public energy: number = 1; // start with full energy
    public coolDown: number = 0; // start with guns cool

    private rotation: number = 0;
    private thrusting: boolean = false;
    private charging: boolean = false;
    private timeShield: number = 0;

    public constructor(_position: Vector) {
      super(_position);

      this.velocity = new Vector();
      this.hitRadius = 10;
    }

    public charge(_on: boolean): void {
      this.charging = _on;
      if (!_on)
        this.charged = 0;
    }

    public thrust(_on: boolean): void {
      this.thrusting = _on;
    }

    public head(_target: Vector): void {
      let difference: Vector = Vector.getDifference(_target, this.position);
      this.rotation = Math.atan2(difference.y, difference.x);
    }

    public accelerate(): void {
      this.energy -= Ship.energyToThrust;
      if (this.energy <= 0) {
        this.thrust(false);
        return;
      }

      let change: Vector = Vector.getPolar(this.rotation, Ship.acceleration);
      this.velocity.add(change);
      Sound.play("thrust");
    }

    public draw(): void {
      let color: string = `HSL(0, 100%, ${100 - 20 * this.timeShield}%)`;

      crc2.save();
      crc2.strokeStyle = color;
      crc2.translate(this.position.x, this.position.y);
      crc2.rotate(this.rotation);
      crc2.beginPath();
      crc2.moveTo(-5, 10);
      crc2.lineTo(20, 0);
      crc2.lineTo(-5, -10);
      crc2.moveTo(0, 8);
      crc2.lineTo(0, -8);
      crc2.stroke();

      this.gunLeft.draw(this.charged, color);
      this.gunRight.draw(this.charged, color);

      if (this.thrusting)
        this.drawExhaust();

      crc2.restore();
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
      this.velocity.scale(0.99);
      super.move(_timeslice);

      this.coolDown = (Math.max(0, this.coolDown - _timeslice / Ship.timeCooling));
      this.timeShield = (Math.max(0, this.timeShield - _timeslice));

      if (this.charging) {
        this.energy -= Ship.energyToCharge;
        if (!this.coolDown && this.energy > 0)
          this.charged += _timeslice / Ship.timeToChargeFully;
      } else {
        this.energy += _timeslice / Ship.timeEnergyRestore;
        this.energy = Math.min(1, Math.max(0, this.energy));
      }

      if (this.thrusting)
        this.accelerate();
    }

    public hit(): void {
      this.energy -= Ship.energyToShield;
      this.timeShield = Ship.timeToShowShield;
      if (this.energy < 0)
        super.hit();
    }

    public shoot(_target: Vector): void {
      this.charging = false;
      if (this.coolDown > 0)
        return;
      // console.log("Ship shoots");
      let event: CustomEvent = new CustomEvent(ASTEROID_EVENT.SHIP_SHOOTS, {
        detail: {
          target: _target,
          charge: this.charged,
          rotation: this.rotation,
          pathLaserLeft: this.getLaserPath(this.gunLeft, _target),
          pathLaserRight: this.getLaserPath(this.gunRight, _target)
        }
      });

      this.charge(false);
      this.coolDown = 1;

      crc2.canvas.dispatchEvent(event);
    }

    public getLaserPath(_gun: Gun, _target: Vector): Function {
      let position: Vector = this.position.copy();
      let rotation: number = this.rotation;
      return () => {
        crc2.save();
        crc2.beginPath();
        crc2.translate(position.x, position.y);
        crc2.rotate(rotation);
        crc2.moveTo(_gun.position.x, _gun.position.y);
        crc2.restore();
        crc2.lineTo(_target.x, _target.y);
      };
    }
  }
}