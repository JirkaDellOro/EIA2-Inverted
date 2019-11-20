namespace L11_AsteroidsAdvanced_2 {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let moveables: Moveable[] = [];
    // let ship: Ship;

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";

        createPaths();
        createAsteroids(5);
        createUfo();
        createUfo();
        createUfo();
        createUfo();

        // canvas.addEventListener("mousedown", loadLaser);
        // canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        // Event-Names candidates for enum
        canvas.addEventListener("ufoShoots", ufoShoot);
        canvas.addEventListener("asteroidHit", breakAsteroid);

        window.setInterval(update, 20);
    }

    function shootProjectile(_origin: Vector): void {
        let velocity: Vector = new Vector(0, 0);
        velocity.random(200, 200);
        let projectile: Projectile = new Projectile(_origin, velocity);
        projectile.move(0.15);
        moveables.push(projectile);
    }

    function ufoShoot(_event: Event): void {
        let ufo: Ufo = (<CustomEvent>_event).detail.ufo;
        shootProjectile(ufo.position);
    }

    function createAsteroids(_nAsteroids: number): void {
        console.log("Create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            moveables.push(asteroid);
        }
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
            moveable.move(1 / 50);
            moveable.draw();
        }

        // ship.draw();

        deleteExpendables();

        handleCollisions();

        console.log("Moveables: ", moveables.length);
    }

    function handleCollisions(): void {
        for (let i: number = 0; i < moveables.length; i++) {
            let moveable0: Moveable = moveables[i];
            for (let j: number = i + 1; j < moveables.length; j++) {
                let moveable1: Moveable = moveables[j];
                if (moveable0 instanceof Asteroid && moveable1 instanceof Asteroid)
                    continue;
                if (moveable0.expendable || moveable1.expendable    )
                    continue;
                if (moveable0.isHitBy(moveable1)) {
                    moveable0.hit();
                    moveable1.hit();
                }
            }
        }
    }

    function deleteExpendables(): void {
        // step backwards for deletion
        for (let i: number = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }

    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot laser");
        let position: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let hotspot: Hotspot = new Hotspot(position);
        moveables.push(hotspot);
    }

    function breakAsteroid(_event: Event): void {
        let asteroid: Asteroid = (<CustomEvent>_event).detail.asteroid;
        if (asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                let fragment: Asteroid = new Asteroid(asteroid.size / 2, asteroid.position);
                fragment.velocity.add(asteroid.velocity);
                moveables.push(fragment);
            }
        }
        asteroid.expendable = true;
    }
}
