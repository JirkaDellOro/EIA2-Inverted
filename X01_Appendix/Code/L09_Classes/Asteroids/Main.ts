namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let asteroids: Asteroid[] = [];

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);

        createAsteroids(5);
        // createShip();

        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20);
    }

    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot laser");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }

    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        let index: number = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }

    function createAsteroids(_nAsteroids: number): void {
        console.log("Create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }

        // ship.draw();
        // handleCollisions();
    }
}