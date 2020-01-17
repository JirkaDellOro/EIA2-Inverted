/**
 * # eiaSteroids
 * 
 * Example project demonstrating object oriented design for the course
 * Entwicklung Interaktiver Anwendungen II (EIA2) {@link https://jirkadelloro.github.io/EIA2-Inverted/}
 * 
 * Project heavily inspired by Asteroids, the arcade classic created by Atari {@link https://www.atari.com/}
 * 
 * To create this documentation using TypeDoc: `typedoc --tsconfig ../../tsconfig.json`
 * 
 * @author Jirka Dell'Oro-Friedl
 * @copyright Jirka Dell'Oro-Friedl, Hochschule Furtwangen University, 2020
 */

namespace eiaSteroids {
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

  export enum GAMESTATE {
    START, PLAY, OVER
  }

  window.addEventListener("load", handleLoad);

  export const linewidth: number = 2;
  export let crc2: CanvasRenderingContext2D;
  export let gamestate: GAMESTATE;

  let moveables: Moveable[] = [];
  let ship: Ship;
  const frameRate: number = 50; // frames per second
  const frameTime: number = 1 / frameRate; // time per frame in seconds

  function handleLoad(_event: Event): void {
    console.log("Asteroids starting");
    setGameState(GAMESTATE.START);

    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    crc2.fillStyle = "black";
    crc2.strokeStyle = "white";
    crc2.lineWidth = linewidth;

    createPaths();

    Info.init(canvas);
    Sound.init();

    createShip();

    canvas.addEventListener(ASTEROID_EVENT.UFO_SHOOTS, handleUfoShot);
    canvas.addEventListener(ASTEROID_EVENT.SHIP_SHOOTS, handleShipShot);
    canvas.addEventListener(ASTEROID_EVENT.ASTEROID_HIT, breakAsteroid);
    canvas.addEventListener("pointerup", shootLaser);
    canvas.addEventListener("pointerdown", chargeLaser);
    document.addEventListener("keydown", handleKeypress);
    document.addEventListener("keyup", handleKeypress);
    canvas.addEventListener("pointermove", setHeading);

    window.setInterval(update, 1000 * frameTime);
  }

  function setGameState(_newState: GAMESTATE): void {
    if (gamestate == GAMESTATE.OVER)
      return;
    if (gamestate == _newState)
      return;
    gamestate = _newState;
    if (gamestate == GAMESTATE.PLAY)
      Sound.playAtmo(2);
  }

  function handleKeypress(_event: KeyboardEvent): void {
    switch (_event.code) {
      case "ShiftLeft":
      case "ShiftRight":
        ship.thrust(_event.type == "keydown");
        break;
      case "Space": {
        setGameState(GAMESTATE.PLAY);
      }
    }
  }

  /**
   * Creates a projectile at the point given with random heading, moving away a little to protect the source
   */
  function shootProjectile(_origin: Vector, _target?: Vector): void {
    let velocity: Vector = Vector.getRandom(200, 200);
    if (_target) {
      velocity = Vector.getDifference(_target, _origin);
      velocity.scale(200 / velocity.length);
    }
    let projectile: Projectile = new Projectile(_origin, velocity);
    // move projectile away from ufo to prevent suicide
    projectile.move(0.15);
    moveables.push(projectile);
    Sound.play("fire");
  }

  /**
   * Starts a projectile when a Ufo dispatched the shoot event from the Ufos position
   */
  function handleUfoShot(_event: Event): void {
    let ufo: Ufo = (<CustomEvent>_event).detail.ufo;
    if (ufo instanceof UfoSmall)
      shootProjectile(ufo.position, ship.position);
    else
      shootProjectile(ufo.position);
  }

  /**
   * Creates laser beams and a hotspot when ship dispatched the shoot event.
   */
  function handleShipShot(_event: Event): void {
    let event: CustomEvent = <CustomEvent>_event;
    let charge: number = event.detail.charge;
    let target: Vector = event.detail.target;

    moveables.push(new Hotspot(target, charge));
    moveables.push(new Laser(event.detail.pathLaserLeft, charge));
    moveables.push(new Laser(event.detail.pathLaserRight, charge));
    Sound.play("fire");
  }

  /**
   * Direct the ship towards the position given in the event object
   */
  function setHeading(_event: MouseEvent): void {
    let target: Vector = mapClientToCanvas(_event.clientX, _event.clientY);
    ship.head(target);
  }

  /**
   * Calls the ship to charge laser guns
   */
  function chargeLaser(_event: MouseEvent): void {
    ship.charge(true);
  }

  /**
   * Calls the ship to shoot at the position given with the event object
   */
  function shootLaser(_event: MouseEvent): void {
    let position: Vector = mapClientToCanvas(_event.clientX, _event.clientY);
    ship.shoot(position);
  }

  /**
   * Map a position on the client (event.clientX / Y) to a position on the canvas
   */
  function mapClientToCanvas(_x: number, _y: number): Vector {
    return new Vector(_x - crc2.canvas.offsetLeft, _y - crc2.canvas.offsetTop);
  }

  /**
   * Marks the asteroid given with the event object as expandable and creates two smaller ones, 
   * except the asteroid was a smallest one already 
   */
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

  /**
   * Creates the specified number of asteroids
   */
  function createAsteroids(_nAsteroids: number): void {
    console.log("Create asteroids");
    for (let i: number = 0; i < _nAsteroids; i++) {
      let asteroid: Asteroid = new Asteroid(1.0);
      moveables.push(asteroid);
    }
  }

  /**
   * Creates the players ship in the center of the canvas
   */
  function createShip(): void {
    console.log("Create ship");
    ship = new Ship(new Vector(crc2.canvas.width / 2, crc2.canvas.height / 2));
    moveables.push(ship);
  }

  /**
   * Create a Ufo
   */
  function createUfo(_small: boolean = false): void {
    console.log("Create ufo");
    let ufo: Ufo = _small ? new UfoSmall : new Ufo();
    moveables.push(ufo);
  }

  /**
   * The main update function!
   */
  function update(): void {
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    for (let moveable of moveables) {
      moveable.move(frameTime);
      moveable.draw();
    }

    deleteExpandables();
    handleCollisions();
    progress();

    Info.display(ship);
  }

  /**
   * Removes all objects marked as expendable from the list of moveables and calls the scorePoint function
   */
  function deleteExpandables(): void {
    for (let i: number = moveables.length - 1; i >= 0; i--) {
      if (moveables[i].expendable) {
        scorePoints(moveables[i]);
        moveables.splice(i, 1);
      }
    }
  }

  /**
   * Checks collisions of all moveable objects and calls their hit-methods accordingly
   */
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

  /**
   * Calculates the color for the laser guns, the beams, the hotspot and the meter bar
   */
  export function getColorCharge(_charge: number, _alpha: number): string {
    _charge = Math.max(Math.min(1, _charge), 0);
    let angle: number = 240 + 150 * _charge * _alpha;
    let light: number = 30 + 30 * _charge;
    return `HSL(${angle}, 100%, ${light}%, ${_alpha})`;
  }

  /**
   * Scores points for every object destroyed as given in the [[POINTS]] enum
   */
  function scorePoints(_expended: Moveable): void {
    if (gamestate != GAMESTATE.PLAY)
      return;
    let points: number = 0;
    if (_expended instanceof Asteroid) {
      if (_expended.size < 0.3)
        points = POINTS.ASTEROID_SMALL;
      else if (_expended.size > 0.8)
        points = POINTS.ASTEROID_BIG;
      else
        points = POINTS.ASTEROID_MEDIUM;
    } else if (_expended instanceof UfoSmall)
      points = POINTS.UFO_SMALL;
    else if (_expended instanceof Ufo)
      points = POINTS.UFO_LARGE;

    Info.score += points;
  }

  /**
   * Handles gamestate and calculates when to spawn which objects dependend on the current score 
   * and the number of currently moving objects. 
   */
  function progress(): void {
    if (ship.expendable)
      setGameState(GAMESTATE.OVER);

    if (gamestate != GAMESTATE.PLAY)
      return;

    let difficulty: number = Info.score / 500;
    Sound.atmoDelay = 0.3 + 1.7 / Math.floor(1 + difficulty);

    if (moveables.length < 5 + difficulty)
      if (Math.random() * difficulty < 1)
        createAsteroids(1);
      else
        if (Math.random() * difficulty < 1)
          createUfo(false);
        else
          createUfo(true);
  }
}