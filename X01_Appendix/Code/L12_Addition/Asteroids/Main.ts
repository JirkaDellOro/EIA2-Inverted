namespace L12_AsteroidsAddition {
  export enum ASTEROID_EVENT {
    UFO_SHOOTS = "ufoShoots",
    SHIP_SHOOTS = "shipShoots",
    ASTEROID_HIT = "asteroidHit"
  }

  enum POINTS {
    ASTEROID_BIG = 10,
    ASTEROID_MEDIUM = 25,
    ASTEROID_SMALL = 50,
    UFO_LARGE = 100,
    UFO_SMALL = 250
  }

  window.addEventListener("load", handleLoad);

  export let crc2: CanvasRenderingContext2D;
  export let linewidth: number = 2;

  let moveables: Moveable[] = [];
  let ship: Ship;
  let barEnergy: Bar;
  let barCharge: Bar;
  let energy: number = 1; // start with full energy
  let score: number = 0;
  const timeEnergyRestore: number = 20; // energy recovery from 0 in seconds
  const frameRate: number = 50; // frames per second
  const frameTime: number = 1 / frameRate; // time per frame in seconds
  const energyToLaserRate: number = 0.05;
  const energyToThrust: number = 0.01;

  function handleLoad(_event: Event): void {
    console.log("Asteroids starting");
    Sound.init();

    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    crc2.fillStyle = "black";
    crc2.strokeStyle = "white";
    crc2.lineWidth = linewidth;

    barEnergy = new Bar(new Vector(canvas.width / 2 - 80, 30), new Vector(-300, 30));
    barCharge = new Bar(new Vector(canvas.width / 2 + 80, 30), new Vector(300, 30));
    crc2.textAlign = "right";
    crc2.font = "40px Consolas";

    createPaths();
    console.log("Asteroids paths: ", asteroidPaths);

    createShip();
    createAsteroids(5);
    createUfo();
    createUfo();
    createUfo();

    canvas.addEventListener(ASTEROID_EVENT.UFO_SHOOTS, handleUfoShot);
    canvas.addEventListener(ASTEROID_EVENT.SHIP_SHOOTS, handleShipShot);
    canvas.addEventListener(ASTEROID_EVENT.ASTEROID_HIT, breakAsteroid);
    canvas.addEventListener("pointerup", shootLaser);
    canvas.addEventListener("pointerdown", chargeLaser);
    document.addEventListener("keydown", handleKeypress);
    canvas.addEventListener("pointermove", setHeading);

    window.setInterval(update, 1000 * frameTime);
  }

  function handleKeypress(_event: KeyboardEvent): void {
    if (_event.code == "ShiftLeft") {
      ship.thrust();
      energy -= energyToThrust;
    }
  }

  function shootProjectile(_origin: Vector): void {
    // console.log("Shoot projectile");
    let velocity: Vector = Vector.getRandom(200, 200);
    let projectile: Projectile = new Projectile(_origin, velocity);
    // move projectile away from ufo to prevent suicide
    projectile.move(0.15);
    moveables.push(projectile);
    Sound.play("fire");
  }

  function handleUfoShot(_event: Event): void {
    let ufo: Ufo = (<CustomEvent>_event).detail.ufo;
    shootProjectile(ufo.position);
  }

  function handleShipShot(_event: Event): void {
    let event: CustomEvent = <CustomEvent>_event;
    let charge: number = event.detail.charge;
    let target: Vector = event.detail.target;

    moveables.push(new Hotspot(target, charge));
    moveables.push(new Laser(event.detail.pathLaserLeft, charge));
    moveables.push(new Laser(event.detail.pathLaserRight, charge));
    Sound.play("fire");
  }

  function setHeading(_event: MouseEvent): void {
    let target: Vector = mapClientToCanvas(_event.clientX, _event.clientY);
    ship.head(target);
  }

  function chargeLaser(_event: MouseEvent): void {
    console.log("Charge laser");
    ship.charge(true);
  }

  function shootLaser(_event: MouseEvent): void {
    // console.log("Shoot laser");
    let energyToLaser: number = Math.max(0, ship.charged) * energyToLaserRate;
    energy -= energyToLaser;
    let position: Vector = mapClientToCanvas(_event.clientX, _event.clientY);
    ship.shoot(position);
  }

  function mapClientToCanvas(_x: number, _y: number): Vector {
    return new Vector(_x - crc2.canvas.offsetLeft, _y - crc2.canvas.offsetTop);
  }

  function breakAsteroid(_event: Event): void {
    let asteroid: Asteroid = (<CustomEvent>_event).detail.asteroid;
    Sound.breakAsteroid(asteroid.size);
    if (asteroid.size > 0.3) {
      for (let i: number = 0; i < 2; i++) {
        let fragment: Asteroid = new Asteroid(asteroid.size / 2, asteroid.position);
        fragment.velocity.add(asteroid.velocity);
        moveables.push(fragment);
      }
    }
    asteroid.expendable = true;
  }

  function createAsteroids(_nAsteroids: number): void {
    console.log("Create asteroids");
    for (let i: number = 0; i < _nAsteroids; i++) {
      let asteroid: Asteroid = new Asteroid(1.0);
      moveables.push(asteroid);
    }
  }

  function createShip(): void {
    console.log("Create ship");
    ship = new Ship(new Vector(crc2.canvas.width / 2, crc2.canvas.height / 2));
    moveables.push(ship);
  }

  function createUfo(): void {
    console.log("Create ufo");
    let ufo: Ufo = new Ufo();
    moveables.push(ufo);
  }

  function update(): void {
    // console.log("Update");
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    for (let moveable of moveables) {
      moveable.move(frameTime);
      moveable.draw();
    }

    deleteExpandables();
    handleCollisions();
    handleEnergy();
    displayInfo();
  }

  function deleteExpandables(): void {
    for (let i: number = moveables.length - 1; i >= 0; i--) {
      if (moveables[i].expendable) {
        scorePoints(moveables[i]);
        moveables.splice(i, 1);
      }
    }
  }

  function handleCollisions(): void {
    for (let i: number = 0; i < moveables.length; i++) {
      let a: Moveable = moveables[i];
      if (a instanceof Laser) continue;
      for (let j: number = i + 1; j < moveables.length; j++) {
        let b: Moveable = moveables[j];

        if (b instanceof Laser) continue;
        if (a instanceof Asteroid && b instanceof Asteroid)
          continue;
        if (a.expendable || b.expendable)
          continue;

        if (a.isHitBy(b)) {
          console.log("Collision ", a, b);
          a.hit();
          b.hit();
        }

      }
    }
  }

  export function getColorCharge(_charge: number, _alpha: number): string {
    _charge = Math.max(Math.min(1, _charge), 0);
    let angle: number = 240 + 150 * _charge * _alpha;
    let light: number = 30 + 30 * _charge;
    return `HSL(${angle}, 100%, ${light}%, ${_alpha})`;
  }

  function handleEnergy(): void {
    energy += frameTime / timeEnergyRestore;
    energy = Math.min(1, Math.max(0, energy));
  }

  function displayInfo(): void {
    crc2.save();
    let energyToLaser: number = Math.max(0, ship.charged) * energyToLaserRate;
    barEnergy.draw(energy - energyToLaser, "#80ff8080");
    barCharge.draw(ship.charged, getColorCharge(ship.charged, 0.8), ship.charged < 0 ? "grey" : "white");
    crc2.fillStyle = "white";
    crc2.fillText(score.toString(), crc2.canvas.width / 2 + 60, 44);
    crc2.restore();
  }

  function scorePoints(_expended: Moveable): void {
    let points: number = 0;
    if (_expended instanceof Asteroid) {
      console.log(_expended.size);
      if (_expended.size < 0.3)
        points = POINTS.ASTEROID_SMALL;
      else if (_expended.size > 0.8)
        points = POINTS.ASTEROID_BIG;
      else
        points = POINTS.ASTEROID_MEDIUM;
    }
    if (_expended instanceof Ufo)
      points = POINTS.UFO_LARGE;

    score += points;
  }
}