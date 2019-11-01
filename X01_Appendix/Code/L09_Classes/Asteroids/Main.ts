namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        createPaths();

        let asteroid: Asteroid = new Asteroid(1);
        asteroid.position.x = 100;
        asteroid.position.y = 100;
        asteroid.draw();
        let asteroid1: Asteroid = new Asteroid(0.5);
        asteroid1.position.x = 200;
        asteroid1.position.y = 100;
        asteroid1.draw();
        let asteroid2: Asteroid = new Asteroid(0.25);
        asteroid2.position.x = 300;
        asteroid2.position.y = 100;

        setInterval(update, 20);
        function update(): void {
            asteroid2.draw();
            asteroid2.move(1);
        }


        // crc2.translate(0.5, 0.5);
        // // crc2.scale(5, 1);
        // for (let path of asteroidPaths) {
        //     // crc2.lineWidth = 1/5;
        //     crc2.stroke(path);
        //     crc2.translate(100, 0);
        // }
        // crc2.stroke(ufoPath);
    }
}